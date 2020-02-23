import { useEffect, useState, useMemo } from 'react';

function useTabs(tabs, initialTab) {

  const labels = useMemo(() => tabs.map(l => l.label), [tabs]);
  const makeMenu = (labels, current) => {
    return labels.map((labelText, index) => ({
      label: labelText,
      active: index === current
    }));
  };
    
  let [active, setActive] = useState(initialTab);
  let [activeContent, setActiveContent] = useState(tabs[initialTab].content);
  let [menu, setMenu] = useState(makeMenu(labels, initialTab));

  useEffect(() => {
    setActiveContent(tabs[active].content);
    setMenu(makeMenu(labels, active));
  }, [active]); //eslint-disable-line

  return { Content: activeContent, tabsList: menu, updateTabs: setActive };
}

export default useTabs;