const socialMediaFooter =()=>{
  const body = document.querySelector('body'); 
  const footer = document.createElement("footer");
  
  footer.innerHTML =  `<a href="https://github.com/shalommoise" target='_blank'>
          <img class="footericon" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/shalom-moise-20a294128/" target='_blank'>
          <img class="footericon" src="https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square.png"
            alt="LinkedIn" /></a>
        <a href="https://www.strava.com/athletes/51107146" id="strava" target='_blank'><img class="footericon"
            src="https://cdn.worldvectorlogo.com/logos/strava-2.svg" alt="Strava" /></a>
        
        <a href="mailto:mshalom689@gmail.com?subject=Hi Shalom" target='_blank'><img class="footericon"
            src="https://image.flaticon.com/icons/png/512/8/8807.png" alt="email" /></a>
        <a href="https://www.facebook.com/shalom.moise" target='_blank'><img class="footericon"
            src="./pictures/socials/facbook logo.png" alt="facebook" /></a>
      
        <a href="https://www.instagram.com/shalommoise/" target='_blank'><img class="footericon"
            src="./pictures/socials/instagram logo.jpeg"
            alt="instagram" /></a>
              <a href="https://twitter.com/MoiseShalom" target='_blank'><img class="footericon"
                  src="./pictures/socials/twitter logo.jpeg" alt="twitter" /></a>`;


body.append(footer);
}


socialMediaFooter();
