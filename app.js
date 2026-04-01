// 💡 기본 제공할 고교 수준 필수 영단어 100개
const defaultHighSchoolCards = [
    { word: "abandon", meaning: "버리다, 포기하다" }, { word: "abolish", meaning: "폐지하다" },
    { word: "absorb", meaning: "흡수하다" }, { word: "abstract", meaning: "추상적인" },
    { word: "absurd", meaning: "터무니없는" }, { word: "abuse", meaning: "남용하다, 학대하다" },
    { word: "accelerate", meaning: "가속하다" }, { word: "accept", meaning: "받아들이다" },
    { word: "access", meaning: "접근, 접근하다" }, { word: "accommodate", meaning: "수용하다" },
    { word: "accompany", meaning: "동반하다" }, { word: "accomplish", meaning: "성취하다" },
    { word: "accumulate", meaning: "축적하다" }, { word: "accurate", meaning: "정확한" },
    { word: "achieve", meaning: "달성하다" }, { word: "acknowledge", meaning: "인정하다" },
    { word: "acquire", meaning: "습득하다, 얻다" }, { word: "adequate", meaning: "적절한, 충분한" },
    { word: "adjust", meaning: "조정하다, 적응하다" }, { word: "administer", meaning: "관리하다, 투여하다" },
    { word: "admire", meaning: "존경하다, 감탄하다" }, { word: "admit", meaning: "인정하다, 입장을 허락하다" },
    { word: "adolescent", meaning: "청소년, 청소년기의" }, { word: "adopt", meaning: "채택하다, 입양하다" },
    { word: "advance", meaning: "전진, 발전하다" }, { word: "advantage", meaning: "이점, 유리함" },
    { word: "affect", meaning: "영향을 미치다" }, { word: "afford", meaning: "~할 여유가 있다" },
    { word: "aggressive", meaning: "공격적인, 적극적인" }, { word: "agriculture", meaning: "농업" },
    { word: "alter", meaning: "변경하다, 바꾸다" }, { word: "alternative", meaning: "대안, 대체의" },
    { word: "altitude", meaning: "고도, 높이" }, { word: "ambiguous", meaning: "애매모호한" },
    { word: "analyze", meaning: "분석하다" }, { word: "ancestor", meaning: "조상, 선조" },
    { word: "animate", meaning: "생기를 불어넣다" }, { word: "annoy", meaning: "짜증나게 하다" },
    { word: "anticipate", meaning: "예상하다, 기대하다" }, { word: "anxiety", meaning: "불안, 걱정" },
    { word: "apologize", meaning: "사과하다" }, { word: "apparent", meaning: "분명한, 명백한" },
    { word: "appeal", meaning: "호소하다, 매력" }, { word: "apply", meaning: "적용하다, 지원하다" },
    { word: "appreciate", meaning: "감사하다, 진가를 알아보다" }, { word: "approach", meaning: "접근하다" },
    { word: "appropriate", meaning: "적절한" }, { word: "approve", meaning: "승인하다, 찬성하다" },
    { word: "approximate", meaning: "대략의, 비슷해지다" }, { word: "architect", meaning: "건축가" },
    { word: "artificial", meaning: "인공의, 인위적인" }, { word: "aspect", meaning: "측면, 양상" },
    { word: "aspire", meaning: "열망하다" }, { word: "assemble", meaning: "모으다, 조립하다" },
    { word: "assess", meaning: "평가하다" }, { word: "assign", meaning: "할당하다, 배정하다" },
    { word: "assist", meaning: "돕다" }, { word: "associate", meaning: "연관시키다, 동료" },
    { word: "assume", meaning: "가정하다, (책임을) 떠맡다" }, { word: "assure", meaning: "장담하다, 보장하다" },
    { word: "attach", 강ening: "붙이다, 첨부하다" }, { word: "attain", meaning: "달성하다, 이루다" },
    { word: "attempt", meaning: "시도, 시도하다" }, { word: "attend", meaning: "참석하다, 주의를 기울이다" },
    { word: "attitude", meaning: "태도, 자세" }, { word: "attract", meaning: "끌어당기다, 매혹하다" },
    { word: "attribute", meaning: "~의 탓으로 돌리다, 속성" }, { word: "audience", meaning: "청중, 관객" },
    { word: "authority", meaning: "권위, 권한" }, { word: "available", meaning: "이용 가능한" },
    { word: "average", meaning: "평균, 평균의" }, { word: "avoid", meaning: "피하다" },
    { word: "aware", meaning: "알고 있는, 인식하는" }, { word: "awkward", meaning: "어색한, 서투른" },
    { word: "ban", meaning: "금지하다, 금지" }, { word: "barrier", meaning: "장벽, 장애물" },
    { word: "behavior", meaning: "행동, 태도" }, { word: "benefit", meaning: "이익, 혜택" },
    { word: "betray", meaning: "배신하다" }, { word: "bias", meaning: "편견, 편향" },
    { word: "blame", meaning: "비난하다, ~의 탓으로 돌리다" }, { word: "bless", meaning: "축복하다" },
    { word: "blind", meaning: "눈먼, 맹목적인" }, { word: "border", meaning: "국경, 경계" },
    { word: "bother", meaning: "괴롭히다, 신경 쓰이게 하다" }, { word: "brief", meaning: "짧은, 간결한" },
    { word: "brilliant", meaning: "훌륭한, 눈부신" }, { word: "budget", meaning: "예산" },
    { word: "burden", meaning: "부담, 짐" }, { word: "calculate", meaning: "계산하다" },
    { word: "candidate", meaning: "후보자" }, { word: "capacity", meaning: "용량, 능력" },
    { word: "capture", meaning: "포획하다, 사로잡다" }, { word: "career", meaning: "직업, 경력" },
    { word: "casual", meaning: "우연한, 평상복의" }, { word: "cause", meaning: "원인, 야기하다" },
    { word: "caution", meaning: "조심, 경고" }, { word: "cease", meaning: "그만두다, 중지하다" },
    { word: "celebrate", meaning: "기념하다, 축하하다" }, { word: "challenge", meaning: "도전, 이의를 제기하다" }
];
// 💡 [추가] 수능 고난도 심화 단어 100개
const csatAdvancedCards = [
    { word: "paradox", meaning: "역설, 자기모순" }, { word: "inevitable", meaning: "피할 수 없는" },
    { word: "compromise", meaning: "타협, 절충" }, { word: "elaborate", meaning: "정교한, 자세히 설명하다" },
    { word: "substantial", meaning: "상당한, 실질적인" }, { word: "vulnerable", meaning: "취약한, 상처받기 쉬운" },
    { word: "ambivalent", meaning: "반대 감정이 양립하는, 모호한" }, { word: "deteriorate", meaning: "악화되다" },
    { word: "spontaneous", meaning: "자발적인, 즉흥적인" }, { word: "prevalent", meaning: "일반적인, 널리 퍼진" },
    { word: "legitimate", meaning: "합법적인, 정당한" }, { word: "altruism", meaning: "이타주의" },
    { word: "redundant", meaning: "불필요한, 중복된" }, { word: "coherent", meaning: "일관성 있는, 논리적인" },
    { word: "stagnant", meaning: "고여 있는, 침체된" }, { word: "volatile", meaning: "변덕스러운, 휘발성의" },
    { word: "empathy", meaning: "공감, 감정이입" }, { word: "scrutinize", meaning: "세심히 살피다" },
    { word: "versatile", meaning: "다재다능한, 다용도의" }, { word: "meticulous", meaning: "꼼꼼한, 세심한" },
    { word: "precarious", meaning: "위태로운, 불확실한" }, { word: "insatiable", meaning: "만족할 줄 모르는" },
    { word: "superficial", meaning: "피상적인, 겉핥기식의" }, { word: "unprecedented", meaning: "전례 없는" },
    { word: "discrepancy", meaning: "차이, 불일치" }, { word: "incentive", meaning: "장려책, 보상물" },
    { word: "advocate", meaning: "지지하다, 옹호자" }, { word: "authentic", meaning: "진본인, 정확한" },
    { word: "cognitive", meaning: "인식의, 인지적인" }, { word: "deficit", meaning: "적자, 부족액" },
    { word: "exclusive", meaning: "독점적인, 배타적인" }, { word: "fluctuate", meaning: "변동하다, 오르내리다" },
    { word: "imply", meaning: "암시하다, 의미하다" }, { word: "inevitable", meaning: "불가피한" },
    { word: "innovative", meaning: "혁신적인" }, { word: "neutral", meaning: "중립적인" },
    { word: "potential", meaning: "잠재적인, 가능성" }, { word: "precise", meaning: "정확한, 정밀한" },
    { word: "relevant", meaning: "관련된, 적절한" }, { word: "reliable", meaning: "신뢰할 수 있는" },
    { word: "sophisticated", meaning: "정교한, 세련된" }, { word: "stable", meaning: "안정된" },
    { word: "strategic", meaning: "전략적인" }, { word: "sufficient", meaning: "충분한" },
    { word: "sustain", meaning: "유지하다, 지탱하다" }, { word: "ultimate", meaning: "궁극적인, 최후의" },
    { word: "valid", meaning: "유효한, 타당한" }, { word: "variable", meaning: "변하기 쉬운, 변수" },
    { word: "visionary", meaning: "선견지명이 있는" }, { word: "adequate", meaning: "충분한, 적절한" },
    { word: "alternative", meaning: "대안, 양자택일" }, { word: "circumstance", meaning: "환경, 상황" },
    { word: "compensate", meaning: "보상하다, 보충하다" }, { word: "component", meaning: "구성 요소" },
    { word: "considerable", meaning: "상당한, 적지 않은" }, { word: "constant", meaning: "끊임없는, 불변의" },
    { word: "constraint", meaning: "제약, 제한" }, { word: "contribution", meaning: "기여, 공헌" },
    { word: "convention", meaning: "관습, 전형" }, { word: "coordination", meaning: "조정, 조화" },
    { word: "core", meaning: "핵심, 중심" }, { word: "corporate", meaning: "기업의, 공동의" },
    { word: "correspond", meaning: "일치하다, 부합하다" }, { word: "criteria", meaning: "기준, 표준" },
    { word: "deduction", meaning: "추론, 연역" }, { word: "demonstrate", meaning: "입증하다, 보여주다" },
    { word: "disproportionate", meaning: "불균형의" }, { word: "dominant", meaning: "지배적인, 우세한" },
    { word: "emphasis", meaning: "강조, 역점" }, { word: "ensure", meaning: "보장하다, 확실히 하다" },
    { word: "excluded", meaning: "제외된" }, { word: "framework", meaning: "뼈대, 체제" },
    { word: "funds", meaning: "자금, 기금" }, { word: "illustrate", meaning: "설명하다, 삽화를 넣다" },
    { word: "immigration", meaning: "이민, 이주" }, { word: "implies", meaning: "암시한다" },
    { word: "initial", meaning: "처음의, 초기의" }, { word: "instance", meaning: "사례, 경우" },
    { word: "interaction", meaning: "상호작용" }, { word: "interpretation", meaning: "해석, 통역" },
    { word: "investigation", meaning: "조사, 수사" }, { word: "justification", meaning: "정당화" },
    { word: "layer", meaning: "층, 겹" }, { word: "link", meaning: "연결, 관계" },
    { word: "location", meaning: "위치, 장소" }, { word: "maximum", meaning: "최대, 최고" },
    { word: "minorities", meaning: "소수 집단" }, { word: "negative", meaning: "부정적인" },
    { word: "outcomes", meaning: "결과, 성과" }, { word: "partnership", meaning: "동반자 관계" },
    { word: "philosophy", meaning: "철학" }, { word: "physical", meaning: "육체의, 물리적인" },
    { word: "proportion", meaning: "비율, 부분" }, { word: "published", meaning: "출판된" },
    { word: "reaction", meaning: "반응, 반작용" }, { word: "registered", meaning: "등록된" },
    { word: "reliance", meaning: "의존, 신뢰" }, { word: "resolution", meaning: "해상도, 결심" },
    { word: "scheme", meaning: "계획, 책략" }, { word: "sequence", meaning: "순서, 연속" }
];

