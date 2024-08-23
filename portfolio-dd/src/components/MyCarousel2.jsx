import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './MyCarousel.css'; // Assuming you put the styles in a separate CSS file

const MyCarousel2 = () => {
  const splideRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      // Initialize Splide with options
      const splide = new Splide(splideRef.current, {
        type: 'loop',
        perPage: 1,
        autoplay: true,
      });

      // Update progress bar on 'mounted' and 'move' events
      splide.on('mounted move', () => {
        const end = splide.Components.Controller.getEnd() + 1;
        const rate = Math.min((splide.index + 1) / end, 1);
        if (barRef.current) {
          barRef.current.style.width = `${100 * rate}%`;
        }
      });

      splide.mount();
    }
  }, []);

  return (
    <div className="splide" ref={splideRef}>
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide" style={{
            backgroundImage: 'url(blend.png)',}}>
              <span>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                  <a href="">3D_MODELING</a>
              </span>
            </li>
          <li className="splide__slide" style={{
            backgroundImage: 'url(Art.png)',}}><span>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
              <a href="">DIGITAL_ART</a>
          </span></li>
          <li className="splide__slide" style={{
            backgroundImage: 'url(game.png)',}}><span>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
              <a href="">GAME_DEV</a>
          </span></li>
          <li className="splide__slide" style={{
            backgroundImage: 'url(design.png)',}}><span>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
              <a href="">WEB_DESIGN</a>
          </span></li>
        </ul>
      </div>
      <div className="my-slider-progress">
        <div className="my-slider-progress-bar" ref={barRef}></div>
      </div>
    </div>
  );
};

export default MyCarousel2;
