const socialMediaFooter =()=>{
  const body = document.querySelector('body'); 
  const footer = document.createElement("footer");
  
  footer.innerHTML =  `<a href="https://github.com/shalommoise" target='_blank'>
          <img class="footericon" src="./pictures/socials/git hub logo.png" alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/shalom-moise-20a294128/" target='_blank'>
          <img class="footericon" src="./pictures/socials/linkedin logo.png"
            alt="LinkedIn" /></a>
        <a href="https://www.strava.com/athletes/51107146" id="strava" target='_blank'><img class="footericon"
            src="./pictures/socials/strava logo.svg" alt="Strava" /></a>
        
        <a href="mailto:mshalom689@gmail.com?subject=Hi Shalom" target='_blank'><img class="footericon"
            src="./pictures/socials/email logo.png" alt="email" /></a>
        <a href="https://www.facebook.com/shalom.moise" target='_blank'><img class="footericon"
            src="./pictures/socials/facbook logo.png" alt="facebook" /></a>
      
        <a href="https://www.instagram.com/shalommoise/" target='_blank'><img class="footericon"
            src="./pictures/socials/instagram logo.png"
            alt="instagram" /></a>
              <a href="https://twitter.com/MoiseShalom" target='_blank'><img class="footericon"
                  src="./pictures/socials/twitter logo.png" alt="twitter" /></a>`;


body.append(footer);
}


socialMediaFooter();
