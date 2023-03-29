//soru içerikleri
const quizData = [
  {
    question: "Uranüsün kaç tane uydusu vardır?",
    a: "27",
    b: "30",
    c: "25",
    d: "42",
    e: "33",
    correct: "a",
  },
  {
    question: "İki meridyen arası kaç dakikadır?",
    a: "5",
    b: "6",
    c: "4",
    d: "10",
    e: "2",
    correct: "c",
  },
  {
    question: "Dünyanın Güneşe uzaklığı kaç milyon kilometredir?",
    a: "102,300",
    b: "200,135",
    c: "150,298",
    d: "133,981",
    e: "149,597",
    correct: "e",
  },
  {
    question: "Dünya Güneş etrafındaki dönüşünü kaç saatte tamamlar?",
    a: "9475 saat",
    b: "2324 saat",
    c: "6375 saat",
    d: "8765 saat",
    e: "7549 saat",
    correct: "d",
  },
  {
    question: "Dünyanın eksen eğikliği kaç derecedir?",
    a: "22°27'",
    b: "23°26'",
    c: "25°29'",
    d: "21°20'",
    e: "19°26'",
    correct: "b",
  },
];
// soru içerikleri bitti

//soru içeriklerine html tarafından atama

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// soruların şıklarına htmldn atama
loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  deselectedAnswer();

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectedAnswer() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2> Test tamamlandı, ${score * 20} puan aldınız🥳🏆​​ </h2>
      <button class="submit" onClick="location.reload()"> Tekrar Dene 🔃🏆  </button>
    `;
    }
  }
});
