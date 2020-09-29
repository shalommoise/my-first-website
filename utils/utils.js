exports.whatTimeIsit = () => {
  let time = Number(Date().split(" ")[4].split(":")[0]);
  console.log(Date());
  if (time >= 0 && time < 12) return "Good Morning :)";
  else if (time >= 12 && time < 17) return "Good Afternoon :)";
  else if (time >= 17 && time < 23) return "Good Evening :)";
  return "Hello there :)";
};
