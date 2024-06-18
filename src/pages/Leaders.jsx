import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import Leader1 from '../assets/leader1.png'
import Leader2 from '../assets/leader2.png'
import Leader3 from '../assets/leader3.png'
import Leader4 from '../assets/leader4.png'
import './Leaders.css'

const Leaders = () => {
  return (
    <>
    <TopBar/>
    <NavBar />

    <div class="leaders-banner">
      <h1 class="leaders-text">Leaders</h1>
      </div>

    <div className='culture'>
      <div className="culturecontainer">
        <div className="ccard">
          <div className="imgBx">
            <img src={Leader1} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Gopabandhu Das<br />
              </h2>
              <p class="image-para">
                
          Gopabandhu Das, a prominent figure in the history of Odisha, was a distinguished leader, social reformer, and freedom fighter. His contributions spanned various fields, including education, journalism, and politics. 
              </p>
            </div>
          </div>
        </div>

        {/* Repeat the card structure for other items... */}
        
        <div className="ccard">
          <div className="imgBx">
            <img src={Leader2} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Subhas Chandra Bose<br />
              </h2>
              <p class="image-para">
                
            Subhas Chandra Bose, a prominent leader in the Indian independence movement, made significant contributions to the struggle for freedom against British colonial rule. 
              </p>
              
            </div>
          </div>
        </div>
        <div className="ccard">
          <div className="imgBx">
            <img src={Leader3} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Madhusudan Das<br />
              </h2>
              <p class="image-para">
              Madhusudan Das, also known as Utkal Gourab (Pride of Utkal), was a prominent figure in the history of Odisha. He is celebrated for his contributions to the socio-economic and political development of the region. 
              </p>
            </div>
          </div>
        </div>
  
        <div className="ccard">
          <div className="imgBx">
            <img src={Leader4} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Mahatma Gandhi<br />
              </h2>
              <p class="image-para">
              Mahatma Gandhi, a key figure in India's struggle for independence, had a profound impact on the people of Odisha through his philosophy of non-violence and his efforts to address social and political issues.
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

export default Leaders