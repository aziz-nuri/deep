// --- KONFIGURASI DAN DATA ---

const defaultConfig = {
    quiz_title: "🌟 Kuis Asmaul Husna (Kelas 5) 🌟",
    instruction_text: "Analisis kasus dan pilih Asmaul Husna atau sikap yang tepat!"
};

let config = { ...defaultConfig };

// Data Pertanyaan: Al-Qawwiyu, Al-Qayyum, Al-Muhyi, Al-Mumit, Al-Baits (HOTS)
const questions = [
    {
        question: "Setiap pagi, Ahmad merapikan tempat tidurnya sendiri, menyiapkan buku pelajaran, dan memakai seragam tanpa menyusahkan ibunya. Sikap kemandirian Ahmad ini adalah bentuk meneladani Asmaul Husna ...",
        options: [
            "Al-Qawwiyu (Maha Kuat)",
            "Al-Baits (Maha Membangkitkan)",
            "Al-Qayyum (Maha Mandiri)",
            "Al-Mumit (Maha Mematikan)"
        ],
        correct: 2 // C (Al-Qayyum)
    },
    {
        question: "Perhatikan pernyataan berikut: 'Segala yang bernyawa pasti akan merasakan kematian, dan tidak ada makhluk yang abadi di dunia ini.' Keyakinan ini didasarkan pada pemahaman terhadap Asmaul Husna ...",
        options: [
            "Al-Mumit",
            "Al-Muhyi",
            "Al-Qayyum",
            "Al-Qawwiyu"
        ],
        correct: 0 // A (Al-Mumit)
    },
    {
        question: "Rina mengalami kegagalan saat mengikuti lomba matematika. Awalnya ia sedih, namun ia segera sadar dan bersemangat kembali untuk belajar lebih giat agar menang di lomba berikutnya. Sikap 'bangkit dari keterpurukan' ini meneladani sifat ...",
        options: [
            "Al-Mumit",
            "Al-Qawwiyu",
            "Al-Muhyi",
            "Al-Baits"
        ],
        correct: 3 // D (Al-Baits)
    },
    {
        question: "Allah SWT memiliki kekuatan yang tidak terbatas dan tidak pernah melemah. Kekuatan manusia sangat terbatas. Oleh karena itu, jika kita ingin menjadi kuat dalam menghadapi ujian hidup, kita harus ...",
        options: [
            "Berlatih angkat beban setiap hari",
            "Memohon kekuatan hanya kepada Allah (Al-Qawwiyu)",
            "Meminta bantuan kepada teman yang berotot",
            "Menghindari semua masalah agar aman"
        ],
        correct: 1 // B (Al-Qawwiyu)
    },
    {
        question: "Tanah yang tandus dan kering kerontang bisa menjadi subur kembali setelah turun hujan, sehingga tumbuhan bisa hidup. Fenomena alam ini adalah bukti bahwa Allah memiliki sifat ...",
        options: [
            "Al-Muhyi (Maha Menghidupkan)",
            "Al-Mumit (Maha Mematikan)",
            "Al-Qayyum (Maha Berdiri Sendiri)",
            "Al-Baits (Maha Membangkitkan)"
        ],
        correct: 0 // A (Al-Muhyi)
    },
    {
        question: "Sebagai ketua kelas, Budi tidak pernah mengandalkan wakilnya untuk mengerjakan tugas utamanya. Ia berusaha menyelesaikan tanggung jawabnya sendiri. Perilaku Budi mencerminkan sikap ...",
        options: [
            "Tawakkal",
            "Qanaah",
            "Mandiri (Al-Qayyum)",
            "Dermawan"
        ],
        correct: 2 // C (Mandiri/Al-Qayyum)
    },
    {
        question: "Kelak di hari kiamat, seluruh manusia yang telah mati dan menjadi tulang belulang akan dihidupkan kembali dari kuburnya untuk dihisab. Peristiwa ini berkaitan erat dengan Asmaul Husna ...",
        options: [
            "Al-Qawwiyu",
            "Al-Baits",
            "Al-Qayyum",
            "Al-Muhyi"
        ],
        correct: 1 // B (Al-Baits)
    },
    {
        question: "Fulan adalah anak yang kuat secara fisik. Agar kekuatannya bernilai ibadah dan meneladani Al-Qawwiyu, sebaiknya kekuatan tersebut digunakan untuk ...",
        options: [
            "Menakut-nakuti teman di kelas agar dihormati",
            "Mengangkat meja guru yang berat saat piket",
            "Pamer otot di depan cermin setiap hari",
            "Mengalahkan semua orang yang berbeda pendapat"
        ],
        correct: 1 // B (Membantu/Positif)
    },
    {
        question: "Menyadari bahwa Allah adalah **Al-Mumit**, sikap yang paling bijaksana bagi seorang siswa dalam memanfaatkan waktunya adalah ...",
        options: [
            "Bermain game sepanjang waktu selagi masih hidup",
            "Tidur terus menerus agar tidak berbuat dosa",
            "Takut berlebihan hingga tidak mau keluar rumah",
            "Rajin beribadah dan beramal saleh sebagai bekal akhirat"
        ],
        correct: 3 // D (Persiapan bekal)
    },
    {
        question: "Pak Tani tidak pernah putus asa menanam benih meskipun pernah gagal panen. Ia yakin Allah yang memberi kehidupan pada tanaman tersebut. Keyakinan Pak Tani adalah cerminan iman kepada ...",
        options: [
            "Al-Qawwiyu",
            "Al-Qayyum",
            "Al-Muhyi",
            "Al-Mumit"
        ],
        correct: 2 // C (Al-Muhyi)
    },
    {
        question: "Seseorang yang meneladani **Al-Qawwiyu** (Maha Kuat) tidak hanya kuat fisik, tetapi juga kuat mental. Contoh kuat mental adalah ...",
        options: [
            "Mampu menahan amarah dan godaan syaitan",
            "Berani memukul orang yang mengejek",
            "Mampu mengangkat beban 100 kg",
            "Tidak pernah menangis saat sedih"
        ],
        correct: 0 // A (Kuat menahan hawa nafsu)
    },
    {
        question: "Mengapa Allah disebut **Al-Qayyum** (Maha Berdiri Sendiri)?",
        options: [
            "Karena Allah membutuhkan bantuan malaikat untuk mengatur dunia",
            "Karena Allah tidak bergantung pada makhluk-Nya, sedangkan makhluk bergantung pada-Nya",
            "Karena Allah menciptakan manusia berpasang-pasangan",
            "Karena Allah menyukai hamba yang menyendiri di gua"
        ],
        correct: 1 // B (Definisi Al-Qayyum)
    },
    {
        question: "Rani sering malas bangun pagi untuk shalat Subuh. Namun, mengingat sifat Allah **Al-Baits** (Maha Membangkitkan), ia memotivasi dirinya untuk ...",
        options: [
            "Bangun dari rasa malas dan segera beribadah",
            "Tidur lagi karena masih mengantuk",
            "Meminta ibu membangunkannya dengan paksa",
            "Menunggu matahari terbit baru bangun"
        ],
        correct: 0 // A (Bangkit dari kemalasan)
    },
    {
        question: "Kematian bukanlah akhir segalanya, melainkan pintu menuju alam akhirat. Pemahaman terhadap **Al-Mumit** mengajarkan kita untuk menjauhi sikap ...",
        options: [
            "Rendah hati",
            "Sombong dan cinta dunia berlebihan",
            "Dermawan",
            "Sabar"
        ],
        correct: 1 // B (Menghindari hubbud-dunya)
    },
    {
        question: "Dokter berusaha mengobati pasien, tetapi yang menentukan sembuh atau hidupnya seseorang hakikatnya adalah Allah. Hal ini bukti Allah bersifat ...",
        options: [
            "Al-Qayyum",
            "Al-Qawwiyu",
            "Al-Baits",
            "Al-Muhyi"
        ],
        correct: 3 // D (Al-Muhyi - Menghidupkan/Menyembuhkan)
    },
    {
        question: "Contoh perilaku yang **bertentangan** (tidak sesuai) dengan sifat Al-Qayyum adalah ...",
        options: [
            "Mengerjakan PR sendiri tanpa menyontek",
            "Bergantung pada teman saat mengerjakan tugas kelompok",
            "Mencuci piring sendiri setelah makan",
            "Menyiapkan seragam sekolah di malam hari"
        ],
        correct: 1 // B (Bergantung pada orang lain)
    },
    {
        question: "Di sekolah, Andi melihat temannya yang difabel kesulitan membawa buku. Andi yang sehat dan kuat segera membantunya. Andi menggunakan anugerah kekuatan sebagai bentuk syukur meneladani ...",
        options: [
            "Al-Qawwiyu",
            "Al-Baits",
            "Al-Mumit",
            "Al-Muhyi"
        ],
        correct: 0 // A (Al-Qawwiyu)
    },
    {
        question: "Hikmah beriman kepada **Al-Baits** bagi semangat hidup seorang pelajar adalah ...",
        options: [
            "Menjadi takut berbuat salah karena diawasi",
            "Menjadi pesimis jika nilai ulangan jelek",
            "Selalu optimis untuk memperbaiki diri dan mengejar cita-cita",
            "Pasrah saja menerima nasib tanpa usaha"
        ],
        correct: 2 // C (Optimisme/Bangkit)
    },
    {
        question: "Allah mampu mencabut nyawa seorang raja yang berkuasa maupun seorang pengemis miskin kapan saja. Ini menunjukkan bahwa di hadapan **Al-Mumit**, manusia itu ...",
        options: [
            "Sangat kuat",
            "Bisa menawar kematian",
            "Lemah dan setara, tidak ada yang bisa lari dari takdir mati",
            "Abadi selamanya"
        ],
        correct: 2 // C (Kesetaraan dalam kematian/kelemahan)
    },
    {
        question: "Hati yang 'mati' adalah hati yang tidak mau menerima nasihat dan kebenaran. Untuk 'menghidupkan' kembali hati tersebut, kita perlu memohon kepada Allah **Al-Muhyi** dengan cara ...",
        options: [
            "Banyak tertawa dan bermain",
            "Memperbanyak zikir, membaca Al-Quran, dan menuntut ilmu",
            "Makan makanan yang bergizi dan mahal",
            "Pergi liburan ke tempat yang jauh"
        ],
        correct: 1 // B (Menghidupkan hati dengan ibadah)
    },
    {
        question: "Manakah pasangan Asmaul Husna dan artinya yang **salah** di bawah ini?",
        options: [
            "Al-Qawwiyu = Maha Kuat",
            "Al-Qayyum = Maha Membangkitkan",
            "Al-Mumit = Maha Mematikan",
            "Al-Muhyi = Maha Menghidupkan"
        ],
        correct: 1 // B (Salah, Al-Qayyum itu Maha Mandiri, Al-Baits yang membangkitkan)
    },
    {
        question: "Siswa yang meneladani **Al-Qawwiyu** akan memiliki pendirian yang teguh. Jika diajak teman untuk bolos sekolah, sikapnya adalah ...",
        options: [
            "Ikut bolos karena takut dimusuhi (Solidaritas)",
            "Ragu-ragu dan akhirnya ikut",
            "Menolak dengan tegas dan menasihati temannya",
            "Pura-pura sakit agar diizinkan pulang"
        ],
        correct: 2 // C (Kuat pendirian dalam kebenaran)
    },
    {
        question: "Tidak menjadi beban bagi orang tua dan berusaha membantu pekerjaan rumah semampunya adalah cerminan dari sikap ...",
        options: [
            "Kemandirian (Al-Qayyum)",
            "Keberanian (Al-Qawwiyu)",
            "Kasih sayang (Ar-Rahman)",
            "Keadilan (Al-Adl)"
        ],
        correct: 0 // A (Kemandirian)
    },
    {
        question: "Meyakini adanya Hari Kebangkitan (Yaumul Ba'ats) membuat kita sadar bahwa ...",
        options: [
            "Hidup di dunia ini adalah satu-satunya kehidupan",
            "Semua perbuatan di dunia akan dimintai pertanggungjawaban nanti",
            "Setelah mati manusia akan hilang begitu saja",
            "Kita bebas melakukan apa saja di dunia"
        ],
        correct: 1 // B (Pertanggungjawaban)
    },
    {
        question: "Ketika melihat hewan peliharaan mati, sikap seorang muslim yang memahami **Al-Mumit** dan **Al-Muhyi** adalah ...",
        options: [
            "Menyalahkan takdir Allah",
            "Meratapi terus menerus tanpa henti",
            "Meyakini bahwa hidup dan mati adalah kuasa Allah dan mengambil pelajaran darinya",
            "Bersikap acuh tak acuh karena itu hanya hewan"
        ],
        correct: 2 // C (Menerima takdir/Qada Qadar)
    },
    {
        question: "Seseorang yang sukses tidak boleh sombong, karena kesuksesan dan kekuatannya bersumber dari Allah. Jika Allah menghendaki, Dia bisa mencabut kekuatan itu seketika. Sifat Allah yang Maha Kuat adalah ...",
        options: [
            "Al-Qayyum",
            "Al-Matin",
            "Al-Baits",
            "Al-Qawwiyu"
        ],
        correct: 3 // D (Al-Qawwiyu)
    },
    {
        question: "Pernyataan yang tepat mengenai perbedaan makna **Al-Muhyi** dan **Al-Baits** adalah ...",
        options: [
            "Al-Muhyi menghidupkan dari ketiadaan/kematian di dunia, Al-Baits membangkitkan dari kubur di akhirat",
            "Al-Muhyi mematikan, Al-Baits menghidupkan",
            "Keduanya memiliki arti yang sama persis tidak ada bedanya",
            "Al-Muhyi untuk manusia saja, Al-Baits untuk hewan saja"
        ],
        correct: 0 // A (Perbedaan konteks menghidupkan)
    },
    {
        question: "Supaya kita bisa hidup mandiri (meneladani Al-Qayyum) di masa depan, hal yang harus kita lakukan sejak SD adalah ...",
        options: [
            "Menabung uang jajan untuk membeli mainan",
            "Belajar dengan rajin dan melatih keterampilan diri",
            "Menyuruh pembantu melakukan semua hal",
            "Hanya bermain game sepanjang hari"
        ],
        correct: 1 // B (Investasi skill untuk kemandirian)
    },
    {
        question: "Rasulullah SAW bersabda bahwa orang yang cerdas adalah orang yang mengingat kematian dan mempersiapkan bekal untuknya. Ini adalah implementasi iman kepada ...",
        options: [
            "Al-Qawwiyu",
            "Al-Baits",
            "Al-Qayyum",
            "Al-Mumit"
        ],
        correct: 3 // D (Al-Mumit)
    },
    {
        question: "Jika kita sedang malas belajar, kita harus segera 'bangkit' melawan rasa malas tersebut. Sikap tidak mudah menyerah ini meneladani Asmaul Husna ...",
        options: [
            "Al-Mumit",
            "Al-Muhyi",
            "Al-Baits",
            "Al-Qayyum"
        ],
        correct: 2 // C (Al-Baits - Bangkit)
    }
];

