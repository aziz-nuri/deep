const defaultConfig = {
    quiz_title: "🌟 Kuis Akhlak & Asmaul Husna 🌟",
    instruction_text: "Pilih jawaban yang paling tepat untuk setiap pertanyaan!"
};

let config = { ...defaultConfig };

const questions = [
    {
        question: "Ketika melihat teman sekelas yang yatim tidak membawa bekal, sikap yang paling tepat adalah …",
        options: [
            "Membiarkan saja karena bukan urusan kita",
            "Membantunya tanpa membuatnya merasa malu",
            "Menertawakannya bersama teman lain",
            "Menyuruhnya meminta kepada guru"
        ],
        correct: 1
    },
    {
        question: "Perbuatan berikut yang paling menunjukkan ketakwaan kepada Allah melalui sikap kepada anak yatim adalah …",
        options: [
            "Menyumbang sekali lalu tidak peduli lagi",
            "Memberi bantuan sambil mengharapkan balasan",
            "Menolong secara tulus dan berkelanjutan",
            "Memberi hanya ketika dilihat guru"
        ],
        correct: 2
    },
    {
        question: "Jika kamu ingin mengajak teman lain untuk peduli pada anak yatim, cara yang paling baik adalah …",
        options: [
            "Memaksa mereka menyumbang",
            "Menjelaskan manfaat sedekah dan memberi contoh",
            "Mengeluh bahwa hanya kamu yang peduli",
            "Menghukum mereka yang tidak mau"
        ],
        correct: 1
    },
    {
        question: "Tujuan utama Islam memerintahkan umatnya menyayangi anak yatim adalah …",
        options: [
            "Agar masyarakat menghormati kita",
            "Agar anak yatim merasa dihargai dan tidak tersisih",
            "Agar kita dianggap dermawan",
            "Agar mendapat hadiah dari sekolah"
        ],
        correct: 1
    },
    {
        question: "Saat mengetahui ada anak yatim yang sering dibully, tindakan paling tepat adalah …",
        options: [
            "Diam saja karena bukan masalah kita",
            "Ikut membully agar tidak dianggap berbeda",
            "Melaporkan ke guru dan memberi dukungan",
            "Menasihati dari jauh tanpa menolong"
        ],
        correct: 2
    },
    {
        question: "Rasulullah SAW sangat menyayangi anak yatim. Teladan ini sebaiknya kita tiru dengan cara …",
        options: [
            "Membantu hanya saat acara tertentu",
            "Menyayangi semua teman tanpa membeda-bedakan",
            "Menunggu perintah orang tua dulu",
            "Hanya membantu anak yatim yang kaya"
        ],
        correct: 1
    },
    {
        question: "Jika kamu tidak memiliki uang untuk membantu anak yatim, sikap terbaik adalah …",
        options: [
            "Tidak melakukan apa-apa",
            "Menghindarinya",
            "Membantu dengan tenaga atau perhatian",
            "Menyalahkan orang lain"
        ],
        correct: 2
    },
    {
        question: "Ketika kita memahami Asmaul Husna Al-Bashir (Yang Maha Melihat), perilaku yang seharusnya muncul adalah …",
        options: [
            "Melakukan kebaikan hanya di depan guru",
            "Berbuat baik meski tidak ada yang melihat",
            "Menyembunyikan kesalahan dari orang lain",
            "Bangga ketika dipuji"
        ],
        correct: 1
    },
    {
        question: "Seseorang percaya bahwa Allah Ar-Rahman (Maha Pengasih). Dalam kehidupan sehari-hari ia seharusnya …",
        options: [
            "Memberi hanya kepada teman dekat",
            "Menyebarkan kebaikan tanpa pilih kasih",
            "Menolong agar dipuji",
            "Menyayangi hanya jika dibalas"
        ],
        correct: 1
    },
    {
        question: "Memahami Allah Al-Alim (Maha Mengetahui) membuat kita …",
        options: [
            "Takut belajar",
            "Semangat belajar karena Allah mengetahui usaha kita",
            "Malas karena semuanya sudah diketahui Allah",
            "Berhenti berusaha"
        ],
        correct: 1
    },
    {
        question: "Saat mengetahui Allah adalah Al-Ghafur (Maha Pengampun), sikap bijak yang harus kita lakukan adalah …",
        options: [
            "Tidak perlu memperbaiki kesalahan",
            "Sering berbuat salah karena pasti diampuni",
            "Segera bertaubat dan memperbaiki diri",
            "Menunda meminta maaf"
        ],
        correct: 2
    },
    {
        question: "Memahami As-Sami' (Maha Mendengar) mendorong kita untuk …",
        options: [
            "Berdoa dengan sungguh-sungguh",
            "Berbicara sesuka hati",
            "Menghina orang lain secara diam-diam",
            "Berbohong dengan suara pelan"
        ],
        correct: 0
    },
    {
        question: "Bila seseorang yakin Allah Al-Adl (Maha Adil), maka ia akan …",
        options: [
            "Berbuat sesuka hati",
            "Selalu bersikap adil kepada teman",
            "Lebih suka membalas kesalahan",
            "Memilih teman tertentu saja"
        ],
        correct: 1
    },
    {
        question: "Memahami Asmaul Husna seharusnya membuat seorang muslim …",
        options: [
            "Takut berbuat kebaikan",
            "Meniru sifat-sifat baik Allah sesuai kemampuan",
            "Merasa paling benar",
            "Mudah menyerah"
        ],
        correct: 1
    },
    {
        question: "Ketika orang tua menyuruh membantu membersihkan rumah, sikap anak sholeh adalah …",
        options: [
            "Membantu dengan setengah hati",
            "Menolak karena sedang bermain",
            "Melakukannya dengan ikhlas",
            "Melakukannya setelah dimarahi"
        ],
        correct: 2
    },
    {
        question: "Salah satu ciri anak sholeh adalah disiplin. Contoh penerapan disiplin adalah …",
        options: [
            "Belajar hanya ketika ujian",
            "Menunda salat hingga larut",
            "Menepati waktu belajar dan ibadah",
            "Bangun terlambat setiap hari"
        ],
        correct: 2
    },
    {
        question: "Jika melihat teman berbuat salah, perilaku anak sholeh adalah …",
        options: [
            "Membiarkan",
            "Menertawakan",
            "Menasihati dengan cara baik",
            "Melapor tanpa mencoba menasihati"
        ],
        correct: 2
    },
    {
        question: "Anak sholeh selalu berkata jujur. Hal ini bermanfaat untuk …",
        options: [
            "Membuat orang lain takut",
            "Mendapat nilai tinggi tanpa belajar",
            "Dipercaya oleh guru dan teman",
            "Mendapat pujian setiap hari"
        ],
        correct: 2
    },
    {
        question: "Jika diminta mengumpulkan tugas, anak sholeh akan …",
        options: [
            "Menyalin tugas teman",
            "Mengerjakan sendiri dengan sungguh-sungguh",
            "Menunggu ditegur",
            "Mengabaikan"
        ],
        correct: 1
    },
    {
        question: "Sikap terbaik saat melihat sampah berserakan di masjid adalah …",
        options: [
            "Melewati saja",
            "Menyuruh orang lain",
            "Membersihkan dengan niat ibadah",
            "Menunggu petugas kebersihan"
        ],
        correct: 2
    },
    {
        question: "Contoh perilaku malu yang benar (haya') adalah …",
        options: [
            "Malu bertanya meski tidak paham",
            "Malu melakukan maksiat",
            "Malu berbuat baik",
            "Malu meminta maaf"
        ],
        correct: 1
    },
    {
        question: "Ketika ada teman yang membutuhkan bantuan belajar, sikap anak sholeh adalah …",
        options: [
            "Menolak agar tidak tersaingi",
            "Membantu sebisanya",
            "Mengabaikan",
            "Mengeluh"
        ],
        correct: 1
    },
    {
        question: "Berbagi bukan hanya tentang harta. Contoh berbagi yang benar adalah …",
        options: [
            "Mengajari teman yang belum paham pelajaran",
            "Menunggu orang lain berbagi dulu",
            "Berbagi agar terlihat baik",
            "Berbagi kepada orang kaya"
        ],
        correct: 0
    },
    {
        question: "Jika seseorang memiliki makanan lebih dan melihat tetangganya belum makan, tindakan yang paling tepat adalah …",
        options: [
            "Memakannya sendiri",
            "Menyimpannya untuk besok",
            "Membaginya dengan tetangga",
            "Menjualnya"
        ],
        correct: 2
    },
    {
        question: "Berbagi dapat membuat hati menjadi lapang karena …",
        options: [
            "Orang lain akan membalas",
            "Kita merasa lebih hebat",
            "Kita menolong tanpa berharap imbalan",
            "Kita mendapat pujian"
        ],
        correct: 2
    },
    {
        question: "Seorang teman kehilangan alat tulisnya. Cara berbagi yang baik adalah …",
        options: [
            "Meminjamkannya alat tulis milikmu",
            "Menertawakannya",
            "Mengabaikan",
            "Menjual alat tulismu kepadanya"
        ],
        correct: 0
    },
    {
        question: "Berbagi waktu dapat dilakukan dengan cara …",
        options: [
            "Menghabiskan waktu untuk bermain game",
            "Membantu adik belajar",
            "Menolak menolong orang tua",
            "Mengabaikan tugas rumah"
        ],
        correct: 1
    },
    {
        question: "Dalam Islam, berbagi sebaiknya dilakukan …",
        options: [
            "Saat diingatkan saja",
            "Saat ingin dipuji",
            "Kapan pun dengan hati ikhlas",
            "Ketika sedang banyak uang saja"
        ],
        correct: 2
    },
    {
        question: "Jika seseorang merasa berat untuk bersedekah, cara melatih diri agar ikhlas adalah …",
        options: [
            "Menyumbang dalam jumlah besar",
            "Mulai berbagi hal kecil secara rutin",
            "Memaksa diri tanpa niat",
            "Hanya memberi saat kaya"
        ],
        correct: 1
    },
    {
        question: "Berbagi dapat menciptakan persaudaraan karena …",
        options: [
            "Semua orang akan berutang budi",
            "Kita menjadi lebih disukai guru",
            "Membantu mengurangi kesenjangan dan menumbuhkan empati",
            "Menunjukkan siapa yang paling kaya"
        ],
        correct: 2
    }
];

