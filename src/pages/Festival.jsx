import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import Festival1 from '../assets/festival1.png'
import Festival2 from '../assets/festival2.png'
import Festival3 from '../assets/festival3.png'
import Festival4 from '../assets/festival4.png'
import './Festival.css'
const Festival = () => {
  return (
    <>
    <TopBar />
    <NavBar />
    <div class="festival-banner">
        <h1 class="festival-text">Festival</h1>
      </div>
    <div className='culture'>
      <div className="culturecontainer">
        <div className="ccard">
          <div className="imgBx">
            <img src={Festival2} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Akshaya Tritiya<br />
              </h2>
              <p class="image-para">
              Akshaya Tritiya, also known as Akti or Akha Teej, is a significant Hindu festival celebrated on the third lunar day of the bright half of the Indian month of Vaishakha.
              </p>
            </div>
          </div>
        </div>

        {/* Repeat the card structure for other items... */}
        
        <div className="ccard">
          <div className="imgBx">
            <img src={Festival1} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Khudurukuni Puja<br />
              </h2>
              <p class="image-para">   
       Khudurukuni Puja, also known as Bhalukuni Osha, is a traditional festival celebrated in the state of Odisha, particularly by women. This festival is dedicated to Maa Mangala.
              </p>
              
            </div>
          </div>
        </div>
        <div className="ccard">
          <div className="imgBx">
            <img src={Festival3} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">DolaPurnima<br />
              </h2>
              <p class="image-para">
              Dola Purnima, also known as Dola Yatra, is a Hindu festival celebrated primarily in the state of West Bengal, India. It usually falls on the full moon day in the month of Phalgun coinciding with Holi.
              </p>
            </div>
          </div>
        </div>
  
        <div className="ccard">
          <div className="imgBx">
            <img src={Festival4} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Odia New Year<br />
              </h2>
              <p class="image-para">
                
            Odia New Year, also known as "Pana Sankranti" or "Maha Vishuba Sankranti," is a traditional festival celebrated in the Indian state of Odisha.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    <Footer />
    </>
  )
}

export default Festival