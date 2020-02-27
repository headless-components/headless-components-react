import React from "react";
import useTabs from '../../hc-hooks/useTabs/useTabs';

import TabsData from '../../sampleData/TabsData';

function UiTabs() {
  const { Content, tabsList, updateTabs } = useTabs(TabsData, 0);

  return (
    <div className="tabs">
      <h4>Basic tabs using <code>useTabs</code></h4>
      <ul className="tabs-menu">
        {tabsList.map((t, index) => (
          <li
            key={t.label}
            className={
              tabsList[index].active
                ? "tabs-menu-item active"
                : "tabs-menu-item"
            }
          >
            <button key={index} onClick={() => updateTabs(index)}>
              {t.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tabs-content">{Content}</div>
    </div>
  );
}

export default UiTabs;
