/* ========== QUESTIONS ========== */
var allQuestions = {
  html: [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Markup Language", "Hyper Tool Multi Language"], correct: 0 },
    { question: "Which tag is used for the largest heading?", options: ["<heading>", "<h6>", "<h1>", "<head>"], correct: 2 },
    { question: "Which attribute sets alternate text for an image?", options: ["title", "alt", "src", "longdesc"], correct: 1 },
    { question: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], correct: 1 },
    { question: "Which tag defines an unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], correct: 0 },
    { question: "Where should the <meta> tag be placed?", options: ["Inside <body>", "Inside <head>", "Outside <html>", "Before <!DOCTYPE>"], correct: 1 },
    { question: "Which element defines navigation links?", options: ["<nav>", "<section>", "<header>", "<menu>"], correct: 0 },
    { question: "How to write a comment in HTML?", options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"], correct: 1 },
    { question: "Which element embeds audio?", options: ["<sound>", "<audio>", "<track>", "<media>"], correct: 1 },
    { question: "Which tag displays an image?", options: ["<img>", "<image>", "<pic>", "<src>"], correct: 0 },
    { question: "Open link in new tab attribute?", options: ["target='_blank'", "new='true'", "tab='new'", "open='new'"], correct: 0 },
    { question: "Tag to group form controls and labels?", options: ["<fieldset>", "<group>", "<formgroup>", "<controls>"], correct: 0 },
    { question: "Which element is semantic for article content?", options: ["<article>", "<div>", "<span>", "<section>"], correct: 0 },
    { question: "Line break tag?", options: ["<br>", "<break>", "<lb>", "<newline>"], correct: 0 },
    { question: "Footer tag is?", options: ["<bottom>", "<section-footer>", "<footer>", "<foot>"], correct: 2 }
  ],

  css: [
    { question: "Which property changes text color?", options: ["font-color", "color", "text-color", "fg-color"], correct: 1 },
    { question: "Select element with id 'main'?", options: ["#main", ".main", "main", "*main"], correct: 0 },
    { question: "Property for space inside an element?", options: ["margin", "padding", "border", "gap"], correct: 1 },
    { question: "Which display places items horizontally by default?", options: ["block", "inline", "flex", "grid"], correct: 2 },
    { question: "How to set background image in CSS?", options: ["background-image: url('img.png')", "bg: 'img.png'", "image: url('img.png')", "background: image('img.png')"], correct: 0 },
    { question: "What does 'px' mean?", options: ["percentage", "pixels", "points", "padding-x"], correct: 1 },
    { question: "Property to round corners?", options: ["corner-radius", "border-radius", "radius", "round"], correct: 1 },
    { question: "How to center a block horizontally?", options: ["margin: 0 auto;", "text-align:center;", "align:center;", "justify:center;"], correct: 0 },
    { question: "Property to change font size?", options: ["text-size", "font-size", "size", "letter-size"], correct: 1 },
    { question: "Selector matching p inside div?", options: ["div > p", "div p", ".div p", "p div"], correct: 1 },
    { question: "Make text bold in CSS?", options: ["font-weight: bold;", "text-style:bold;", "font:bold;", "weight:bold;"], correct: 0 },
    { question: "Add space between flex items?", options: ["flex-gap", "gap", "item-gap", "space-between"], correct: 1 },
    { question: "Which property sets stacking order?", options: ["order", "z-index", "stack", "layer"], correct: 1 },
    { question: "Unit relative to root font-size?", options: ["em", "rem", "vh", "vw"], correct: 1 },
    { question: "Make element invisible but keep space?", options: ["display:none;", "visibility:hidden;", "opacity:0;", "hidden:true;"], correct: 1 }
  ],

  js: [
    { question: "Which keyword declares a block-scoped variable?", options: ["var", "let", "function", "global"], correct: 1 },
    { question: "What does '===' check?", options: ["Value equality", "Type equality", "Value and type equality", "Assignment"], correct: 2 },
    { question: "Convert JSON string to object?", options: ["JSON.stringify()", "JSON.parse()", "toJSON()", "parseJSON()"], correct: 1 },
    { question: "typeof [] returns?", options: ["array", "object", "list", "undefined"], correct: 1 },
    { question: "Best loop to iterate over array values?", options: ["for", "for...in", "for...of", "while"], correct: 2 },
    { question: "Which array method adds item to end?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0 },
    { question: "Access element with id 'app'?", options: ["getElementById('app')", "querySelector('#app')", "Both A and B", "getElement('app')"], correct: 2 },
    { question: "String method to change case?", options: ["toUpperCase()", "upperCase()", "changeCase()", "uppercase()"], correct: 0 },
    { question: "Result of 5 + '5'?", options: ["10", "55", "Error", "NaN"], correct: 1 },
    { question: "Keywords for async with promises?", options: ["async", "await", "promise", "both async and await"], correct: 3 },
    { question: "Operator that allows type coercion equality?", options: ["===", "!==", "==", "="], correct: 2 },
    { question: "Method to add element at start of array?", options: ["shift()", "unshift()", "push()", "concat()"], correct: 1 },
    { question: "Which stores key-value pairs?", options: ["Map", "Object", "Array", "Set"], correct: 1 },
    { question: "Event when DOM finishes loading?", options: ["load", "DOMContentLoaded", "ready", "init"], correct: 1 },
    { question: "console.log(typeof null) prints?", options: ["null", "object", "undefined", "error"], correct: 1 }
  ]
};

/* ========== VARIABLES ========== */
var subject = "";
var questions = [];
var currentIndex = 0;
var score = 0;
var selectedIndex = -1;

/* ========== DOM ELEMENTS ========== */
var selector = document.getElementById("selector");
var quizArea = document.getElementById("quizArea");
var subjectLabel = document.getElementById("subjectLabel");
var progressLabel = document.getElementById("progressLabel");
var questionText = document.getElementById("questionText");
var optionsList = document.getElementById("optionsList");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

/* ========== TOPIC SELECTION ========== */
document.querySelectorAll(".select-card").forEach(function (card) {
  card.addEventListener("click", function () {
    var sub = card.getAttribute("data-subject");
    localStorage.setItem("quizLanguage", sub);
    startQuiz(sub);
  });
});

function startQuiz(sub) {
  subject = sub;
  questions = allQuestions[subject].slice();
  currentIndex = 0;
  score = 0;

  // ✅ Hide "choose topic" section
  document.getElementById("titleBlock").style.display = "none";
  selector.style.display = "none";

  quizArea.classList.remove("hidden");
  subjectLabel.textContent = subject.toUpperCase();
  progressLabel.textContent = "Question 1 / " + questions.length;
  renderQuestion();
}

/* ========== QUIZ LOGIC ========== */
function renderQuestion() {
  selectedIndex = -1;
  nextBtn.disabled = true;

  var q = questions[currentIndex];
  questionText.textContent = q.question;
  optionsList.innerHTML = "";

  q.options.forEach(function (opt, i) {
    var btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.setAttribute("data-index", i);
    btn.addEventListener("click", function () {
      selectOption(i, btn);
    });
    optionsList.appendChild(btn);
  });

  progressLabel.textContent = "Question " + (currentIndex + 1) + " / " + questions.length;
  prevBtn.disabled = (currentIndex === 0);
  nextBtn.textContent = (currentIndex === questions.length - 1) ? "Submit" : "Next";
}

function selectOption(idx, btn) {
  optionsList.querySelectorAll(".option-btn").forEach(b => b.classList.remove("option-selected"));
  btn.classList.add("option-selected");
  selectedIndex = idx;
  nextBtn.disabled = false;
}

function showAnswerAndMove() {
  var correctIdx = questions[currentIndex].correct;
  var btns = optionsList.querySelectorAll(".option-btn");
  btns.forEach(function (btn) {
    btn.disabled = true;
    var idx = parseInt(btn.getAttribute("data-index"));
    if (idx === correctIdx) btn.classList.add("option-correct");
    else if (idx === selectedIndex) btn.classList.add("option-wrong");
  });

  // ✅ Score calculation fix
  if (selectedIndex === correctIdx) score++;

  setTimeout(function () {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      finishQuiz();
    }
  }, 600);
}

nextBtn.addEventListener("click", function () {
  if (selectedIndex === -1) return;
  showAnswerAndMove();
});

prevBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

/* ========== SAVE & REDIRECT ========== */
function finishQuiz() {
  // Prepare result object
  var quizLanguage = localStorage.getItem("quizLanguage");
  var result = {
    subject: subject,
    score: score,
    total: questions.length,
    date: new Date().toISOString()
  };

  // Save last result
  localStorage.setItem("quizResult", JSON.stringify(result));

  // Save result history
  var allResults = JSON.parse(localStorage.getItem("allResults")) || [];
  allResults.push(result);
  localStorage.setItem("allResults", JSON.stringify(allResults));


  // Redirect once (important)
  localStorage.setItem("correct", score);
  localStorage.setItem("total", questions.length); // or 15 if fixed
  window.location.href = "results.html";
}

/* ========== KEYBOARD SUPPORT ========== */
document.addEventListener("keydown", function (e) {
  if (!quizArea.classList.contains("hidden")) {
    if ((e.key === "Enter" || e.key === " ") && !nextBtn.disabled) {
      e.preventDefault();
      nextBtn.click();
    }
  }
});




