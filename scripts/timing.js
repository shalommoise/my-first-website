const timing = () => {
  const myDate = Date();
  const takeOut = myDate.split("G")[0].split(" ")[4];
  return takeOut;
};
const whatTimeIsit = () => {
  let time = Number(Date().split(" ")[4].split(":")[0]);

  if (time >= 0 && time < 12) return "Good Morning";
  else if (time >= 12 && time < 17) return "Good Afternoon";
  else if (time >= 17 && time < 24) return "Good Evening";
  else return "Hello";
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
  const days = {
    Sun: "Sunday",
    Mon: "Mon",
    Tue: "Tuesday",
    Wed: "wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
  };
  const myDate = Date();
  const day = days[myDate.split(" ")[0]];

  const date = `${day} ${myDate.split(" ")[2]} ${
    months[myDate.split(" ")[1]]
  } ${myDate.split(" ")[3]}`;
  return date;
};

setInterval(function () {
  document.getElementById(
    "time"
  ).innerHTML = `${whatTimeIsit()}! The current time where you are is: ${timing()} ${getDate()}`;
}, 1000);
