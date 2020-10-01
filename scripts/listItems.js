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
    words.innerHTML = "Speak about agile coding";
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
