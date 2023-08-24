document.addEventListener("DOMContentLoaded", function () {
    let currentQuestion = 0;
    const maxQuestions = 2; 
  
    const interactiveDiv = document.getElementById("interactive");
    const mainMessageDiv = document.getElementById("mainMessage");
    const questionButtons = document.querySelectorAll(".questionButton");
    const answerText = document.getElementById("answer");
  
    function updateAnswer(text) {
      answerText.textContent = text;
    }
  
    function showNextQuestion() {
      currentQuestion++;
      if (currentQuestion > maxQuestions) {
        showMainMessage();
      } else {
        const questions = [
          "You sure?",
          "Weh di nga?"
        ];
        interactiveDiv.querySelector("p").textContent = questions[currentQuestion - 1];
        questionButtons.forEach(button => {
          button.style.display = "block";
        });
        updateAnswer("");
      }
    }
  
    function showMainMessage() {
      interactiveDiv.style.display = "none";
      mainMessageDiv.style.display = "block";
    }
  
    questionButtons.forEach(button => {
      button.addEventListener("click", function () {
        const answer = this.textContent;
        if (answer === "Yes") {
          const effect = this.getAttribute("data-effect");
          if (effect === "heart") {
            addHeartEffect();
          }
          showNextQuestion();
        } else {
          answerText.textContent = "Luh nag NO edi dun ka!!!";
        }
      });
    });
  
    function addHeartEffect() {
      const heart = document.createElement("div");
      heart.className = "heart-effect";
      document.body.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 1000);
    }
  });
  