(function () {
    function Question(question, answer, correct) {
        this.question = question;
        this.correct = correct;
        this.answer = answer;
    }
    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answer.length; i++) {
            console.log(i + ' : ' + this.answer[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('correct answer!');
            sc = callback(true);
        }
        else {
            console.log('wrong answer ! Plz try again ');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    Question.prototype.displayScore = function (score) {
        console.log('Your Current Score is:' + score);
        console.log('--------------------------------------');
    }

    var q1 = new Question('who is god of cricket ?',
        ['Don Bradmen', 'Sachin Tendulkar', 'Richards'],
        1);
    var q2 = new Question('who is second highest century in the world ?',
        ['Ricky Ponting', 'Sachin Tendulkar', 'Virat Kohli'],
        2);
    var q3 = new Question('who is most lifted wrold cup by any indian caption ?',
        ['virat kohli', 'dhoni', 'Saurav Ganguly'],
        1);

    var question = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * question.length);
        question[n].displayQuestion();

        var answer = prompt('plz select corret Answer..!');

        if (answer !== 'exit') {
            question[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();