// 💡 [추가] 학술/토플 필수 영단어 100개
const academicCards = [
    { word: "abstract", meaning: "개요, 추상적인" }, { word: "acknowledge", meaning: "인정하다, 감사를 표하다" },
    { word: "aggregate", meaning: "합계, 총액" }, { word: "allocate", meaning: "할당하다, 배분하다" },
    { word: "assign", meaning: "맡기다, 배정하다" }, { word: "attach", meaning: "첨부하다, 붙이다" },
    { word: "author", meaning: "저자, 필자" }, { word: "bond", meaning: "유대, 결속" },
    { word: "brief", meaning: "잠시의, 간단한" }, { word: "capable", meaning: "능력 있는" },
    { word: "cite", meaning: "인용하다" }, { word: "cooperate", meaning: "협력하다" },
    { word: "discrimination", meaning: "차별, 식별" }, { word: "display", meaning: "전시하다, 드러내다" },
    { word: "diverse", meaning: "다양한" }, { word: "domain", meaning: "영역, 분야" },
    { word: "edit", meaning: "수정하다, 편집하다" }, { word: "enhance", meaning: "향상시키다" },
    { word: "estate", meaning: "재산, 토지" }, { word: "exceed", meaning: "넘어서다, 초과하다" },
    { word: "explicit", meaning: "명백한, 노골적인" }, { word: "federal", meaning: "연방의" },
    { word: "fees", meaning: "요금, 수수료" }, { word: "flexible", meaning: "유연한, 융통성 있는" },
    { word: "furthermore", meaning: "게다가, 더욱이" }, { word: "gender", meaning: "성별" },
    { word: "ignored", meaning: "무시된" }, { word: "incentive", meaning: "동기, 장려금" },
    { word: "incidence", meaning: "발생 정도" }, { word: "incorporate", meaning: "포함하다, 설립하다" },
    { word: "index", meaning: "지표, 색인" }, { word: "inhibition", meaning: "억제, 어색함" },
    { word: "initiatives", meaning: "주도권, 계획" }, { word: "input", meaning: "입력, 조언" },
    { word: "instructions", meaning: "지시, 설명서" }, { word: "intelligence", meaning: "지능, 정보" },
    { word: "interval", meaning: "간격, 사이" }, { word: "lecture", meaning: "강의, 강연" },
    { word: "liberal", meaning: "자유주의의, 관대한" }, { word: "licence", meaning: "면허, 허가" },
    { word: "logic", meaning: "논리, 타당성" }, { word: "margin", meaning: "여백, 차이" },
    { word: "mental", meaning: "정신의, 마음의" }, { word: "modify", meaning: "수정하다, 바꾸다" },
    { word: "monitor", meaning: "감시하다, 관찰하다" }, { word: "network", meaning: "망, 인맥" },
    { word: "notion", meaning: "개념, 관념" }, { word: "objective", meaning: "목표, 객관적인" },
    { word: "orientation", meaning: "방향, 오리엔테이션" }, { word: "perspective", meaning: "관점, 시각" },
    { word: "precise", meaning: "정확한, 정밀한" }, { word: "prime", meaning: "주요한, 최고의" },
    { word: "psychology", meaning: "심리학" }, { word: "pursue", meaning: "추구하다, 밀고 나가다" },
    { word: "ratio", meaning: "비율" }, { word: "rejected", meaning: "거절된" },
    { word: "revenue", meaning: "수익, 세입" }, { word: "stability", meaning: "안정, 안정성" },
    { word: "styles", meaning: "방식, 스타일" }, { word: "substitution", meaning: "대체, 대입" },
    { word: "sustainable", meaning: "지속 가능한" }, { word: "symbolic", meaning: "상징적인" },
    { word: "target", meaning: "목표, 대상" }, { word: "transit", meaning: "수송, 통과" },
    { word: "trend", meaning: "추세, 경향" }, { word: "version", meaning: "판, 버전" },
    { word: "welfare", meaning: "복지, 후생" }, { word: "whereas", meaning: "반면에" },
    { word: "equivalent", meaning: "동등한, 맞먹는" }, { word: "evolution", meaning: "진화, 발전" },
    { word: "exposure", meaning: "노출, 폭로" }, { word: "external", meaning: "외부의, 밖의" },
    { word: "facilitate", meaning: "가능하게 하다, 용이하게 하다" }, { word: "fundamental", meaning: "근본적인" },
    { word: "generated", meaning: "생성된" }, { word: "generation", meaning: "세대, 발생" },
    { word: "hypothesis", meaning: "가설" }, { word: "identical", meaning: "동일한" },
    { word: "ideology", meaning: "이데올로기, 관념" }, { word: "ignorance", meaning: "무지, 무식" },
    { word: "image", meaning: "이미지, 인상" }, { word: "implementation", meaning: "이행, 실행" },
    { word: "implications", meaning: "영향, 함축" }, { word: "incentives", meaning: "장려책" },
    { word: "index", meaning: "지표, 지수" }, { word: "infrastructure", meaning: "사회 기반 시설" },
    { word: "inspection", meaning: "점검, 검사" }, { word: "instability", meaning: "불안정" },
    { word: "integration", meaning: "통합" }, { word: "internal", meaning: "내부의" },
    { word: "interpretation", meaning: "해석" }, { word: "intervals", meaning: "간격들" },
    { word: "investigation", meaning: "수사, 조사" }, { word: "investment", meaning: "투자" },
    { word: "isolation", meaning: "고립, 격리" }, { word: "journal", meaning: "학술지, 일기" },
    { word: "judgment", meaning: "판단, 심판" }, { word: "label", meaning: "라벨, 상표" },
    { word: "liberal", meaning: "자유로운" }, { word: "licence", meaning: "자격증" }
];

