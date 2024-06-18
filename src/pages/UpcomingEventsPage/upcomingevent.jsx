import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import TopBar from '../../components/TopBar/TopBar'
import './upcomingevent.css'

const upcomingevent = () => {
  return (
    <>
    <TopBar />
    <NavBar />
    <h2 className='up-head'>Upcoming Festivals</h2>
    <div className="objective-container">
      <div className="objective-content">
        
          <div className="image-container">
            <img src="https://images.news9live.com/wp-content/uploads/2024/01/Untitled-design-48.jpg" alt="Objective" />
          </div>
          <div className="text-container">
            <h3 className="objective-heading">Makara Sankranti</h3>
            <h3 className='title-date'>Date: 15th Jan(Pausa)</h3>
            <p className="objective-text">
            Makara Sankranti, a Hindu festival celebrated with great enthusiasm across India, marks the transition of the sun into the zodiac sign of Makara (Capricorn).
            One of the highlights of Makar Sankranti is the age-old tradition of kite flying. The skies come alive with colorful kites of all shapes and sizes, symbolizing the triumph of light over darkness. 
            </p>
          </div>
        </div>
      </div>

    <div class="event">
        <main class="event-grid">
          <article>
            <img className='event-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Samba_dashami.jpg/1920px-Samba_dashami.jpg" alt="Samba Dashami"/>
            <div class="text">
              <h2 className='title'>Samba Dashami</h2>
              <h3 className='title-date'>20th Jan(Pausa)</h3>
              <p className='title-para'>Samba Dashami is a traditional Hindu festival celebrated in the state of Odisha, India, particularly by mothers to seek the blessings of Lord Surya (Sun God) for the well-being and long life of their sons.</p>
            </div>
          </article>
          <article>
            <img className='event-img' src="https://www.vinaybajrangi.com/upload/festivals/33_Republic%20day.webp" alt="Republic day"/>
            <div class="text">
              <h2 className='title'>Republic Day</h2>
              <h3 className='title-date'>26th Jan(Pausa)</h3>
              <p className='title-para'>Republic Day is a momentous occasion that commemorates the day when the Constitution of India came into effect on January 26, 1950.</p>
            </div>
          </article>
          <article>
            <img className='event-img' src="https://abhimantrit.com/wp-content/uploads/2023/03/Saraswati-Puja-Date.png" alt="saraswati puja"/>
            <div class="text">
              <h2 className='title'>Saraswati Puja</h2>
              <h3 className='title-date'>14th Feb(Magha)</h3>
              <p className='title-para'>Saraswati Puja, also known as Vasant Panchami, is a Hindu festival celebrated to honor the goddess Saraswati, the embodiment of wisdom, knowledge, and the arts.</p>
            </div>
          </article>
          <article>
            <img className='event-img' src="https://img.indiaonline.in///agni_utsav/Agni%20Utsav%20(Orissa).jpg" alt="Makar sankranti"/>
            <div class="text">
              <h2 className='title'>Agira Purnima</h2>
              <h3 className='title-date'>23rd Feb(Magha)</h3>
              <p className='title-para'>Agira Purnima is the festival mainly celebrated by the farmers of Odisha (Orissa). The festival holds special importance for farmers as rituals associated with the festival are believed to be helpful for farmers.</p>
            </div>
          </article>
        </main>
      </div>

      <h2 className='up-head'>All Festivals</h2>
{/* 1st section of festival */}
      <div class="main-container">
      <div class="card">
        <img src="https://pragativadi.com/wp-content/uploads/2023/01/images-62.jpeg" alt=""/>
        <div class="card-body">
                <button class="btn">Samba Dashami</button>
                <h3 className='festival-date'>Date: 20th Jan(Pausa)</h3>
        </div>
      </div>
      <div class="card">
        <img src="https://images.dailynews360.com/filters:format(webp)/fit-in/640x480/dnn-upload/images/2022/02/20/dailynews-1645326914.jpg" alt=""/>
        <div class="card-body">
             <button class="btn">Agira Purnima</button>
             <h3 className='festival-date'>Date: 23rd Feb(Magha)</h3>
        </div>
    </div>
    <div class="card">
        <img src="https://pragativadi.com/wp-content/uploads/2023/03/Dola-Purnima-Celebrated-Across-Odisha-With-Gaiety.jpeg" alt=""/>
        <div class="card-body">
             <button class="btn">DolaPurnima</button>
             <h3 className='festival-date'>Date: 24th March(Phalguna)</h3>
        </div>
    </div>
    <div class="card">
        <img src="https://www.odishavisit.com/wp-content/uploads/2022/06/Pakha%E1%B8%B7a-1.jpeg" alt=""/>
        <div class="card-body">
              <button class="btn">Pakhala Diwas</button>
              <h3 className='festival-date'>Date: 20th March(Phalguna)</h3>
        </div>
    </div>
</div>

{/* 2nd section of festival */}
<div class="main-container">

      <div class="card">
           <img src="https://imgeng.jagran.com/images/2023/apr/odisha-day-20231680320903573.jpg" alt=""/>
           <div class="card-body">
               <button class="btn">Utkal Diwas</button>
               <h3 className='festival-date'>Date: 1st April(Chaitra)</h3>
           </div>
       </div>
      <div class="card">
        <img src="https://pragativadi.com/wp-content/uploads/2023/04/Pana-Sankranti-2023-and-Odia-New-Year-Today_.jpg" alt=""/>
        <div class="card-body">
            <button class="btn">Odia New Year</button>
            <h3 className='festival-date'>Date: 14th April(chaitra)</h3>
        </div>
    </div>
    <div class="card">
           <img src="https://img.freepik.com/free-vector/akshaya-tritiya-concept_52683-36770.jpg" alt=""/>
           <div class="card-body">
                 <button class="btn">Akshya Tritiya</button>
                 <h3 className='festival-date'>Date: 10th May(Baisakha)</h3>
           </div>
       </div>
       <div class="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BUBRZD396AlcENMt_67k-6EFvZ47YPCVkGsfjAR3NFjjSc29pLV-2rj316pcl623SZM&usqp=CAU" alt=""/>
        <div class="card-body">
        <button class="btn">Sabitri</button>
        <h3 className='festival-date'>Date: 6th Jun(Jyestha)</h3>
        </div>
    </div>
</div>
{/* 3rd section of festival */}

<div class="main-container">
    <div class="card">
        <img src="https://images.odishatv.in/uploadimage/library/16_9/16_9_0/IMAGE_1655207598.webp" alt=""/>
        <div class="card-body">
             <button class="btn">Raja</button>
             <h3 className='festival-date'>Date: 14th Jun(Ashadha)</h3>
        </div>
    </div>
    <div class="card">
           <img src="https://images.pexels.com/photos/17349035/pexels-photo-17349035/free-photo-of-rath-11.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""/>
           <div class="card-body">
                 <button class="btn">Ratha yatra</button>
                 <h3 className='festival-date'>Date: 7th July(Ashadha)</h3>
           </div>
       </div>
       <div class="card">
           <img src="https://gumlet.assettype.com/freepressjournal/2023-07/39271581-b3b0-4911-ae53-ac8082bc7655/SS.jpg" alt=""/>
           <div class="card-body">
                 <button class="btn">Chietau Amavashya</button>
                 <h3 className='festival-date'>Date: 4th Aug(Shravana)</h3>
           </div>
       </div>
       <div class="card">
        <img src="https://pbs.twimg.com/media/E99z_4rVcAE7bhV.jpg:large" alt=""/>
        <div class="card-body">
                <button class="btn">Khudurukuni Puja</button>
                <h3 className='festival-date'>Date: 25th Aug(Bhadraba)</h3>
        </div>
      </div>
</div>

{/* 4th section of festival */}
<div class="main-container">
       
       <div class="card">
        <img src="https://i.pinimg.com/originals/d2/0b/ac/d20bace8d69cc28d16ada803b45a9fc5.jpg" alt=""/>
        <div class="card-body">
                <button class="btn">Nuakhai Juhar</button>
                <h3 className='festival-date'>Date: 8th Sep(Bhadraba)</h3>
        </div>
      </div>

      <div class="card">
        <img src="https://www.bhubaneswarbuzz.com/wp-content/uploads/2020/08/received_620460128657305.jpeg" alt=""/>
        <div class="card-body">
            <button class="btn">Sathi Osha</button>
            <h3 className='festival-date'>Date: 9th Sep(Bhadraba)</h3>
        </div>
    </div>

    <div class="card">
        <img src="https://images.news18.com/ibnlive/uploads/2022/10/untitled-2-166480952816x9.jpg" alt=""/>
        <div class="card-body">
             <button class="btn">Durga Puja</button>
             <h3 className='festival-date'>Date: 12th oct(Ashwina)</h3>
        </div>
    </div>
    <div class="card">
        <img src="https://d1ttqxosekmk9r.cloudfront.net/posts/b20fa6aa-32b6-4823-9133-7fdbb8652953.jpg" alt=""/>
        <div class="card-body">
            <button class="btn">Kumar Purnima</button>
            <h3 className='festival-date'>Date: 17th Oct(Ashwina)</h3>
        </div>
    </div>
</div>

{/* 5th section of festival */}
<div class="main-container">
<div class="card">
        <img src="https://dpymbeabc9r3m.cloudfront.net/fit-in/1200x610/posts/argusnews-1-01b83c38-f628-4687-b5ad-bbd0d49d112c.jpg" alt=""/>
        <div class="card-body">
             <button class="btn">Kartika Purnima</button>
             <h3 className='festival-date'>Date: 15th Nov(Kartika)</h3>
        </div>
    </div>
    <div class="card">
        <img src="https://www.infobowl.in/wp-content/uploads/2019/11/chhadakhai-odia-festival.jpg" alt=""/>
        <div class="card-body">
            <button class="btn">Chadakhai</button>
            <h3 className='festival-date'>Date: 16th Nov(Kartika)</h3>
        </div>
    </div>
    <div class="card">
        <img src="https://thesrinibash.files.wordpress.com/2018/11/20201224_155951.jpg?w=750" alt=""/>
        <div class="card-body">
                <button class="btn">Manabasa Gurubar</button>
                <h3 className='festival-date'>Date: 21st Nov(Margashira)</h3>
        </div>
      </div>
       <div class="card">
           <img src="https://lifebeyondnumbers.com/wp-content/uploads/2020/12/Prathamastami-odisa.jpg" alt=""/>
           <div class="card-body">
                 <button class="btn">Prathama Astami</button>
                 <h3 className='festival-date'>Date: 23rd Nov(Margashira)</h3>
           </div>
       </div>
</div>
    <Footer />
    </>
  )
}

export default upcomingevent