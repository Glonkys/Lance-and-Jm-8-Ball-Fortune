function getAnswer() {
    var question = document.getElementById("question").value;

    var answers = [
        "Meron pero dipinde",
        "Wala syempre",
        "baka may pag asa",
        "Baka meron PA",
        "Wag muna subukan masisira buhay mo",
        "wala na yan wag muna pilit",
        "Wag kana umasa",
        "Better luck next life"
    ];

    if (question == "") {
        document.getElementById("answer").innerHTML = "!";
    } else {
        var random = Math.floor(Math.random() * answers.length);
        document.getElementById("answer").innerHTML = answers[random];
    }
 answer.classList.add("thinking");

    setTimeout(() => {
        const randomAnswer = answers[
            Math.floor(Math.random() * answers.length)
        ];

        answer.textContent = randomAnswer;
        answer.classList.remove("thinking");
    }, 400);
}