// 💡 초기화 로직 (새로운 v3 키를 사용하여 단어장 3개를 모두 세팅)
let appData = JSON.parse(localStorage.getItem('vocabAppData_v3'));

if (!appData || appData.length === 0) {
    appData = [
        {
            id: Date.now(),
            title: "고교 필수 영단어 100",
            cards: defaultHighSchoolCards
        },
        {
            id: Date.now() + 1,
            title: "수능 심화 고득점 100",
            cards: csatAdvancedCards
        },
        {
            id: Date.now() + 2,
            title: "학술/토플 필수 100",
            cards: academicCards
        }
    ];
    localStorage.setItem('vocabAppData_v3', JSON.stringify(appData));
}

// 이후의 코드는 기존과 동일하게 유지...

let activeDeckId = appData[0]?.id || null;
let studyQueue = [];
let unknownQueue = [];
let queueIndex = 0;

window.onload = function() {
    renderDeckSelect();
    if(activeDeckId) handleDeckSelect(activeDeckId);
};

// --- 공통 기능 ---
function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerText = message;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

function saveData() {
    localStorage.setItem('vocabAppData_v2', JSON.stringify(appData));
}

// --- 사이드바 및 탭 전환 ---
function toggleSidebar() {
    const rightSidebar = document.getElementById('rightSidebar');
    const toggleBtn = document.getElementById('sidebarToggle');
    rightSidebar.classList.toggle('open');
    toggleBtn.innerHTML = rightSidebar.classList.contains('open') ? '&#62;' : '&#60;'; 
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(tabId + 'Section').classList.add('active');

    if(window.innerWidth <= 768) toggleSidebar(); 
    if(tabId === 'study') initStudyCycle(); 
    if(tabId === 'quiz') resetQuizView();
}

