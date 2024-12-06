import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioList from '../components/PortfolioList';


const Portfolio = ({data})=>{
  return(
    <>
      <Header/>   
      <main class="content">
        <div class="container latest_portfolio">            
          <div class="row list">
             <PortfolioList data={data}/> 
           </div>
        </div>
      </main>
      <Footer/>   
    </>
  )
}
export default Portfolio;