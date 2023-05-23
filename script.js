const sentences = [
  {
    text: "-What do you miss most in your life?",
    animation: "fadeIn",
  },
  {
    text: "-Why do you do what you do?",
    animation: "fadeIn",
  },
  {
    text: "-In adult life, when were you most happy? and why? are you this way now? if not, why?",
    animation: "fadeIn",
  },
  
  {
    text: "-If you could say one thing to a family member you lost, who would it be? what would you say? and why?",
    animation: "fadeIn",
  },
  {
    text: "-What is the worst thing that has happened to you the last year, what is the best thing that has happened to you the last year, from which have you learned the most?",
    animation: "fadeIn",
  },
  {
    text: "-What is your dark side?",
    animation: "fadeIn",
  },

  {
    text: "-Who is the person you would most like to apologize to, but haven't?",
    animation: "fadeIn",
  },
  {
    text: "-If you could turn back the clock on one day this year and do it differently, what day would it be and why?",
    animation: "fadeIn",
  },
  {
    text: "-You have one last piece of work to do, what is that piece of work and why?",
    animation: "fadeIn",
  },

  {
    text: "-What are some words you've not said to somebody, what haven't you said to them and who should you said them to?",
    animation: "fadeIn",
  },
  {
    text: "-What's the last decision you made that went completely sideways? What did you do to correct it? (If you could correct it).",
    animation: "fadeIn",
  },
  {
    text: "-What's your selfish dream?",
    animation: "fadeIn",
  },

  {
    text: "-What was the happiest moment of your life so far?",
    animation: "fadeIn",
  },
  {
    text: "-Why should people listen to your message?",
    animation: "fadeIn",
  },
  {
    text: "-What is the biggest way in which you are a contradiction?",
    animation: "fadeIn",
  },

  {
    text: "-What are the things that you put in the shadows that would improve your life if they weren't in the shadows?",
    animation: "fadeIn",
  },
  {
    text: "-What is one mistake that you have made that you have been scared to address or reconcile?",
    animation: "fadeIn",
  },
  {
    text: "-What topic is no one talking about now that historians will study in the future?",
    animation: "fadeIn",
  },
  {
    text: "-What advice did you get from someone earlier in your career that you followed but now, in hindsight, wish you hadn't, and why?",
    animation: "fadeIn",
  },
  {
    text: "-Tell me something you have never told anyone before.",
    animation: "fadeIn",
  },
  {
    text: "-What has been the happiest moment of your life? The one that brought you the most joy and why?",
    animation: "fadeIn",
  },
  {
    text: "-What is a mistake that you know you've made that you can fix but you haven't yet fixed?",
    animation: "fadeIn",
  },
  {
    text: "-What is your opinion on hallucinogens?",
    animation: "fadeIn",
  },
  {
    text: "-Who was the person who first believed in you? And what do you want to say to them now?",
    animation: "fadeIn",
  },
  {
    text: "-Can you describe what winning means to you?",
    animation: "fadeIn",
  },
  {
    text: "-If you could only speak with, call, see and/or touch four people for the next four years, who would they be?",
    animation: "fadeIn",
  },
  {
    text: "-If you were on your deathbed and could leave only one lesson behind, what would it be?",
    animation: "fadeIn",
  },
  {
    text: "-What is one thing in your life that is currently hindering your happiness and what do you do to rectify it?",
    animation: "fadeIn",
  },
  {
    text: "-When do you feel the most emotionally connected to yourself?",
    animation: "fadeIn",
  },
  {
    text: "-What are the failures you cherish the most?",
    animation: "fadeIn",
  },
  {
    text: "-What is your biggest insecurity?",
    animation: "fadeIn",
  },
  {
    text: "-What is the thing that you believe to be true that most people disagree with you on?",
    animation: "fadeIn",
  },
  {
    text: "-Is there someone from your past that you should have a conversation with that you haven't had? If so, why haven't you had it? And what is that conversation?",
    animation: "fadeIn",
  },
  {
    text: "-How will we make progress in solving the crisis of meaning today?",
    animation: "fadeIn",
  },
  {
    text: "-If you could give one piece of advice to yourself at the start of your life, what would it have been?",
    animation: "fadeIn",
  },
  {
    text: "-What is the biggest public misconception about something that has happened to you in your life?",
    animation: "fadeIn",
  },
  {
    text: "-If you could go back to one era in civilization, what era would you pick? Why? And what would your job be?",
    animation: "fadeIn",
  },
  {
    text: "-When you are near the end of your life and looking back over it, what will you be proudest of? And what will you regret the most?",
    animation: "fadeIn",
  },
  {
    text: "-Do you think obesity is a choice?",
    animation: "fadeIn",
  },
      // Add more sentences below



];

const sentenceContainer = document.getElementById("sentence-container");
const animateButton = document.getElementById("animate-btn");
let currentIndex = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(sentences);

animateButton.addEventListener("click", () => {
  // Remove any currently displayed sentence
  if (sentenceContainer.children.length > 0) {
    sentenceContainer.removeChild(sentenceContainer.children[0]);
  }

  // Get the next random sentence in the array
  const sentence = sentences[currentIndex];

  // Create a new element to display the sentence
  const sentenceElement = document.createElement("div");
  sentenceElement.textContent = sentence.text;
  sentenceElement.classList.add("animated", sentence.animation);

  // Add the sentence element to the container
  sentenceContainer.appendChild(sentenceElement);

  // Increment the index to get the next random sentence on the next click
  currentIndex = (currentIndex + 1) % sentences.length;
});
