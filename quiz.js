var quizQuestions = [
  {
    question: '[O.X퀴즈] 중고 IT기기는 포멧 1번 후 판매하면 안전하지 않다',
    answer: 'O',
    score: 1,
  },
  {
    question: '[O.X퀴즈] 자성을 통한 디가우징 후 다시 사용할 수 있다',
    answer: 'X',
    score: 1,
  },
  {
    question:
      '[O.X퀴즈] 컴퓨터에서 파일을 삭제 할 때 휴지통에서 한 번 더 삭제하면 그 직후에도 복구할 수 없다',
    answer: 'X',
    score: 1,
  },
  {
    question:
      '디스크의 모든 공간을 소프트웨어를 통해 임의의 데이터로 덮어씀으로써 기존 데이터를 복원하지 못하도록 하는 안티포렌식 기법의 이름은?',
    answer: '이레이징',
    score: 1,
  },
  {
    question: '□□ □□□은 데이터 정보를 복원하는 것이다',
    answer: '안티 포렌식',
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
