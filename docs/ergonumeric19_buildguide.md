---
tags:
  - ビルドガイド
---

# ErgoNumeric19 ビルドガイド

![ヘッダー](/img/ergonumeric19_buildguide/01.png)

## デザインとコンセプト

![ポジション](/img/ergonumeric19_buildguide/02.png)
_↑ より打ちやすいテンキーを検討_

手が疲れにくく、**打ちやすい**、**マクロにも対応**したテンキーを製作することを目的に基板を設計しました。

一般に中指は他の指より長いです。そこに着目し、**中指が当たるポジションを上方向にずらす**ことで、**指先を曲げずにタイピングできる配置**にしました。

また、テンキー以外の使い道として、例えば**左手デバイスのように使用できる**よう、**組み立て方を変えることで右手入力用と左手入力用のどちらにも対応**できるようにしています。

## REMAP へのリンク

ここからアクセスできます。

[`ergonumeric19 - Remap`](https://remap-keys.app/catalog/LxUgphYEqiUNXUfgmDB5)

**最初の接続時には、カタログのファームウェア（VIA 用）を ProMicro に書き込んで**ください。書き込み後にキチンとデバイスとして認識されると思います。**FIRMWARE タブから書き込めます。**

このあたりの流れは以下の記事に詳しいです。

[`（初心者編）Remapを使ってキーマップを書き換えよう - 自作キーボード温泉街の歩き…`](https://salicylic-acid3.hatenablog.com/entry/remap-manual)

## 必要な材料リスト

**★ マークのある材料は BOOTH にまとめて出品**しています。流通がめんどくさくなったら PCB データ等を公開しようと思います。

[`ErgoNumeric19（BOOTH）`](https://shibuichi.booth.pm/items/5313479)

組み立てには以下の材料が必要です。

基板 ★ 　 1 枚

スイッチプレート ★ 　 1 枚

ボトムプレート ★ 　 1 枚

表面実装用ダイオード（1N4148）★ 　 19 個　https://talpkeyboard.net/items/6294480b0ebded1af895c437

MX スイッチ用ソケット　 19 個　https://talpkeyboard.net/items/5e02c5405b120c792616bcf9

MX スイッチ　 19 個　例えばhttps://talpkeyboard.net/items/6288a07dc5f876276ad53973など

MX スイッチ用キーキャップ（1U サイズ）　 18 個　例えばhttps://talpkeyboard.net/items/5d6e2a09e4fc397019157449など

MX スイッチ用キーキャップ（2U サイズ）　 1 個　例えばhttps://talpkeyboard.net/items/64eafcc9845a6329e86a0f82など

ProMicro 　 1 個　https://talpkeyboard.net/items/62e24e6f8a0bd07fe2d38137

ProMicro 用コンスルー 3mm 　 2 個　https://talpkeyboard.net/items/6463014f07e3670030f65940

リセット用タクトスイッチ ★ 　 1 個　https://talpkeyboard.net/items/5fa258a5f0b10814d183347f

M2 ネジ 3mm★ 　 8 個

M2 スペーサ 7mm★ 　 4 個

ゴム足（任意パーツ）　 4 個　https://talpkeyboard.net/items/6503dafda67f030029e24a9d

上記は MX スイッチでの組み立て材料例です。**ホットスワップに対応**しているので、Choc v1 を使って組み立てることもできます。その場合は、「MX スイッチ用ソケット」、「MX スイッチ」、「MX スイッチ用キーキャップ」をそれぞれ Choc のものに読み替えて材料を集めてください。

Q. MX？Choc？ナニソレ？A. 以下に詳しいです。

[`キースイッチの選び方（遊舎工房）`](https://shop.yushakobo.jp/pages/how-to-select-switch)

また、組み立てには以下の**工具等**が必要です。

はんだごて&はんだ

プラスドライバー

USB ケーブル(ProMicro と PC 等の通信用)

## 組み立て方

:::caution

**※販売している基板は一部、フットプリントを変更しています。ダイオードの向きが写真とは逆になっておりますが、実物の（販売している基板に書かれた）向きに従ってください。**

**※この組み立て方は右手デバイスとしての組み立てになります。左手デバイスとして組み立てたい方は、部品の実装や組み立てが反転します。**

:::

### ① ダイオードのはんだ付け

![ダイオードと基板](/img/ergonumeric19_buildguide/03.png)
_↑ ダイオードと基板_

![片方からはんだ付け](/img/ergonumeric19_buildguide/04.png)
_↑ 片方からはんだ付け_

ピンセットを使い、ダイオードを片足ずつ取り付けます。先に基板上に予備はんだを盛っておくと良いと思います。

![片方だけはんだ付けした状態](/img/ergonumeric19_buildguide/05.png)
_↑ 片方だけはんだ付けした状態_

![ダイオードのはんだ付けおわり](/img/ergonumeric19_buildguide/07.png)
_↑ ダイオードのはんだ付けおわり_

![ダイオードの向き](/img/ergonumeric19_buildguide/08.png)
_↑ ダイオードの向き_

### ② スイッチソケットのはんだ付け

![スイッチソケット（MX）を取り付ける](/img/ergonumeric19_buildguide/09.png)
_↑ スイッチソケット（MX）を取り付ける_

スイッチソケットはあらかじめ穴に差し込んだ後に端子をはんだ付けします。

![スイッチソケットのはんだ付けおわり](/img/ergonumeric19_buildguide/10.png)
_↑ スイッチソケットのはんだ付けおわり_

基板上に「RESET」という文字があると思います。ここにリセット用のタクトスイッチをつけます。**ダイオードやソケットを付けた面**の**裏側**にタクトスイッチを差し込み、**ダイオードやソケットを付けた面ではんだ付け**をします。

### ③ スイッチの取り付け等

![スイッチプレート](/img/ergonumeric19_buildguide/11.png)
_↑ スイッチプレート_

右手デバイスとして組み立てる場合は上の画像のように**ネジ**と**スペーサ**を固定します。

![キーを仮固定](/img/ergonumeric19_buildguide/12.png)
_↑ キーを仮固定_

キーを 4 隅に仮固定します。

![差し込む](/img/ergonumeric19_buildguide/13.png)
_↑ 差し込む_

仮固定したキーの端子がそれぞれソケットの穴に**確実**に刺さるよう差し込みます。

![キー取り付けおわり](/img/ergonumeric19_buildguide/14.png)
_↑ キー取り付けおわり_

どんどんキーを差し込んでいきます。ソケットに**確実**に差し込んでください。しっかり刺さると裏側からチラッとだけ端子が見える状態になります。

:::tip

**端子は曲がりやすいため、しっかり刺したつもりでも刺さっていないことが多々あります。よく確認してください。**

:::

![「キー取り付けおわり」をひっくり返した状態](/img/ergonumeric19_buildguide/15.png)
_↑ 「キー取り付けおわり」をひっくり返した状態_

![ボトムプレート取り付け](/img/ergonumeric19_buildguide/16.png)
_↑ ボトムプレート取り付け_

ボトムプレートをネジで取り付けます。任意パーツですが、ゴム足はこの面に取り付けます。　最後にキーキャップを差し込んで取り付けます。

### ⑤ProMicro の取り付け

![最終的な状態](/img/ergonumeric19_buildguide/17.png)
_↑ 最終的な状態_

コンスルーは ProMicro をはんだ付け無しで基板に差せるようにする部品です。ただし、ProMicro にコンスルーははんだ付けする必要があります。

![こんな感じ 1](/img/ergonumeric19_buildguide/18.png)
_↑ こんな感じ 1_

![こんな感じ 2](/img/ergonumeric19_buildguide/19.png)
_↑ こんな感じ 2_

コンスルーを ProMicro にはんだ付けできたら、（差し込める所が 2 つあるかと思いますが、）基板上の印字にしたがって ProMicro をゆっくりと差し込んでください。

ProMicro についてはもげ防止を行うことが通常です。以下を参考に行うことを推奨します。

[`ProMicroのモゲ防止ついでにQMK_Firmwareを書き込む（Qiita）`](https://qiita.com/hdbx/items/2f3e4ddfcadda2a5578e)

![完成！！](/img/ergonumeric19_buildguide/20.png)
_↑ 完成！！_

## ファームウェアとか

ファームウェア等は Github 上（qmk_firmware/keyboards/ergonumeric19）にあります。

[`qmk_firmware（GitHub）`](https://github.com/underMHz/qmk_firmware)

**基本的には REMAP 上で完結**します。

VIA や QMK で使用したい場合はダウンロードしてください。VIA 用の JSON は [ergonumeric19_via.json](https://github.com/underMHz/qmk_firmware/blob/master/keyboards/ergonumeric19/ergonumeric19_via.json) が対応しています。
