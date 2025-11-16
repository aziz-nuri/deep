/**
* Template Name: Tempo
* Template URL: https://bootstrapmade.com/tempo-free-onepage-bootstrap-theme/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

})()
/* ==============================================================
   LOGIKA KUIS PAI (Paste di bawah })() pada main.js)
   ============================================================== */

// Cek apakah kita sedang berada di halaman kuis agar tidak error di halaman lain
if (document.getElementById('quiz-container')) {

    // Quiz data
    const quizData = [
        {
            question: "Selain keturunan, apa lagi yang disebut sebagai dasar kesombongan yang tidak disukai Allah Swt.?",
            options: [
                "Kekayaan dan kepangkatan.",
                "Ketaatan beribadah.",
                "Kekuatan fisik dan kecerdasan.",
                "Banyaknya hafalan Al-Qur'an."
            ],
            correctAnswer: 0,
            icon: "💰"
        },
        {
            question: "Sebagai wakil Allah Swt. di bumi, manusia memiliki mandat untuk mengelola kelestarian planet dan...",
            options: [
                "Menaklukkan semua bangsa yang berbeda.",
                "Mencipta suasana harmoni dan damai.",
                "Mengumpulkan kekayaan sebanyak-banyaknya.",
                "Membuktikan bahwa sukunya adalah yang terbaik."
            ],
            correctAnswer: 1,
            icon: "🌍"
        },
        {
            question: "Apa keutamaan spesifik yang akan didapat oleh penghafal Al-Qur'an di akhirat kelak, menurut Al-Qur'an?",
            options: [
                "Mendapat pahala berlipat ganda.",
                "Menjadi raja di surga.",
                "Dibebaskan dari hisab.",
                "Mendapat syafa'at."
            ],
            correctAnswer: 3,
            icon: "📖"
        },
        {
            question: "Allah Swt berfirman. pasti menolong hamba-Nya yang bertekad menghafal Al-Qur'an. Apa bukti yang disebutkan untuk hal ini?",
            options: [
                "Turunnya malaikat untuk membantu.",
                "Mudahnya proses menghafal.",
                "Adanya jaminan masuk surga.",
                "Banyaknya penghafal Al-Qur'an."
            ],
            correctAnswer: 3,
            icon: "🤲"
        },
        {
            question: "Dalam mengelola kekuasaan-Nya sebagai Al-Mālik, Allah Swt. menyeimbangkan antara keadilan, kebaikan, hikmah, maslahat, dan...",
            options: [
                "Kecepatan.",
                "Hukuman.",
                "Rahmat.",
                "Kekuatan."
            ],
            correctAnswer: 2,
            icon: "⚖️"
        },
        {
            question: "Manakah dari perbuatan berikut yang secara spesifik disebut dalam Al-Qur'an sebagai contoh kewenangan Allah Swt. sebagai Al-Mālik?",
            options: [
                "Menjaga kelestarian planet bumi.",
                "Mengangkat dan merendahkan derajat seseorang.",
                "Memberi syafa'at di akhirat.",
                "Memberi rasa aman bagi yang beriman."
            ],
            correctAnswer: 1,
            icon: "👑"
        },
        {
            question: "Arti Al-Quddūs adalah Mahasuci. Al-Qur'an juga menyebutkan bahwa Allah Swt. Mahasuci dari...",
            options: [
                "Keadilan dan hikmah.",
                "Menyamai makhluk dengan-Nya.",
                "Pemberian rezeki.",
                "Pengaturan urusan makhluk."
            ],
            correctAnswer: 1,
            icon: "✨"
        },
        {
            question: "Sebagai konsekuensi dari sifat Al-Quddūs, Allah Swt. adalah satu-satunya...",
            options: [
                "Pemberi rasa aman.",
                "Pemberi rezeki.",
                "Sembahan bagi semua makhluk.",
                "Pencipta manusia."
            ],
            correctAnswer: 2,
            icon: "🕌"
        },
        {
            question: "Selain memberi rasa aman, Al-Mu'min juga mempunyai pengertian bahwa Allah Swt. ...",
            options: [
                "Mengatur kehidupan dan kematian.",
                "Menepati janji-Nya kepada orang beriman.",
                "Tersucikan dari segala kekurangan.",
                "Membalas orang yang zalim."
            ],
            correctAnswer: 1,
            icon: "🛡️"
        },
        {
            question: "Dalam menghadapi keragaman, manusia diminta untuk saling berlapang dada dan...",
            options: [
                "Menjaga jarak agar tidak terjadi konflik.",
                "Berkompetisi untuk membuktikan siapa yang terbaik.",
                "Selalu waspada terhadap perbedaan.",
                "Bertenggang rasa."
            ],
            correctAnswer: 3,
            icon: "🤝"
        },
        {
            question: "Siapakah yang mengatur segala urusan makhluk, kehidupan, dan kematian menurut sifat Al-Mālik?",
            options: [
                "Hukum alam yang berjalan otomatis.",
                "Para malaikat atas perintah Allah Swt.",
                "Allah Swt. sendiri tanpa bantuan.",
                "Manusia sebagai wakil Allah Swt."
            ],
            correctAnswer: 2,
            icon: "🌟"
        },
        {
            question: "Makna Al-Quddūs yang juga ditekankan selain 'tersucikan dari kekurangan' adalah...",
            options: [
                "Mahasuci dari kebutuhan akan sembahan.",
                "Mahasuci dari menyerupai makhluk dengan-Nya.",
                "Mahasuci dari sifat tidak adil.",
                "Mahasuci dari sifat memberi hukuman."
            ],
            correctAnswer: 1,
            icon: "💎"
        },
        {
            question: "Q.S. Al-Ḥujurāt/49:13 menjelaskan bahwa semua manusia pada dasarnya berasal dari...",
            options: [
                "Seorang pria dan seorang wanita.",
                "Leluhur yang tidak diketahui.",
                "Berbagai negara yang berbeda.",
                "Suku yang paling mulia."
            ],
            correctAnswer: 0,
            icon: "👥"
        },
        {
            question: "Apa tujuan utama Allah Swt. menciptakan manusia berbangsa-bangsa dan bersuku-suku?",
            options: [
                "Untuk saling berperang.",
                "Untuk saling mengenal (lita'arafu).",
                "Agar tetap terpisah satu sama lain.",
                "Untuk menentukan siapa yang paling kaya."
            ],
            correctAnswer: 1,
            icon: "🌐"
        },
        {
            question: "Sebagai cerminan sifat Al-Mu'min, apa yang harus kita lakukan?",
            options: [
                "Berusaha menghafal Al-Qur'an.",
                "Berusaha menciptakan keamanan bagi sekitar.",
                "Berusaha menjadi penguasa.",
                "Berusaha untuk suci dari dosa."
            ],
            correctAnswer: 1,
            icon: "🕊️"
        }
    ];

    // Quiz state
    let currentQuestion = 0;
    let answers = {};
    let quizCompleted = false;

    // DOM elements
    const quizContainer = document.getElementById('quiz-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const results = document.getElementById('results');
    const scoreDisplay = document.getElementById('score-display');
    const restartBtn = document.getElementById('restart-btn');
    const reviewBtn = document.getElementById('review-btn');
    const answerReview = document.getElementById('answer-review');
    const reviewContent = document.getElementById('review-content');
    const backToResultsBtn = document.getElementById('back-to-results');
    const progressContainer = document.getElementById('progress-container');
    const navigationContainer = document.getElementById('navigation-container');
    const scoreSummary = document.getElementById('score-summary');

    // Initialize quiz
    function initQuiz() {
        renderQuestion();
        updateProgress();
        updateNavigation();
    }

    // Render current question
    function renderQuestion() {
        const question = quizData[currentQuestion];
        
        quizContainer.innerHTML = `
            <div class="question-card rounded-2xl p-6 md:p-8 shadow-lg fade-in">
                <div class="flex items-start gap-4 mb-6">
                    <div class="icon-container flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-md">
                        ${question.icon}
                    </div>
                    <div class="flex-1">
                        <div class="text-sm font-medium text-purple-600 mb-2">Pertanyaan ${currentQuestion + 1} dari ${quizData.length}</div>
                        <h2 class="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">${question.question}</h2>
                    </div>
                </div>
                
                <div class="space-y-3">
                    ${question.options.map((option, index) => `
                        <button class="option-button w-full p-4 text-left bg-white rounded-xl shadow-sm hover:shadow-md font-medium text-gray-700 ${answers[currentQuestion] === index ? 'selected' : ''}" 
                                onclick="selectAnswer(${index})">
                            <span class="inline-flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-600 rounded-full text-sm font-bold mr-3">${String.fromCharCode(65 + index)}</span>
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Select answer
    // Note: Fungsi ini harus global agar bisa dipanggil oleh onclick di HTML string
    window.selectAnswer = function(optionIndex) {
        answers[currentQuestion] = optionIndex;
        renderQuestion();
        updateNavigation();
    }

    // Update progress
    function updateProgress() {
        const answeredQuestions = Object.keys(answers).length;
        const progress = (answeredQuestions / quizData.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${answeredQuestions}/${quizData.length}`;
    }

    // Update navigation
    function updateNavigation() {
        prevBtn.disabled = currentQuestion === 0;
        
        if (currentQuestion === quizData.length - 1) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
            nextBtn.disabled = answers[currentQuestion] === undefined;
        }
    }

    // Navigation handlers
    if(prevBtn) prevBtn.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            renderQuestion();
            updateNavigation();
        }
    });

    if(nextBtn) nextBtn.addEventListener('click', () => {
        if (currentQuestion < quizData.length - 1 && answers[currentQuestion] !== undefined) {
            currentQuestion++;
            renderQuestion();
            updateNavigation();
        }
    });

    if(submitBtn) submitBtn.addEventListener('click', () => {
        if (answers[currentQuestion] !== undefined) {
            completeQuiz();
        }
    });

    // Show answer review
    function showReview() {
        let reviewHTML = '';
        
        quizData.forEach((question, index) => {
            const userAnswer = answers[index];
            const correctAnswer = question.correctAnswer;
            const isCorrect = userAnswer === correctAnswer;
            
            reviewHTML += `
                <div class="question-card rounded-2xl p-6 shadow-lg mb-4">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="icon-container flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-md">
                            ${question.icon}
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="text-sm font-medium text-gray-600">Soal ${index + 1}</span>
                                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                                    ${isCorrect ? '✓ Benar' : '✗ Salah'}
                                </span>
                            </div>
                            <h4 class="text-lg font-semibold text-gray-800 mb-3">${question.question}</h4>
                        </div>
                    </div>
                    
                    <div class="space-y-2 ml-14">
                        ${question.options.map((option, optIndex) => {
                            let bgClass = 'bg-gray-50';
                            let textClass = 'text-gray-700';
                            let icon = '';
                            
                            if (optIndex === correctAnswer) {
                                bgClass = 'bg-green-100 border-green-300';
                                textClass = 'text-green-800';
                                icon = '✓ ';
                            } else if (optIndex === userAnswer && userAnswer !== correctAnswer) {
                                bgClass = 'bg-red-100 border-red-300';
                                textClass = 'text-red-800';
                                icon = '✗ ';
                            }
                            
                            return `
                                <div class="p-3 rounded-lg border-2 ${bgClass} ${textClass}">
                                    <span class="font-medium">${String.fromCharCode(65 + optIndex)}.</span> ${icon}${option}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        });
        
        reviewContent.innerHTML = reviewHTML;
        scoreSummary.classList.add('hidden');
        answerReview.classList.remove('hidden');
    }

    // Event listeners for results
    if(reviewBtn) reviewBtn.addEventListener('click', showReview);

    if(backToResultsBtn) backToResultsBtn.addEventListener('click', () => {
        answerReview.classList.add('hidden');
        scoreSummary.classList.remove('hidden');
    });

    if(restartBtn) restartBtn.addEventListener('click', () => {
        currentQuestion = 0;
        answers = {};
        quizCompleted = false;
        results.classList.add('hidden');
        answerReview.classList.add('hidden');
        scoreSummary.classList.remove('hidden');
        quizContainer.classList.remove('hidden');
        progressContainer.classList.remove('hidden');
        navigationContainer.classList.remove('hidden');
        initQuiz();
    });

    // Calculate score
    function calculateScore() {
        let correctAnswers = 0;
        for (let i = 0; i < quizData.length; i++) {
            if (answers[i] === quizData[i].correctAnswer) {
                correctAnswers++;
            }
        }
        return correctAnswers;
    }

    // Get grade based on score
    function getGrade(score, total) {
        const percentage = (score / total) * 100;
        if (percentage >= 90) return { grade: 'A', color: 'text-green-600', message: 'Luar biasa!' };
        if (percentage >= 80) return { grade: 'B', color: 'text-blue-600', message: 'Bagus sekali!' };
        if (percentage >= 70) return { grade: 'C', color: 'text-yellow-600', message: 'Cukup baik!' };
        if (percentage >= 60) return { grade: 'D', color: 'text-orange-600', message: 'Perlu belajar lagi!' };
        return { grade: 'E', color: 'text-red-600', message: 'Harus lebih giat belajar!' };
    }

    // Complete quiz
    function completeQuiz() {
        quizCompleted = true;
        const correctScore = calculateScore();
        const totalQuestions = quizData.length;
        const percentage = Math.round((correctScore / totalQuestions) * 100);
        const gradeInfo = getGrade(correctScore, totalQuestions);
        
        quizContainer.classList.add('hidden');
        progressContainer.classList.add('hidden');
        navigationContainer.classList.add('hidden');
        results.classList.remove('hidden');
        
        // Update results display
        scoreDisplay.innerHTML = `
            <div class="space-y-2">
                <div class="text-4xl font-bold ${gradeInfo.color}">${correctScore}/${totalQuestions}</div>
                <div class="text-2xl font-bold ${gradeInfo.color}">Nilai: ${gradeInfo.grade}</div>
                <div class="text-lg text-gray-600">${percentage}% - ${gradeInfo.message}</div>
            </div>
        `;
    }

    // Start Quiz
    initQuiz();
}