// --- 단어장(Deck) 관리 ---
function openDeckModal() {
    document.getElementById('deckModal').classList.add('show');
    renderModalDeckList();
}
function closeDeckModal(event) {
    if (event && event.target !== document.getElementById('deckModal')) return;
    document.getElementById('deckModal').classList.remove('show');
    document.getElementById('newDeckName').value = '';
}

function renderDeckSelect() {
    const select = document.getElementById('deckSelect');
    select.innerHTML = '';
    appData.forEach(deck => {
        const option = document.createElement('option');
        option.value = deck.id;
        option.innerText = `${deck.title} (${deck.cards.length}단어)`;
        if(deck.id == activeDeckId) option.selected = true;
        select.appendChild(option);
    });
}

function renderModalDeckList() {
    const listDiv = document.getElementById('modalDeckList');
    listDiv.innerHTML = '';
    appData.forEach(deck => {
        listDiv.innerHTML += `
            <div class="modal-deck-item">
                <span>${deck.title}</span>
                <button class="btn-delete" style="padding:4px 8px; font-size:0.8rem; background:transparent;" onclick="deleteDeck(${deck.id})">삭제</button>
            </div>
        `;
    });
}

function handleDeckSelect(deckId) {
    activeDeckId = parseInt(deckId);
    updateMainView();
    initStudyCycle();
    resetQuizView();
}

