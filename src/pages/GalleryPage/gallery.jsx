import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import TopBar from '../../components/TopBar/TopBar';
import './gallery.css';
import Function from '../../assets/function.jpeg'
import Anchor from '../../assets/anchor.jpeg'
import Award from '../../assets/award.jpeg'
import Cake from '../../assets/cake.jpeg'
import Celebration from '../../assets/celebration.jpeg'
import Childrens from '../../assets/childrens.jpeg'
import Cinemahall from '../../assets/cinemahall.jpeg'
import Drama from '../../assets/drama.jpeg'
import Dramas from '../../assets/dramas.jpeg'
import Filmfestival from '../../assets/filmfestival.jpeg'
import Gift from '../../assets/gift.jpeg'
import Girls from '../../assets/girls.jpeg'
import Group from '../../assets/group.jpeg'
import Hall from '../../assets/hall.jpeg'
import Honour from '../../assets/honour.png'
import Pranam from '../../assets/pranam.jpeg'
import Selfie from '../../assets/selfie.jpeg'
import Tilak from '../../assets/tilak.jpeg'
import Gallery1 from '../../assets/g-1.mp4'
import Gallery2 from '../../assets/g-12.mp4'
import Gallery3 from '../../assets/g-2.png'
import Gallery4 from '../../assets/g-3.png'
import Gallery5 from '../../assets/g-4.mp4'
import Gallery6 from '../../assets/g-6.png'
import Gallery7 from '../../assets/g-5.png'
import Gallery8 from '../../assets/g-7.png'
import Gallery9 from '../../assets/g-8.png'
import Gallery10 from '../../assets/g-9.png'
import Gallery11 from '../../assets/g-10.png'
import Gallery12 from '../../assets/g-11.png'
import Gallery13 from '../../assets/g-13.png'
import Gallery14 from '../../assets/g-14.mp4'
import Gallery15 from '../../assets/g-15.png'
import Gallery16 from '../../assets/g-16.mp4'
import Gallery17 from '../../assets/g-17.png'
import Gallery18 from '../../assets/g-20.mp4'
import Gallery19 from '../../assets/g-18.png'
import Gallery20 from '../../assets/g-42.png'
import Gallery21 from '../../assets/g-23.png'
import Gallery22 from '../../assets/g-25.png'
import Gallery23 from '../../assets/g-21.mp4'
import Gallery24 from '../../assets/g-22.png'
import Gallery25 from '../../assets/g-24.png'
import Gallery26 from '../../assets/g-43.png'
import Gallery27 from '../../assets/g-26.png'
import Gallery28 from '../../assets/g-27.png'
import Gallery29 from '../../assets/g-28.png'
import Gallery30 from '../../assets/g-29.png'
import Gallery31 from '../../assets/g-30.png'
import Gallery32 from '../../assets/g-31.png'
import Gallery33 from '../../assets/g-32.png'
import Gallery34 from '../../assets/g-33.png'
import Gallery35 from '../../assets/g-34.png'
import Gallery36 from '../../assets/g-35.png'
import Gallery37 from '../../assets/g-36.png'
import Gallery38 from '../../assets/g-37.png'
import Gallery39 from '../../assets/g-38.png'
import Gallery40 from '../../assets/g-39.png'
import Gallery41 from '../../assets/g-40.png'
import Gallery42 from '../../assets/g-41.png'
import Gallery43 from '../../assets/g-43.png'
import Gallery44 from '../../assets/g-44.png'

