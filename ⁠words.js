// ===================================================
// 📦 系統總陣列 (請永遠保留這行在 words.js 的最上方)
// ===================================================
const allWordBatches = [];

// ---------------------------------------------------
// 👇 第一批完整單字 (P.1 - P.2) 已補齊所有擴充資料 👇
// ---------------------------------------------------
allWordBatches.push([
  {
    "english": "absurd",
    "chinese": "荒謬的 (adj.) (P.1)",
    "sentence": "The board dismissed the proposal as completely absurd, given the current financial constraints.",
    "synonyms": "ridiculous (可笑的), preposterous (荒謬的), illogical (不合邏輯的), senseless (無意義的), foolish (愚蠢的)",
    "antonyms": "reasonable (合理的), sensible (明智的), logical (合邏輯的), sound (健全的), rational (理性的)",
    "confused": "absorb (吸收) / completely absurd (完全荒謬)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+absurd"
  },
  {
    "english": "accelerate",
    "chinese": "加速 (v.) (P.1)",
    "sentence": "To meet the Q3 targets, we must accelerate our production schedule immediately.",
    "synonyms": "hasten (催促), expedite (加快), quicken (使快), speed up (加速), forward (促進)",
    "antonyms": "decelerate (減速), delay (延遲), retard (妨礙), slow down (放慢), hinder (阻礙)",
    "confused": "exhilarate (使高興) / accelerate growth (加速成長)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+accelerate"
  },
  {
    "english": "acceptance",
    "chinese": "接受 (n.) (P.1)",
    "sentence": "The product's rapid acceptance in the European market exceeded our initial revenue projections.",
    "synonyms": "approval (批准), adoption (採納), agreement (同意), acknowledgment (承認), consent (贊同)",
    "antonyms": "rejection (拒絕), refusal (拒絕), denial (否認), opposition (反對), disapproval (不贊成)",
    "confused": "exception (例外) / gain acceptance (獲得認可)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+acceptance"
  },
  {
    "english": "access",
    "chinese": "進入、入口,使用 (n.) (P.1)",
    "sentence": "Only authorized personnel have access to the highly classified client database.",
    "synonyms": "entry (進入), admission (准許進入), approach (途徑), connection (連接), permission (許可)",
    "antonyms": "restriction (限制), exclusion (排除), denial (拒絕), barrier (障礙)",
    "confused": "excess (過量 / 多餘) / have access to (有權使用)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+access"
  },
  {
    "english": "accommodation",
    "chinese": "住宿:容納 (n.) (P.1)",
    "sentence": "The company will cover all travel expenses, including flight tickets and hotel accommodations.",
    "synonyms": "housing (住宅), lodging (寄宿), shelter (庇護所), quarters (營房), adjustment (適應)",
    "antonyms": "eviction (驅逐), rejection (拒絕)",
    "confused": "accumulation (累積) / book accommodation (預訂住宿)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+accommodation"
  },
  {
    "english": "account",
    "chinese": "帳戶、客戶 (n.) / 解釋 (v.) (P.1)",
    "sentence": "The marketing department must account for the significant discrepancy in this month's budget.",
    "synonyms": "explanation (解釋), narrative (敘述), report (報告), client (客戶), reason (理由)",
    "antonyms": "concealment (隱瞞), mystery (謎)",
    "confused": "amount (數量) / take into account (考慮進去), account for (說明 / 佔...比例)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+account"
  },
  {
    "english": "accountant",
    "chinese": "會計 (n.) (P.1)",
    "sentence": "Our senior accountant is currently auditing the annual financial statements to ensure compliance.",
    "synonyms": "bookkeeper (記帳員), auditor (審計員), controller (財務主管), CPA (會計師), clerk (職員)",
    "antonyms": "無直接反義詞",
    "confused": "accountable (應負責任的) / certified public accountant (註冊會計師)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+accountant"
  },
  {
    "english": "accrue",
    "chinese": "增加、產生 (v.) (P.1)",
    "sentence": "Interest on this corporate loan will accrue daily at a rate of five percent.",
    "synonyms": "accumulate (累積), collect (收集), gather (聚集), amass (積聚), build up (增加)",
    "antonyms": "dissipate (消散), disperse (分散), diminish (減少), spend (花費), lose (失去)",
    "confused": "accurate (正確的) / accrue interest (產生利息)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+accrue"
  },
  {
    "english": "accurate",
    "chinese": "正確的 (adj.) (P.1)",
    "sentence": "Providing an accurate sales forecast is crucial for our upcoming investor meeting.",
    "synonyms": "precise (精確的), exact (準確的), correct (正確的), factual (真實的), true (真實的)",
    "antonyms": "inaccurate (不準確的), wrong (錯誤的), false (假的), flawed (有缺陷的), erroneous (錯誤的)",
    "confused": "acute (敏銳的 / 劇烈的) / accurate assessment (準確的評估)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+accurate"
  },
  {
    "english": "acknowledge",
    "chinese": "承認:表示感謝 (v.) (P.1)",
    "sentence": "Please acknowledge receipt of this urgent email by replying as soon as possible.",
    "synonyms": "admit (承認), concede (退讓), recognize (認可), accept (接受), grant (同意)",
    "antonyms": "deny (否認), ignore (忽略), reject (拒絕), dispute (爭論), contradict (反駁)",
    "confused": "knowledge (知識) / acknowledge receipt (確認收訖)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+acknowledge"
  },
  {
    "english": "acquaintance",
    "chinese": "朋友:泛泛之交 (n.) (P.1)",
    "sentence": "I made a valuable business acquaintance at the international trade convention last week.",
    "synonyms": "associate (聯絡人), contact (接觸人), colleague (同事), connection (關係), familiarity (熟悉)",
    "antonyms": "stranger (陌生人), enemy (敵人), ignorance (無知)",
    "confused": "acquire (獲得) / a casual acquaintance (點頭之交)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+acquaintance"
  },
  {
    "english": "acquire",
    "chinese": "獲得;併購 (v.) (P.1)",
    "sentence": "The tech giant plans to acquire two smaller software startups by the end of the fiscal year.",
    "synonyms": "obtain (取得), gain (獲取), procure (採購), purchase (購買), secure (弄到)",
    "antonyms": "lose (失去), forfeit (喪失), give up (放棄), surrender (交出), part with (捨棄)",
    "confused": "require (需要), inquire (詢問) / acquire a company (併購公司)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+acquire"
  },
  {
    "english": "acquisition",
    "chinese": "獲得;併購 (n.) (P.1)",
    "sentence": "The recent acquisition of our main competitor will significantly expand our market share.",
    "synonyms": "purchase (採購), procurement (獲得物), takeover (接管), addition (增加物), possession (財產)",
    "antonyms": "loss (損失), divestiture (剝離資產), sale (出售)",
    "confused": "accusation (指控) / mergers and acquisitions (併購 - M&A)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+acquisition"
  },
  {
    "english": "acrophobia",
    "chinese": "懼高症 (n.) (P.1)",
    "sentence": "Although the executive suffers from acrophobia, he managed to attend the meeting on the 85th floor.",
    "synonyms": "fear of heights (對高度的恐懼)",
    "antonyms": "無直接反義詞",
    "confused": "agoraphobia (廣場恐懼症), claustrophobia (幽閉恐懼症)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+acrophobia"
  },
  {
    "english": "activate",
    "chinese": "使...活動,活化 (v.) (P.1)",
    "sentence": "You need to input the verification code to activate your new corporate banking account.",
    "synonyms": "trigger (觸發), initiate (啟動), enable (使能夠), start (開始), stimulate (刺激)",
    "antonyms": "deactivate (停用), stop (停止), disable (使無效), halt (暫停), shut down (關閉)",
    "confused": "captivate (迷住) / activate an account (啟用帳戶)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+activate"
  },
  {
    "english": "adequate",
    "chinese": "適合的;足夠的 (adj.) (P.1)",
    "sentence": "We must ensure there is adequate funding before launching the new international marketing campaign.",
    "synonyms": "sufficient (充足的), enough (足夠的), suitable (合適的), acceptable (可接受的), competent (勝任的)",
    "antonyms": "inadequate (不足的), insufficient (不夠的), lacking (缺乏的), sparse (稀少的), poor (差的)",
    "confused": "etiquette (禮儀) / adequate resources (充足的資源)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+adequate"
  },
  {
    "english": "adjourn",
    "chinese": "休會,暫停 (v.) (P.1)",
    "sentence": "The chairperson decided to adjourn the board meeting until further financial data could be gathered.",
    "synonyms": "postpone (延期), suspend (暫停), defer (推遲), delay (耽擱), recess (休假)",
    "antonyms": "convene (召集), assemble (集合), begin (開始), open (展開)",
    "confused": "adjoin (毗連 / 鄰接) / adjourn a meeting (休會)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+adjourn"
  },
  {
    "english": "advance",
    "chinese": "增進 (v.) (P.1)",
    "sentence": "Technological innovations continue to advance our manufacturing capabilities and reduce production costs.",
    "synonyms": "progress (進步), proceed (前進), promote (促進), develop (發展), improve (改善)",
    "antonyms": "retreat (撤退), recede (後退), regress (倒退), decline (衰退), delay (延緩)",
    "confused": "advantage (優勢) / in advance (事先)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+advance"
  },
  {
    "english": "advertisement",
    "chinese": "廣告 (n.) (P.1)",
    "sentence": "The new digital advertisement generated a thirty percent increase in our e-commerce website traffic.",
    "synonyms": "commercial (商業廣告), promotion (促銷), ad (廣告), announcement (公告), notice (通知)",
    "antonyms": "無直接反義詞",
    "confused": "advisement (勸告 / 考量) / place an advertisement (刊登廣告)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+advertisement"
  },
  {
    "english": "advertising",
    "chinese": "廣告,廣告業 (n.) (P.1)",
    "sentence": "She has over ten years of extensive management experience in the competitive advertising industry.",
    "synonyms": "marketing (行銷), promotion (推廣), PR (公關), branding (品牌建立)",
    "antonyms": "無直接反義詞",
    "confused": "advising (建議) / advertising campaign (廣告活動)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+advertising"
  },
  {
    "english": "aerobics",
    "chinese": "有氧舞蹈 (n.) (P.1)",
    "sentence": "The human resources department organized weekly aerobics sessions to promote employee health and well-being.",
    "synonyms": "cardiovascular exercise (心肺運動), workout (鍛鍊), fitness (健身)",
    "antonyms": "無直接反義詞",
    "confused": "aerodynamics (空氣動力學) / do aerobics (做有氧運動)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+aerobics"
  },
  {
    "english": "affection",
    "chinese": "喜愛,感情 (n.) (P.1)",
    "sentence": "The retiring CEO was regarded with deep affection and immense respect by the entire staff.",
    "synonyms": "fondness (鍾愛), love (喜愛), care (關心), warmth (溫暖), attachment (依戀)",
    "antonyms": "hatred (仇恨), animosity (敵意), dislike (反感), indifference (冷漠)",
    "confused": "affectation (做作 / 假裝) / show affection (表達愛意)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+affection"
  },
  {
    "english": "affiliate",
    "chinese": "分部,子公司 (n.) (P.1)",
    "sentence": "Our overseas affiliate will handle the distribution and marketing of products in the Asian market.",
    "synonyms": "associate (附屬機構), partner (合作夥伴), branch (分部), subsidiary (子公司), ally (盟友)",
    "antonyms": "competitor (競爭對手), rival (對手)",
    "confused": "affinity (密切關係) / affiliated company (關係企業)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+affiliate"
  },
  {
    "english": "affirm",
    "chinese": "確認,斷言 (v.) (P.1)",
    "sentence": "The board of directors will affirm the company's commitment to sustainable practices during the press conference.",
    "synonyms": "confirm (確認), assert (斷言), declare (宣佈), state (聲明), swear (發誓)",
    "antonyms": "deny (否認), reject (拒絕), veto (否決), dispute (質疑)",
    "confused": "firm (公司 / 堅固的) / affirm a decision (確認決定)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+affirm"
  },
  {
    "english": "afford",
    "chinese": "負擔得起 (v.) (P.1)",
    "sentence": "Given the current economic downturn, we cannot afford to lose any more major corporate clients.",
    "synonyms": "bear (承擔), sustain (維持), manage (設法做到), support (支持), provide (提供)",
    "antonyms": "無直接反義詞",
    "confused": "effort (努力) / can't afford to (承擔不起)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+afford"
  },
  {
    "english": "agenda",
    "chinese": "議程 (n.) (P.1)",
    "sentence": "The primary item on today's agenda is discussing the restructuring of the global sales department.",
    "synonyms": "schedule (時間表), itinerary (行程), program (計畫), plan (方案), list (清單)",
    "antonyms": "無直接反義詞",
    "confused": "agency (代理機構) / on the agenda (在議程上)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+agenda"
  },
  {
    "english": "aggressive",
    "chinese": "有野心的,侵略性的 (adj.) (P.1)",
    "sentence": "The firm adopted an aggressive marketing strategy to penetrate the highly competitive smartphone market.",
    "synonyms": "hostile (敵意的), assertive (堅定的), forceful (強而有力的), competitive (競爭的), ambitious (有野心的)",
    "antonyms": "passive (被動的), peaceful (和平的), mild (溫和的), gentle (柔和的)",
    "confused": "progressive (進步的) / aggressive expansion (積極擴張)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+aggressive"
  },
  {
    "english": "agreement",
    "chinese": "合約;協定 (n.) (P.2)",
    "sentence": "Both corporate parties have finally reached a mutually beneficial agreement after weeks of intense negotiation.",
    "synonyms": "contract (合約), accord (協議), deal (交易), understanding (諒解), settlement (和解)",
    "antonyms": "disagreement (分歧), conflict (衝突), argument (爭論), dispute (糾紛)",
    "confused": "argument (爭論) / reach an agreement (達成協議)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+agreement"
  },
  {
    "english": "aircraft",
    "chinese": "飛機、飛行器 (n.) (P.2)",
    "sentence": "The international logistics company recently expanded its fleet with three new wide-body cargo aircraft.",
    "synonyms": "airplane (飛機), aviation (航空器), plane (飛機), jet (噴射機)",
    "antonyms": "無直接反義詞",
    "confused": "hovercraft (氣墊船)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+aircraft"
  },
  {
    "english": "airliner",
    "chinese": "班機 (n.) (P.2)",
    "sentence": "The executives booked first-class seats on a commercial airliner for their transatlantic business trip.",
    "synonyms": "passenger plane (客機), jet (噴射機), aircraft (飛行器)",
    "antonyms": "無直接反義詞",
    "confused": "airline (航空公司) / commercial airliner (商用客機)",
    "youtube": "https://www.youtube.com/results?search_query=how+to+pronounce+airliner"
  }
]);

