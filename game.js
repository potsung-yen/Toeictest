// ==========================================
// 🚀 單字庫自動合併與去重引擎
// ==========================================
let wordList = [];
let uniqueDict = {};

if (typeof allWordBatches !== 'undefined') {
    allWordBatches.forEach(batch => {
        batch.forEach(word => {
            // 將單字轉小寫並去除空白，作為不重複的唯一鍵值 (Key)
            let key = word.english.toLowerCase().trim();
            // 如果遇到重複的單字，後面上傳的新單字會自動覆蓋舊單字
            uniqueDict[key] = word; 
        });
    });
    // 將去重後的字典轉回遊戲需要的陣列
    wordList = Object.values(uniqueDict);
}
// ==========================================

let currentPlayer = "";
let currentWord = {};
let isBossMode = false;
let bossWordList = [];

function startGame() {
    currentPlayer = document.getElementById("playerName").value.trim() || "冒險王";
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("uploadArea").style.display = "block"; 
    
    // 初始化題數上限
    document.getElementById("endIdx").value = wordList.length;

    updateScoreBoard();
    checkBossAvailable();
    
    bunnySay(`加油啦 ${currentPlayer}！我們一起破關！`);
    nextQuestion();
}

function changeMode() {
    if (document.getElementById("gameArea").style.display === "block") {
        nextQuestion();
    }
}

function getCombinedWordList() {
    let customWords = JSON.parse(localStorage.getItem(`SpellingHero_CustomWords_${currentPlayer}`)) || [];
    let fullList = wordList.concat(customWords);

    let customIdxStr = document.getElementById("customIdx").value.trim();
    let selectedWords = [];

    if (customIdxStr !== "") {
        let parts = customIdxStr.split(',');
        let indices = new Set(); 
        
        for (let part of parts) {
            part = part.trim();
            if (part.includes('-')) {
                let bounds = part.split('-');
                if (bounds.length >= 2) {
                    let s = parseInt(bounds[0]);
                    let e = parseInt(bounds[1]);
                    if (!isNaN(s) && !isNaN(e)) {
                        let min = Math.min(s, e);
                        let max = Math.max(s, e);
                        for (let i = min; i <= max; i++) {
                            if (i >= 1 && i <= fullList.length) indices.add(i - 1);
                        }
                    }
                }
            } else {
                let val = parseInt(part);
                if (!isNaN(val) && val >= 1 && val <= fullList.length) {
                    indices.add(val - 1);
                }
            }
        }
        
        indices.forEach(idx => selectedWords.push(fullList[idx]));
        if (selectedWords.length > 0) return selectedWords;
        alert("⚠️ 自訂題號格式不正確或超出範圍，將使用原本的連續範圍喔！");
    }

    let start = parseInt(document.getElementById("startIdx").value) || 1;
    let end = parseInt(document.getElementById("endIdx").value) || fullList.length;
    if (start < 1) start = 1;
    if (end > fullList.length) end = fullList.length;
    if (start > end) start = end;

    return fullList.slice(start - 1, end);
}

function getDetailedPOS(eng, chi) {
    let cleanChi = chi.trim();
    let posResult = "";
    
    // 自動抓取 (adj.), (v.), (n.) 等詞性標記
    const match = cleanChi.match(/\((adj\.|v\.|n\.|adv\.|prep\.|conj\.)\)/i);
    if (match) {
        posResult = match[1];
    } else {
        posResult = "n."; 
    }
    return `📌[${posResult}]`;
}

