---
slug: qgis-urbanplanning-data
#slug -> URL を明示
title: 【Python+QGIS】国土数値情報の「都市計画決定情報データ」のファイル構成をいじる

authors:
  - master

tags:
  - QGIS
---

## 国土数値情報（国土交通省）の都市計画決定情報データ

国土交通省は 2024 年 7 月から都市計画決定 GIS データを公開している。

このデータは GIS ソフト上で使えるものであり、全国の都市計画決定情報（以下、都決データ）を GIS 上で閲覧、分析できる。この都決データには、例えば、都市計画道路や用途地域等の地域地区、立地適正化計画の誘導区域などが含まれている。また、全国単位で整備されているため、横断的な分析も可能である。

都決データは国土数値情報と国土交通省の HP からダウンロードすることができる。

[`都市計画決定GISデータ　全国データダウンロードページ（国土交通省）`](https://www.mlit.go.jp/toshi/tosiko/toshi_tosiko_tk_000087.html)

[`都市計画決定情報データ（国土数値情報）`](https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-A55-2022.html)

<!-- truncate -->

## ファイル構成どうなってんの？

ここでは国土数値情報の HP から落とした都決データをベースに進める。

サイト上ではチェックボックスにチェックを入れれば都道府県単位で一気にダウンロードができる。データ形式（拡張子）については今回シェープファイル形式を選んだ。

![国土数値情報HP](/img/blog/20250215/2025021501.png)

ちなみに都道府県は 3 件までしか選べられないようになっている。サーバーへのアクセス負荷軽減のためだろうか。あまり詳しくは書かないが、ダウンロードできる ZIP ファイルのディレクトリは、例えば北海道（全自治体）の場合は、
https://nlftp.mlit.go.jp/ksj/gml/data/A55/A55-22/A55-22_01000_SHP.zip であるから、直接ここを叩けばダウンロードできてしまう。

これは、Python で Requests を用いて GET すれば同様の結果が得られるため、スクリプト上で配置先を叩くループを作れば一気に全都道府県のデータを落とすことができる（ただし、"3 件までしか選べない"という仕様は意図的にやっていると思われ、あまりサーバーに負担を掛けるようなことは厳禁。国の機関だし）。

ここでファイル構成について確認する。北海道のデータを例に挙げる。

ダウンロードしたファイル名は「A55-22_01000_SHP.zip」である。これを解凍すると次のようなファイル構成が確認できる[^1]。

[^1]: Windows の標準だと複数の Zip ファイルを解凍という芸当はできないので、一気に解凍できる 7-Zip がオススメ（[`7-Zip`](https://7-zip.opensource.jp/)）。

**A55-22_01000_SHP > A55-22_01000_SHP > A55-22_01692_SHP > 各ファイル**

なお、A55-22_01692_SHP の部分は各自治体のフォルダを意味しており、自治体コードが振り分けられ、各自治体の都決データファイルがそれぞれ格納されている。

![自治体コードに対応したフォルダ一覧](/img/blog/20250215/2025021502.png)

つまり、QGIS 上で北海道全域の自治体におけるデータを表示させたいとき、これらフォルダを開いて所望のデータをドラッグアンドドロップして…というのを全自治体に対して実行しないといけない。北海道は 98 自治体で構成されているので、98 回フォルダを開いてはドラッグアンドドロップしてフォルダを閉じるというとても面倒な作業をしなければいけない。例を北海道としたが、これが 47 都道府県全部の全自治体のデータを QGIS 上に表示させると考えると、一体何時間かかるか分からない。

## Python を使ってファイル構成をいじろう

### 都道府県レベルでの取得

:::note
実行した環境など
OS：Windows11
言語：Python（3.10.0）
エディタ：VSCode
:::

早速、ファイル構成をいじる Python のプログラムを示す。

```python
import os
import shutil
# 標準ライブラリにつき追加のライブラリインストールは不要

# 最も親のフォルダ（A55-22_01000_SHPを格納しているフォルダ）のパスを指定する。このフォルダをトップフォルダと呼ぶ
base_dir = r"C:\Users\hogehoge\top_folder"

# トップフォルダ内のすべてのフォルダを取得
folder_1_list = [f for f in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, f))]

# トップフォルダ内にあるフォルダに対して処理（これらフォルダをフォルダ1と呼ぶ）
for folder_1 in folder_1_list:
    folder_1_path = os.path.join(base_dir, folder_1)  # フォルダ1のパス取得
    nested_folder_path = os.path.join(folder_1_path, folder_1) # フォルダ1内の同名フォルダを取得。取得したフォルダをフォルダ2と呼ぶ
    # top_folder（トップフォルダ） > A55-22_01000_SHP（フォルダ1） > A55-22_01000_SHP（フォルダ2） > A55-22_01692_SHP（フォルダ3） > 各ファイル

    # フォルダ2の存在を確認
    if os.path.exists(nested_folder_path):
        # フォルダ2内のすべてのフォルダを取得。これらフォルダをフォルダ3と呼ぶ
        for folder_2_content in os.listdir(nested_folder_path):
            folder_2_content_path = os.path.join(nested_folder_path, folder_2_content)

            # フォルダ2内のファイルまたはフォルダをフォルダ1直下に移動
            dest_path = os.path.join(folder_1_path, folder_2_content)

            # 移動先に既に同じ名前のファイルやフォルダが存在する場合はスキップ
            if os.path.exists(dest_path):
                print(f"1.同じファイル等が存在するためスキップ: {dest_path}")
                continue

            # 移動
            shutil.move(folder_2_content_path, folder_1_path)

        # フォルダ2を削除
        shutil.rmtree(nested_folder_path)

    # フォルダ1内のフォルダ3を探索
    for root, dirs, files in os.walk(folder_1_path):
        for dir_name in dirs:
            folder_3_path = os.path.join(root, dir_name)

            # フォルダ3内のファイルをフォルダ1に移動
            for file in os.listdir(folder_3_path):
                file_path = os.path.join(folder_3_path, file)
                dest_path = os.path.join(folder_1_path, file)

                # 移動先に既に同じ名前のファイルが存在する場合はスキップ
                if os.path.exists(dest_path):
                    print(f"2.同じファイル等が存在するためスキップ: {dest_path}")
                    continue

                # 移動
                shutil.move(file_path, folder_1_path)

            # フォルダ3を削除
            shutil.rmtree(folder_3_path)

print("実行完了！")
```

やっていることは簡単で、最奥に眠るファイル群を都道府県フォルダに移し替えている。なお、この際にいらないデータ仕様の書かれたエクセルファイル等についてはスキップ（無視）している。これを図に示すと概ね下図のようになっている。

![概略図](/img/blog/20250215/2025021503.png)

こうすれば都道府県内の各自治体のファイルを一気に QGIS にインポートできる。

![まとまったファイル一覧](/img/blog/20250215/2025021504.png)

北海道全域、全自治体の都決データをインポートしてみた。数百のファイルを入れることになるので、表示までに若干のラグがあるが読み込んでしまえばスムーズだ。

![QGIS上にインポートした様子](/img/blog/20250215/2025021505.png)

### 全国レベルでの取得

ここからは応用編だ。全国レベルで取得したい場合に、上記のやり方だと 47 都道府県分のフォルダができるため、これまた 47 回ドラッグアンドドロップしなければならない。

ここで、全都道府県の全自治体のデータをトップフォルダに格納してくれるような Python のプログラムを書いてみる。ファイル名は、例えば用途地域なら youto という単語が入っているので、これを基準に各データ別でフォルダごとに整理する機能もつけてみる。

:::note
上記の「都道府県レベルでの取得」に記載したプログラムを既に実行していることを前提としている。
:::

```python
import os
import shutil
# 標準ライブラリにつき追加のライブラリインストールは不要

# トップフォルダを指定する。このとき、上記の「都道府県レベルでの取得」を既に実行していることを前提とする
base_dir = r"C:\Users\hogehoge\top_folder"

# キーワード（左）と対応するフォルダ名（右）
keyword_folders = {
    "tokei": "都市計画区域",
    "youto": "用途地域",
    "senbiki": "区域区分"
}

# トップフォルダ内にkeyword_foldersで指定したフォルダを作成
protected_folders = {os.path.join(base_dir, folder) for folder in keyword_folders.values()}

for folder_path in protected_folders:
    os.makedirs(folder_path, exist_ok=True)

# トップフォルダ内の全フォルダを取得
folder_1_list = [f for f in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, f))]

# 各フォルダ1に対して処理を行う
for folder_1 in folder_1_list:
    folder_1_path = os.path.join(base_dir, folder_1)  # フォルダ1のパス

    # 移動対象のフォルダかチェック
    if folder_1_path not in protected_folders:
        # フォルダ1内の全ファイルを取得
        for file in os.listdir(folder_1_path):
            file_path = os.path.join(folder_1_path, file)

            # ファイル名にキーワードが含まれているか確認
            for keyword, folder_name in keyword_folders.items():
                if keyword in file:  # ファイル名にキーワードが含まれている場合
                    dest_folder = os.path.join(base_dir, folder_name)
                    dest_path = os.path.join(dest_folder, file)

                    # 移動先に既に同じ名前のファイルが存在する場合はスキップ
                    if os.path.exists(dest_path):
                        print(f"既に存在するためスキップ: {dest_path}")
                        continue

                    # ファイルを移動
                    shutil.move(file_path, dest_path)
                    print(f"ファイルを移動: {file_path} -> {dest_path}")
                    break  # キーワードに一致したら次のファイルへ

        # キーワードフォルダでない場合のみ削除
        if os.path.exists(folder_1_path) and folder_1_path not in protected_folders:
            shutil.rmtree(folder_1_path)
            print(f"フォルダを削除: {folder_1_path}")

print("実行完了！")
```

これを実行すれば、トップフォルダに各データを取りまとめたフォルダが生成され、整理される

![分けられたフォルダ](/img/blog/20250215/2025021506.png)

## おわりに

本記事では国土交通省の公表する都決データのファイル構造を整理する Python のプログラムを書いた。

都決データはかなり便利で強力だが、ファイル構成にやや癖があって全国規模で使おうとすると若干面倒な部分がある。2 個プログラムを紹介したが、いずれも分かりやすいファイル構成に整理できるのではと感じる。
