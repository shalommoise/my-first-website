const timing = () => {
  const myDate = new Date();
  return myDate;
};

setInterval(function () {
  document.getElementById("time").innerHTML = timing();
}, 1000);
