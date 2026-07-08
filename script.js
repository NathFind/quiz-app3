// Données de la question du quiz
const quizData = {
  question: "Quel langage s'exécute nativement dans le navigateur ?",
  choices: ["Python", "JavaScript", "C++", "Java"],
  answerIndex: 1,
};

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");

// Affiche la question et ses choix au chargement de la page
function renderQuiz() {
  questionEl.textContent = quizData.question;
  choicesEl.innerHTML = "";
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";

  quizData.choices.forEach((choice, index) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.textContent = choice;
    button.addEventListener("click", () => handleAnswer(index, button));

    li.appendChild(button);
    choicesEl.appendChild(li);
  });
}

// Gère le clic sur un choix et affiche un retour immédiat
function handleAnswer(index, button) {
  const isCorrect = index === quizData.answerIndex;
  const buttons = choicesEl.querySelectorAll(".choice");

  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  if (isCorrect) {
    button.classList.add("choice--correct");
    feedbackEl.textContent = "Correct !";
    feedbackEl.className = "feedback feedback--correct";
  } else {
    button.classList.add("choice--incorrect");
    buttons[quizData.answerIndex].classList.add("choice--correct");
    feedbackEl.textContent = "Incorrect";
    feedbackEl.className = "feedback feedback--incorrect";
  }
}

renderQuiz();
