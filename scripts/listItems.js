const campSimcha = () => {
  const words = document.getElementById("CampSimcha");
  const heading = document.getElementById("campSimchaH");
  if (!words.innerHTML) {
    heading.style.color = "blue";
    words.innerHTML =
      "I believe it is important for those of us that are fortunate to help those that are not. Both these organisations do amazing work in helping young children with seriously ill children or mental-disability and their families. ";
    heading.innerHTML =
      'Hide Camp Simcha  <img class="footericon" src="https://www.campsimcha.org.uk/wp-content/themes/campSimcha/images/logo.svg" alt="Camp Simcha" /> &  Kef kids <img class="footericon" src="https://kefkids.org/img/site/site__logo__w-228_q-90.png" alt="Camp Kef" />  ';
  } else {
    words.innerHTML = "";
    heading.style.color = "black";
    heading.innerHTML = "Camp Simcha & Kef Kids";
  }
};
const Northcoders = () => {
  const words = document.getElementById("Northcoders");
  const heading = document.getElementById("NorthcodersH");

  if (!words.innerHTML) {
    heading.style.color = "blue";
    heading.innerHTML = "Hide Northcoders";
    words.innerHTML =
      " I have just recently completed a remote, full-stack developer Northcoders! On the course, I learnt the core fundamentals of JavaScript and Node.JS,and how they can be implemented to make servers, websites and apps. I have also learnt agile coding practices, such as: version control, TDD, pair-programming and stand ups.<Br/> Most importantly, I gained the ability to be able to learn how to use resources like MDN and stackoverflow to learn new tech-stacks that were not covered on the course";
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
    heading.innerHTML =
      'Hide Time4Torah  <img class="footericon" src="https://i1.sndcdn.com/avatars-000566284278-uagkxs-original.jpg" alt="T4T" />';
    words.innerHTML =
      "I have lots of experience working remotely through a part-time job as technical manager at Time4Torah, an online Jewish study course, which I have been doing for over 2 years. I send near-daily content through emails, WhatsApp, and podcasts; and upload content onto our WordPress siteand our own custom app as well as other Jewish-learning sites and apps. I regularly collect datafrom the various platforms that are content is on, to compile them into statistics to show how areaudience are interacting with our content. I do this using SoundCloud statistics, MailChimp analytics, Google analytics, Monsterinsights and Google Cloud Platform. I also answer participants question’s about the program, and was the main contact from our organisation to the <a href='https://200apps.com/' target='_blank'>app developers</a>. <Br /> Have a look at our  <a href='http://time4torah.org/' target='_blank'>website</a> and app:   <a href='https://play.google.com/store/apps/details?id=com.maatayim.time4mishna' target='_blank'>android </a>,  <a href='https://apps.apple.com/us/app/time4mishna-daily-mishnayos/id1439380311' target='_blank'>iOS</a>. <br/> We are also available on the <a href='https://alldaf.org/' target='_blank'>All Daf app</a>, which has over 15,000 subscribers!";
  } else {
    words.innerHTML = "";
    heading.style.color = "black";
    heading.innerHTML = "Time4Torah";
  }
};
const TheDvashProject = () => {
  const words = document.getElementById("TheDvashProject");
  const heading = document.getElementById("TheDvashProjectH");

  if (!words.innerHTML) {
    heading.style.color = "blue";
    heading.innerHTML =
      'Hide The Dvash Project <img class="footericon" src="https://dvash.org.uk/wp-content/uploads/2019/09/DVASH-VECTOR.png" alt="dvash" />';
    words.innerHTML =
      "The Dvash Project is Jewish charity based on community building and family planning. Unfortunately, due to Covid-19 lockdowns, I was not able to stay there for long but I was able to gain some insights into the workplace. We were based Work Avenue- an office hub; where I was able to meet people who do a variety of different jobs. I spoke to people in marketing, real estate, SEO, coders, and business entrepreneurs. I gained a real perspective into the value of a diverse office. I learned about using SEO on WordPress sites, FaceBook advertsing and photshop for brochures.";
  } else {
    words.innerHTML = "";
    heading.style.color = "black";
    heading.innerHTML = "The Dvash Project";
  }
};
const uStar = () => {
  const words = document.getElementsByClassName("ustarproject")[0];
  const heading = document.getElementById("ustarH");

  if (heading.innerHTML !== "Hide uStar") {
    words.style.display = "block";
    heading.innerHTML = "Hide uStar";
  } else {
    words.style.display = "none";
    heading.innerHTML = "uStar";
  }
};
