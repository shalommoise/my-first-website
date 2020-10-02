const timing = () => {
  const myDate = Date();
  const takeOut = myDate.split("G")[0].split(" ")[4];
  return takeOut;
};
const whatTimeIsit = () => {
  let time = Number(Date().split(" ")[4].split(":")[0]);

  if (time >= 0 && time < 12) return "Good Morning";
  else if (time >= 12 && time < 17) return "Good Afternoon";
  else if (time >= 17 && time < 23) return "Good Evening";
};
const getDate = () => {
  const months = {
    Jan: "January",
    Feb: "Febuary",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "Aug",
    Sep: "Spetmber",
    Oct: "October",
    Nov: "November",
    Dec: "Dec",
  };
  const myDate = Date();
  const day = myDate.split(" ")[0] + "day";

  const date = `${myDate.split(" ")[0]}day ${myDate.split(" ")[2]} ${
    months[myDate.split(" ")[1]]
  } ${myDate.split(" ")[3]}`;
  return date;
};

setInterval(function () {
  document.getElementById(
    "time"
  ).innerHTML = `${whatTimeIsit()}! The current time where you are is: ${timing()} ${getDate()}`;
}, 1000);