function nextQuestion() {
    const mode = document.querySelector('input[name="gameMode"]:checked').value;
    
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("feedbackMsg").innerText = "";
    
    if (mode === "spelling") {
        document.getElementById("spellingArea").style.display = "block";
        document.getElementById("choiceArea").style.display = "none";
        document.getElementById("submitBtn").style.display = "inline-block";
        document.getElementById("englishInput").disabled = false;
        document.getElementById("englishInput").value = "";
        document.getElementById("englishInput").focus();
    } else {
        document.getElementById("spellingArea").style.display = "none";
        document.getElementById("choiceArea").style.display = "flex";
    }

    if (isBossMode) {
        if (bossWordList.length === 0) {
            alert("🎉 太棒了！魔王被打敗了！你把常錯單字都學會了！");
            isBossMode = false;
            checkBossAvailable();
            nextQuestion();
            return;
        }
        const randomIndex = Math.floor(Math.random() * bossWordList.length);
        currentWord = bossWordList[randomIndex];
    } else {
        const combinedList = getCombinedWordList();
        const randomIndex = Math.floor(Math.random() * combinedList.length);
        currentWord = combinedList[randomIndex];
    }

    let posTag = getDetailedPOS(currentWord.english, currentWord.chinese);
    document.getElementById("chineseHint").innerHTML = `${currentWord.chinese} <span style="font-size: 18px; color: #0984e3; font-weight: bold; margin-left: 10px;">${posTag}</span>`;
    
    const sentenceHint = document.getElementById("sentenceHint");
    if (currentWord.sentence) {
        const cleanTarget = currentWord.english.replace(/^(a |an |the |to )/i, '').replace(/\([^)]*\)/g, '').trim();
        const regex = new RegExp(cleanTarget, 'gi');
        const blankedSentence = currentWord.sentence.replace(regex, "________");
        sentenceHint.innerText = blankedSentence;
        sentenceHint.style.display = "block";
    } else {
        sentenceHint.style.display = "none";
        sentenceHint.innerText = "";
    }

    if (mode === "choice") renderChoiceOptions();
    speakWord(); 
}

function renderChoiceOptions() {
    const choiceArea = document.getElementById("choiceArea");
    choiceArea.innerHTML = "";

    let customWords = JSON.parse(localStorage.getItem(`SpellingHero_CustomWords_${currentPlayer}`)) || [];
    let fullList = wordList.concat(customWords);

    let wrongOptions = fullList.filter(w => w.english.toLowerCase() !== currentWord.english.toLowerCase());
    wrongOptions.sort(() => Math.random() - 0.5);
    let distractors = wrongOptions.slice(0, 3);

    let options = [currentWord, ...distractors];
    options.sort(() => Math.random() - 0.5);

    options.forEach(opt => {
        let btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt.english;
        btn.onclick = () => checkChoiceAnswer(btn, opt.english);
        choiceArea.appendChild(btn);
    });
}

function speakWord() {
    let textToSpeak = currentWord.english.replace(/^(a |an |the |to )/i, '').replace(/\([^)]*\)/g, '').trim();
    if (!textToSpeak) return;

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); 
        let utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'en-US'; 
        utterance.rate = 0.85;    

        let voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            let preferredVoice = voices.find(v => v.lang === 'en-US' && (v.name.includes('Natural') || v.name.includes('Siri') || v.name.includes('Google') || v.name.includes('Samantha')));
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            } else {
                let enVoice = voices.find(v => v.lang === 'en-US' || v.lang.startsWith('en'));
                if (enVoice) utterance.voice = enVoice;
            }
        }
        window.speechSynthesis.speak(utterance);
    }
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function() {
        window.speechSynthesis.getVoices();
    };
}

function checkAnswer() {
    const userInput = document.getElementById("englishInput").value.trim().toLowerCase();
    if (!userInput) return; 
    processResult(userInput, false);
}

function checkChoiceAnswer(clickedBtn, selectedWord) {
    const choiceArea = document.getElementById("choiceArea");
    const allBtns = choiceArea.querySelectorAll(".option-btn");
    allBtns.forEach(b => b.disabled = true);

    const correctAnswer = currentWord.english.toLowerCase();
    const isCorrect = (selectedWord.toLowerCase() === correctAnswer);

    if (isCorrect) {
        clickedBtn.classList.add("btn-correct");
    } else {
        clickedBtn.classList.add("btn-wrong");
        allBtns.forEach(b => {
            if (b.innerText.toLowerCase() === correctAnswer) {
                b.classList.add("btn-correct");
            }
        });
    }

    processResult(selectedWord, true);
}

