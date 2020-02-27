import React from 'react';

import useSlider from '../../hc-hooks/useSlider/useSlider';
import sliderData from '../../sampleData/SliderData';
import './slider.css';

function UiSlider(props) {
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
    <div><h4>Basic slider using <code>useSlider</code></h4>
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
    </div>
  );
}

export default UiSlider;