let userAnswers = new Array(questions.length).fill(null);
let quizCompleted = false;
let currentQuestion = 0;

// --- LOGIKA KUIS UTAMA ---

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    const indicatorContainer = document.getElementById('slide-indicator');
    
    // Safety check jika elemen belum ada di DOM
    if (!container || !indicatorContainer) return;

    container.innerHTML = '';
    indicatorContainer.innerHTML = '';

    // Buat indikator bulat
    questions.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `indicator-dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToQuestion(index);
        indicatorContainer.appendChild(dot);
    });

    // Buat kartu pertanyaan
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

    // Hapus seleksi sebelumnya
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`q${questionIndex}_opt${i}`);
        if(btn) btn.classList.remove('selected');
    }

    // Tambah seleksi baru
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
    
    // Logic Hadiah (SYARAT 80%)
    let scoreHTML = `<p class="score-text">Skor Akhir: ${correctCount}/${questions.length} (${percentage}%)</p>`;
    
    if (percentage >= 80) { // Changed condition to 80%
        scoreHTML += `
            <div class="reward-section">
                <h4 style="color:#e80368; font-weight:bold;">🎉 Selamat! Hadiah Game Terbuka! 🎉</h4>
                <p>Kamu hebat! Silakan pilih game untuk dimainkan:</p>
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
        scoreHTML += `<p>Nilai kamu belum cukup untuk membuka game bonus (Min. 80%). <br> Ayo belajar lagi dan coba ulangi kuisnya!</p>`;
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
    hideAllGames();
}