function addDeck() {
    const nameInput = document.getElementById('newDeckName');
    const title = nameInput.value.trim();
    if (!title) return showToast('단어장 이름을 입력하세요.');

    const newDeck = { id: Date.now(), title: title, cards: [] };
    appData.push(newDeck);
    saveData();
    closeDeckModal();
    renderDeckSelect();
    handleDeckSelect(newDeck.id);
    showToast(`'${title}' 단어장이 생성되었습니다.`);
}

function deleteDeck(deckId) {
    if(!confirm('단어장을 삭제하시겠습니까?')) return;
    appData = appData.filter(deck => deck.id !== deckId);
    if(activeDeckId === deckId) activeDeckId = appData[0]?.id || null;
    saveData();
    renderDeckSelect();
    renderModalDeckList();
    if(activeDeckId) handleDeckSelect(activeDeckId);
    else { updateMainView(); resetQuizView(); }
}

// --- 단어(Card) 관리 ---
function updateMainView() {
    const activeDeck = appData.find(d => d.id === activeDeckId);
    document.getElementById('manageTitle').innerText = activeDeck ? `단어장 관리: ${activeDeck.title}` : '단어장 관리';
    
    if (!activeDeck) {
        document.getElementById('wordList').innerHTML = '';
        updateStudyCard();
        return;
    }
    renderWordList(activeDeck.cards);
}

