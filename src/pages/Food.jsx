import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import Food1 from '../assets/food1.png'
import Food2 from '../assets/food2.png'
import Food3 from '../assets/food3.png'
import Food4 from '../assets/food4.png'
import './Food.css'

const Food = () => {
  return (
    <>
    <TopBar />
    <NavBar />
    <div class="food-banner">
        <h1 class="food-text">Food</h1>
      </div>
    <div className='culture'>
      <div className="culturecontainer">
        <div className="ccard">
          <div className="imgBx">
            <img src={Food2} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Dahibara Aludum<br />
              </h2>
              <p class="image-para">
              Dahibara Aludum is more than just food; it's an Odia culinary experience. The blend of textures, spices, and the coolness of yogurt creates a beloved dish in Odisha, celebrated for its unique flavors and traditions.
              </p>
            </div>
          </div>
        </div>

        {/* Repeat the card structure for other items... */}
        
        <div className="ccard">
          <div className="imgBx">
            <img src={Food1} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Dahi Pakhala<br />
              </h2>
              <p class="image-para">
              Dahi Pakhala is a delicious and culturally significant dish in Odisha, celebrated not only for its taste but also for its connection to tradition and its ability to offer respite from the summer heat.
              </p>
            </div>
          </div>
        </div>
        <div className="ccard">
          <div className="imgBx">
            <img src={Food3} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Rasogola<br />
              </h2>
              <p class="image-para">
              Rasagola is not just a sweet dish; it's a cultural symbol with a rich history deeply rooted in the traditions of Odisha. Its unique taste and widespread popularity continue to make it a cherished treat for people of all ages.
              </p>
            </div>
          </div>
        </div>
  
        <div className="ccard">
          <div className="imgBx">
            <img src={Food4} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Chena Poda<br />
              </h2>
              <p class="image-para">
              Chhena Poda is a delicious and iconic sweet dish from the state of Odisha, India. It is a unique and traditional dessert that has gained popularity not only in Odisha but also in other parts of the country.
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

export default Food