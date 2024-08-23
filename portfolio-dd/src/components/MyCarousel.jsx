import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './MyCarousel.css'; // Assuming you put the styles in a separate CSS file

const MyCarousel = () => {
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
            backgroundImage: 'url(Skillback.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>Slide 01</li>
          <li className="splide__slide">Slide 02</li>
          <li className="splide__slide">Slide 03</li>
          {/* Add more slides as needed */}
        </ul>
      </div>
      <div className="my-slider-progress">
        <div className="my-slider-progress-bar" ref={barRef}></div>
      </div>
    </div>
  );
};

export default MyCarousel;