function addWord() {
    if (!activeDeckId) return showToast('단어장을 선택하세요.');
    const word = document.getElementById('wordInput').value.trim();
    const meaning = document.getElementById('meaningInput').value.trim();
    if (!word || !meaning) return showToast('단어와 뜻을 입력하세요.');

    const activeDeck = appData.find(d => d.id === activeDeckId);
    activeDeck.cards.push({ word, meaning });
    saveData();
    
    document.getElementById('wordInput').value = '';
    document.getElementById('meaningInput').value = '';
    
    renderDeckSelect(); 
    updateMainView();
    initStudyCycle();
    showToast('단어가 추가되었습니다.');
}

function deleteWord(index) {
    const activeDeck = appData.find(d => d.id === activeDeckId);
    activeDeck.cards.splice(index, 1);
    saveData();
    renderDeckSelect();
    updateMainView();
    initStudyCycle();
}

function renderWordList(cards) {
    const listDiv = document.getElementById('wordList');
    listDiv.innerHTML = '';
    cards.forEach((item, index) => {
        listDiv.innerHTML += `
            <div class="list-item">
                <div class="list-word">${item.word}</div>
                <div class="list-meaning">${item.meaning}</div>
                <button class="btn-delete" onclick="deleteWord(${index})">삭제</button>
            </div>
        `;
    });
}

// --- 학습 로직 및 스와이프 기능 (유지) ---
function initStudyCycle() {
    const activeDeck = appData.find(d => d.id === activeDeckId);
    if (!activeDeck || activeDeck.cards.length === 0) {
        studyQueue = [];
    } else {
        studyQueue = activeDeck.cards.map((_, i) => i);
    }
    unknownQueue = [];
    queueIndex = 0;
    updateStudyCard();
}