function processResult(userInput, isChoiceMode) {
    const correctAnswer = currentWord.english.toLowerCase();
    const correctClean = correctAnswer.replace(/^(a |an |the |to )/i, '').replace(/\([^)]*\)/g, '').trim();

    const feedback = document.getElementById("feedbackMsg");
    let playerRecord = getPlayerRecord();
    let isCorrect = (userInput.toLowerCase() === correctAnswer || userInput.toLowerCase() === correctClean);

    if (isCorrect) {
        feedback.innerText = "✨ 答對了！太厲害了！";
        feedback.className = "feedback correct";
        playerRecord.score += 10;
        
        bunnySay("太棒了！答對囉！🎉");

        if (playerRecord.mistakes[correctAnswer]) {
            playerRecord.mistakes[correctAnswer].count -= 1;
            if (playerRecord.mistakes[correctAnswer].count <= 0) {
                delete playerRecord.mistakes[correctAnswer]; 
            }
        }
    } else {
        feedback.innerText = `❌ 正確單字: ${currentWord.english}`;
        feedback.className = "feedback wrong";
        
        bunnySay("沒關係，再試一次！💪");

        if (!playerRecord.mistakes[correctAnswer]) {
            playerRecord.mistakes[correctAnswer] = { ...currentWord, count: 1 };
        } else {
            playerRecord.mistakes[correctAnswer].count += 1;
        }
    }

    if (currentWord.sentence) {
        document.getElementById("sentenceHint").innerText = currentWord.sentence;
    }

    savePlayerRecord(playerRecord);
    updateScoreBoard();
    checkBossAvailable();

    if (!isChoiceMode) {
        document.getElementById("englishInput").disabled = true;
        document.getElementById("submitBtn").style.display = "none";
    }

    let autoNext = document.getElementById("autoNext").checked;

    if (autoNext) {
        let delay = isCorrect ? 1500 : 3500;
        setTimeout(() => {
            if(isBossMode) bossWordList = Object.values(getPlayerRecord().mistakes);
            nextQuestion();
        }, delay);
    } else {
        document.getElementById("nextBtn").style.display = "inline-block";
        if(isBossMode) bossWordList = Object.values(getPlayerRecord().mistakes);
    }
}

function handleEnter(event) {
    if (event.key === "Enter") {
        if (document.getElementById("nextBtn").style.display === "inline-block") {
            nextQuestion();
        } else if (document.getElementById("submitBtn").style.display === "inline-block") {
            checkAnswer();
        }
    }
}

function getPlayerRecord() {
    let data = localStorage.getItem(`SpellingHero_${currentPlayer}`);
    return data ? JSON.parse(data) : { score: 0, mistakes: {} };
}
function savePlayerRecord(data) { localStorage.setItem(`SpellingHero_${currentPlayer}`, JSON.stringify(data)); }
function updateScoreBoard() { document.getElementById("score").innerText = getPlayerRecord().score; }

function checkBossAvailable() {
    let mistakes = Object.keys(getPlayerRecord().mistakes).length;
    const bossBtn = document.getElementById("bossBtn");
    if (mistakes >= 3 && !isBossMode) {
        bossBtn.style.display = "inline-block";
        bossBtn.innerText = `👿 挑戰魔王 (${mistakes}題)`;
    } else { bossBtn.style.display = "none"; }
}

function startBossBattle() {
    isBossMode = true;
    bossWordList = Object.values(getPlayerRecord().mistakes);
    alert("⚔️ 魔王戰開始！");
    bunnySay("魔王戰開始！加油！🔥");
    nextQuestion();
}

