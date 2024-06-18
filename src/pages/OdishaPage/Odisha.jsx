import React from 'react'
import {Link} from 'react-router-dom'
import './Odisha.css'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import TopBar from '../../components/TopBar/TopBar'

const Odisha = () => {
  return (
    <>
    <TopBar />
    <NavBar />
    <div class="card-container">
        <div class="cardss">

            <div class="main-card">
                <img src="https://odishanewsinsight.com/wp-content/uploads/2015/01/Odisha-Tourism.jpg" alt="culture"/>
                <h3 class="card-name">CULTURE</h3>
                <Link to='/culture' class="btn">VIEW MORE</Link>
            </div>

            <div class="main-card">
                <img src="https://im.rediff.com/news/2020/jun/22rath-yatra1.jpg" alt="festival"/>
                <h3 class="card-name">FESTIVAL</h3>
                <Link to='/festival' class="btn">VIEW MORE</Link>
            </div>

            <div class="main-card">
                <img src="https://odishabytes.com/wp-content/uploads/2021/03/Pakhala2-1200x994.jpg" alt="food"/>
                <h3 class="card-name">FOOD</h3>
                <Link to='/food' class="btn">VIEW MORE</Link>
            </div>
            <div class="main-card">
                <img src="https://sambadenglish.com/wp-content/uploads/2017/12/BeFunky-Collage-4.jpg" alt="art and craft"/>
                <h3 class="card-name">ART AND CRAFT</h3>
                <Link to='/artandcraft' class="btn">VIEW MORE</Link>
            </div>
        </div>
    </div>



    <div class="card-container">
        <div class="cardss">
            <div class="main-card">
                <img src="https://etimg.etb2bimg.com/photo/92031333.cms" alt="history and heritage"/>
                <h3 class="card-name">HISTORY AND HERITAGE</h3>
                <Link to='/historyandheritage' class="btn">VIEW MORE</Link>
            </div>

            <div class="main-card">
                <img src="https://im.hunt.in/cg/cuttack/City-Guide/Legends.jpg" alt="leaders"/>
                <h3 class="card-name">LEADERS</h3>
                <Link to='/leaders' class="btn">VIEW MORE</Link>
            </div>

            <div class="main-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCgN1Q1SeCiyHh30whei1-FmiiD93QA4QQnqMVhjmJT7bEh1h" alt="odias Now"/>
                <h3 class="card-name">ODIAS NOW</h3>
                <Link to='/odiasnow' class="btn">VIEW MORE</Link>
            </div>
            <div class="main-card">
                <img src="https://www.tripsavvy.com/thmb/CqvMyrnnVy5fNLFYTr5zW13s-XE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/_DSC0713_Snapseed_Darkroom-819d0b229974460e8141622c4494e2ed.jpg" alt="place to visit"/>
                <h3 class="card-name">PLACE TO VISIT</h3>
                <Link to='/placetovisit' class="btn">VIEW MORE</Link>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Odisha