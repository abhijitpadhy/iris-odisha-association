import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import Art1 from '../assets/art1.png'
import Art2 from '../assets/art2.png'
import Craft1 from '../assets/craft1.png'
import Craft2 from '../assets/craft2.png'
import './Artandcraft.css'

const Artandcraft = () => {
  return (
    <>
    <TopBar />
    <NavBar />
    <div class="artandcraft-banner">
      <h1 class="art-text">Art and Craft</h1>
      </div>

    <div className='culture'>
      <div className="culturecontainer">
        <div className="ccard">
          <div className="imgBx">
            <img src={Art1} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Sand Art<br />
              </h2>
              <p class="image-para">
             
          Odisha, known for its rich cultural heritage, is also home to a unique and internationally acclaimed art form – sand art. The coastal town of Puri, in particular, has gained fame for hosting the annual International Sand Art Festival.
              </p>
            </div>
          </div>
        </div>

        {/* Repeat the card structure for other items... */}
        
        <div className="ccard">
          <div className="imgBx">
            <img src={Art2} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Jhoti Art<br />
              </h2>
              <p class="image-para">
               
           Jhoti, also known as Chita or Chita Patta, is a traditional form of floor and wall painting that is a significant part of the cultural heritage of Odisha, India. 
              </p>
              
            </div>
          </div>
        </div>
        <div className="ccard">
          <div className="imgBx">
            <img src={Craft1} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Chandua Craft<br />
              </h2>
              <p class="image-para">Chandua is a traditional textile craft from Odisha, India, involving appliqué work. In this art form, small colored fabric pieces are stitched onto a larger fabric, forming detailed and lively designs.</p>
            </div>
          </div>
        </div>
  
        <div className="ccard">
          <div className="imgBx">
            <img src={Craft2} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Pattachitra<br />
              </h2>
              <p class="image-para">
              The term "Pattachitra" is derived from the Sanskrit words "Patta," meaning canvas, and "Chitra," meaning picture or painting. This art form has a rich history and is deeply rooted in the cultural and religious traditions of Odisha.
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

export default Artandcraft