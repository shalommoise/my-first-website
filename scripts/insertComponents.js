const makinglink = (link, porfileLink, alt) => {
  const a = document.createElement("a");
  const img = document.createElement("img");
  a.href = link;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  img.src = `./pictures/socials/${porfileLink}`;
  img.alt = alt;
  img.className = "footericon";
  a.appendChild(img)
  return a;
}

const socialMediaFooter = () => {
  const body = document.querySelector('body');
  const footer = document.createElement("footer");
  footer.appendChild(makinglink("https://github.com/shalommoise", "git hub logo.png", "GitHub"));
  footer.appendChild(makinglink("https://www.linkedin.com/in/shalom-moise-20a294128/", "linkedin logo.png", "LinkedIn"));
  footer.appendChild(makinglink("https://www.strava.com/athletes/51107146", "strava logo.svg", "Strava"));
  footer.appendChild(makinglink("mailto:mshalom689@gmail.com?subject=Hi Shalom", "email logo.png", "email"));
  body.append(footer);
}


socialMediaFooter();