const Gallery = () => {
  useEffect(() => {
    let sortBtn = document.querySelector('.filter-menu').children;
    let sortItem = document.querySelector('.filter-item').children;

    for (let i = 0; i < sortBtn.length; i++) {
      sortBtn[i].addEventListener('click', function () {
        for (let j = 0; j < sortBtn.length; j++) {
          sortBtn[j].classList.remove('current');
        }
        this.classList.add('current');
        let targetData = this.getAttribute('data-target');
        for (let k = 0; k < sortItem.length; k++) {
          sortItem[k].classList.remove('active');
          sortItem[k].classList.add('delete');
          if (
            sortItem[k].getAttribute('data-item') === targetData ||
            targetData === 'all'
          ) {
            sortItem[k].classList.remove('delete');
            sortItem[k].classList.add('active');
          }
        }
      });
    }
  }, []);

  return (
    <>
      <TopBar />
      <NavBar />

      <div className="gallery-sec">
        <br />
        <h1 className="gallery-head">OUR SHOWCASES</h1>
        <p className="gallery-para">
          All Odias in Ireland celebrate occasions. The Irish Odia Association's
          gallery encapsulates the vibrant essence of Odia culture and its
          dynamic community in Ireland. Through captivating images and visuals,
          our gallery showcases the richness of festivals, traditions, and
          events, fostering a sense of unity and pride among Odias, both within
          and beyond the emerald shores of Ireland.
        </p>
        <br />

        <section id="gallery">
          <div className="galleryfilter">
            <ul className="filter-menu">
              <li data-target="all">All</li>
              <li data-target="2020">2020</li>
              <li data-target="2021">2021</li>
              <li data-target="2022">2022</li>
              <li data-target="2023">2023</li>
              <li data-target="2024">2024</li>
            </ul>
            <ul className="filter-item">
              {/* start 2022 */}
            <li data-item="2022">
                <img src={Pranam}  alt="pranam" />
              </li>
              <li data-item="2022">
                <img src={Function} alt="function" />
              </li>
              <li data-item="2022">
                <img src={Cake}  alt="cake" />
              </li>
              <li data-item="2022">
                <img src={Selfie} alt="selfie" />
              </li>
              {/* end 2022 */}

              {/* start 2020 */}
              <li data-item="2020">
                <img src={Childrens} alt="childrens" />
              </li>
              <li data-item="2020">
                <img src={Cinemahall} alt="cinemahall" />
              </li>
              <li data-item="2020">
                <img src={Celebration} alt="celebration" />
              </li>
              <li data-item="2020">
                <img src={Group}  alt="group" />
              </li> 
              {/* start 2021 */}
              <li data-item="2021">
                <img src={Anchor} alt="anchor" />
              </li>
              <li data-item="2021">
                <img src={Award} alt="award" />
              </li>
              <li data-item="2021">
                <img src={Drama} alt="drama" />
              </li>
              <li data-item="2021">
                <img src={Girls} alt="girls" />
              </li>
              {/* end 2021 */}

              {/* start 2023 */}
              <li data-item="2023">
                <img src={Filmfestival} alt="filmfestival" />
              </li>
              <li data-item="2023">
                <img src={Gift} alt="gift" />
              </li>
              <li data-item="2023">
                <img src={Honour} alt="honour" />
              </li>
              <li data-item="2023">
                <img src={Tilak} alt="tilak" />
              </li>
              {/* end 2023 */}
              <li data-item="2020">
                <img src={Hall}  alt="hall" />
              </li>
              <li data-item="2020">
                <img src={Dramas} alt="dramas" />
              </li>
              {/* end 2020 */}

              {/* start 2024 */}
              <li data-item="2024">
              <video className="myVideo" controls>
              <source src={Gallery1} type="video/mp4" /></video>
              </li>
              <li data-item="2024">
              <video className="myVideo" controls>
              <source src={Gallery2} type="video/mp4" /></video>
              </li>
              {/* 1st section end */}
              <br></br>
              <li data-item="2024">
                <img src={Gallery3} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery4} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery6} alt="image" />
              </li>
              <li data-item="2024">
              <video className="myVideo" controls>
              <source src={Gallery5} type="video/mp4" /></video>
              </li>
              {/* 2nd section end */}
              <li data-item="2024">
                <img src={Gallery7} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery8} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery9} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery10} alt="image" />
              </li>
              {/* 3rd section end */}
              <li data-item="2024">
                <img src={Gallery11} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery12} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery17} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery15} alt="image" />
              </li>
              {/* 4th section end */}
              <li data-item="2024">
              <video className="myVideo" controls>
              <source src={Gallery14} type="video/mp4" /></video>
              </li>
              <li data-item="2024">
              <video className="myVideo" controls>
              <source src={Gallery16} type="video/mp4" /></video>
              </li>
               <li data-item="2024">
              <video className="myVideo" controls>
              <source src={Gallery18} type="video/mp4" /></video>
              </li>
              <li data-item="2024">
              <video className="myVideo" controls>
              <source src={Gallery23} type="video/mp4" /></video>
              </li>
              {/* 5th section end */}
              <li data-item="2024">
                <img src={Gallery22} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery19} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery20} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery21} alt="image" />
              </li>
              {/* 6th section end */}
              <li data-item="2024">
                <img src={Gallery17} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery24} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery25} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery26} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery27} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery28} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery29} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery30} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery31} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery32} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery33} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery34} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery35} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery36} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery37} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery38} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery39} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery40} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery41} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery42} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery43} alt="image" />
              </li>
              <li data-item="2024">
                <img src={Gallery44} alt="image" />
              </li>
              {/* end 2024 */}
            </ul>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
