import {useState} from 'react';

function useToggle(active = false) {
  let [toggled, setToggle] = useState(active);

  return { toggled, setToggle };
}

export default useToggle;
