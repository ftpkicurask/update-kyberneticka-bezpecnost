const questions = [
    {
        question: "Aký je hlavný dôvod ochrany informačných systémov?",
        answers: [
            { text: "Zvýšenie efektivity práce", correct: false},
            { text: "Minimalizácia rizík a ochrana údajov", correct: true},
            { text: "Zabezpečenie rýchleho prístupu k údajom", correct: false},
            { text: "Redukcia nákladov na IT služby", correct: false},   
        ]
    },
    {
        question: "Ktoré tri princípy zahŕňa CIA triáda?",
        answers: [
            { text: "Autentifikácia, autorizácia, dostupnosť", correct: false},
            { text: "Dôvernosť, šifrovanie, integrita", correct: false},
            { text: "Dôvernosť, integrita, dostupnosť", correct: true},
            { text: "Autorizácia, integrita, pravidlá", correct: false},
        ]
    },
    {
        question: "Ktorý z nasledujúcich pojmov označuje prístupové práva používateľov k systémom?",
        answers: [
            { text: "Autentifikácia", correct: false},
            { text: "Autorizácia", correct: true},
            { text: "Šifrovanie", correct: false},
            { text: "Zálohovanie", correct: false},
        ]
    },
    {
        question: "Aký typ hrozby predstavujú slabé heslá zamestnancov?",
        answers: [
            { text: "Vonkajšiu hrozbu", correct: false},
            { text: "Fyzickú hrozbu", correct: false},
            { text: "Vnútornú hrozbu", correct: true},
            { text: "Technologickú hrozbu", correct: false},
        ]
    },
    {
        question: "Ktorá z možností predstavuje fyzické zabezpečenie informačných systémov?",
        answers: [
            { text: "Zabezpečenie firewallom", correct: false},
            { text: "Šifrovanie dát", correct: false},
            { text: "Zamknutie serverovej miestnosti", correct: true},
            { text: "Používanie silných hesiel", correct: false},
        ]
    },
    {
        question: "Prečo je dôležité zálohovať dáta?",
        answers: [
            { text: "Na zlepšenie výkonu systému", correct: false},
            { text: "Na ochranu pred stratou dát pri útokoch alebo haváriách", correct: true},
            { text: "Na redukciu veľkosti súborov", correct: false},
            { text: "Na zvýšenie prenosovej rýchlosti", correct: false},
        ]
    },
    {
        question: "Čo znamená phishing?",
        answers: [
            { text: "Šifrovanie citlivých údajov", correct: false},
            { text: "Podvodná metóda na získanie citlivých informácií", correct: true},
            { text: "Testovanie bezpečnosti systému", correct: false},
            { text: "Spôsob zálohovania údajov", correct: false},
        ]
    },
    {
        question: "Ktorý z týchto útokov je zameraný na nedostupnosť služieb?",
        answers: [
            { text: "Malware", correct: false},
            { text: "Phishing", correct: false},
            { text: "DoS útoky", correct: true},
            { text: "Keylogging", correct: false},
        ]
    },
    {
        question: "Čo je hlavným cieľom bezpečnostnej politiky?",
        answers: [
            { text: "Zabezpečiť, aby sa systém používal čo najefektívnejšie", correct: false},
            { text: "Stanoviť pravidlá pre ochranu dát a informačných systémov", correct: true},
            { text: "Udržať zamestnancov informovaných o najnovších technológiách", correct: false},
            { text: "Minimalizovať počet používateľov s prístupom do systému", correct: false},
        ]
    },
    {
        question: "Ktorý z nasledujúcich príkladov najlepšie reprezentuje zásadu najmenej privilegovaného prístupu?",
        answers: [
            { text: "Každý zamestnanec má prístup ku všetkým firemným súborom, aby sa zabezpečila efektivita práce", correct: false},
            { text: "Administrátori majú výhradný prístup k citlivým údajom, zatiaľ čo ostatní zamestnanci len k tým, ktoré potrebujú na svoju prácu", correct: true},
            { text: "Všetci zamestnanci majú rovnaké prístupové práva k systémom", correct: false},
            { text: "Zamestnanci môžu zdieľať svoje prihlasovacie údaje, aby mohli navzájom spolupracovať", correct: false},
        ]
    },
    {
        question: "Ktoré opatrenie je príkladom implementácie bezpečnostnej politiky vo firme?",
        answers: [
            { text: "Zamestnanci dostanú odporúčanie nepoužívať osobné zariadenia na pracovné účely", correct: false},
            { text: "Pravidelne sa vykonávajú audity a kontroly bezpečnosti informačných systémov", correct: true},
            { text: "Je povolené používať jednoduché heslá, ak si ich zamestnanci zapamätajú", correct: false},
            { text: "Prístup do systému je možný bez potreby autentifikácie", correct: false},
        ]
    },
    {
        question: "Ktorá z možností popisuje ransomware?",
        answers: [
            { text: "Softvér na ochranu pred vírusmi", correct: false},
            { text: "Útok, pri ktorom sú dáta zašifrované a za ich odblokovanie je požadované výkupné", correct: true},
            { text: "Program na monitorovanie siete", correct: false},
            { text: "Systém pre obnovu stratených údajov", correct: false},
        ]
    },
    {
        question: "Čo je najlepší spôsob, ako zabrániť phishingovým útokom?",
        answers: [
            { text: "Používať len antivírusový program", correct: false},
            { text: "Nikdy neklikať na neznáme odkazy alebo e-maily", correct: true},
            { text: "Vytvoriť zálohovanie dát", correct: false},
            { text: "Použiť šifrovanie všetkých údajov", correct: false},
        ]
    },
    {
        question: "Aký je význam vzdelávania zamestnancov v oblasti bezpečnosti?",
        answers: [
            { text: "Zvýšiť ich produktivitu", correct: false},
            { text: "Zlepšiť ich schopnosť identifikovať a reagovať na bezpečnostné hrozby", correct: true},
            { text: "Naučiť ich efektívne používať softvér", correct: false},
            { text: "Zabezpečiť, že poznajú všetky technické detaily informačných systémov", correct: false},
        ]
    },
    {
        question: "Ktorý z týchto spôsobov ochrany dát nie je šifrovací mechanizmus?",
        answers: [
            { text: "Symetrické šifrovanie", correct: false},
            { text: "Asymetrické šifrovanie", correct: false},
            { text: "Zálohovanie dát", correct: true},
            { text: "Hashovanie", correct: false},
        ]
    }     
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Ďalej";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Získal si ${score} z ${questions.
    length}!`;
    nextButton.innerHTML = "Hrať znova";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();