import React from 'react';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import TopBar from '../components/TopBar/TopBar';
import Culture1 from '../assets/culture1.png'
import Culture2 from '../assets/culture2.png'
import Culture3 from '../assets/culture3.png'
import Culture4 from '../assets/culture4.png'
import './Culture.css';

const Culture = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <div class="culture-banner">
        <h1 class="culture-text">Culture</h1>
      </div>
      
      <div className='culture'>
      <div className="culturecontainer">
        <div className="ccard">
          <div className="imgBx">
            <img src={Culture1} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Culture<br />
              </h2>
              <p class="image-para">
              Odisha, located on the eastern coast of India, boasts a rich and diverse cultural heritage that spans centuries.
              </p>
            </div>
          </div>
        </div>

        {/* Repeat the card structure for other items... */}
        
        <div className="ccard">
          <div className="imgBx">
            <img src={Culture2} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Odihsa<br />
              </h2>
              <p class="image-para">
                
          Odisha, in eastern India, is known as "The Land of Gods" because of its many temples, sacred places, and deep connection to spirituality. 
              </p>
              
            </div>
          </div>
        </div>
        <div className="ccard">
          <div className="imgBx">
            <img src={Culture3} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Odishi Dance<br />
              </h2>
              <p class="image-para">
                
           Odissi dance originates from the ancient temples of Odisha, where it evolved from the rituals and dances dedicated to Lord Jagannath. 
              </p>
            </div>
          </div>
        </div>
  
        <div className="ccard">
          <div className="imgBx">
            <img src={Culture4} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Odishi Music<br />
              </h2>
              <p class="image-para">
              Odissi music, like other classical music forms in India, is based on the system of ragas (melodic modes) and talas (rhythmic cycles).              
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Culture;
