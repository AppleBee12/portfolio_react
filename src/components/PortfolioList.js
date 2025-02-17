import React from 'react';
import {Link} from "react-router-dom";


const PortfolioList = ({data})=>{
  return(
    <div class="row list">
      {data.map((item,index)=>(
        <div class="col-md-4">
          <div class="contents shadow">
            <img src={item.images.thumbnail} alt={item.title}/>
            <div class="hover_contents">
                <div class="list_info">
                    <h3>
                      <Link to={`/portfolio/${index}`}>{item.title}</Link>
                      <img src="images/portfolio_list_arrow.png" alt="list arrow"/>
                    </h3>
                    <p>
                      <Link to={`/portfolio/${index}`}>Click to see project</Link>
                    </p>
                </div>
            </div>
         </div>
       </div>

        )
      )}
    </div>
  )
}
export default PortfolioList;