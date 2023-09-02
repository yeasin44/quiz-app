const data = [
  {
    id: 1,
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answers: [
      {
        answer: "var",
        isCorrect: false,
      },
      {
        answer: "let",
        isCorrect: false,
      },
      {
        answer: "Both A & B",
        isCorrect: true,
      },
      {
        answer: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    answers: [
      {
        answer: "getElementById()",
        isCorrect: false,
      },
      {
        answer: "getElementsByClassName()",
        isCorrect: false,
      },
      {
        answer: "Both A & B",
        isCorrect: true,
      },
      {
        answer: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    answers: [
      {
        answer: "Throws an error",
        isCorrect: false,
      },
      {
        answer: "Ignores the statements",
        isCorrect: true,
      },
      {
        answer: "Gives a warning",
        isCorrect: false,
      },
      {
        answer: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    answers: [
      {
        answer: "document.write()",
        isCorrect: false,
      },
      {
        answer: "Console.log()",
        isCorrect: false,
      },
      {
        answer: "Window.alert()",
        isCorrect: false,
      },
      {
        answer: "All of the above",
        isCorrect: true,
      },
    ],
  },
  {
    id: 5,
    question: "How can a datatype be declared to be a constant type?",
    answers: [
      {
        answer: "const",
        isCorrect: true,
      },
      {
        answer: "var",
        isCorrect: false,
      },
      {
        answer: "let",
        isCorrect: false,
      },
      {
        answer: "constant",
        isCorrect: false,
      },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

// To display

const showQuestion = (qNumber) => {
  // To display the questions
  question.textContent = data[qNumber].question;

  //   To display the answers
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
    <div class="answer">
         <input name="answer" type="radio" value=${item.isCorrect} id=${index} />
          <label for="1">${item.answer}</label>
    </div>
    `
    )
    .join("");

  selectAnswer();
};

// To take the inputs
const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer(e.target.value);
    });
  });
};

showQuestion(qIndex);
