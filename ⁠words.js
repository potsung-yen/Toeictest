// ===================================================
// 📦 系統總陣列 (請永遠保留這行在 words.js 的最上方)
// ===================================================
const allWordBatches = [];

// ---------------------------------------------------
// 👇 之後每次從 AI 拿到的新單字，直接貼在下面即可 👇
// ---------------------------------------------------

// 你的第一批單字 (已套用同義反義等欄位)
allWordBatches.push([
  {
    "english": "absurd",
    "chinese": "荒謬的 (adj.) (P.1)",
    "sentence": "The board dismissed the proposal as completely absurd, given the current financial constraints.",
    "synonyms": "ridiculous, preposterous",
    "antonyms": "reasonable, sensible",
    "confused": "absorb (吸收)"
  },
  {
    "english": "accelerate",
    "chinese": "加速 (v.) (P.1)",
    "sentence": "To meet the Q3 targets, we must accelerate our production schedule immediately.",
    "synonyms": "hasten, expedite",
    "antonyms": "decelerate, delay",
    "confused": "exhilarate (使高興)"
  },
  {
    "english": "acceptance",
    "chinese": "接受 (n.) (P.1)",
    "sentence": "The product's rapid acceptance in the European market exceeded our initial revenue projections.",
    "synonyms": "approval, adoption",
    "antonyms": "rejection, refusal",
    "confused": "exception (例外)"
  },
  {
    "english": "access",
    "chinese": "進入、入口,使用 (n.) (P.1)",
    "sentence": "Only authorized personnel have access to the highly classified client database."
  },
  {
    "english": "accommodation",
    "chinese": "住宿:容納 (n.) (P.1)",
    "sentence": "The company will cover all travel expenses, including flight tickets and hotel accommodations."
  },
  {
    "english": "account",
    "chinese": "帳戶、客戶 (n.) / 解釋 (v.) (P.1)",
    "sentence": "The marketing department must account for the significant discrepancy in this month's budget."
  },
  {
    "english": "accountant",
    "chinese": "會計 (n.) (P.1)",
    "sentence": "Our senior accountant is currently auditing the annual financial statements to ensure compliance."
  },
  {
    "english": "accrue",
    "chinese": "增加、產生 (v.) (P.1)",
    "sentence": "Interest on this corporate loan will accrue daily at a rate of five percent."
  },
  {
    "english": "accurate",
    "chinese": "正確的 (adj.) (P.1)",
    "sentence": "Providing an accurate sales forecast is crucial for our upcoming investor meeting."
  },
  {
    "english": "acknowledge",
    "chinese": "承認:表示感謝 (v.) (P.1)",
    "sentence": "Please acknowledge receipt of this urgent email by replying as soon as possible."
  },
  {
    "english": "acquaintance",
    "chinese": "朋友:泛泛之交 (n.) (P.1)",
    "sentence": "I made a valuable business acquaintance at the international trade convention last week."
  },
  {
    "english": "acquire",
    "chinese": "獲得;併購 (v.) (P.1)",
    "sentence": "The tech giant plans to acquire two smaller software startups by the end of the fiscal year."
  },
  {
    "english": "acquisition",
    "chinese": "獲得;併購 (n.) (P.1)",
    "sentence": "The recent acquisition of our main competitor will significantly expand our market share."
  },
  {
    "english": "acrophobia",
    "chinese": "懼高症 (n.) (P.1)",
    "sentence": "Although the executive suffers from acrophobia, he managed to attend the meeting on the 85th floor."
  },
  {
    "english": "activate",
    "chinese": "使...活動,活化 (v.) (P.1)",
    "sentence": "You need to input the verification code to activate your new corporate banking account."
  },
  {
    "english": "adequate",
    "chinese": "適合的;足夠的 (adj.) (P.1)",
    "sentence": "We must ensure there is adequate funding before launching the new international marketing campaign."
  },
  {
    "english": "adjourn",
    "chinese": "休會,暫停 (v.) (P.1)",
    "sentence": "The chairperson decided to adjourn the board meeting until further financial data could be gathered."
  },
  {
    "english": "advance",
    "chinese": "增進 (v.) (P.1)",
    "sentence": "Technological innovations continue to advance our manufacturing capabilities and reduce production costs."
  },
  {
    "english": "advertisement",
    "chinese": "廣告 (n.) (P.1)",
    "sentence": "The new digital advertisement generated a thirty percent increase in our e-commerce website traffic."
  },
  {
    "english": "advertising",
    "chinese": "廣告,廣告業 (n.) (P.1)",
    "sentence": "She has over ten years of extensive management experience in the competitive advertising industry."
  },
  {
    "english": "aerobics",
    "chinese": "有氧舞蹈 (n.) (P.1)",
    "sentence": "The human resources department organized weekly aerobics sessions to promote employee health and well-being."
  },
  {
    "english": "affection",
    "chinese": "喜愛,感情 (n.) (P.1)",
    "sentence": "The retiring CEO was regarded with deep affection and immense respect by the entire staff."
  },
  {
    "english": "affiliate",
    "chinese": "分部,子公司 (n.) (P.1)",
    "sentence": "Our overseas affiliate will handle the distribution and marketing of products in the Asian market."
  },
  {
    "english": "affirm",
    "chinese": "確認,斷言 (v.) (P.1)",
    "sentence": "The board of directors will affirm the company's commitment to sustainable practices during the press conference."
  },
  {
    "english": "afford",
    "chinese": "負擔得起 (v.) (P.1)",
    "sentence": "Given the current economic downturn, we cannot afford to lose any more major corporate clients."
  },
  {
    "english": "agenda",
    "chinese": "議程 (n.) (P.1)",
    "sentence": "The primary item on today's agenda is discussing the restructuring of the global sales department."
  },
  {
    "english": "aggressive",
    "chinese": "有野心的,侵略性的 (adj.) (P.1)",
    "sentence": "The firm adopted an aggressive marketing strategy to penetrate the highly competitive smartphone market."
  },
  {
    "english": "agreement",
    "chinese": "合約;協定 (n.) (P.2)",
    "sentence": "Both corporate parties have finally reached a mutually beneficial agreement after weeks of intense negotiation."
  },
  {
    "english": "aircraft",
    "chinese": "飛機、飛行器 (n.) (P.2)",
    "sentence": "The international logistics company recently expanded its fleet with three new wide-body cargo aircraft."
  },
  {
    "english": "airliner",
    "chinese": "班機 (n.) (P.2)",
    "sentence": "The executives booked first-class seats on a commercial airliner for their transatlantic business trip."
  }
]);

// 💡 如果你手邊還有之前幾百個舊單字，也可以用相同的格式：
// allWordBatches.push([
//    ... 你的舊單字放在這裡 ...
// ]);
