import React, { useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const { isActive, toggleBurger, user, isAuth, logout } = useAppContext();

  // Инициализация AOS при монтировании компонента
  useEffect(() => {
    AOS.init({
      duration: 800, // длительность анимации
      once: true, // анимация выполняется только один раз
    });
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            {/* Логотип */}
            <div className="header__wrap" data-aos="fade-up" data-aos-delay="100">
              <div className="header__header">
                <Link to={'/'} data-aos="fade-up" data-aos-delay="200">
                  <img className="logo__img" src="/public/SHOP.CO.png" alt="" />
                </Link>

                {/* Меню */}
                <div
                  className={`header__menu ${isActive ? 'active' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Link to={'/sale'} className="dropdown" data-aos="fade-up" data-aos-delay="400">
                    Shop
                    <img
                      src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
                      alt=""
                    />
                    <div>
                      <Link to={'/'}>Men</Link>
                      <Link to={'/'}>Women</Link>
                      <Link to={'/'}>Kids</Link>  
                    </div>
                  </Link>
                  <a href="/#arrivals" data-aos="fade-up" data-aos-delay="800">
                    On Sale
                  </a>
                  <a href="/#selling" data-aos="fade-up" data-aos-delay="900">
                    New Arrivals
                  </a>
                  <Link to={'/brands'} data-aos="fade-up" data-aos-delay="1000">
                    Brands
                  </Link>
                </div>
              </div>

              {/* Бургер-кнопка */}
              <div
                onClick={toggleBurger}
                className={`burger ${isActive ? 'active' : ''}`}
                data-aos="fade-up"
                data-aos-delay="1100"
              >
                <div className="div"></div>
                <div className="div"></div>
                <div className="div"></div>
              </div>
            </div>

            {/* Поиск и кнопки */}
            <div className="header__search" data-aos="fade-up" data-aos-delay="1200">
              <div className="header__input" data-aos="fade-up" data-aos-delay="1300">
                <Link>
                  <img src="/za-lupa.png" alt="" />
                </Link>
                <input placeholder="Search for products..." type="text" />
              </div>
              <Link data-aos="fade-up" data-aos-delay="1400">
                <img src="/korzinaa.png" alt="" />
              </Link>

              {/* Пользователь */}
              {isAuth ? (
                <div data-aos="fade-up" data-aos-delay="1500">
                  <b>{user.username}</b>
                  <button onClick={logout}>Выйти</button>
                </div>
              ) : (
                <Link to={'/login'} data-aos="fade-up" data-aos-delay="1600">
                  <img src="/ava2.png" alt="" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
