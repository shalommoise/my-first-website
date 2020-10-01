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
setInterval(function () {
  document.getElementById(
    "time"
  ).innerHTML = `${whatTimeIsit()}. Current Time: ${timing()}`;
}, 1000);
