// --- KONFIGURASI DAN DATA ---

const defaultConfig = {
    quiz_title: "🌟 Ulangan PAI (HOTS) 🌟",
    instruction_text: "Analisis setiap kasus dan pilih tindakan yang paling tepat!"
};

let config = { ...defaultConfig };

// Data Pertanyaan Tipe HOTS (Higher Order Thinking Skills)
const questions = [
    {
        question: "Andi melihat teman sekelasnya yang yatim, Budi, sering menyendiri saat jam istirahat karena tidak membawa uang saku. Andi ingin membantu, tetapi ia khawatir Budi tersinggung. Langkah paling bijaksana yang mencerminkan adab yang baik adalah ...",
        options: [
            "Memberikan uang jajan kepada Budi di depan teman-teman agar Budi merasa diperhatikan.",
            "Mengajak Budi makan bersama dan berbagi bekal seolah-olah itu hal yang biasa agar menjaga harga dirinya.",
            "Melaporkan kondisi Budi kepada guru agar diumumkan di kelas untuk penggalangan dana.",
            "Menasihati Budi agar bersabar karena kemiskinan adalah ujian dari Allah."
        ],
        correct: 1 // Kunci: Menjaga harga diri (izzah) penerima sedekah lebih utama.
    },
    {
        question: "Rasulullah SAW mengibaratkan kedekatan beliau dengan penyantun anak yatim seperti jari telunjuk dan jari tengah. Makna tersirat dari hadis ini terkait motivasi sosial adalah ...",
        options: [
            "Orang yang menyantuni anak yatim akan menjadi pemimpin umat bersama Rasulullah.",
            "Menyantuni anak yatim dapat meningkatkan status sosial seseorang di masyarakat.",
            "Adanya jaminan kedekatan posisi dan derajat yang tinggi di surga bagi mereka yang peduli secara tulus.",
            "Anak yatim harus diperlakukan seperti anak kandung sendiri agar kita masuk surga."
        ],
        correct: 2 // Kunci: Analisis makna hadis tentang derajat di akhirat.
    },
    {
        question: "Dalam sebuah diskusi, Ahmad berpendapat bahwa menyantuni anak yatim cukup dengan memberi uang sekali saja. Namun, Fatimah tidak setuju. Argumen Fatimah yang paling tepat berdasarkan prinsip 'Kesejahteraan Berkelanjutan' dalam Islam adalah ...",
        options: [
            "Santunan harus terus menerus karena uang akan cepat habis jika tidak diawasi.",
            "Sebaiknya santunan berupa pembinaan pendidikan atau keterampilan agar mereka bisa mandiri di masa depan.",
            "Memberi uang saja tidak cukup karena mereka juga butuh kasih sayang orang tua pengganti.",
            "Anak yatim tidak boleh dimanja dengan uang agar mereka tumbuh menjadi anak yang kuat."
        ],
        correct: 1 // Kunci: Evaluasi solusi jangka panjang (empowerment).
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
            "Mandiri",
            "Dermawan"
        ],
        correct: 2 // C (Mandiri/Al-Qayyum)
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
        question: "Kematian bukanlah akhir segalanya, melainkan pintu menuju alam akhirat. Pemahaman terhadap **Al-Mumit** mengajarkan kita untuk menjauhi sikap ...",
        options: [
            "Mendengarkan semua informasi lalu menyebarkannya agar update.",
            "Hanya mendengar informasi yang menyudutkan lawan bicara.",
            "Melakukan *tabayyun* (cek & ricek) dan menyaring apa yang didengar sebelum diucapkan kembali.",
            "Menutup telinga dari semua berita agar tidak berdosa."
        ],
        correct: 2 // Kunci: Literasi digital dikaitkan dengan sifat Allah.
    },
    {
        question: "Fulan sering berbuat curang saat ulangan karena merasa guru tidak melihat. Padahal Allah bersifat **Al-Basir**. Apa kerugian terbesar Fulan dalam aspek pembentukan karakter?",
        options: [
            "Nilainya akan dibatalkan jika ketahuan guru di kemudian hari.",
            "Ia kehilangan kesempatan untuk melatih kejujuran dan integritas diri.",
            "Teman-temannya akan menjauhinya karena ia pelit memberi contekan.",
            "Ia akan sulit masuk sekolah favorit karena catatan perilakunya buruk."
        ],
        correct: 1 // Kunci: Analisis dampak karakter jangka panjang.
    },
    {
        question: "Siti ingin bersedekah, tetapi uangnya hanya cukup untuk jajan hari itu. Ia memilih menahan lapar dan memberikan uangnya kepada pengemis tua. Sikap Siti disebut *Iitsar* (mendahulukan orang lain). Mengapa sikap ini bernilai tinggi?",
        options: [
            "Karena dilakukan saat kondisi lapang dan berlebih.",
            "Karena Siti ingin dianggap dermawan oleh pengemis tersebut.",
            "Karena dilakukan saat diri sendiri juga membutuhkan, menunjukkan pengorbanan maksimal.",
            "Karena Siti sedang diet sehingga tidak masalah jika tidak makan."
        ],
        correct: 2 // Kunci: Evaluasi tingkat pengorbanan dalam amal (Altruisme).
    },
    {
        question: "Disiplin bukan hanya tentang menaati aturan sekolah, tetapi juga aturan agama. Manakah contoh disiplin waktu yang berdampak langsung pada ketenangan jiwa?",
        options: [
            "Datang ke sekolah tepat waktu agar tidak dihukum guru.",
            "Menunaikan salat di awal waktu sehingga tidak terburu-buru dan lebih khusyuk.",
            "Mengumpulkan tugas tepat waktu supaya mendapat nilai tambahan.",
            "Tidur tepat waktu agar besok bisa bangun pagi dan menonton TV."
        ],
        correct: 1 // Kunci: Korelasi disiplin dengan kualitas ibadah/psikologis.
    },
    {
        question: "Jujur itu kadang pahit. Ketika kamu memecahkan vas bunga kesayangan ibu, tindakan jujur yang bertanggung jawab adalah ...",
        options: [
            "Mengaku salah, meminta maaf, dan berusaha membersihkan pecahannya.",
            "Diam saja dan berpura-pura tidak tahu sampai ibu bertanya.",
            "Mengaku salah tapi menyalahkan kucing yang lewat agar tidak dimarahi.",
            "Segera mengganti vas baru sebelum ibu pulang agar ibu tidak tahu."
        ],
        correct: 0 // Kunci: Kejujuran yang disertai tanggung jawab (Accountability).
    },
    {
        question: "Hidup sederhana bukan berarti miskin. Makna **Qanaah** (merasa cukup) bagi seorang siswa yang memiliki gadget model lama adalah ...",
        options: [
            "Merasa malu dan menyembunyikan gadgetnya dari teman-teman.",
            "Meminta orang tua membelikan yang baru dengan cara mogok makan.",
            "Bersyukur gadgetnya masih berfungsi untuk belajar dan tidak iri pada milik teman.",
            "Menggunakan gadget teman agar terlihat mengikuti tren kekinian."
        ],
        correct: 2 // Kunci: Definisi Qanaah dalam konteks modern.
    },
    {
        question: "Menjaga kebersihan lingkungan adalah sebagian dari iman. Jika melihat sampah berserakan di masjid setelah acara pengajian, sikap inisiatif yang paling tepat adalah ...",
        options: [
            "Memanggil petugas kebersihan masjid karena itu tugas mereka.",
            "Memungut sampah yang dekat dengan kita dan membuangnya tanpa menunggu perintah.",
            "Memfoto tumpukan sampah dan menyebarkannya di medsos agar viral.",
            "Mengeluh kepada panitia pengajian karena tidak menyediakan tempat sampah."
        ],
        correct: 1 // Kunci: Inisiatif dan tanggung jawab personal (Action-oriented).
    },
    {
        question: "Haya' (Malu) adalah perhiasan akhlak. Penerapan rasa malu yang **salah** tempat adalah ...",
        options: [
            "Malu untuk bertanya kepada guru tentang materi yang belum dipahami.",
            "Malu jika auratnya terlihat oleh orang yang bukan mahram.",
            "Malu ketika berbicara kasar di depan orang tua.",
            "Malu jika ketahuan tidak mengerjakan PR."
        ],
        correct: 0 // Kunci: Membedakan malu positif dan negatif (penghambat belajar).
    },
    {
        question: "Tawadhu (rendah hati) berbeda dengan rendah diri. Ciri siswa yang tawadhu saat menjadi juara kelas adalah ...",
        options: [
            "Menolak ucapan selamat dari teman karena merasa tidak pantas.",
            "Mengakui keberhasilannya adalah hasil usaha sendiri tanpa bantuan orang lain.",
            "Tetap bergaul dengan siapa saja dan bersedia mengajari teman yang kesulitan.",
            "Menyembunyikan pialanya agar tidak ada yang tahu prestasinya."
        ],
        correct: 2 // Kunci: Tawadhu sosial (inklusif).
    },
    {
        question: "Tolong-menolong (Ta'awun) harus dalam kebaikan. Jika temanmu memintamu memberitahu jawaban saat ujian demi 'solidaritas', sikapmu adalah ...",
        options: [
            "Memberikan jawaban karena kasihan jika nilainya jelek.",
            "Menolak dengan tegas namun santun, lalu mengajaknya belajar bersama setelah ujian.",
            "Melaporkannya ke guru pengawas dengan suara keras agar dia jera.",
            "Memberikan jawaban yang salah agar dia tidak menyontek lagi."
        ],
        correct: 1 // Kunci: Menolak kemungkaran dengan cara ma'ruf & solusi konstruktif.
    },
    {
        question: "Berbakti kepada orang tua (Birrul Walidain) saat mereka sudah meninggal dunia dapat dilakukan dengan cara ...",
        options: [
            "Menangisi kepergian mereka setiap hari di kamar.",
            "Membangun patung mereka sebagai kenang-kenangan.",
            "Mendoakan mereka, menyambung silaturahmi dengan kerabat mereka, dan bersedekah atas nama mereka.",
            "Menghabiskan harta warisan untuk bersenang-senang agar tidak sedih."
        ],
        correct: 2 // Kunci: Amal jariyah dan etika pasca-kematian.
    },
    {
        question: "Mengapa Allah melarang sikap **Riya'** (pamer) dalam beribadah?",
        options: [
            "Karena Riya' dapat menghapus pahala amal seperti api membakar kayu bakar.",
            "Karena orang yang pamer biasanya orang yang kaya raya.",
            "Karena Riya' membuat orang lain menjadi iri hati kepada kita.",
            "Karena ibadah harus dilakukan di tempat yang sepi dan gelap."
        ],
        correct: 0 // Kunci: Dampak spiritual (syirik asghar/penghapus amal).
    },
    {
        question: "Sikap toleransi (Tasamuh) dalam beragama yang benar sesuai ajaran Islam adalah ...",
        options: [
            "Mengikuti ritual ibadah agama lain sebagai bentuk penghormatan.",
            "Membiarkan umat agama lain beribadah sesuai keyakinannya tanpa mengganggu.",
            "Menganggap semua agama itu sama benarnya.",
            "Melarang teman berbeda agama merayakan hari rayanya."
        ],
        correct: 1 // Kunci: Batasan toleransi (akidah vs muamalah).
    },
    {
        question: "Fulan meminjam pensil kepada Budi, tapi menghilangkannya. Budi marah. Fulan seharusnya ...",
        options: [
            "Menjauh dari Budi agar tidak dimarahi terus.",
            "Meminta maaf dan berjanji menggantinya dengan pensil yang baru.",
            "Mengatakan bahwa pensil itu murah dan tidak perlu dipermasalahkan.",
            "Menyuruh Budi meminjam pensil ke orang lain saja."
        ],
        correct: 1 // Kunci: Tanggung jawab (Ganti rugi & minta maaf).
    },
    {
        question: "Dalam surah Al-Ma'un, orang yang salat bisa disebut celaka jika ...",
        options: [
            "Salatnya tidak khusyuk karena memikirkan pekerjaan.",
            "Salatnya diakhirkan karena ketiduran.",
            "Lalai dari tujuan salatnya (berbuat riya') dan enggan memberikan bantuan (barang berguna).",
            "Lupa jumlah rakaat salatnya."
        ],
        correct: 2 // Kunci: Pemahaman tafsir surah Al-Ma'un (kepedulian sosial).
    },
    {
        question: "Menjaga lisan adalah keselamatan. Ghibah (menggunjing) diibaratkan memakan bangkai saudara sendiri karena ...",
        options: [
            "Ghibah membicarakan keburukan orang yang tidak hadir (tidak bisa membela diri), perbuatan yang sangat menjijikkan.",
            "Orang yang dighibahi pasti akan sakit fisik seperti mayat.",
            "Ghibah membuat mulut pelakunya berbau busuk secara harfiah.",
            "Itu hanya kiasan agar orang takut berbicara."
        ],
        correct: 0 // Kunci: Analisis metafora Al-Quran tentang aib.
    },
    {
        question: "Kenapa Islam mengajarkan kita untuk mengucapkan 'Insya Allah' saat berjanji?",
        options: [
            "Agar jika kita ingkar janji, kita tidak berdosa.",
            "Sebagai bentuk kesopanan budaya Arab saja.",
            "Bentuk kesadaran bahwa segala rencana manusia bergantung pada kehendak Allah.",
            "Supaya teman kita tidak terlalu berharap pada janji kita."
        ],
        correct: 2 // Kunci: Tauhid dalam etika berjanji.
    },
    {
        question: "Amanah tidak hanya soal barang titipan, tapi juga jabatan/tugas. Ketua kelas yang amanah adalah ...",
        options: [
            "Yang selalu menuruti semua keinginan teman sekelasnya.",
            "Yang berani melaporkan teman yang salah meskipun itu sahabat dekatnya demi keadilan.",
            "Yang menggunakan uang kas kelas untuk mentraktir teman agar disukai.",
            "Yang mengerjakan semua tugas piket sendirian karena merasa bertanggung jawab."
        ],
        correct: 1 // Kunci: Profesionalisme dan integritas pemimpin.
    },
    {
        question: "Ketika mendengar azan berkumandang saat sedang asyik bermain game online, tindakan yang menunjukkan prioritas akhirat adalah ...",
        options: [
            "Menyelesaikan level game dulu karena tanggung, baru salat.",
            "Menghentikan permainan segera, bersiap ke masjid, dan mengajak teman.",
            "Mematikan suara HP agar tidak mengganggu orang lain, tapi tetap main.",
            "Salat di samping HP agar bisa langsung lanjut main setelah salam."
        ],
        correct: 1 // Kunci: Manajemen prioritas (Ibadah vs Hiburan).
    },
    {
        question: "Berinfak tidak harus menunggu kaya. Manfaat rutin berinfak bagi karakter siswa adalah ...",
        options: [
            "Mengurangi uang jajan sehingga bisa diet.",
            "Melatih sifat kikir dan sombong.",
            "Melatih kepekaan sosial dan mengikis kecintaan berlebih pada harta dunia.",
            "Agar nama kita dicatat di papan pengumuman sekolah."
        ],
        correct: 2 // Kunci: Dampak psikologis/spiritual sedekah.
    },
    {
        question: "Sikap *Istiqomah* (teguh pendirian) dalam kebaikan sangat berat. Contoh istiqomah yang relevan bagi pelajar adalah ...",
        options: [
            "Belajar terus menerus tanpa tidur selama 2 hari.",
            "Selalu menyontek setiap ulangan agar nilainya stabil bagus.",
            "Menjaga rutinitas belajar dan ibadah harian meskipun sedang malas atau libur.",
            "Bersikeras dengan pendapatnya sendiri meskipun salah."
        ],
        correct: 2 // Kunci: Konsistensi dalam hal positif.
    },
    {
        question: "Jika kamu berbeda pendapat dengan teman saat kerja kelompok, sikap demokratis yang Islami (Musyawarah) adalah ...",
        options: [
            "Marah dan keluar dari kelompok.",
            "Memaksa teman menerima pendapat kita karena kita ranking 1.",
            "Mendengarkan pendapat lain, mendiskusikan kelebihan kekurangannya, dan menerima keputusan bersama.",
            "Diam saja dan tidak peduli hasil akhirnya."
        ],
        correct: 2 // Kunci: Etika diskusi (Syura).
    },
    {
        question: "Mensyukuri nikmat akal yang diberikan Allah dapat dilakukan dengan cara ...",
        options: [
            "Menggunakannya untuk memikirkan cara mengalahkan teman.",
            "Menggunakannya untuk merenungi ciptaan Allah dan memecahkan masalah umat.",
            "Mengistirahatkannya dengan banyak tidur.",
            "Membanggakan kecerdasan diri di depan orang bodoh."
        ],
        correct: 1 // Kunci: Optimalisasi potensi diri untuk kemaslahatan.
    }
];