function updateStudyCard() {
    const activeDeck = appData.find(d => d.id === activeDeckId);
    const flashcard = document.getElementById('flashcard');
    const front = document.getElementById('cardFront');
    const back = document.getElementById('cardBack');
    const progress = document.getElementById('progressText');

    flashcard.classList.remove('flipped');
    flashcard.style.transform = '';

    if (!activeDeck || studyQueue.length === 0) {
        front.innerText = "단어가 없습니다";
        back.innerText = "-";
        progress.innerText = "0 / 0";
        return;
    }

    const actualCardIndex = studyQueue[queueIndex];
    front.innerText = activeDeck.cards[actualCardIndex].word;
    back.innerText = activeDeck.cards[actualCardIndex].meaning;
    progress.innerText = `${queueIndex + 1} / ${studyQueue.length}`;
}

function handleAction(direction) {
    if (studyQueue.length === 0) return;

    const swipeContainer = document.getElementById('swipeContainer');
    const swipeBg = document.getElementById('swipeBg');
    
    swipeBg.style.transition = 'opacity 0.2s';
    swipeBg.style.background = direction === 'right' ? 'linear-gradient(to right, #f4f5f7, rgba(16, 185, 129, 0.3))' : 'linear-gradient(to left, #f4f5f7, rgba(239, 68, 68, 0.3))';
    swipeBg.style.opacity = '1';

    swipeContainer.style.transition = 'transform 0.4s ease-out';
    swipeContainer.style.transform = direction === 'right' ? 'translateX(1000px) rotate(30deg)' : 'translateX(-1000px) rotate(-30deg)';

    const currentActualIndex = studyQueue[queueIndex];
    if (direction === 'left') {
        unknownQueue.push(currentActualIndex);
    }

    setTimeout(() => {
        swipeContainer.style.transition = 'none';
        swipeContainer.style.transform = '';
        swipeBg.style.transition = 'none';
        swipeBg.style.opacity = '0';
        
        queueIndex++;

        if (queueIndex >= studyQueue.length) {
            if (unknownQueue.length > 0) {
                showToast(`1회독 완료. 틀린 ${unknownQueue.length}개 단어 복습을 시작합니다.`);
                studyQueue = [...unknownQueue];
                unknownQueue = [];
                queueIndex = 0;
            } else {
                showToast('🎉 모든 단어를 완벽히 외웠습니다!');
                const activeDeck = appData.find(d => d.id === activeDeckId);
                studyQueue = activeDeck.cards.map((_, i) => i);
                queueIndex = 0;
            }
        }
        updateStudyCard();
    }, 400);
}

const swipeContainer = document.getElementById('swipeContainer');
const flashcard = document.getElementById('flashcard');
const swipeBg = document.getElementById('swipeBg');
let isDragging = false;
let startX = 0;
let currentX = 0;

swipeContainer.addEventListener('pointerdown', (e) => {
    if (studyQueue.length === 0) return;
    isDragging = true;
    startX = e.clientX;
    currentX = startX; 
    swipeContainer.style.transition = 'none';
    swipeBg.style.transition = 'none';
    swipeContainer.setPointerCapture(e.pointerId);
});

swipeContainer.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
    const diffX = currentX - startX;
    const rotate = diffX * 0.05;
    
    swipeContainer.style.transform = `translateX(${diffX}px) rotate(${rotate}deg)`;

    const opacity = Math.min(Math.abs(diffX) / 250, 1);
    swipeBg.style.opacity = opacity;
    
    if (diffX > 0) {
        swipeBg.style.background = 'linear-gradient(to right, #f4f5f7, rgba(16, 185, 129, 0.25))';
    } else {
        swipeBg.style.background = 'linear-gradient(to left, #f4f5f7, rgba(239, 68, 68, 0.25))';
    }
});

