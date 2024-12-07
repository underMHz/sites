---
slug: 2nd-class-architect
#slug -> URL を明示
title: 愛憎の 2 級建築士試験

authors:
  - master

tags:
  - 資格
---

## ＞独学という選択

**自分は 2 級建築士に独学で合格した。**

2 級建築士の学科と製図の両方において、「**独学**」を選ぶ人は少ない。ここで言う独学とは、**総合資格学院や日建学院といったいわゆる資格学校に通わずに受験をすること**を指している。

確実に少ないことは分かるが、一体どれくらい少ないのだろうか。少し推測してみようと思う。とは言っても、資格学校の各社が受講生の数を公開しているわけもなく、よくよく調べると総合資格学院の長崎県（長崎校）の合格実績が公開されていたので、そこから推測してみよう（こういうリアルな部分は各社弱みと言っても差し支えないような情報なので公開はしていないのだろう）。

<!-- truncate -->

[`長崎県の合格実績（総合資格学院）PDF直リンク`](https://www.nagasaki-kensetsunews.jp/image/prevImage/article-for-web-k210916077-62.pdf)

これによれば、2019 年度、長崎県の 2 級建築士の設計製図試験の受験者は 92 人のうち、総合資格学院 長崎校の受講者数は 42 人であった（長崎県下の総合資格学院は長崎校しかない。厳密にいえば、「佐世保教室」というのもあるらしいが、実質的に長崎校が管轄している）。受験者のうち、総合資格学院の受講生の割合 Sn は、

$$
Sn = \left( \frac{42}{92} \right) \times 100 \Rightarrow 45.7\%　…式⑴
$$

これは全国で同じ割合であると仮定しておこう。

対して日建学院はと言うと、HP で合格者数だけ具体的に公表している。

[`合格実績（日建学院）`](https://www.ksknet.co.jp/nikken/guidance/architect2q/success/)

2024 年度の設計製図試験の合格者数は 1,734 人だったそうだ。先の長崎校の実績をみると、総合資格学院は受講生の合格率が 81.0%だったそうだ。各校で誤差もあるだろうが、80.0%で見積もって、これを日建学院にも適用させれば、N を予測受講者数としたとき、

$$
N \times 0.8 = 1734 \Rightarrow N = \frac{1734}{0.8} = 2167 \, \text{人}
$$

となる。

続いて、2024 年度の設計製図受験者数を試験元（建築技術教育普及センター、以下 JAEIC）から確認する。

[`過去５年間の二級・木造建築士試験結果（JAEIC）PDF直リンク`](https://www.jaeic.or.jp/shiken/2k/2k-gokaku20241205.files/2kmk-gokaku-20241205.pdf)

2024 年度の設計製図受験者数は 9,988 人だったそうだ。

式 ⑴ の仮定を踏まえて、この内の総合資格学院の受講者数（仮定）S は、

$$
S = 9988 \times 0.457 = 4564 \, \text{人}
$$

これ以外に全日本建築士会や TAC、ハウジングインテリアカレッジ等々の資格学校もある。これを多めに見積もって、全体の 10%とすればその他の受講者数 O は、

$$
O = 9988 \times 0.1 = 998 \, \text{人}
$$

くらいだろうか（そんなにいない？）。

ここまでを表にまとめると、次のようになる。

| 資格学校     | 受講者数（予想）[人] | 構成比[%] |
| ------------ | -------------------- | --------- |
| 総合資格学院 | 4,567                | 45.7      |
| 日建学院     | 2,167                | 21.7      |
| その他       | 998                  | 10.0      |
| 独学         | 2,259                | 22.6      |
| **合計**     | **9,988**            |           |

※独学者の算出 9988 - ( 4564 + 2167 + 998 )

これは**製図試験に限った話**だが、おそらく**学科試験も同じような割合**だろう。もしくは、製図試験は過年度者（既に学科を合格して製図から受験を始める者）がいるから、学科はもう少し受講者の割合が増えるだろうか。

とはいえ、**独学者は予測でも大体 2 割くらい**しかいない。ここまで数値を示さなくても独学者は受験会場や周りの環境で肩身の狭さを感じるだろうから、**少数派**であることは明らかではあるが。

## ＞学科編

### 対策をしよう

あまり覚えていないが、学科の対策は「**過去問スーパー 7**」（総合資格学院）と、「**建築関係法令集 法令編**」（総合資格学院）をメインに使った。

[`過去問スーパー 7（総合資格学院）`](https://www.shikaku-books.jp/view/item/000000000366)

[`建築関係法令集 法令編（総合資格学院）`](https://www.shikaku-books.jp/view/item/000000000397)

過去問スーパー 7 は**7 年分の過去問**が載った過去問題集だ。**最低でも 10 年分はやるといい**らしい。自分はやらなかったが（でも 8 年前の問題はググってやった記憶がある。最後の力試しとして）。何周やるとかじゃなくて、**全部覚えるまでやる**のがポイント。全部というのは全選択肢のことだ。**全選択肢の正誤が判定できるようになれば試験は受かる。**

法令集は総合資格学院のモノを使ったが、これは**インデックスが秀逸**だ。ただ、インデックス（だったか線の引き方ハンドブックみたいなの）は付録として直接付属しておらず、総合資格学院にフォームか何かで請求して郵送してもらう形になったはずだ。このときに、**電話番号とかも吸い取られる**ので必ず営業の電話がかかってくる。独学で行くと決めたのであれば、「独学で行くので応援のほどよろしくお願いいたします」などと適当に言って着信拒否にでも設定しておこう。

あと、学科試験前に資格学校各社が予想問題だとか、模擬試験問題だとかを公表してくれる。これも請求しないと送られてこない（=電話番号が吸い取られる）が大抵は無料なので齧りついておこう。タダ大好き。

## ＞製図編

### 対策をしよう

対策は「**２級建築士試験 設計製図 課題ドリル**」（市ヶ谷出版社）と、とある Youtube チャンネルの視聴で行った。

[`設計製図課題ドリル（令和 6 年度版）（市ヶ谷出版社）`](http://www.ichigayashuppan.co.jp/book/b649069.html)

市ヶ谷出版社の対策本は凄く良い。ちなみに自分は本の方ではなく、製図用紙とテキストと解答とかの紙っぺらが一緒になった**自学自習用ボックス版**というものを使った。

[`自学自習用ボックス版 設計製図課題ドリル（令和 6 年度版）（市ヶ谷出版社）`](http://www.ichigayashuppan.co.jp/book/b649107.html)

演習問題は**10 題掲載**されている。ちょうどいい量だと思う。全てやろう。というか、今年度の製図試験の問題、このドリルに載ってる演習問題のどれかにすごく似ていた。値段も 4,500 円+税だ。資格学校に通うための**講座料と比べればタダ**みたいなものだ。

ちなみに、製図板（**平行定規**）は MP-400LG2（レモン画翠）を使った。

[`レモン平行定規 MP-400LG2（レモン画翠）`](https://www.lemongasui.net/view/item/000000000695?category_page_id=ct101)

どうやらマックス株式会社という文具メーカーが出している MP-400FL2 と同じものらしい。でも、**レモン画翠で買う方が安い**。でも 4 万弱くらいする。受験者の中には、平行定規は製図試験くらいでしか使わないので他人から借りるという選択肢を取っている人もいるみたい。買った方が良いと思うけど。

それと Youtube チャンネルというのは、「**おしゃべり建築士**」という方の添削動画を見漁った。

[`おしゃべり建築士（Youtube）`](https://www.youtube.com/@kenchikushi/videos)

市ヶ谷出版社の演習問題を視聴者が送り、それの**添削動画を公開しているという素晴らしい Youtube チャンネル**だ。市ヶ谷出版社の許可もちゃんと得ているらしく、本当に独学者の味方だと思う。自分は実際に添削を依頼した訳ではないが、他人の図面を見るだけでも勉強になる。どのような描き方をすると不合格なのか、という話も添削動画によく出てくるのでわかりやすい。

製図試験というのは相対評価の試験である。概ね合格率は 50%で推移しているので、2 人に 1 人くらいは受かるようになっている。しかし、描き切らなければ一発「ランク Ⅳ」で不合格である。まずはとにかく描き切るところから始める必要がある。こればかりは演習量に依存するから、とにかく演習するしかない。階段とエレベーターはここに…、要求延べ面積的に架構計画のスパンは 5 ～ 8m を基準にしたグリットで…とある程度ルーチン化するのも有効だと思う。

あと、**試験会場には悪魔がいる**。どんな心構えで言っても、ゼロミスで描き切る人はおそらく 10%くらいだろう。**大抵どこかしらミスはする**ものである。とんでもないミス（例えば要求室の欠落、椅子の数、外構の必要なモノの書き忘れ、切断位置指定の無視等々）をしないためにも、あらかじめ心に悪魔を飼っておこう。

### 反省会

製図試験は例年、頭を捻らないと解答できないようないわゆる**サプライズ**が出題される。RC 造は近年 3 階建てが出題されていたので、2 階建てでの出題が今年はサプライズなのだろうか。描く量が減るちょっと嬉しめのサプライズ。

では、メモ程度に実際に描いた図面の**エスキス**をここに晒しておく。製図試験が終わったらどのような図面を描いたか再度思い出して描くという、**再現図面**を描くのが通常であるが、面倒だったので描いていない。

![エスキス](/img/blog/esquith.png)

論点を踏まえつつ意図的に解答した部分は以下の通りである。

- **管理部門と宿泊部門を完全に分離させた（外構部分も）**

- **備蓄品を貯める倉庫(B)は屋外広場に隣接させた**

- **屋外広場との一体利用を意識して南側を広くとった正方形のプランとした**

- **屋外広場との一体利用を意識して公園との境界線部に伸縮門扉を配置した**

- **多くの人の利用が見込まれる室は日照を考慮して南側にまとめて配置した**

- **客室は 2 人用、1 人用それぞれ同じ間取りとした（平等に）**

試験本番でしくじったところは以下の通りである。

- **2 階建てだから調子に乗って階高を高くしたら階段の蹴上寸法が 25cm くらいになった（激ヤバ）**

- **「駐輪スペースは、12 台分（利用者用及び従業員用）」とあるが、従業員含めての駐輪スペース数か分からなかったので、12 台（利用者用）と 2 台（従業員用）と計 14 台の駐輪スペースを設けた**

- **スイングドアがなにを指すのかわからずただの開き戸とした**

- **窓先空地は設けたが避難経路の記入を忘れた**

- **2 階平面図に現れる梁を書き忘れた**

蹴上については採点員にバレなかったのかは分からないが、間違えても受かっていた。本当に良かった。それ以外はまあ誰でも起こりうるようなミスだからそこまで心配はしていなかったので。

### 奥深き「便所」

JAEIC が公表する 2024 年度の「設計製図の試験」標準解答例を見てみる。なお、JAEIC の HP には、直近 10 回分の標準解答例が公開されている。

[`過去の試験問題等`](https://www.jaeic.or.jp/shiken/2k/2k-mondai.html)

[`2024 年度製図 標準解答例（PDF 直リンク）`](https://www.jaeic.or.jp/shiken/2k/2k-mondai.files/2k-2024-2nd-kaitorei.pdf)

「転載・複製はセンターの許諾を得てください」とあるため、ここでの掲載は省略する。

ここで着目したいのは、**「便所」のドア**である。便所のドアというものは**外開き**が普通である。というのも、**内開きだと、万が一便所内で倒れてしまった場合に外から救出できない**（=倒れた人が突っかかって入れない）から、と一般的には解されている。

とはいえ、例えば学校の便所のように一室に複数の便所があるような**ブース型の便所は、実際には内開きのモノも多い**。つまり、**法的には外開きと内開きのどちらでもよい**ということだ。ただ、最近では非常時に便所のドアを外開きに変更できるような建具も開発されており、ブース型以外の独立した便所では外開きを採用する方が良いように感じる。

[`オールジェンダートイレドア Fair-d（コマニー株式会社）`](https://www.comany.co.jp/news/2024/12/03/23284/)

さて、標準解答例をみると、便所のドアが（便所が一室で独立しているのに）**内開き**になっている。これは 1 階も 2 階も同様だ。直近 10 年の標準解答例を見ても、**内開き**の解答はひとつもない。**どれも外開きになっているか、引き戸になっているかの 2 つである。**

受験者 VS 採点者で考えると、便所のドアを、「ベストな外開き」と「ベター（or バッド）な内開き」にしている 2 通りの受験者がいたときに、後者が減点を喰らうのは目に見えている（内情は知らないので完全な予測だが、相対試験なので充分考えられる）。資格学校も「独立したトイレは外開きが基本」と教えているところもあるのではないか。

作問した機関でもある JAEIC が、このような選択を取ったのは必ず理由があるはずだ。と思い便所周りをみると、すぐに理由はわかる。廊下幅が狭いのである。廊下幅は、1 階についてはほぼ芯々で 1,500mm、2 階については芯々で 1,250mm しかない。

1 階を考えると、仮に外開きにしたときに、廊下を通る人にドアが激突する、なんてことはなさそうだが、管理部門の廊下入口のドアとは干渉してしまう。さすがにドアの干渉は印象が悪い。

他方、2 階を考えると、客用廊下が壁厚 200mm と考えると、内法で 1050mm しかないから、外開きにしてしまえば、客の動線とメチャメチャにぶつかり危険だ。

このように廊下を設定したプランなら、便所のドアが内開きになってしまうことはある程度納得できる。自分は、廊下が狭い部分に便所を設けるようなことは避けたので、考え方次第では便所のドアを外開きにすることは充分可能だ。むしろ、廊下幅が狭い状態で、便所のドアを外開きにしてしまうと、「動線と干渉する」という観点から印象は悪くなるだろう。

### 2 階建てであることの意味（**廊下幅編**）

ここまで考えると、結論として、「廊下が狭いこと」が根本的な問題かのように感じる。

いや、そもそも「廊下幅」の決まりはどうなっているのだろうか。

廊下幅の決まりは建築基準法施行令の 119 条にあったはずだ。

> （廊下の幅）
>
> **第百十九条**　廊下の幅は、それぞれ次の表に掲げる数値以上としなければならない。
>
> | 廊下の用途                                                                                                                                                                                                                                   | 廊下の配置 | 両側に居室がある廊下における場合 (単位：メートル) | その他の廊下における場合 (単位：メートル) |
> | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------- | ----------------------------------------- |
> | 小学校、中学校、義務教育学校、高等学校又は中等教育学校における児童用又は生徒用のもの                                                                                                                                                         |            | 2.0                                               | 1.8                                       |
> | 病院における患者用のもの、共同住宅の住戸若しくは住室の床面積の合計が百平方メートルを超える階における共用のもの又は三室以下の専用のものを除き**居室の床面積の合計が二百平方メートル（地階にあつては、百平方メートル）を超える階におけるもの** |            | 1.6                                               | 1.2                                       |

廊下幅については、今回の試験では各階の居室の床面積の合計が 200㎡ を超えるはずがないので、この制限は受けないこととなる。

そもそも、施行令の 117 条に廊下幅の制限が適用される範囲が示されている。

> （適用の範囲）
> **第百十七条**
>
> この節の規定は、法別表第一（い）欄（一）項から（四）項までに掲げる用途に供する特殊建築物、**階数が三以上である建築物**、前条第一項第一号に該当する窓その他の開口部を有しない居室を有する階又は延べ面積が千平方メートルをこえる建築物に限り適用する。

つまり、2 階建てはそもそも廊下幅の制限が存在しないのだ。

というより、3 階建てであっても、2 級の試験では、各階で居室の床面積が 200㎡ の建築物など出題されるはずがないので、そもそも廊下幅については常識の範囲内であればどう設定してもよい。

（200㎡ という規模よりも、出題が「病院」や「共同住宅」という内容だと、用途として廊下幅の制限がかかることはあり得る）

少々長くなってしまったが、「出題が 2 階建てである」という意味のひとつは、「廊下幅の制限がない」ということである。しかし、最低でも内法で 1,000m はとっておいた方が印象は悪くならないだろう（良くもならないが）。

一般的な 2 階建て or 平屋建て木造専用住宅についても、同様に廊下幅の制限がないので、芯々で 910mm しかなくて、壁がフカしてあると有効内法で 800mm 弱しか廊下幅が無い！という事例も案外身近にある。

ただ、厳密にいえば、都道府県条例で廊下幅に制限をかけている事例もみられる。例えば、「大阪府建築基準法施行条例」では、共同住宅等について、住室の床面積の計が 50㎡ 以下の階であっても、片廊下・両廊下のいずれも 90cm 以上とすること、という規定がある。

[`大阪府建築基準法施行条例　第 46 条`](https://www.pref.osaka.lg.jp/houbun/reiki/reiki_honbun/k201RG00000834.html#e000001435)

しかしながら、こと製図試験においては、「○○ 県 ○○ 条例を考慮する」なんて出題はこれまでに存在しないので、無視して OK である。

### 条例は姿を変えて

条例は無視して OK？ 実務なら当然 NG だが、実際の試験では次のように条例が問われる場合がある。以下は、今年度の製図試験の問題から引用した一文だ。

> ⑺ 外構 （略）
>
> ウ．客室のバルコニーが直接道路に面していない場合、**バルコニー前面に有効幅員 1.5m の空地及び避難経路を確保**する。

問題文に一切記載がないが、実はこれ「**東京都建築安全条例**」の内容なのだ。

該当する部分を条例から以下に引用する。

> (簡易宿所の宿泊室)
>
> 第三十七条　**簡易宿所**の宿泊の用に供する居室については、**第十九条(第一項第一号を除く。)の規定を準用**する。この場合において、同条第一項中「住戸等」とあるのは「宿泊室」と、「三メートル」とあり、及び「四メートル」とあるのは「二メートル」と、同条第二項中「住戸等」とあるのは「宿泊室」と、同条第三項中「住戸等」とあるのは「宿泊室」と、「第一項第一号、第二号イ」とあるのは「第一項第二号イ」と読み替えるものとする。

> (共同住宅等の居室)
>
> 第十九条　共同住宅の住戸若しくは住室の居住の用に供する居室のうち一以上、寄宿舎の寝室又は下宿の宿泊室は、次に定めるところによらなければならない。
>
> 一　床面積(下宿については、附室の部分を除く。)を七平方メートル以上とすること。
>
> 二　次のイ又はロの窓を設けること。
>
> > イ　**道路に直接面する窓**
> >
> > ロ　**窓先空地**(**通路その他の避難上有効な空地**又は特別避難階段若しくは地上に通ずる幅員九十センチメートル以上の専用の屋外階段(次項において「専用屋外階段」という。)に避難上有効に連絡する下階の屋上部分で、住戸等の床面積の合計に応じて、**次の表に定める幅員以上のもの**をいう。次項において同じ。)**に直接面する窓**
>
> | 住戸等の床面積の合計                                                                               | 幅員               |
> | -------------------------------------------------------------------------------------------------- | ------------------ |
> | **百平方メートル以下のもの**                                                                       | **一・五メートル** |
> | 百平方メートルを超え、三百平方メートル以下のもの                                                   | 二メートル         |
> | 三百平方メートルを超え、五百平方メートル以下のもの                                                 | 三メートル         |
> | 五百平方メートルを超えるもの                                                                       | 四メートル         |
> | この表において、住戸等の床面積の合計の欄の数値は、耐火建築物にあつては、この表の数値の二倍とする。 |                    |
>
> 三　避難階以外の階には、避難上有効なバルコニー又は器具等を設けること。
>
> 2 　前項**第二号ロの窓を設けた場合**は、**窓先空地**(下階の屋上部分にあつては、その特別避難階段又は専用屋外階段とする。)**から**道路、公園、広場その他これらに類するもの(以下「**道路等**」という。)**まで**を**幅員**二メートル(住戸等の床面積の合計が二百平方メートル以下の場合にあつては、**一・五メートル**)**以上の屋外通路**(屋外に十分開放され、かつ、避難上有効に区画された通路を含む。)**で避難上有効に連絡させなければならない**。ただし、特別避難階段が避難階の廊下その他避難の用に供する部分に通ずる場合は、この限りでない。

[`東京都建築安全条例　第 19 条`](https://www.reiki.metro.tokyo.lg.jp/reiki/reiki_honbun/g101RG00001306.html#e000001610)

要約すると、

- **① 宿泊室には「道路に直接面する窓」か「窓先空地」を設けること。**

- **② 「窓先空地」の場合、（宿泊室の床面積の合計が 100㎡ 以下なら）空地に 1.5m の幅員が必要。**

- **③ 「窓先空地」の場合、道路等まで 1.5m 以上幅員のある屋外通路を設けること。**

となる。まさに、問題文で問われている論点である（まあ、設計条件の冒頭で「ある地方都市の市街地において～」とあるのに、都条例がかかる設定なのは全くの謎だが）。

試験において条例まで覚える必要は全くないが、論点として（また、条文という元の姿を変えて）出題されるということは覚えておこう。

### 2 階建てであることの意味（**防火編**）

「出題が 2 階建てである」という意味のふたつ目は、「竪穴区画が発生しない」ということである。

条文は引用しないが、竪穴区画は防火区画のひとつで、3 階建ての RC 造の建築物には竪穴区画となる部分の開口部を防火設備とする必要がある。竪穴区画とは、1 階から 3 階以上までに直通して吹き抜けている部分、すなわち吹き抜けや階段のことである。

（RC 造 3 階建てで 3 階以上の部分に居室を設けない場合は防火設備は不要だが、問題上、3 階以上に居室を設けないなんて状況はほぼありえない）

製図試験上のお作法といえば、RC 造 3 階建てなら階段部分を階段室にして（=階段に通じるドアを設けて）、そこに〇防と書いて防火設備であることを示せばよい単純な話である。しかし、2 階建ての場合これは不要である。むしろ、2 階建てでこれをしてしまうと、「コイツ…何でもかんでも防火設備を付ければイイと思ってるだろ…」と思われて、印象が悪くなる可能性すらある。

実際に標準解答例をみると、そもそも階段室にドアを設けていない。たしかにこれが最善の選択だと思われる。なぜなら、

- **① 2 階建ての場合は竪穴区画が発生しないよ**

- **② 竪穴区画になりえなければ、そもそも階段に通じる開口部は不要だよ**

- **③ 不要なモノを設けて階段への障壁を作るくらいなら動線上そもそもドアを設ける必要性が見つからないよ**

という態度を効果的に示せるからだ。

それでも防火設備を付けたいんだ、とこだわる場合は、「竪穴区画ではないが、防火上の観点からドア（or シャッター）を設け、防火設備とする」等の傍記でアピールすれば良いと思う（加点にはならないと思うが）。

### 「防火上有効な部分」と「延焼ライン」

「防火設備」の話で言えば、「延焼ライン」も重要な論点である。これは条文が非常にシンプルなので以下に引用する。

> （用語の定義）
>
> 第二条 この法律において次の各号に掲げる用語の意義は、当該各号に定めるところによる。
>
> （略）
>
> 六　延焼のおそれのある部分　　**隣地境界線、道路中心線**又は同一敷地内の二以上の建築物（延べ面積の合計が五百平方メートル以内の建築物は、一の建築物とみなす。）相互の外壁間の中心線（ロにおいて「**隣地境界線等**」という。）から、**一階にあつては三メートル以下**、**二階以上にあつては五メートル以下**の距離にある建築物の部分をいう。**ただし、次のイ又はロのいずれかに該当する部分を除く**。
>
> > イ　**防火上有効な公園、広場、川その他の空地**又は**水面、耐火構造の壁その他**これらに類するものに面する部分
> >
> > ロ　（略）

この「延焼のおそれがある部分」の開口部は防火設備とする必要がある。

試験上は、隣地境界線 or 道路中心線から、1 階部分は 3m、2 階以上部分は 5m の幅で敷地側に破線を引けば良く、該当する範囲の外壁にある開口部に〇防と傍記すれば良いだけの話である。

ただし、今年度の問題では、敷地条件として、公園（防火上有効な公園である。）が南側に隣接するような形が出題された。つまり、南側の公園との境界線を、単なる隣地境界線と捉えて 3m または 5m の幅で破線を引いてしまうと大減点である。なぜなら、前掲の条文で、隣接する公園はイ号に類することから延焼ラインが発生しえないからだ。

ちなみに、平成 30 年度の 1 級の製図試験で、設計敷地が「歩行者専用道路」に隣接した上で、向かい（対岸）に「公園」が立地している**合わせ技**的な問題が出題された。ちなみに、歩行者専用道路は建築基準法上の道路であり、延焼ラインは発生しうるが、対岸に公園があるので延焼ラインは結果的に発生しない、という標準解答例が示されている。

なお、このときの問題に示された公園が単に「公園」としか示されていなかったため、前掲のイ号を適用させず延焼ラインを書いた受験者もいたとかいないとか。ただ、今年度の 2 級の問題では、恭しく「**防火上有効な**」と枕詞が付いており、ちゃんと延焼ラインの条文までイメージできる人にとっては若干安心であった。

少し脱線するが、過去に 1 級の製図試験で、「延焼のおそれのある部分」等の考え方を 1 級の標準解答例で示されたときがある。令和元年度以降の問題文には以下のような文言が登場する。

> 建築物の外壁の開口部で延焼のおそれのある部分がある場合においては、隣地境界線又は道路中心線から延焼のおそれのある部分までの距離（m）を記入し、延焼ラインを破線で図示すること

これを真に受けると、「建築物の外壁の開口部で延焼のおそれがない部分の延焼ラインは書かなくても良い」となり、前述の標準解答例に示された考え方にも、「1 階は敷地境界線から 3m 以内に建築物の部分がないため、延焼ラインの図示を省略している」とある。

ただ、2 級の問題文には、「延焼のおそれのある部分の範囲（延焼ラインを破線にて明記し、そこから道路中心線又は隣地境界線までの距離を記入）」としか書かれていないので、延焼のおそれがある部分に建築物が掛かろうが掛からまいが、該当する延焼ラインは全て図示しておくべきだろう。JAEIC も延焼ラインの基本的な考え方を採点の基準にしたいのだろう。

あまり関係はないが、図面の印象という点でもうひとつ標準解答例からわかる点がある。それは、「延焼ラインの寸法の書き方」だ。これまでの標準解答例では、寸法を引き出した上で、「延焼ライン（〇側隣地から △m）」のように書かれていた。当然、受験生（や資格学校）はこれに倣い、演習のときに死ぬほど書いてきたはずだ。

今年度の標準解答例をみると、寸法は引き出してあるものの、「延焼ライン」と傍記されているだけだ。「延焼ライン（〇側隣地から △m）」と書いたところで、加点も減点もされないのだと思う。

独学だとこういった些細なことも「紋切り型には違いないがやっておくのがベスト」と歯を食いしばりながら書いていたので、JAEIC がこういう姿勢を示してくれると大変ありがたい。手書きだと分かるが、「隣」という字はあまりに複雑で書くのが退屈で面倒だ。

### その他標準解答例を見て思ったこと

- **従業員用と客用の駐輪スペース分けないんだ…**

- **搬入用駐車スペース的に喫茶スペースの利用者と搬入者（業者？）の動線が重なるがいいのか…**

- **4 人席のテーブル小さすぎないか…**

- **断面図の切断位置が X 軸 Y 軸任意だったが、これは正方形のプランを想定したからじゃなかったのか…**

- **客室 4 と客室 5 の形はこれでいいのか…**

## ＞おわりに

そもそもを言えば、JAEIC が公表しているのは「標準解答例」であって「満点解答例」ではない。「受験者から見てだいたいこれくらい描けていれば合格だよね～」というラインを示しているのにすぎない。もちろん参考にはなるが、あまり過信してはいけないと感じる。

長々と書き連ねたが、もっとわかりやすい講評とかは資格学校もこぞって公表していたりする。タダなので見てみると良いかと思う。

学科については過去問が、製図については各出版社の問題集が合格を握るカギとなるだろう。とにかく過去問をたくさん回して、予想製図問題集をたくさん書き散らかせば独学でもいけると思う。

ザッと早足で書き上げたが、RC 造が出題される 3 年後、誰かの役に立つことを祈って…