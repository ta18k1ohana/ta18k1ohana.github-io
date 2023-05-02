const questions = [
  "あなたの好きな食べ物は何ですか？",
  "最後に読んだ本は何ですか？",
  "あなたの趣味は何ですか？",
  "好きな映画は何ですか？",
  "どんな音楽が好きですか？",
  "あなたの夢の仕事は何ですか？",
  "最高の休日はどんなものですか？",
  "もしタイムマシンがあったら、どの時代に行きたいですか？",
  "どのようなスポーツが好きですか？",
  "あなたのお気に入りの季節は何ですか？",
  "もし異世界ファンタジーに行けるなら、職業は何を選ぶ？",   
  "もし自分が巨大ロボットを操縦できるとしたら、どんなロボットに乗りたい？",
  "もし映画のワンシーンを実際に体験できるとしたら、どのシーンを選ぶ？", 
  "もし自分が料理対決番組に出場するとしたら、どんな料理を作りたい？",
  "もし自分がお金持ちになったら、どんな夢のマイホームを建てたい？",
  "大企業たいやき.incが出資してくれたらどんな商品/サービスを作る？"
  
];

function getRandomQuestions(numQuestions) {
  const selectedQuestions = [];
  const questionList = [...questions];

  for (let i = 0; i < numQuestions && questionList.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * questionList.length);
      const question = questionList.splice(randomIndex, 1)[0];
      selectedQuestions.push(question);
  }

  return selectedQuestions;
}

document.getElementById("generate-questions").addEventListener("click", () => {
  const randomQuestions = getRandomQuestions(15);
  const questionList = document.getElementById("question-list");
  questionList.innerHTML = "";

  randomQuestions.forEach((question, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${index + 1}. ${question}`;
      questionList.appendChild(listItem);
  });
});
let currentQuestionIndex = 0;
let randomQuestions = [];

function displayQuestion(index) {
  const questionListLeft = document.getElementById("question-list-left");
  const questionListCenter = document.getElementById("question-list-center");
  const currentQuestion = document.getElementById("current-question");
  questionListLeft.innerHTML = "";
  questionListCenter.innerHTML = "";

  currentQuestion.textContent = `${index + 1}. ${randomQuestions[index]}`;

  for (let i = 0; i < index; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `${i + 1}. ${randomQuestions[i]}`;
      if (i < 7) {
          questionListLeft.appendChild(listItem);
      } else {
          questionListCenter.appendChild(listItem);
      }
  }
}


document.getElementById("generate-questions").addEventListener("click", () => {
    randomQuestions = getRandomQuestions(15);
    currentQuestionIndex = 0;
    displayQuestion(currentQuestionIndex);
});

document.getElementById("next-question").addEventListener("click", () => {
    if (currentQuestionIndex < randomQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
});

document.getElementById("prev-question").addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
});
