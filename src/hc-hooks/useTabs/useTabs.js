import { useEffect, useState } from 'react';

function useTabs(tabs, initialTab) {
  const labels = tabs.map(l => l.label);

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
  }, [active, labels, tabs]);
  return { Content: activeContent, tabsList: menu, updateTabs: setActive };
}

export default useTabs;