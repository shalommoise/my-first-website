const showWeb = () => {
  const web = document.getElementsByClassName("web")[0];
  const webButton = document.getElementsByClassName("webButton")[0];
  document.getElementById("openNc").innerHTML =
    "Click here to to open NC-news in a new browser";
  if (web.style.display !== "block") {
    web.style.display = "block";
    web.style.height = "300px";
    webButton.innerHTML = "Hide Website";
  } else {
    web.style.display = "none";
    webButton.innerHTML = "Show Website";
  }
};
