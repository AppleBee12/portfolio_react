import React from "react";
import {Link} from "react-router-dom";

const Footer = ()=>{
  return(
      <footer>
        <div class="quote_area"> 
            <h3 class="heading6">Need a quote?</h3>
            <p>
                Please use the form inside the contact page. Make sure you include some personal information as well as your project description and available budget.
            </p>
            <p><Link to={'/'}>Get a free quote &rarr;</Link></p>
        </div>
        <div class="copyright">
            <h3 class="heading6">Just wanna say hi?</h3>
            <p>
                You can call me, email me directly or connect with me through my social networks.
            </p>
            <p>
                (+40) 744122222<br/>
                <a href="mailto:hello@adipurdila.com">hello@adipurdila.com</a>               
            </p>
            <ul class="social_links">
                <li><a href=""><img src="images/twitter.png" alt="twitter"/></a></li>
                <li><a href=""><img src="images/facebook.png" alt="facebook"/></a></li>
                <li><a href=""><img src="images/dribble.png" alt="dribble"/></a></li>
            </ul>
            <hr/>
            <p>
                (c) Copyright 2024. Portfolio theme by applebee.
            </p>
        </div>
    </footer>
  )
}
export default Footer;