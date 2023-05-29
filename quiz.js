var quizQuestions = [
  {
    question: '세계에서 가장 큰 바다는?',
    answer: '태평양',
    score: 1,
  },
  {
    question: '지구에서 가장 큰 대륙은?',
    answer: '아시아',
    score: 1,
  },
  {
    question: '우리나라의 수도는?',
    answer: '서울',
    score: 1,
  },
];

var currentQuestionIndex = 0;
var totalScore = 0;
var wrongAnswers = [];

function loadQuestion() {
  var currentQuestion = quizQuestions[currentQuestionIndex];

  document.getElementById('quizQuestion').innerHTML = currentQuestion.question;
  document.getElementById('userAnswer').value = '';
  document.getElementById('result').innerHTML = '';
  document.getElementById('score').innerHTML = '현재 점수: ' + totalScore;
}

function checkAnswer() {
  var currentQuestion = quizQuestions[currentQuestionIndex];
  var userAnswer = document.getElementById('userAnswer').value;

  if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
    totalScore += currentQuestion.score;
    document.getElementById('result').innerHTML =
      '정답입니다! 현재 점수: ' + totalScore;
  } else {
    totalScore = 0;
    wrongAnswers.push({
      question: currentQuestion.question,
      userAnswer: userAnswer,
      correctAnswer: currentQuestion.answer,
    });
    document.getElementById('result').innerHTML =
      '틀렸습니다. 정답은 ' +
      currentQuestion.answer +
      '입니다. 현재 점수: ' +
      totalScore;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('finalScore').innerHTML =
      '맞춘 갯수: ' + totalScore + '개';
    document.getElementById('finalScoreContainer').style.display = 'block';
    document.getElementById('wrongAnswers').innerHTML = getWrongAnswers();
  }
}

function getWrongAnswers() {
  var result = '<h3>틀린 답안:</h3>';
  for (var i = 0; i < wrongAnswers.length; i++) {
    result += '<p>문제: ' + wrongAnswers[i].question + '<br>';
    result += '사용자 답안: ' + wrongAnswers[i].userAnswer + '<br>';
    result += '정답: ' + wrongAnswers[i].correctAnswer + '</p>';
  }
  return result;
}

window.onload = function () {
  loadQuestion();
};