let userAnswers = new Array(questions.length).fill(null);
let quizCompleted = false;
let currentQuestion = 0;

// tambahan untuk kontrol akses mini game
let lastScorePercentage = 0;

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
    lastScorePercentage = percentage; // simpan nilai terakhir

    const scoreDisplay = document.getElementById('score-display');
    
    // Logic Hadiah
    let scoreHTML = `<p class="score-text">Skor Akhir: ${correctCount}/${questions.length} (${percentage}%)</p>`;
    
    // UBAHAN: minimal 80% untuk membuka game
    if (percentage >= 80) {
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
        scoreHTML += `<p>Nilai kamu belum cukup untuk membuka game bonus (Minimal 80%). <br> Jangan menyerah, ulangi kuis dan tingkatkan lagi ya!</p>`;
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
    lastScorePercentage = 0;
    
    document.getElementById('score-display').style.display = 'none';
    document.querySelector('.navigation-container').style.display = 'flex';
    document.getElementById('slide-indicator').style.display = 'flex';
    
    renderQuiz();
    hideAllGames();
}

function hideAllGames() {
    const mg = document.getElementById('memory-game');
    const wp = document.getElementById('word-puzzle');
    const cm = document.getElementById('color-match');
    if (mg) mg.style.display = 'none';
    if (wp) wp.style.display = 'none';
    if (cm) cm.style.display = 'none';
}