function exportMistakes() {
    let playerRecord = getPlayerRecord();
    let mistakes = Object.values(playerRecord.mistakes);
    if (mistakes.length === 0) { alert("🎉 太棒了！目前沒有常錯單字喔！"); return; }
    
    let csvContent = "\uFEFF英文單字,詞性,中文意思,例句,錯誤次數\n";
    mistakes.sort((a, b) => b.count - a.count);
    
    mistakes.forEach(word => {
        let tag = getDetailedPOS(word.english, word.chinese).replace("📌", "").trim();
        let safeEnglish = `"${word.english}"`;
        let safeTag = `"${tag}"`;
        let safeChinese = `"${word.chinese}"`;
        let safeSentence = word.sentence ? `"${word.sentence.replace(/"/g, '""')}"` : `""`; 
        csvContent += `${safeEnglish},${safeTag},${safeChinese},${safeSentence},${word.count}\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${currentPlayer}_錯題本.csv`;
    link.click();
}

function parseCSVRow(str) {
    let arr = [], quote = false, cell = '';
    for (let c = 0; c < str.length; c++) {
        let cc = str[c], nc = str[c+1];
        if (cc === '"' && quote && nc === '"') { cell += '"'; ++c; continue; }
        if (cc === '"') { quote = !quote; continue; }
        if (cc === ',' && !quote) { arr.push(cell); cell = ''; continue; }
        cell += cc;
    }
    if (cell !== undefined) arr.push(cell);
    return arr;
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        const rows = text.split('\n');
        let newWords = [];
        let engIdx = 0, chiIdx = 1, senIdx = 2; 
        
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i].trim();
            if (!row) continue;
            
            const cols = parseCSVRow(row);
            if (i === 0 && cols.includes("英文單字")) {
                engIdx = cols.indexOf("英文單字");
                chiIdx = cols.indexOf("中文意思");
                let sIdx = cols.indexOf("例句");
                if(sIdx !== -1) senIdx = sIdx;
                continue;
            }
            
            if (cols.length >= 2) {
                let eng = cols[engIdx] ? cols[engIdx].trim() : "";
                let chi = cols[chiIdx] ? cols[chiIdx].trim() : "";
                let sen = cols[senIdx] ? cols[senIdx].trim() : ""; 
                
                if (eng && chi && eng !== "英文單字" && eng !== "english") {
                    newWords.push({ english: eng, chinese: chi, sentence: sen });
                }
            }
        }
        
        if (newWords.length > 0) {
            let existingCustomWords = JSON.parse(localStorage.getItem(`SpellingHero_CustomWords_${currentPlayer}`)) || [];
            existingCustomWords = existingCustomWords.concat(newWords);
            localStorage.setItem(`SpellingHero_CustomWords_${currentPlayer}`, JSON.stringify(existingCustomWords));
            
            document.getElementById("endIdx").value = wordList.length + existingCustomWords.length;
            document.getElementById("uploadStatus").innerText = `✅ 成功擴充 ${newWords.length} 個生字與例句！`;
            event.target.value = ''; 
        } else {
            alert("找不到單字，請確保 CSV 格式正確！");
        }
    };
    reader.readAsText(file, "UTF-8");
}

// ================== 單字解析視窗控制 ==================
function showWordInfo() {
    document.getElementById('infoTitle').innerText = `【 ${currentWord.english} 】 解析`;
    document.getElementById('infoSynonyms').innerText = currentWord.synonyms || "暫無資料";
    document.getElementById('infoAntonyms').innerText = currentWord.antonyms || "暫無資料";
    document.getElementById('infoConfused').innerText = currentWord.confused || "暫無資料";
    document.getElementById('infoModal').style.display = "flex";
}

function closeWordInfo() {
    document.getElementById('infoModal').style.display = "none";
}

// ================== AI 提示詞視窗控制 ==================
function openPromptModal() {
    document.getElementById("promptModal").style.display = "flex";
}
function closePromptModal() {
    document.getElementById("promptModal").style.display = "none";
}
function copyPrompt() {
    const textToCopy = document.getElementById("aiPromptText");
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999); // 手機版相容
    document.execCommand("copy");
    alert("✅ 提示詞已複製！可以貼給 AI 囉！");
}

