import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import TopBar from '../components/TopBar/TopBar'
import Place1 from '../assets/place1.png'
import Place2 from '../assets/place2.png'
import Place3 from '../assets/place3.png'
import Place4 from '../assets/place4.png'
import './Placetovisit.css'

const Placetovisit = () => {
  return (
    <>
    <TopBar />
    <NavBar />

    <div class="placetovisit-banner">
      <h1 class="place-text">Place to Visit</h1>
      </div>

    <div className='culture'>
      <div className="culturecontainer">
        <div className="ccard">
          <div className="imgBx">
            <img src={Place1} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Puri<br />
              </h2>
              <p class="image-para">
              Puri offers a unique blend of spirituality, cultural richness, and natural beauty, making it a must-visit destination for both pilgrims and tourists exploring the diverse attractions of Odisha.
              </p>
            </div>
          </div>
        </div>

        {/* Repeat the card structure for other items... */}
        
        <div className="ccard">
          <div className="imgBx">
            <img src={Place2} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Chilika<br />
              </h2>
              <p class="image-para">  
          Chilika Lake, in eastern Odisha, is India's largest coastal lagoon and the world's second-largest. This brackish water body is famous for its diverse wildlife, beautiful scenery, and cultural importance.
              </p>
              
            </div>
          </div>
        </div>
        <div className="ccard">
          <div className="imgBx">
            <img src={Place3} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Lingaraj Temple<br />
              </h2>
              <p class="image-para">
              The Lingaraj Temple stands as a symbol of Odisha's rich cultural and religious legacy. Its architectural beauty, historical importance, and spiritual ambiance make it a must-visit destination.
              </p>
            </div>
          </div>
        </div>
  
        <div className="ccard">
          <div className="imgBx">
            <img src={Place4} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2 class="image-heading">Nandankanan<br />
              </h2>
              <p class="image-para">
              Nandankanan Zoological Park is a must-visit destination for nature enthusiasts, wildlife lovers, and families looking to explore the rich biodiversity of Odisha in a well-maintained and educational setting.
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

export default Placetovisit