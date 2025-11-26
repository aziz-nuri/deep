// Konfigurasi Default (Tanpa SDK Element)
const defaultConfig = {
    quiz_title: "🌟 Ulangan PAI 🌟",
    instruction_text: "Pilih jawaban yang paling tepat untuk setiap pertanyaan!"
};

let config = { ...defaultConfig };

// Data Pertanyaan (Sama seperti sebelumnya)
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
    // ... (Masukkan sisa pertanyaan dari file script.js sebelumnya di sini) ...
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

// --- Render Functions (Logic disesuaikan sedikit untuk struktur baru) ---

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    const indicatorContainer = document.getElementById('slide-indicator');
    
    // Safety check jika elemen belum ada di DOM
    if (!container || !indicatorContainer) return;

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
                <span class="question-number">${index + 1}.</span>
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
        if(btn) btn.classList.remove('selected');
    }

    // Add selection to clicked option
    const selectedBtn = document.getElementById(`q${questionIndex}_opt${optionIndex}`);
    if(selectedBtn) selectedBtn.classList.add('selected');
    
    userAnswers[questionIndex] = optionIndex;
    updateProgress();

    // Auto advance
    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            nextQuestion();
        } else if (userAnswers.every(answer => answer !== null)) {
            setTimeout(showResults, 500);
        }
    }, 500);
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
    questions.forEach((_, index) => {
        const card = document.getElementById(`question-${index}`);
        if(card) {
            card.classList.remove('active', 'prev');
            if (index === currentQuestion) {
                card.classList.add('active');
            } else if (index < currentQuestion) {
                card.classList.add('prev');
            }
        }
    });

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
    
    if(prevBtn) prevBtn.disabled = currentQuestion === 0;
    if(nextBtn) nextBtn.disabled = currentQuestion === questions.length - 1;
}

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    const answeredCount = userAnswers.filter(answer => answer !== null).length;
    const progressPercentage = (answeredCount / questions.length) * 100;
    
    if(progressFill) progressFill.style.width = `${progressPercentage}%`;
    if(progressText) progressText.textContent = `Soal ${currentQuestion + 1}/${questions.length} - ${answeredCount} dijawab`;
}

function showResults() {
    quizCompleted = true;
    let correctCount = 0;

    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.correct;

        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById(`q${index}_opt${i}`);
            if(btn) {
                btn.style.pointerEvents = 'none';
                if (i === correctAnswer) btn.classList.add('correct');
                else if (i === userAnswer && userAnswer !== correctAnswer) btn.classList.add('incorrect');
            }
        }
        if (userAnswer === correctAnswer) correctCount++;
    });

    const percentage = Math.round((correctCount / questions.length) * 100);
    const scoreDisplay = document.getElementById('score-display');
    
    // Logic Hadiah
    let scoreHTML = `<p class="score-text">Skor Akhir: ${correctCount}/${questions.length} (${percentage}%)</p>`;
    
    if (percentage >= 70) {
        scoreHTML += `
            <div class="reward-section">
                <h4 style="color:#e80368">🎉 Selamat! Game Terbuka! 🎉</h4>
                <div class="games-grid">
                    <button class="game-button" onclick="startMemoryGame()">
                        🧠 <span>Memory</span>
                    </button>
                    <button class="game-button" onclick="startWordPuzzle()">
                        🧩 <span>Kata</span>
                    </button>
                    <button class="game-button" onclick="startColorMatch()">
                        🌈 <span>Warna</span>
                    </button>
                </div>
            </div>
        `;
    } else {
        scoreHTML += `<p>Nilai belum cukup untuk membuka game. Coba lagi ya!</p>`;
    }
    
    scoreHTML += `<button class="reset-button" onclick="resetQuiz()">🔄 Ulangi Kuis</button>`;
    
    if(scoreDisplay) {
        scoreDisplay.innerHTML = scoreHTML;
        scoreDisplay.style.display = 'block';
    }
    
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
    
    // Hide all games
    document.getElementById('memory-game').style.display = 'none';
    document.getElementById('word-puzzle').style.display = 'none';
    document.getElementById('color-match').style.display = 'none';
}

// --- GAME LOGIC START HERE (Copy logika game dari script.js sebelumnya) ---
// (Paste fungsi startMemoryGame, initMemoryGame, dll di sini. Pastikan variabel global game juga tercopy)

// Variabel Global Game (Contoh)
let memoryCards = [];
let flippedCards = [];
let memoryScore = 0;
// ... dst

// Fungsi Game (Contoh Memory Game)
function startMemoryGame() {
    document.getElementById('score-display').style.display = 'none';
    document.getElementById('memory-game').style.display = 'block';
    initMemoryGame();
}

function backToScore() {
    document.getElementById('memory-game').style.display = 'none';
    document.getElementById('word-puzzle').style.display = 'none';
    document.getElementById('color-match').style.display = 'none';
    document.getElementById('score-display').style.display = 'block';
}

// Data Dummy Game (Agar script jalan, pastikan isi penuh dari script.js sebelumnya)
const asmaulHusna = ['الرحمن', 'الرحيم', 'الملك', 'القدوس', 'السلام', 'المؤمن', 'المهيمن', 'العزيز'];

function initMemoryGame() {
    // Simple init logic
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';
    // ... Logika memory game
    grid.innerHTML = '<p>Game dimulai...</p>'; // Placeholder
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', function() {
    renderQuiz();
});

