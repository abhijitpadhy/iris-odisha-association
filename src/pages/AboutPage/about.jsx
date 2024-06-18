import React from 'react'
import missionvisionImage  from '../../assets/mision.jpeg'
import presidentImage from "../../assets/President.png"
import TopBar from '../../components/TopBar/TopBar'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './about.css';

const About = () => {
  return (
    <>
    <TopBar />
    <NavBar />
  <div class="about-teams-container">
    <div class="about-teams-content">
      <h2>Who We Are</h2>
      <p>
        We are some Odias from Odisha having a sense of pride as Odia. We are the family of old, young, male, female, professionals, students, married, unmarried who have a connection to the great land of Neelachal.
      </p>
      <div class="grid grid-cols-6 gap-8 mt-5">
      </div>
    </div>
  </div>
  <div class="mission-vision-container">
  <div class="mission-vision-image">
    <img src={missionvisionImage} alt=""/>
  </div>
  <div class="mission-vision-text">
    <br />
    <h3>Mission</h3>
    <p>
    To promote and celebrate the culture, heritage, and traditions of Odisha while fostering a sense of community and belonging among Odias living in Ireland. We strive to facilitate cultural exchange, provide support to Odias in Ireland, and contribute positively to the local community through various initiatives and functions.
    </p>
    <br />
    <h3>Vision</h3>
    <p>
    Our vision is to create a vibrant and inclusive platform that serves as a cultural hub for Odias in Ireland, nurturing a strong sense of identity and pride in our heritage. We aim to be recognized as a leading organization that promotes cultural awareness, fosters connections, and enriches the lives of Odias and the wider community in Ireland.
    </p>
    <br />
  </div>
</div>

  <div class="president-container">
    <div class="president-image">
      <img src={presidentImage} alt=""/>
    </div>
  </div>
  <div class="message-container">
    <div class="message-text">
      <h5 class="headd">Namaskara/Pranama/Oliki</h5>
      <br />
      <p class="paraa">It's my immense pleasure to welcome you to this incredible site from the Irish Odia association.</p>
      <p class="paraa">As an Odia , I always have a sense of pride. This pride gets multiplied when other people show the pride for Odisha and Odia people. We have great history from Kharavel to Kapilendra Deva. We always keep fighting waves after waves of problem come to us but we always stand again and again for last 10000years. The nature also defeated by odias as today zero causalities record with odisha for any cyclone. </p>
      <p class="paraa">The same enthusiasm and pride ,I can see in the hearts of odias in Ireland .So we stated this association. To support each other and stand together like we did last 10000years. I can see some Narshima Dev,some Kaplindra Deva some Kharavelas in the eyes of young and dynamic odias living here. We are the people who did voyoga to from srilanka to south korea and did business today some are also settled in this peaceful island. </p>
      <p class="paraa">We may be far from Odisha, but we can feel the blessings of Lord Jaganath. As our elder of our family, he is always there to guide us. The same blessings we need extend to the world by this platform.</p>
      <p class="paraa">The food, the festivals the stories and dhagas all we want to pass on to the next generations ,So they also feel the pride.</p>
      <p class="paraa">Thanks for visiting this site.</p>
      <br />
      <p class="paraa">Jay Jaganath</p>
      <p class="paraa">Sanjeeb Barik</p>
    </div>
  </div>
  <Footer />
    </>
  )
}

export default About