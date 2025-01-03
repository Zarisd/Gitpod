import React, { useEffect } from 'react';
import './Header.css'; 
import AOS from 'aos';  // Импортируем сам AOS
import "aos/dist/aos.css";  // Импортируем стили AOS

const Header = () => {
  useEffect(() => {
    // Инициализируем AOS
    AOS.init({
      duration: 1000, // Время анимации
      once: true, // Анимация будет происходить только один раз
    });
  }, []); // Пустой массив, чтобы инициализация произошла только один раз

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="wraper">
            <div data-aos="zoom-out-down"   data-aos-delay="300" className="img">
              <img src="/Logo.svg" alt="" />
              <h1>Gitpod</h1>
            </div>

            <nav data-aos="zoom-out-down"   data-aos-delay="600" className="nav">
              <a href="">Features</a>
              <a href="">Pricing</a>
              <a href="">Blog</a>
              <a href="">Docs</a>
              <a href="">Changelog</a>
              <a href="">We're hiring</a>
            </nav>

            <button data-aos="zoom-out-down"   data-aos-delay="900" className="btn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
