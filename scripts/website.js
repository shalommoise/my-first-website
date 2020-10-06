const showWeb = () => {
  const web = document.getElementsByClassName("web")[0];
  const webButton = document.getElementsByClassName("webButton")[0];
  const heading = document.getElementById("NC-newsH");

  if (web.style.display !== "block") {
    web.style.display = "block";
    heading.innerHTML = "Hide NC-News";
  } else {
    web.style.display = "none";
    heading.innerHTML = "NC-News";
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

let number = 1;
const presentButton = (event) => {
  document.getElementById(`mech${number}`).style.display = "none";

  number = number + event;
  if (number === 11) number = 1;
  if (number === 0) number = 9;

  document.getElementById(`mech${number}`).style.display = "block";
  document.getElementById("pagenumber").innerHTML = `Page | ${number} of 10`;
};