swipeContainer.addEventListener('pointerup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    swipeContainer.releasePointerCapture(e.pointerId);
    
    const diffX = currentX - startX;

    if (Math.abs(diffX) < 15) {
        flashcard.classList.toggle('flipped');
        swipeContainer.style.transform = '';
        swipeBg.style.opacity = '0';
        return;
    }

    if (diffX > 100) {
        handleAction('right');
    } else if (diffX < -100) {
        handleAction('left');
    } else {
        swipeContainer.style.transition = 'transform 0.3s ease-out';
        swipeContainer.style.transform = '';
        swipeBg.style.transition = 'opacity 0.3s ease-out';
        swipeBg.style.opacity = '0';
    }
});


// 💡 --- 퀴즈 모드 로직 ---
let quizList = [];
let currentQuizIdx = 0;
let correctCount = 0;

function resetQuizView() {
    document.getElementById('quizSetup').style.display = 'block';
    document.getElementById('quizPlay').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
}

function startQuiz() {
    const activeDeck = appData.find(d => d.id === activeDeckId);
    if (!activeDeck || activeDeck.cards.length < 4) {
        return showToast('단어장에 단어가 최소 4개 이상 있어야 퀴즈가 가능합니다.');
    }

    // 퀴즈 문제 생성 (최대 10문제)
    let pool = [...activeDeck.cards].sort(() => Math.random() - 0.5);
    let qCount = Math.min(10, pool.length);
    quizList = [];

    for (let i = 0; i < qCount; i++) {
        let correctCard = pool[i];
        let options = [correctCard.meaning];

        // 오답 3개 무작위 추출
        let wrongPool = activeDeck.cards.filter(c => c.word !== correctCard.word).sort(() => Math.random() - 0.5);
        for(let j=0; j<3; j++) {
            if(wrongPool[j]) options.push(wrongPool[j].meaning);
        }

        // 보기 4개 셔플
        options = options.sort(() => Math.random() - 0.5); 
        quizList.push({ word: correctCard.word, answer: correctCard.meaning, options: options });
    }

    currentQuizIdx = 0;
    correctCount = 0;
    
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizPlay').style.display = 'block';
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const qData = quizList[currentQuizIdx];
    document.getElementById('quizProgressText').innerText = `${currentQuizIdx + 1} / ${quizList.length}`;
    document.getElementById('quizQuestionWord').innerText = qData.word;

    const optionsContainer = document.getElementById('quizOptionsContainer');
    optionsContainer.innerHTML = '';

    qData.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-btn';
        btn.innerText = opt;
        btn.onclick = () => handleQuizAnswer(btn, opt === qData.answer);
        optionsContainer.appendChild(btn);
    });
}

function handleQuizAnswer(selectedBtn, isCorrect) {
    // 중복 클릭 방지
    const buttons = document.querySelectorAll('.quiz-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        correctCount++;
    } else {
        selectedBtn.classList.add('wrong');
        // 정답 버튼을 찾아서 초록색으로 표시
        const qData = quizList[currentQuizIdx];
        buttons.forEach(btn => {
            if(btn.innerText === qData.answer) btn.classList.add('correct');
        });
    }

    // 1초 대기 후 다음 문제로
    setTimeout(() => {
        currentQuizIdx++;
        if (currentQuizIdx < quizList.length) {
            renderQuizQuestion();
        } else {
            showQuizResult();
        }
    }, 1000);
}

function showQuizResult() {
    document.getElementById('quizPlay').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    
    document.getElementById('quizScoreText').innerText = `결과: ${correctCount} / ${quizList.length}`;
    
    const feedback = document.getElementById('quizFeedback');
    const ratio = correctCount / quizList.length;
    if (ratio === 1) feedback.innerText = "완벽합니다! 백점이에요 🎉";
    else if (ratio >= 0.7) feedback.innerText = "아주 훌륭해요! 조금만 더 하면 완벽하겠네요.";
    else if (ratio >= 0.4) feedback.innerText = "좋아요! 복습을 조금 더 해볼까요?";
    else feedback.innerText = "괜찮아요, 학습 탭에서 다시 외워봅시다!";
}
