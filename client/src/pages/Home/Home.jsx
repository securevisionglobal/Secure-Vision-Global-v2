import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <div className={styled.hero}>
        <div className={styled.heromain}>
          <div className={styled.heroleft}>
            <div className={styled.herotext}>
              <div className={styled.herotag}>
                <h2>
                  Connecting People to the <span>Right</span> Businesses
                </h2>
              </div>
              <p>
                Discover the difference at <span>Secure Vision Global</span>. We
                believe in the transformative power of the right talent. Whether
                you're a job seeker or a company in search of exceptional
                individuals, we're here to build futures and transform
                businesses together.
              </p>
              <div className={styled.herobtn}>
                <a href="#" className={styled.herobtnlink}>
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className={styled.heroright}>
            <img src="./men.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styled.employer}>
        <div className={styled.foremp}>
          <div className={styled.forempleft}>
            <h1>For Employers</h1>
            <p>
              Search for experts with different abilities around India.
            </p>
          </div>
          <div className={styled.forempright}>
            <img src="./empoyers.svg" alt="" />
          </div>
        </div>
        <div className={styled.forcan}>
          <div className={styled.forcanleft}>
            <h1>For Candidates</h1>
            <p>Build your professional profile, find new job opportunities.</p>
          </div>
          <div className={styled.forcanright}>
            <img src="./candidate.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styled.jobscategory}>
        <div className={styled.categorytag}>
          <h1>
            <span>Jobs</span>
            <br /> by Category
          </h1>
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
      <div className={styled.how}>
        <div className={styled.howtag}>
          <h1>
            How It <span>Work</span>
          </h1>
          <p>Following these steps will help you to find a job easily</p>
        </div>
        <div className={styled.howcards}>
          <div className={styled.howcard}>
            <div className={styled.howcardimg}>
              <h1>1</h1>
            </div>
            <div className={styled.howcardtext}>
              <h2>Contact Us</h2>
              <p>First, contact us and send your resume.</p>
            </div>
          </div>
          <div className={styled.howcard}>
            <div className={styled.howcardimg} id={styled.unique}>
              <h1 className={styled.unique}>2</h1>
            </div>
            <div className={styled.howcardtext}>
              <h2>Apply Jobs</h2>
              <p>
                Second, we will schedule your interview that match your skills
                and interests.
              </p>
            </div>
          </div>
          <div className={styled.howcard}>
            <div className={styled.howcardimg}>
              <h1>3</h1>
            </div>
            <div className={styled.howcardtext}>
              <h2>Ace the Interview</h2>
              <p>Third, face the interview.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styled.stats}>
        <img src="./Vector.png" alt="" />
        <div className={styled.statimg}>
          <img src="./human.svg" alt="" />
        </div>
        <div className={styled.stattext}>
          <div className={styled.stattag}>
            <h1>
              Discover why more companies are using SVG to make hiring easy
            </h1>
          </div>
          <div className={styled.stat}>
            <div className={styled.statcard}>
              <div className={styled.statcardtext}>
                <h2>70+</h2>
                <p>Employers</p>
              </div>

              <div className={styled.statcardtext}>
                <h2>500+</h2>
                <p>Candidate Applied</p>
              </div>
            </div>
            <div className={styled.statcard}>
              <div className={styled.statcardtext}>
                <h2>80%</h2>
                <p>Success Rate</p>
              </div>

              <div className={styled.statcardtext}>
                <h2>24h</h2>
                <p>Average time-to-hire</p>
              </div>
            </div>
          </div>
          <div className={styled.statbtn}>
            <a href="#" className={styled.statbtnlink}>
              Post your Job
            </a>
          </div>
        </div>
      </div>
      <div className={styled.interest}>
        <div className={styled.interesttext}>
          <div className={styled.texttag}>
            <h1>
              Find your perfect job based on <span>your interest</span>
            </h1>
          </div>
          <div className={styled.interestinfo}>
            <p>Find full-time jobs that are perfect for you.</p>
            <p>Get personalized job recommendations directly.</p>
            <p>Explore job roles based of your study major.</p>
          </div>
          <div className={styled.interestbtn}>
            <a href="#" className={styled.interestbtnlink}>
              Get Started
            </a>
          </div>
        </div>
        <div className={styled.interestimg}>
          <img src="./findjob.png" alt="" />
        </div>
      </div>
      <div className={styled.core}>
        <div className={styled.coretag}>
          <h1>Our core values</h1>
          <p>Our company core values are the foundation for everything we build</p>
        </div>
        <div className={styled.corevalues}>
          <div className={styled.corevalue}>
            <div className={styled.corevalueimg}>
              <img src="./core1.png" alt="" />
            </div>
            <div className={styled.corevaluetext}>
              <h2>Everyone matters</h2>
              <p>
              Valuing each individual, fostering inclusivity, respect, and equal opportunities.
              </p>
            </div>
          </div>
          <div className={styled.corevalue}>
            <div className={styled.corevalueimg}>
              <img src="./core2.png" alt="" />
            </div>
            <div className={styled.corevaluetext}>
              <h2>Trust</h2>
              <p>
              Building relationships through honesty, transparency, reliability, and consistent integrity.
              </p>
            </div>
          </div>
          <div className={styled.corevalue}>
            <div className={styled.corevalueimg}>
              <img src="./core3.png" alt="" />
            </div>
            <div className={styled.corevaluetext}>
              <h2>Customer focus</h2>
              <p>
              Our clients and candidates are at the heart of everything we do.
              </p>
            </div>
          </div>
          <div className={styled.corevalue}>
            <div className={styled.corevalueimg}>
              <img src="./core4.png" alt="" />
            </div>
            <div className={styled.corevaluetext}>
              <h2>Dream bigger</h2>
              <p>
              Encouraging ambition, innovation, bold ideas, and striving for excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styled.testimonial}>
        <div className={styled.testitag}>
          <h3>PEOPLE LOVE US</h3>
          <h1>What our customers says</h1>
        </div>
        <div className={styled.testimonialcards}>
          <div className={styled.testimonialcard}>
            <div className={styled.testimonialcardtext}>
              <h2>
              
                  “The services here are very best and the recruiter Hr kausar is very nice, she told me everything very well, with her guidance I was able to crack my interview well, thank you so much!”
                 
              </h2>
             
            </div>
            <div className={styled.testimonialcardlower}>
              <div className={styled.testimonialcardimg}>
                <h1>OS</h1>
                <h3>
                <b>Omkar Shetkar</b>
              </h3>
              </div>

              <div className={styled.testimonialcardimg2}>
                <img src="./quotes.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styled.testimonialcard}>
            <div className={styled.testimonialcardtext}>
              <h2>
              
                  “After long time came across with a consultancy with such a dedicated staff. Thank you so much Secure Vision Global Consultancy, special thanks to Mrs. Amrita Vishwakarma ma'am for helping me out with a job, she's been very supportive from the day of my interview and very well coordinated with company's HR and with me for my joining. I would highly recommend this consultancy.
                  ”
                 
              </h2>
             
            </div>
            <div className={styled.testimonialcardlower}>
              <div className={styled.testimonialcardimg}>
                <h1>NR</h1>
                <h3>
                <b>Nitin Rana</b>
              </h3>
              </div>

              <div className={styled.testimonialcardimg2}>
                <img src="./quotes.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
