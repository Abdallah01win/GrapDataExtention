const questionAnswerArray = [
  { question: "What is your name?", answer: "John Doe" },
  { question: "What is your age?", answer: "30" },
  // Add more objects as needed
];

function automateQuestionsAndAnswers() {
  let keepScanning = true;

  while (keepScanning) {
    let foundAnyQuestion = false;

    questionAnswerArray.forEach((qa) => {
      const questionElement = findTextOnPage(qa.question);

      if (questionElement) {
        foundAnyQuestion = true;

        const answerElement = findTextOnPage(qa.answer);

        if (answerElement) {
          console.log(answerElement);
          answerElement.click();

          const nextButton = findTextOnPage("Next");

          if (nextButton) {
            nextButton.click();
          }
        }
      }
    });

    if (!foundAnyQuestion) {
      keepScanning = false;
    }
  }
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

automateQuestionsAndAnswers();