function hideAllGames() {
    document.getElementById('memory-game').style.display = 'none';
    document.getElementById('word-puzzle').style.display = 'none';
    document.getElementById('color-match').style.display = 'none';
}

function backToScore() {
    hideAllGames();
    document.getElementById('score-display').style.display = 'block';
}

// --- LOGIKA MINI GAMES ---

// 1. Memory Game
let memoryCards = [];
let flippedCards = [];
let memoryScore = 0;
let memoryTimer = null;
let memoryTime = 0;
// Menggunakan Asmaul Husna yang baru
const asmaulHusna = ['Al-Qawwiyu', 'Al-Qayyum', 'Al-Muhyi', 'Al-Mumit', 'Al-Baits', 'Al-Matin', 'Al-Wahid', 'Al-Ahad'];

function startMemoryGame() {
    document.getElementById('score-display').style.display = 'none';
    document.getElementById('memory-game').style.display = 'block';
    initMemoryGame();
}

function initMemoryGame() {
    memoryScore = 0;
    memoryTime = 0;
    flippedCards = [];
    
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
    if(memoryTimer) clearInterval(memoryTimer);
    memoryTimer = setInterval(() => {
        memoryTime++;
        const timerEl = document.getElementById('memory-time');
        if(timerEl) timerEl.textContent = memoryTime;
    }, 1000);
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
        
        if (document.querySelectorAll('.memory-card.matched').length === memoryCards.length) {
            clearInterval(memoryTimer);
            setTimeout(() => {
                alert(`🎉 Selamat! Kamu menyelesaikan Memory Game dalam ${memoryTime} detik!`);
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

function updateMemoryScore() {
    const scoreEl = document.getElementById('memory-score');
    if(scoreEl) scoreEl.textContent = memoryScore;
}

function resetMemoryGame() {
    initMemoryGame();
}

// 2. Word Puzzle
let puzzleScore = 0;
let puzzleLevel = 1;
let currentPuzzle = 0;
// Update kata-kata puzzle sesuai tema
const akhlakWords = [
    { scrambled: 'YUMQAY', answer: 'QAYYUM' },
    { scrambled: 'WIYYUQA', answer: 'QAWWIYU' },
    { scrambled: 'YIHUAM', answer: 'MUHYI' },
    { scrambled: 'TUMIM', answer: 'MUMIT' },
    { scrambled: 'SITBA', answer: 'BAITS' },
    { scrambled: 'DIRIMAN', answer: 'MANDIRI' },
    { scrambled: 'KITHANG', answer: 'BANGKIT' },
    { scrambled: 'TUA K', answer: 'KUAT' }
];

function startWordPuzzle() {
    document.getElementById('score-display').style.display = 'none';
    document.getElementById('word-puzzle').style.display = 'block';
    initWordPuzzle();
}

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
    const input = document.getElementById('word-input').value.toUpperCase().replace(/\s/g, ''); // Hapus spasi
    const correct = akhlakWords[currentPuzzle].answer.replace(/\s/g, '');
    
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

// 3. Color Match
let colorScore = 0;
let currentColorTarget = '';
const colors = [
    { name: 'Merah', color: '#FF6B6B', id: 'red' },
    { name: 'Biru', color: '#4ECDC4', id: 'blue' },
    { name: 'Hijau', color: '#2ECC71', id: 'green' },
    { name: 'Kuning', color: '#FFD700', id: 'yellow' },
    { name: 'Ungu', color: '#9B59B6', id: 'purple' },
    { name: 'Orange', color: '#E67E22', id: 'orange' }
];

function startColorMatch() {
    document.getElementById('score-display').style.display = 'none';
    document.getElementById('color-match').style.display = 'block';
    initColorMatch();
}

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
    
    const shuffledColors = [...colors].sort(() => Math.random() - 0.5).slice(0, 6);
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
    const scoreEl = document.getElementById('color-score');
    if(scoreEl) scoreEl.textContent = colorScore;
}

function resetColorMatch() {
    initColorMatch();
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    renderQuiz();
});