// ================== 單字挑選器 (自動分群版) ==================
function openWordSelector() {
    const modal = document.getElementById("wordSelectorModal");
    const container = document.getElementById("wordListContainer");
    container.innerHTML = ""; 
    
    let customWords = JSON.parse(localStorage.getItem(`SpellingHero_CustomWords_${currentPlayer}`)) || [];
    let fullList = wordList.concat(customWords);

    let currentInput = document.getElementById("customIdx").value.trim();
    let selectedIndices = new Set();
    if (currentInput !== "") {
        let parts = currentInput.split(',');
        for (let part of parts) {
            part = part.trim();
            if (part.includes('-')) {
                let bounds = part.split('-');
                if (bounds.length >= 2) {
                    let s = parseInt(bounds[0]);
                    let e = parseInt(bounds[1]);
                    if (!isNaN(s) && !isNaN(e)) {
                        let min = Math.min(s, e);
                        let max = Math.max(s, e);
                        for (let i = min; i <= max; i++) selectedIndices.add(i);
                    }
                }
            } else {
                let val = parseInt(part);
                if (!isNaN(val)) selectedIndices.add(val);
            }
        }
    }

    // 將單字依據 (P.x) 自動分群
    let grouped = {};
    fullList.forEach((word, index) => {
        let displayNum = index + 1;
        word._displayNum = displayNum; 
        
        let pageName = "其他 / 未分類";
        if (word.chinese) {
            const match = word.chinese.match(/\(P\.(\d+)\)/i);
            if (match) pageName = `📄 第 ${match[1]} 頁`;
        }

        if (!grouped[pageName]) grouped[pageName] = [];
        grouped[pageName].push(word);
    });

    // 渲染分群結果到畫面上
    for (let page in grouped) {
        let header = document.createElement("div");
        header.style.backgroundColor = "#dfe6e9";
        header.style.padding = "8px 10px";
        header.style.marginTop = "10px";
        header.style.fontWeight = "bold";
        header.style.borderRadius = "4px";
        header.style.color = "#2d3436";
        header.innerText = page;
        container.appendChild(header);

        grouped[page].forEach(word => {
            let displayNum = word._displayNum;
            let div = document.createElement("div");
            div.className = "word-item";
            
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = "word_cb_" + displayNum;
            checkbox.value = displayNum;
            checkbox.className = "word-checkbox";
            
            if (selectedIndices.has(displayNum)) checkbox.checked = true;
            
            let tag = getDetailedPOS(word.english, word.chinese);
            let label = document.createElement("label");
            label.htmlFor = "word_cb_" + displayNum;
            label.innerHTML = `第 ${displayNum} 題：<span style="color:#0984e3; font-weight:bold;">${tag}</span> <b>${word.english}</b> (${word.chinese})`;
            
            div.appendChild(checkbox);
            div.appendChild(label);
            container.appendChild(div);
        });
    }
    
    modal.style.display = "flex";
}

function closeWordSelector() {
    document.getElementById("wordSelectorModal").style.display = "none";
}

function toggleSelectAll(source) {
    let checkboxes = document.querySelectorAll('.word-checkbox');
    checkboxes.forEach(cb => cb.checked = source.checked);
}

function confirmWordSelection() {
    let checkboxes = document.querySelectorAll('.word-checkbox:checked');
    let selected = [];
    checkboxes.forEach(cb => selected.push(cb.value));
    
    document.getElementById("customIdx").value = selected.join(", ");
    closeWordSelector();
    
    if (document.getElementById("gameArea").style.display === "block") {
        nextQuestion();
    }
}

function bunnySay(message) {
    const speechBubble = document.getElementById("bunnySpeech");
    const bunnyImg = document.getElementById("bunnyImg");
    const bunnyAvatar = document.getElementById("bunnyAvatar");

    if (speechBubble) speechBubble.innerText = message;
    if (bunnyImg && bunnyAvatar) {
        bunnyImg.src = "IMG_2596.png";
        bunnyAvatar.classList.add("bunny-talking");
        setTimeout(() => {
            bunnyImg.src = "IMG_2597.png";
            bunnyAvatar.classList.remove("bunny-talking");
        }, 2500);
    }
}

function bunnyGreet() {
    const greetings = [
        "你做得超棒的！繼續加油！",
        "我是你的拼字小助手！",
        "今天也要把單字全部答對喔！",
        "累了的話要記得休息一下喔～"
    ];
    bunnySay(greetings[Math.floor(Math.random() * greetings.length)]);
}
