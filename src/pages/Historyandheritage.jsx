import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import History1 from '../assets/history1.png'
import History2 from '../assets/history2.png'
import Heritage1 from '../assets/heritage1.png'
import Heritage2 from '../assets/heritage2.png'
import './Historyandheritage.css'

const Historyandheritage = () => {
  return (
    <>
    <TopBar />
    <NavBar />
    <div class="historyandheritage-banner">
      <h1 class="history-text">History and Heritage</h1>
      </div>

    <div className='culture'>
      <div className="culturecontainer">
        <div className="ccard">
          <div className="imgBx">
            <img src={History1} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Konark Chakra<br />
              </h2>
              <p class="image-para">
              The Konark Chakra at the Sun Temple is a fascinating component of Odisha's history and cultural legacy. Its intricate design, functional aspects, and symbolic representation make it a unique.
              </p>
            </div>
          </div>
        </div>

        {/* Repeat the card structure for other items... */}
        
        <div className="ccard">
          <div className="imgBx">
            <img src={History2} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Buddhism<br />
              </h2>
              <p class="image-para">
          The history of Buddhism in Odisha (formerly known as Kalinga) is deeply rooted in ancient times and is marked by significant events, including the famous Kalinga War and Emperor Ashoka's transformative conversion to Buddhism. 
              </p>
              
            </div>
          </div>
        </div>
        <div className="ccard">
          <div className="imgBx">
            <img src={Heritage1} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Konark Temple<br />
              </h2>
              <p class="image-para">
              The Konark Sun Temple in Odisha is a remarkable blend of history and artistry, showcasing the state's cultural richness. As an architectural marvel and cultural icon, it stands as a testament to Odisha's vibrant heritage. 
              </p>
            </div>
          </div>
        </div>
  
        <div className="ccard">
          <div className="imgBx">
            <img src={Heritage2} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Dhauli<br />
              </h2>
              <p class="image-para">
              Dhauli, situated on the banks of the Daya River near Bhubaneswar in Odisha, holds immense historical and cultural significance. It is primarily known for the Dhauli Shanti Stupa and the ancient rock edicts of Ashoka. 
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

export default Historyandheritage