let questionAnswerArray = [
  { question: "What is your name?", answer: "John Doe" },
  { question: "What is your age?", answer: "30" },
  // Add more objects as needed
];

function automateQuestionsAndAnswers() {
  let questionsAnswered = 0;

  questionAnswerArray.forEach((qa) => {
    const questionElement = findTextOnPage(qa.question);

    if (questionElement) {
      const answerElement = findTextOnPage(qa.answer);

      if (answerElement) {
        answerElement.firstChild.firstChild.click();

        const nextButton = findTextOnPage("Next");

        if (nextButton) {
          nextButton.click();
          questionsAnswered++;

          setTimeout(() => {}, 2000);
        }
      }
    }
  });

  return questionsAnswered;
}

function findTextOnPage(text) {
  const elements = document.querySelectorAll("body *");

  for (const element of elements) {
    if (element.textContent.trim() === text) {
      return element;
    }
  }
  return null;
}

let = emptyIterationsCount = 0;

while (true) {
  const questionsAnswered = automateQuestionsAndAnswers();

  if (questionsAnswered > 0) {
    emptyIterationsCount = 0;
  } else {
    emptyIterationsCount++;
  }

  if (emptyIterationsCount > 3) {
    break;
  }
}
