"use strict";

function MadLibStory() {
  //initialize values
  let questionTotal = 10;
  let questionCounter = 0;

  //questions array
  let ask = "Enter a"; //initial part of each question
  let questions = [
    `${ask}n adjective.`,
    `${ask} food (plural).`,
    `${ask} verb.`,
    `${ask} saying or quotation.`,
    `${ask} a noun.`,
    `${ask} food (plural).`,
    `${ask} color.`,
    `${ask} thing you would ride in.`,
    `${ask}n animal.`,
    `${ask} person.`,
  ];

  let answers = [];
  let a;

  //ask questions
  //display current number of questions out of total
  questions.forEach((q, index) => {
    console.log("running q's");
    a = prompt(`${index + 1} of ${questionTotal}: ${q}`);
    answers.push(a);
  });

  let story = `Today I went to my favorite Taco Stand called the ${capitalize(
    answers[0]
  )} ${capitalize(
    answers[8]
  )}. Unlike most food stands, they cook and prepare the food in a ${
    answers[7]
  } while you ${answers[2]}. The best thing on the menu is the ${answers[6]} ${
    answers[4]
  }. Instead of ground beef they fill the taco with ${
    answers[5]
  }, cheese, and top it off with a salsa made from ${
    answers[1]
  }. If that doesn't make your mouth water, then it's just like ${
    answers[9]
  } always says: "${answers[3]}!"`;
  console.log(story);

  document.getElementById("story").innerText = story;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
