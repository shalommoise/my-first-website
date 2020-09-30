const timing = () => {
  const myDate = Date();
  const takeOut = myDate.split("G")[0].split(" ")[4];
  return takeOut;
};

setInterval(function () {
  document.getElementById("time").innerHTML = timing();
}, 1000);
