import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioList from '../components/PortfolioList';
import { Link } from 'react-router-dom';

const Home = ({data})=>{
  return(
    <>
      <Header/>   
      <main class="content">
        <div class="container latest_portfolio">
            <div class="row intro">
                <div class="col-md-4">
                    <div class="contents shadow">
                        <h2 class="heading2">I’m applebee</h2>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contents shadow">
                        <h2 class="heading2">I create super awesome stuff</h2>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contents shadow">
                        <h2 class="heading2">I’m available for freelance projects</h2>
                    </div>
                </div>
            </div>
            <div class="row list">
               <PortfolioList data={data}/> 
            </div>
            <p class="porfolio_readmore">
              <Link to={'/Portfolio'} className="primary-btn">See my full portfolio</Link>        
            </p>
        </div>
      </main>
      <Footer/>   
    </>
  )
}
export default Home;