let userAnswers = new Array(questions.length).fill(null);
let quizCompleted = false;
let currentQuestion = 0;

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    const indicatorContainer = document.getElementById('slide-indicator');
    container.innerHTML = '';
    indicatorContainer.innerHTML = '';

    // Create indicator dots
    questions.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `indicator-dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToQuestion(index);
        indicatorContainer.appendChild(dot);
    });

    questions.forEach((q, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = `question-card ${index === 0 ? 'active' : ''}`;
        questionCard.id = `question-${index}`;
        
        questionCard.innerHTML = `
            <div class="question-counter">
                ${index + 1} / ${questions.length}
            </div>
            <div class="question-bubble">
                <span class="question-number">${index + 1}</span>
                <span class="question-text">${q.question}</span>
            </div>
            <div class="options-grid">
                ${q.options.map((option, optIndex) => `
                    <button class="option-button option-${String.fromCharCode(97 + optIndex)}" 
                            onclick="selectAnswer(${index}, ${optIndex})"
                            id="q${index}_opt${optIndex}">
                        <span class="option-letter">${String.fromCharCode(65 + optIndex)}</span>
                        ${option}
                    </button>
                `).join('')}
            </div>
        `;
        
        container.appendChild(questionCard);
    });

    updateNavigation();
    updateProgress();
}

function selectAnswer(questionIndex, optionIndex) {
    if (quizCompleted) return;

    // Remove previous selection
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`q${questionIndex}_opt${i}`);
        btn.classList.remove('selected');
    }

    // Add selection to clicked option
    const selectedBtn = document.getElementById(`q${questionIndex}_opt${optionIndex}`);
    selectedBtn.classList.add('selected');
    
    userAnswers[questionIndex] = optionIndex;
    updateProgress();

    // Auto advance to next question after selection
    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            nextQuestion();
        } else if (userAnswers.every(answer => answer !== null)) {
            setTimeout(showResults, 500);
        }
    }, 800);
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateSlide();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateSlide();
    }
}

function goToQuestion(index) {
    if (index >= 0 && index < questions.length) {
        currentQuestion = index;
        updateSlide();
    }
}

function updateSlide() {
    // Update question cards
    questions.forEach((_, index) => {
        const card = document.getElementById(`question-${index}`);
        card.classList.remove('active', 'prev');
        
        if (index === currentQuestion) {
            card.classList.add('active');
        } else if (index < currentQuestion) {
            card.classList.add('prev');
        }
    });

    // Update indicator dots
    const dots = document.querySelectorAll('.indicator-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentQuestion);
    });

    updateNavigation();
    updateProgress();
}

function updateNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === questions.length - 1;
}

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    const answeredCount = userAnswers.filter(answer => answer !== null).length;
    const progressPercentage = (answeredCount / questions.length) * 100;
    const slidePercentage = ((currentQuestion + 1) / questions.length) * 100;
    
    progressFill.style.width = `${Math.max(progressPercentage, slidePercentage)}%`;
    progressText.textContent = `Pertanyaan ${currentQuestion + 1} dari ${questions.length} • ${answeredCount} terjawab`;
}

function showResults() {
    quizCompleted = true;
    let correctCount = 0;

    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.correct;

        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById(`q${index}_opt${i}`);
            btn.style.pointerEvents = 'none';
            
            if (i === correctAnswer) {
                btn.classList.add('correct');
            } else if (i === userAnswer && userAnswer !== correctAnswer) {
                btn.classList.add('incorrect');
            }
        }

        if (userAnswer === correctAnswer) {
            correctCount++;
        }
    });

    const percentage = Math.round((correctCount / questions.length) * 100);
    const scoreDisplay = document.getElementById('score-display');
    const scoreText = document.getElementById('score-text');
    
    let emoji = '';
    let message = '';
    
    if (percentage >= 90) {
        emoji = '🏆';
        message = 'Luar Biasa!';
    } else if (percentage >= 80) {
        emoji = '🌟';
        message = 'Sangat Baik!';
    } else if (percentage >= 70) {
        emoji = '👍';
        message = 'Baik!';
    } else if (percentage >= 60) {
        emoji = '📚';
        message = 'Cukup Baik!';
    } else {
        emoji = '💪';
        message = 'Tetap Semangat!';
    }

    let scoreHTML = `<p class="score-text">${emoji} ${message} Skor Anda: ${correctCount}/${questions.length} (${percentage}%)</p>`;
    
    // Add reward games for scores 80% and above
    if (percentage >= 80) {
        scoreHTML += `
            <div class="reward-section">
                <h3 class="reward-title">🎉 Selamat! Kamu Mendapat Hadiah Permainan! 🎉</h3>
                <p class="reward-subtitle">Pilih permainan favoritmu sebagai reward:</p>
                <div class="games-grid">
                    <button class="game-button" onclick="startMemoryGame()">
                        🧠 <span>Memory Game</span>
                        <small>Cocokkan kartu Asmaul Husna</small>
                    </button>
                    <button class="game-button" onclick="startWordPuzzle()">
                        🧩 <span>Teka-teki Kata</span>
                        <small>Susun kata akhlak mulia</small>
                    </button>
                    <button class="game-button" onclick="startColorMatch()">
                        🌈 <span>Color Match</span>
                        <small>Cocokkan warna dengan cepat</small>
                    </button>
                </div>
            </div>
        `;
    }
    
    scoreHTML += `<button class="reset-button" onclick="resetQuiz()">🔄 Ulangi Kuis</button>`;
    
    scoreDisplay.innerHTML = scoreHTML;
    scoreDisplay.style.display = 'block';
    document.querySelector('.navigation-container').style.display = 'none';
    document.getElementById('slide-indicator').style.display = 'none';
    
    scoreDisplay.scrollIntoView({ behavior: 'smooth' });
}

function resetQuiz() {
    userAnswers = new Array(questions.length).fill(null);
    quizCompleted = false;
    currentQuestion = 0;
    document.getElementById('score-display').style.display = 'none';
    document.querySelector('.navigation-container').style.display = 'flex';
    document.getElementById('slide-indicator').style.display = 'flex';
    renderQuiz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function onConfigChange(newConfig) {
    config = { ...config, ...newConfig };
    
    const titleElement = document.getElementById('quiz-title');
    const instructionElement = document.getElementById('instruction-text');
    
    if (titleElement) {
        titleElement.textContent = config.quiz_title || defaultConfig.quiz_title;
    }
    
    if (instructionElement) {
        instructionElement.textContent = config.instruction_text || defaultConfig.instruction_text;
    }
}

function mapToCapabilities(config) {
    return {
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ["quiz_title", config.quiz_title || defaultConfig.quiz_title],
        ["instruction_text", config.instruction_text || defaultConfig.instruction_text]
    ]);
}

// Game Variables
let memoryCards = [];
let flippedCards = [];
let memoryScore = 0;
let memoryTime = 0;
let memoryTimer = null;
let puzzleScore = 0;
let puzzleLevel = 1;
let colorScore = 0;
let currentColorTarget = '';

// Memory Game Data
const asmaulHusna = [
    'الرحمن', 'الرحيم', 'الملك', 'القدوس', 'السلام', 'المؤمن', 'المهيمن', 'العزيز'
];

// Word Puzzle Data
const akhlakWords = [
    { scrambled: 'HLAKSA', answer: 'AKHLAK' },
    { scrambled: 'RABAS', answer: 'SABAR' },
    { scrambled: 'RUJUJ', answer: 'JUJUR' },
    { scrambled: 'KALIS', answer: 'IKHLAS' },
    { scrambled: 'WAWAT', answer: 'TAWADHU' },
    { scrambled: 'NAMAS', answer: 'AMANAH' },
    { scrambled: 'RABIK', answer: 'IKBAR' },
    { scrambled: 'HALES', answer: 'SHALEH' }
];

let currentPuzzle = 0;

// Color Match Data
const colors = [
    { name: 'Merah', color: '#FF6B6B', id: 'red' },
    { name: 'Biru', color: '#4ECDC4', id: 'blue' },
    { name: 'Hijau', color: '#2ECC71', id: 'green' },
    { name: 'Kuning', color: '#FFD700', id: 'yellow' },
    { name: 'Ungu', color: '#9B59B6', id: 'purple' },
    { name: 'Orange', color: '#E67E22', id: 'orange' }
];

// Game Functions
function startMemoryGame() {
    hideAllContainers();
    document.getElementById('memory-game').style.display = 'block';
    initMemoryGame();
    document.getElementById('memory-game').scrollIntoView({ behavior: 'smooth' });
}

function startWordPuzzle() {
    hideAllContainers();
    document.getElementById('word-puzzle').style.display = 'block';
    initWordPuzzle();
    document.getElementById('word-puzzle').scrollIntoView({ behavior: 'smooth' });
}

function startColorMatch() {
    hideAllContainers();
    document.getElementById('color-match').style.display = 'block';
    initColorMatch();
    document.getElementById('color-match').scrollIntoView({ behavior: 'smooth' });
}

function hideAllContainers() {
    document.getElementById('score-display').style.display = 'none';
    document.getElementById('memory-game').style.display = 'none';
    document.getElementById('word-puzzle').style.display = 'none';
    document.getElementById('color-match').style.display = 'none';
}

function backToScore() {
    hideAllContainers();
    document.getElementById('score-display').style.display = 'block';
    document.getElementById('score-display').scrollIntoView({ behavior: 'smooth' });
}

// Memory Game Functions
function initMemoryGame() {
    memoryScore = 0;
    memoryTime = 0;
    flippedCards = [];
    
    // Create card pairs
    const cardPairs = [...asmaulHusna.slice(0, 8), ...asmaulHusna.slice(0, 8)];
    memoryCards = cardPairs.sort(() => Math.random() - 0.5);
    
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';
    
    memoryCards.forEach((card, index) => {
        const cardElement = document.createElement('button');
        cardElement.className = 'memory-card';
        cardElement.textContent = '?';
        cardElement.onclick = () => flipCard(index);
        cardElement.id = `card-${index}`;
        grid.appendChild(cardElement);
    });
    
    updateMemoryScore();
    startMemoryTimer();
}

function flipCard(index) {
    const card = document.getElementById(`card-${index}`);
    if (card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards.length >= 2) {
        return;
    }
    
    card.classList.add('flipped');
    card.textContent = memoryCards[index];
    flippedCards.push(index);
    
    if (flippedCards.length === 2) {
        setTimeout(checkMemoryMatch, 1000);
    }
}

function checkMemoryMatch() {
    const [first, second] = flippedCards;
    const firstCard = document.getElementById(`card-${first}`);
    const secondCard = document.getElementById(`card-${second}`);
    
    if (memoryCards[first] === memoryCards[second]) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        memoryScore += 10;
        
        // Check if game is complete
        if (document.querySelectorAll('.memory-card.matched').length === memoryCards.length) {
            clearInterval(memoryTimer);
            setTimeout(() => {
                alert(`🎉 Selamat! Kamu menyelesaikan Memory Game dalam ${memoryTime} detik dengan skor ${memoryScore}!`);
            }, 500);
        }
    } else {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.textContent = '?';
        secondCard.textContent = '?';
    }
    
    flippedCards = [];
    updateMemoryScore();
}

function startMemoryTimer() {
    memoryTimer = setInterval(() => {
        memoryTime++;
        document.getElementById('memory-time').textContent = memoryTime;
    }, 1000);
}

function updateMemoryScore() {
    document.getElementById('memory-score').textContent = memoryScore;
}

function resetMemoryGame() {
    clearInterval(memoryTimer);
    initMemoryGame();
}

// Word Puzzle Functions
function initWordPuzzle() {
    puzzleScore = 0;
    puzzleLevel = 1;
    currentPuzzle = 0;
    updateWordPuzzle();
}

function updateWordPuzzle() {
    const puzzle = akhlakWords[currentPuzzle];
    document.getElementById('scrambled-word').textContent = puzzle.scrambled;
    document.getElementById('word-input').value = '';
    document.getElementById('puzzle-score').textContent = puzzleScore;
    document.getElementById('puzzle-level').textContent = puzzleLevel;
}

function checkWord() {
    const input = document.getElementById('word-input').value.toUpperCase();
    const correct = akhlakWords[currentPuzzle].answer;
    
    if (input === correct) {
        puzzleScore += 20;
        alert('🎉 Benar! Jawaban kamu tepat!');
        nextPuzzle();
    } else {
        alert('❌ Belum tepat, coba lagi!');
    }
}

function nextPuzzle() {
    currentPuzzle = (currentPuzzle + 1) % akhlakWords.length;
    if (currentPuzzle === 0) {
        puzzleLevel++;
    }
    updateWordPuzzle();
}

function resetWordPuzzle() {
    initWordPuzzle();
}

// Color Match Functions
function initColorMatch() {
    colorScore = 0;
    generateColorChallenge();
}

function generateColorChallenge() {
    const targetColor = colors[Math.floor(Math.random() * colors.length)];
    currentColorTarget = targetColor.id;
    document.getElementById('color-target').textContent = targetColor.name;
    
    const grid = document.getElementById('color-grid');
    grid.innerHTML = '';
    
    // Shuffle colors and take 6
    const shuffledColors = [...colors].sort(() => Math.random() - 0.5).slice(0, 6);
    
    // Ensure target color is included
    if (!shuffledColors.find(c => c.id === currentColorTarget)) {
        shuffledColors[0] = targetColor;
    }
    
    shuffledColors.forEach(color => {
        const button = document.createElement('button');
        button.className = 'color-button';
        button.style.background = color.color;
        button.textContent = color.name;
        button.onclick = () => selectColor(color.id);
        grid.appendChild(button);
    });
    
    updateColorScore();
}

function selectColor(colorId) {
    if (colorId === currentColorTarget) {
        colorScore += 15;
        alert('🎉 Benar! Warna yang tepat!');
        generateColorChallenge();
    } else {
        alert('❌ Salah warna, coba lagi!');
    }
}

function updateColorScore() {
    document.getElementById('color-score').textContent = colorScore;
}

function resetColorMatch() {
    initColorMatch();
}

// Initialize the quiz
document.addEventListener('DOMContentLoaded', function() {
    renderQuiz();
    
    if (window.elementSdk) {
        window.elementSdk.init({
            defaultConfig,
            onConfigChange,
            mapToCapabilities,
            mapToEditPanelValues
        });
    }
});