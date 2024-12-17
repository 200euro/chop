import React, { useEffect } from 'react';
import './Clothe.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clothes = () => {
  // Инициализация AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      once: true, // Анимация только один раз
    });
  }, []);

  return (
    <>
      <section className="clothes">
        <div className="container">
          <div className="clothes__wrapper" data-aos="fade-up" data-aos-delay="200">
            {/* Текстовый блок */}
            <div className="clothes__text" data-aos="fade-up" data-aos-delay="200">
              <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p>
                Browse through our diverse range of meticulously crafted garments, designed to bring
                out your individuality and cater to your sense of style.
              </p>
              <button className="btnmain" data-aos="fade-up" data-aos-delay="300">
                Shop Now
              </button>

              {/* Блок с числами */}
              <div className="clothes__number" data-aos="fade-up" data-aos-delay="400">
                <div className="number__box" data-aos="fade-up" data-aos-delay="500">
                  <h2>200+</h2>
                  <p>International Brands</p>
                </div>

                <div className="number__box" data-aos="fade-up" data-aos-delay="600">
                  <h2>2,000+</h2>
                  <p>High-Quality Products</p>
                </div>

                <div className="number__box" data-aos="fade-up" data-aos-delay="700">
                  <h2>30,000+</h2>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Блок изображения */}
            <div className="clothes__image" data-aos="fade-up" data-aos-delay="800">
              <img src="/manwoman.png" alt="Man and Woman Fashion" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clothes;
   