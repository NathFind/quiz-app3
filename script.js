"use strict";

// Données de la question (Sprint A : question écrite à la main).
const question = {
  text: "Quel langage s'exécute nativement dans le navigateur web ?",
  choices: [
    { label: "JavaScript", correct: true },
    { label: "Python", correct: false },
    { label: "Java", correct: false },
    { label: "C++", correct: false },
  ],
};

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");

// Affiche la question et construit un bouton par choix de réponse.
function renderQuiz() {
  questionEl.textContent = question.text;
  choicesEl.innerHTML = "";
  feedbackEl.textContent = "";

  question.choices.forEach((choice) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.textContent = choice.label;
    button.addEventListener("click", () => handleAnswer(choice, button));

    li.appendChild(button);
    choicesEl.appendChild(li);
  });
}

// Gère le clic sur un choix et affiche le retour immédiat.
function handleAnswer(choice, button) {
  const allButtons = choicesEl.querySelectorAll("button");
  allButtons.forEach((btn) => {
    btn.disabled = true;
  });

  if (choice.correct) {
    button.classList.add("choice--correct");
    feedbackEl.textContent = "Correct !";
    feedbackEl.className = "quiz__feedback quiz__feedback--correct";
  } else {
    button.classList.add("choice--incorrect");
    feedbackEl.textContent = "Incorrect.";
    feedbackEl.className = "quiz__feedback quiz__feedback--incorrect";

    // Met aussi en évidence la bonne réponse.
    allButtons.forEach((btn, index) => {
      if (question.choices[index].correct) {
        btn.classList.add("choice--correct");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", renderQuiz);
