const quizData = [
  {
    question: "Which of these is a sign of a phishing email?",
    options: [
      "Email from your known friend",
      "Email asking to verify your password urgently",
      "Newsletter from a subscribed website",
      "Email with correct grammar and no links"
    ],
    answer: 1
  },
  {
    question: "What should you do if you receive a suspicious email with a link?",
    options: [
      "Click the link immediately",
      "Ignore and delete the email",
      "Reply asking for more info",
      "Forward it to your friends"
    ],
    answer: 1
  },
  {
    question: "Phishing attempts usually try to steal:",
    options: [
      "Personal information like passwords",
      "Your favorite movie list",
      "The weather forecast",
      "A website's logo"
    ],
    answer: 0
  },
  {
    question: "What is a good way to protect yourself from phishing?",
    options: [
      "Sharing your password with trusted friends",
      "Using two-factor authentication",
      "Clicking every link you get",
      "Using the same password everywhere"
    ],
    answer: 1
  },
  {
    question: "If an email has a suspicious attachment, you should:",
    options: [
      "Open it to see what's inside",
      "Download and run it if it looks safe",
      "Delete it or scan with antivirus",
      "Forward it to colleagues"
    ],
    answer: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const submitBtn = document.getElementById('submitBtn');
const resultEl = document.getElementById('result');

function loadQuestion() {
  resultEl.textContent = '';
  const currentQuiz = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuiz.question;
  optionsEl.innerHTML = '';
  currentQuiz.options.forEach((option, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<label><input type="radio" name="answer" value="${index}"> ${option}</label>`;
    optionsEl.appendChild(li);
  });
}

submitBtn.addEventListener('click', () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert('Please select an answer.');
    return;
  }
  const answer = parseInt(selected.value);

  if (answer === quizData[currentQuestionIndex].answer) {
    score++;
    resultEl.textContent = `Correct! Score: ${score}`;
    resultEl.style.color = "green";

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      setTimeout(() => {
        loadQuestion();
      }, 1000);
    } else {
      showFinalScore();
    }
  } else {
    resultEl.textContent = `Wrong answer! Game Over. Your final score: ${score}`;
    resultEl.style.color = "red";
    submitBtn.disabled = true; // Disable button after wrong answer
    optionsEl.innerHTML = '';
    questionEl.textContent = 'Quiz Ended!';
  }
});

function showFinalScore() {
  questionEl.textContent = 'Quiz Completed!';
  optionsEl.innerHTML = '';
  submitBtn.style.display = 'none';
  resultEl.textContent = `Your final score: ${score}/${quizData.length}`;
  resultEl.style.color = "blue";
}

loadQuestion();
