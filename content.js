/* ============================================================
   BRICK サイト文言データ
   ------------------------------------------------------------
   最終更新日時: 2026-08-22 08:30 JST
   ------------------------------------------------------------
   ここの値を書き換えるだけで、サイト本文がすべて更新されます。
   HTML/CSSは触らなくてOKです。
   保存後、index.html をブラウザで再読み込みすれば反映されます。
 
   ★更新するたびに、上の「最終更新日時」も書き換えてください。
   ============================================================ */
 
const BRICK_CONTENT = {
  // ---- ナビゲーション ----
  nav_cta_label: "体験参加",
 
  // ---- ヒーロー（最初の画面） ----
  hero_eyebrow: "滋賀県 長浜市 / 男女混合バレーボールチーム",
  hero_title_line1: "バレー好きが集まる",
  hero_title_line2: "みんなで楽しいバレーボール",
  hero_sub: "高校生から40代まで、レベルもバラバラなメンバーが集まって週2回汗を流しています。金曜は初心者～中級者クラス、日曜は上級者クラス。6人制はもちろん、地域の混合9人制の大会にも定期的に参加中です。",
  hero_chip_1: "毎週金曜 夜 / わいわいバレー",
  hero_chip_2: "毎週日曜 夜 / 部活経験者向き",
  hero_chip_3: "拠点：滋賀県長浜市",
  hero_btn_primary: "体験参加する",
  hero_btn_ghost: "活動を見る",
  hero_scroll_label: "SCROLL",
 
  // ---- スコアボード（数字で見るBRICK） ----
  // num には数字だけ、unit には「名」「年」など単位を入れてください
  score_1_num: "47",
  score_1_unit: "名",
  score_1_label: "現在のメンバー数",
 
  score_2_num: "6",
  score_2_unit: "年",
  score_2_label: "活動年数",
 
  score_3_num: "7:3",
  score_3_unit: "",
  score_3_label: "男女比",
 
  score_4_num: "6〜8",
  score_4_unit: "セット",
  score_4_label: "1回あたりの試合セット数",
 
  // ---- 活動スケジュール ----
  activity_eyebrow: "ACTIVITY",
  activity_title: "活動スケジュール",
  activity_lead: "使用球は5号球。レベル別に曜日を分けているので、初めての方も安心して参加できます。",
 
  fri_day: "FRIDAY NIGHT",
  fri_title: "わいわいバレー",
  fri_desc: "バレー未経験・久しぶりの方向け。経験者も居るのでフォロー体制バッチリ！楽しみながら上達できます。",
  fri_tag_1: "19:30〜21:30",
  fri_tag_2: "ネットの高さ2m15cm",
 
  sun_day: "SUNDAY NIGHT",
  sun_title: "部活経験者向き",
  sun_desc: "経験者中心にしっかり試合形式で汗を流す日。“張り”のあるラリーが楽しめます。",
  sun_tag_1: "19:00〜21:00",
  sun_tag_2: "ネットの高さ2m30cm",
 
  format_6_title: "6人制",
  format_6_desc: "普段の活動はこちら。みんなで試合形式で楽しむメインスタイル",
  format_9_title: "混合9人制",
  format_9_desc: "地元の大会にも定期的に出場",
 
  // ---- チームの雰囲気 ----
  vibe_eyebrow: "TEAM",
  vibe_title: "チームの雰囲気",
  vibe_lead: "年齢もレベルも違う人たちが、同じコートで楽しく、そして本気になれる。それがBRICKらしさです。",
 
  vibe_1_title: "初心者も安心",
  vibe_1_desc: "曜日・チーム分けの工夫で、初心者から経験者まで無理なく楽しめます。",
  vibe_2_title: "本気で楽しめる試合形式",
  vibe_2_desc: "上級者がフォローするから試合レベルは高め。大会本番では経験者中心に楽しく本気を出します。",
  vibe_3_title: "幅広い年齢層",
  vibe_3_desc: "高校生から40代まで、世代を超えて仲良く活動しています。",
 
  // ---- 動画セクション ----
  // 2026-08-22: 普段の活動動画を追加したのに合わせて、見出しを試合限定の
  // 表現から両方をカバーする表現に変更。video_caption_1/2 は各動画の上に
  // 出す小見出し（index.htmlの.video-caption要素に対応）。
  video_eyebrow: "VIDEO",
  video_title: "活動の様子",
  video_lead: "練習・大会の様子を動画で公開しています。",
  video_caption_1: "普段の活動の様子",
  video_caption_2: "大会でのハイライト",
  video_note: "普段の練習風景や、地域の大会に出場した時の試合の様子をご覧いただけます。",
 
  // ---- 参加案内 ----
  join_eyebrow: "JOIN US",
  join_title: "一緒にバレーを楽しみませんか",
  join_desc: "体験参加の対象は18〜35歳です。経験は問いません。まずは体験参加で、BRICKの雰囲気を感じてください。道具は手ぶらでOK、動きやすい服装だけご用意ください。",
  join_checklist_title: "お問い合わせの際は、以下も教えてください",
  join_check_1: "年齢または年代",
  join_check_2: "性別",
  join_check_3: "バレー歴（未経験でもOK）",
  join_check_4: "お住まいの地域",
  join_rules_label: "参加前にチームルールを確認する →",
  join_btn_primary: "メールで問い合わせる",
  join_btn_ghost: "Instagramを見る",
 
  // ---- リンク先URL（実際のURLに差し替えてください） ----
  link_email: "mailto:brick.volley@gmail.com",
  link_instagram: "https://www.instagram.com/brick_volley?igsh=dWdyZjdhNHQ1Njkw",
  link_team_rules: "https://brick-volleyball.github.io/BRICK%E3%83%81%E3%83%BC%E3%83%A0%E3%83%AB%E3%83%BC%E3%83%AB_20260811.pdf",
 
  // ---- フッター ----
  footer_copy: "© 2026 BRICK Volleyball Team, Nagahama Shiga.",
  site_updated_at: "最終更新: 2026年8月22日 8:30",
};
