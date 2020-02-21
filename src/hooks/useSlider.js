import { useState } from "react";


function useSlider(initialSlider = 0) {
  let [active, setActive] = useState(initialSlider);

  return { active, setActive };
}