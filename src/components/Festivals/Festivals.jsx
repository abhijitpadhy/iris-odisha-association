import React from 'react'
import {Link} from 'react-router-dom'
import './Festivals.css';

const Festivals = () => {
  return (
   <>
<div class="festivals-container">
    <div class="festivals-content">
      <div class="festivals-header">
        About our festivals
      </div>
      <p class="festivals-description">
        We try to celebrate all types of Odia/Indian festivals like
      </p>
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
        <img src="https://img.indiaonline.in///agni_utsav/Agni%20Utsav%20(Orissa).jpg" alt=""/>
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

</div>
    <div class="load-more-button">
      <Link to='/upcoming-events'>
      <button>View More</button>
      </Link>
    </div>
</div>
   </>
  )
}

export default Festivals