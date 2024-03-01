// Elemente aus dem HTML-Dokument auswählen
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.btn');
const nextButton = document.getElementById('next-button');
const resultButton = document.getElementById('result-button');
const restartButton = document.getElementById('restart-button');

// Daten für das Quiz (Fragen und Antworten)
const quizData = [
  {
    question: "01. What is the capital of Germany",
    answers: [
      { text: "Hamburg", correct: false },
      { text: "Berlin", correct: true },
      { text: "Frankfurt", correct: false },
      { text: "Munich", correct: false }
    ]
  },

  {
    question: "02. What is the capital of Turkey",
    answers: [
      { text: "Ankara", correct: true },
      { text: "Istanbul", correct: false },
      { text: "Antalya", correct: false },
      { text: "Izmir", correct: false }
    ]
  },

  {
    question: "03. What is the capital of Poland",
    answers: [
      { text: "Krakow", correct: false },
      { text: "Lodz", correct: false },
      { text: "Warsaw", correct: true },
      { text: "Wroclaw", correct: false }
    ]
  },

  {
    question: "04. What is the capital of England",
    answers: [
      { text: "Liverpool", correct: false },
      { text: "Manchester", correct: false },
      { text: "Birmingham", correct: false },
      { text: "London", correct: true }
    ]
  },

  {
    question: "05. What is the capital of Russland",
    answers: [
      { text: "Moskau", correct: true },
      { text: "Sankt Petersburg", correct: false },
      { text: "Nowosibirsk", correct: false },
      { text: "Jekaterinburg", correct: false }
    ]
  },

  {
    question: "06. What is the capital of Frankreich",
    answers: [
      { text: "Paris", correct: true },
      { text: "Marseille", correct: false },
      { text: "Lyon", correct: false },
      { text: "Toulouse", correct: false }
    ]
  },

  {
    question: "07. What is the capital of Spain",
    answers: [
      { text: "Barcelona", correct: false },
      { text: "Madrid", correct: true },
      { text: "Valencia", correct: false },
      { text: "Sevilla", correct: false }
    ]
  },

  {
    question: "08. What is the capital of Italien",
    answers: [
      { text: "Mailand", correct: false },
      { text: "Rom", correct: true },
      { text: "Neapel", correct: false },
      { text: "Turin", correct: false }
    ]
  },

  {
    question: "09. What is the capital of Schweden",
    answers: [
      { text: "Goeteborg", correct: false },
      { text: "Malmoe", correct: false },
      { text: "Stockholm", correct: true },
      { text: "Uppsala", correct: false }
    ]
  },

  {
    question: "10. What is the capital of Norwegen",
    answers: [
      { text: "Bergen", correct: false },
      { text: "Stavanger", correct: false },
      { text: "Trondheim", correct: false },
      { text: "Oslo", correct: true }
    ]
  },
];

let currentQuestion = 0; // Aktuelle Frage
let correctAnswers = 0; // Anzahl der richtig beantworteten Fragen
let wrongAnswers = 0; // Anzahl der falsch beantworteten Fragen

// Funktion zum Anzeigen der aktuellen Frage
function showQuestion() {
  const question = quizData[currentQuestion];
  questionText.innerText = question.question;

// Antwortbuttons aktualisieren
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].innerText = question.answers[i].text;
    answerButtons[i].style.backgroundColor = 'white'; // Hintergrundfarbe auf weiß setzen
    answerButtons[i].disabled = false; // Antwortbuttons aktivieren
    answerButtons[i].addEventListener('click', checkAnswer); // Eventlistener für die Antwortbuttons hinzufügen
  }

    nextButton.style.display = 'none'; // "Weiter"-Button ausblenden
    resultButton.style.display = 'none'; // "Ergebnis"-Button ausblenden 
}

// Funktion zum Überprüfen der ausgewählten Antwort
function checkAnswer() {
  const selectedButton = event.target;
  const question = quizData[currentQuestion];

  if (question.answers.find(answer => answer.correct).text === selectedButton.innerText) {
// Wenn die ausgewählte Antwort korrekt ist
    selectedButton.style.backgroundColor = 'green'; // Hintergrundfarbe grün setzen
    correctAnswers++; // Anzahl der richtigen Antworten erhöhen
  } else {
// Wenn die ausgewählte Antwort falsch ist
    selectedButton.style.backgroundColor = 'red'; // Hintergrundfarbe rot setzen
    wrongAnswers++; // Anzahl der falschen Antworten erhöhen
  }

// Alle Antwortbuttons deaktivieren
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].disabled = true;
  }

  nextButton.style.display = 'block';

// Überprüfen, ob weitere Fragen vorhanden sind
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++; // "Weiter"-Button anzeigen
  } else {
    resultButton.style.display = 'block'; // "Ergebnis"-Button anzeigen
  }
}

// Funktion zum Anzeigen des Quiz-Ergebnisses
function showResult() {
  const totalQuestions = quizData.length;
  const resultText = `Du hast ${correctAnswers} von ${totalQuestions} Fragen richtig beantwortet.`;
  questionText.innerText = resultText;

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].style.display = 'none';
  }

  nextButton.style.display = 'none'; // "Weiter"-Button ausblenden
  resultButton.style.display = 'none'; // "Ergebnis"-Button ausblenden

  function restartQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    showQuestion();
  }
  
  nextButton.addEventListener('click', () => {
    showQuestion();
  });

// Antwortbuttons ausblenden
  for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].style.display = 'none';
      }
}
    
// Eventlistener für den "Weiter"-Button hinzufügen
    nextButton.addEventListener('click', () => {
    currentQuestion; // Auf die nächste Frage vorrücken
    showQuestion(); // Nächste Frage anzeigen
    });

// Eventlistener für den "Ergebnis"-Button hinzufügen
    resultButton.addEventListener('click', showResult);
    restartButton.addEventListener('click', restartQuiz);
    
// Quiz starten
    showQuestion();