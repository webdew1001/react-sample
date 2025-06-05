import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="main">
      <section className="main_visual">
        <Swiper  
            speed={1000}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
        
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="img/visual-01.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/visual-02.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/visual-03.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* main_visual */}


      <section className="section section-01">
        <h2 className='heading'>Morning Boost</h2>

        <div className="list">
            <div className="item"> 
                <div className="info">
                    <strong>Stretch to Wake Up</strong>
                    <p>Starting with light movement improves circulation, reduces morning stiffness, and signals your body that it’s time to go.</p>
                </div> 
                <Link to="/">Try a 5-minute sequence</Link> 
            </div>

            <div className="item"> 
                <div className="info">
                    <strong>Quick Breakfast, Big Impact</strong>
                    <p>Skipping breakfast can lead to energy crashes and poor focus. Instead, aim for a balanced meal with carbs, protein, and good fats.</p>
                </div> 
                <Link to="/">Simple combos to try</Link> 
            </div>

            <div className="item"> 
                <div className="info">
                    <strong>Stretch to Wake Up</strong>
                    <p>Starting with light movement improves circulation, reduces morning stiffness, and signals your body that it’s time to go.</p>
                </div> 
                <Link to="/">Try a 5-minute sequence </Link> 
            </div>

            <div className="item"> 
                <div className="info">
                    <strong>Stretch to Wake Up</strong>
                    <p>Starting with light movement improves circulation, reduces morning stiffness, and signals your body that it’s time to go.</p>
                </div> 
                <Link to="/">Try a 5-minute sequence </Link> 
            </div>
        </div>
      </section>{/* .section-01 end */}
    </div>
  );
};

export default MainPage;
