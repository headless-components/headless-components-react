import React from 'react';

import useSlider from '../hooks/useSlider';
import sliderData from '../data/SliderData';

function Slider(props) {
  let { active, setActive } = useSlider(0);
  let max = sliderData.length - 1;
  let min = 0;
  let width = 400;

  function prevSlider(num) {
    return num > min ? num - 1 : num;
  }

  function nextSlider(num) {
    return num < max ? num + 1 : num;
  }

  return (
    <div className="slider-container">
      <div>
        <button type="button" onClick={() => setActive(prevSlider(active))}>
          Prev
        </button>
      </div>
      <div className="slider-wrapper">
        <ul
          className="slider"
          style={{ transform: `translateX(${-active * width}px` }}
        >
          {sliderData.map((item, index) => {
            return (
              <li
                key={item.imageUrl}
                className={
                  active === index ? "slider-item active" : "slider-item"
                }
              >
                <img src={item.imageUrl} alt={item.imageAlt} id={item.id} />
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <button type="button" onClick={() => setActive(nextSlider(active))}>
          post
        </button>
      </div>
    </div>
  );
}

export default Slider;