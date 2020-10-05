const showWeb = () => {
  const web = document.getElementsByClassName("web")[0];
  const webButton = document.getElementsByClassName("webButton")[0];
  document.getElementById("openNc").innerHTML =
    "Click here to to open NC-news in a new browser";
  if (web.style.display !== "block") {
    web.style.display = "block";

    webButton.innerHTML = "Hide Website";
  } else {
    web.style.display = "none";
    webButton.innerHTML = "Show Website";
  }
};

let count = 1;
const whichButton = (event) => {
  document.getElementById(`ustar1`).style.display = "none";
  document.getElementById(`ustar2`).style.display = "none";
  document.getElementById(`ustar3`).style.display = "none";
  document.getElementById(`ustar0`).style.display = "none";
  document.getElementById(`ustar4`).style.display = "none";
  count = count + event;
  if (count === 5) count = 0;
  if (count === -1) count = 4;

  document.getElementById(`ustar${count}`).style.display = "block";
};
