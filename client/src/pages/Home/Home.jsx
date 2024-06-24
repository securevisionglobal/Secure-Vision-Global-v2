import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from './Home.module.css';

function Home() {
  return (
    <>
      <div className={styled.hero}>
        <Header />
        <div className={styled.heromain}>
          <div className={styled.heroleft}>
            <div className={styled.herotext}>
              <h2>Connecting People to the <span>Right</span> Businesses</h2>
              <p>Discover the difference at <span>Secure Vision Global</span>. We believe in the transformative power of the right talent. Whether you're a job seeker or a company in search of exceptional individuals, we're here to build futures and transform businesses together.</p>
              <div className={styled.herobtn}>
                <a href="https://securevisionglobal.typeform.com/to/y6544Q" className={styled.herobtnlink}>Get Started</a>
              </div>
            </div>
          </div>
          <div className={styled.heroright}></div>
        </div>
      </div>
      <div className={styled.employer}>
        <div className={styled.foremp}>
          <div className={styled.forempleft}>
            <h1>For Employers</h1>
            <p>Find professionals from around the world and across all skills.</p>
          </div>
          <div className={styled.forempright}></div>
        </div>
        <div className={styled.forcan}>
          <div className={styled.forcanleft}>
            <h1>For Candidates</h1>
            <p>Build your professional profile, find new job opportunities.</p>
          </div>
          <div className={styled.forcanright}></div>
        </div>
      </div>
      <div className={styled.jobscategory}>
        <div className={styled.categorytag}>
          <h1><span>Jobs</span><br/> by Category</h1>
        </div>
        <div className={styled.catcards}>
          <div className={styled.catcard}>
            <div className={styled.catcardimg}>
              <img src="./cat1.png" alt="" />
            </div>
            <div className={styled.catcardtext}>
              <h2>Development & IT</h2>
            </div>
          </div>
          <div className={styled.catcard}>
            <div className={styled.catcardimg}>
              <img src="./cat2.png" alt="" />
            </div>
            <div className={styled.catcardtext}>
              <h2>Marketing & sales</h2>
            </div>
          </div>
          <div className={styled.catcard}>
            <div className={styled.catcardimg}>
              <img src="./cat3.png" alt="" />
            </div>
            <div className={styled.catcardtext}>
              <h2>Customer Support</h2>
            </div>
          </div>
          <div className={styled.catcard}>
            <div className={styled.catcardimg}>
              <img src="./cat4.png" alt="" />
            </div>
            <div className={styled.catcardtext}>
              <h2>Real Estate</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
