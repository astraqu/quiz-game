document.addEventListener("DOMContentLoaded", function () {
    const quizText = document.getElementById("quizText");
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");
    const miniWindow = document.getElementById("miniWindow");
    const doneButton = document.getElementById("whenDone");

    const letterText = 'Кириля я тебя очинь, очинь люблю и знаю что дальше наши отношения будут становится только лучше и крепче ❤️ мне очень повезло что у меня такой самый умный и красивый парень, а также БУДУЩИЙ СОЗДАТЕЛЬ ИГРЫЫЫ самой настоящей😱😱, я в тебя верю и держу кулачки что б стал самым крутым сиси шарпером ехехех'
    let index = 0;

    function typeText(letterBox, loveLetter) {
        if (index < letterText.length) {
            loveLetter.textContent += letterText.charAt(index);
            index++;
            setTimeout(() => typeText(letterBox, loveLetter), 50); 
        }
    }

    const quizSteps = [
        //0
        {
            question: "Do You Love Me?",
            answers: ["no", "yes"],
            next: [1, 2]
        },
        //1
        {
            question: "НЕПРАВДА!!!",
            answers: ["хахахахаха, просто шучу", "правда..."],
            next: [3, 4] 
        },
        //2
        {
            question: "Ты будешь любить меня вечно?",
            answers: ["немного!", "навсегда и навеки!"],
            next: [4, 9] 
        },
        //3
        {
            question: "Ты такой смешной 💖",
            answers: ["спасибо", "да"],
            next: [6] 
        },
        //4
        {
            question: "Ты что, офигел, блоха??!",
            answers: ["ты воняешь", "ладно, люблю очень"],
            next: [7, 5] 
        },
        //5
        {
            question: "💖 Ура! Я тоже тебя люблю! 💖",
            answers: ["я пошутил", "умрём вместе в гробу, Hello Kitty"],
            next: [7, 8]
        },
        //6
        {
            question: 'НЕ ОЧЕНЬ >:(',
            answers: ['заново'],
            next: [0]
        },
        //7
        {
            question: 'Я болею, это ты воняешь',
            answers: ['да, я воняю', 'Кирилл воняет'],
            next: [3, 3]
        },
        //8
        {
            question: '💖💖💖 ЭТО ТАК МИЛО 💖💖💖',
            answers: ['💖', '💖'],
            next: [0]
        },
        //9
        {
            question: 'Я ТАК РАДА!',
            answers: ['я не рад', 'СЧАСТЬЕ-СЧАСТЬЕ-СЧАСТЬЕ!!!'],
            next: [4, 10]
        },
        //10
        {
            question: 'Пойдём в горы?',
            answers: ['да'],
            next: [11]
        },
        //11
        {
            question: 'А на пикник?',
            answers: ['конечно, косплей на камара'],
            next: [12]
        },
        //12
        {
            question: 'А плакать и кушать мороженое?',
            answers: ['буду плакать, а ты кушать мороженое'],
            next: [13]
        },
        //13
        {
            question: 'А котика заведём?',
            answers: ['буду любить больше тебя', 'конечно'],
            next: [14, 14]
        },
        //14
        {
            question: 'Ты точно меня любишь?',
            answers: ['конечно нет', 'очень да'],
            next: [3, 5]
        }
    ];
    

    let currentStep = 0;

    function updateQuiz(stepIndex) {
        currentStep = stepIndex;
        quizText.textContent = quizSteps[currentStep].question;

        // Update button texts
        noButton.textContent = quizSteps[currentStep].answers[0];
        if (quizSteps[currentStep].answers.length > 1) {
            yesButton.textContent = quizSteps[currentStep].answers[1];
            yesButton.style.display = "inline-block";
        } else {
            yesButton.style.display = "none"; // Hide if only one answer
        }
    }

   

    noButton.addEventListener("click", function () {
        updateQuiz(quizSteps[currentStep].next[0]);
    });

    yesButton.addEventListener("click", function () {
        updateQuiz(quizSteps[currentStep].next[1]);
    });

    doneButton.addEventListener("click", function () {
        miniWindow.innerHTML = "";
        doneButton.remove()

        const letterBox = document.createElement("div");
        letterBox.classList.add("letterBox");
        
        const loveLetter = document.createElement("p");
        loveLetter.id = "loveLetter";

        letterBox.appendChild(loveLetter);
        document.body.appendChild(letterBox); // Add the letterBox to the page

    
        typeText(letterBox, loveLetter);
    });
    

    
    updateQuiz(0);
});