function backToScore() {
    hideAllGames();
    const sd = document.getElementById('score-display');
    if (sd) sd.style.display = 'block';
}

// --- FUNGSI PENGAMAN AKSES MINI GAME ---

function canAccessMiniGames() {
    if (!quizCompleted) {
        alert("Selesaikan dulu semua soal kuis sebelum bermain mini game.");
        return false;
    }
    if (lastScorePercentage < 80) {
        alert("Maaf, kamu belum mencapai nilai minimal 80%.\nUlangi kuis dan tingkatkan lagi hasilmu untuk membuka mini game.");
        backToScore();
        return false;
    }
    return true;
}

// --- LOGIKA MINI GAMES ---

// 1. Memory Game
let memoryCards = [];
let flippedCards = [];
let memoryScore = 0;
let memoryTimer = null;
let memoryTime = 0;
const asmaulHusna = ['الرحمن', 'الرحيم', 'الملك', 'القدوس', 'السلام', 'المؤمن', 'المهيمن', 'العزيز'];

function startMemoryGame() {
    // cek hak akses dulu
    if (!canAccessMiniGames()) return;

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
    if (!card) return;

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
    
    if (firstCard && secondCard && memoryCards[first] === memoryCards[second]) {
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
        if (firstCard && secondCard) {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '?';
            secondCard.textContent = '?';
        }
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

function startWordPuzzle() {
    // cek hak akses dulu
    if (!canAccessMiniGames()) return;

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
    // cek hak akses dulu
    if (!canAccessMiniGames()) return;

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
