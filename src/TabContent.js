import React from "react";

const tabOne = (
  <div className="book">
    <div className="book-name"> Atomic Habits </div>
    <div className="book-author"> James Clear </div>
    <div className="book-description">
      an extremely practical, eye opening book
    </div>
  </div>
);

const tabTwo = (
  <div className="book">
    <div className="book-name"> Half Moon Investigations </div>
    <div className="book-author"> Eoin Colfer </div>
    <div className="book-description">
      A really funny, enjoyable book about a 12 year old detective.
    </div>
  </div>
);

const tabThree = (
  <div className="book">
    <div className="book-name"> Trials Of Apollo </div>
    <div className="book-author"> Rick Riordan </div>
    <div className="book-description">
      Super thrilling and funny peak into the world of greek gods
    </div>
  </div>
);

const contentList = [tabOne, tabTwo, tabThree];

const TabContent = (props) => {
  return <div className="tab-content"> {contentList[props.tabIndex]} </div>;
};

export default TabContent;
