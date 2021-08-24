import React, { useState } from "react";
import TabContent from "./TabContent";

const Tabs = () => {
  const [toggleTab, setToggleTab] = useState(0);
  const [tabClass, setTabClass] = useState(["tab-active", "tab", "tab"]);
  const toggleHandler = (tabnum) => {
    setToggleTab(tabnum);

    let newArray = [];

    for (let i = 0; i < 3; i++) {
      if (i === tabnum) {
        newArray.push("tab-active");
      } else {
        newArray.push("tab");
      }
    }

    setTabClass(newArray);
  };

  return (
    <div>
      <div className="tabs-container">
        <div className={tabClass[0]} onClick={() => toggleHandler(0)}>
          Non Fiction
        </div>
        <div className={tabClass[1]} onClick={() => toggleHandler(1)}>
          Fiction
        </div>
        <div className={tabClass[2]} onClick={() => toggleHandler(2)}>
          Fantasy
        </div>
      </div>

      <TabContent tabIndex={toggleTab} />
    </div>
  );
};

export default Tabs;
