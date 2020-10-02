const campSimcha = () => {
  const words = document.getElementById("CampSimcha");
  const heading = document.getElementById("campSimchaH");
  if (!words.innerHTML) {
    heading.style.color = "blue";
    words.innerHTML = "Hello Camp Simcha";
    heading.innerHTML = "Hide Camp Simcha";
  } else {
    words.innerHTML = "";
    heading.style.color = "black";
    heading.innerHTML = "Camp Simcha";
  }
};
const Northcoders = () => {
  const words = document.getElementById("Northcoders");
  const heading = document.getElementById("NorthcodersH");

  if (!words.innerHTML) {
    heading.style.color = "blue";
    heading.innerHTML = "Hide Northcoders";
    words.innerHTML =
      " I have just recently completed a remote, full-stack developer Northcoders! On the course, I learnt the core fundamentals of JavaScript and Node.JS,and how they can be implemented to make servers, websites and apps. I have also learnt agile coding practices, such as: version control, TDD, pair-programming and stand ups.<Br/> Most importantly, I gained the ability to be able to learn how to use resources like MDN and stackoverflow to learn new tech-stacks that were not covered on the course";
  } else {
    words.innerHTML = "";
    heading.style.color = "black";
    heading.innerHTML = "Northcoders";
  }
};
const Time4Torah = () => {
  const words = document.getElementById("Time4Torah");
  const heading = document.getElementById("Time4TorahH");
  if (!words.innerHTML) {
    heading.style.color = "blue";
    heading.innerHTML = "Hide Time4Torah";
    words.innerHTML = "Speak about app website seo mailchimp answering emails";
  } else {
    words.innerHTML = "";
    heading.style.color = "black";
    heading.innerHTML = "Time4Torah";
  }
};
