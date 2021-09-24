import React from "react";

const tabOne = (
  <div>
    <div className="book">
      <div className="book-name"> Atomic Habits </div>
      <div className="book-author"> James Clear </div>
      <div className="book-rating"> 5/5 </div>
      <div className="book-description">
        an extremely practical, eye opening book
      </div>
    </div>
    <div className="book">
      <div className="book-name"> Sapiens </div>
      <div className="book-author"> Yuval Noah Harrari </div>
      <div className="book-rating"> 5/5 </div>
      <div className="book-description">This books makes me nihilistic</div>
    </div>
    <div className="book">
      <div className="book-name"> Antifragile </div>
      <div className="book-author"> Nasim Nichola Taleb </div>
      <div className="book-rating"> 5/5 </div>
      <div className="book-description">
        author shows a surpirisingly astounding worldview
      </div>
    </div>
  </div>
);

const tabTwo = (
  <div>
    <div className="book">
      <div className="book-name"> Half Moon Investigations </div>
      <div className="book-author"> Eoin Colfer </div>
      <div className="book-rating"> 5/5 </div>
      <div className="book-description">
        A really funny, enjoyable book about a 12 year old detective.
      </div>
    </div>
    <div className="book">
      <div className="book-name"> Matlida </div>
      <div className="book-author"> Roald Dahl </div>
      <div className="book-rating"> 5/5 </div>
      <div className="book-description">
        a fun book about a prodigy with weird powers
      </div>
    </div>
    <div className="book">
      <div className="book-name"> Airman </div>
      <div className="book-author"> Eoin Colfer </div>
      <div className="book-rating"> 5/5 </div>
      <div className="book-description">
        A super mind bending book about an adventure
      </div>
    </div>
  </div>
);

const tabThree = (
  <div>
    <div>
      <div className="book">
        <div className="book-name"> Trials Of Apollo </div>
        <div className="book-author"> Rick Riordan </div>
        <div className="book-rating"> 5/5 </div>
        <div className="book-description">
          Super thrilling and funny peak into the world of greek gods
        </div>
      </div>

      <div className="book">
        <div className="book-name"> Sea Of Monsters </div>
        <div className="book-author"> Rick Riordan </div>
        <div className="book-rating"> 5/5 </div>
        <div className="book-description">
          book Two of the percy Jackson Series
        </div>
      </div>

      <div className="book">
        <div className="book-name"> Heroes Of Olympus </div>
        <div className="book-author"> Rick Riordan </div>
        <div className="book-rating"> 5/5 </div>
        <div className="book-description">
          an Epic adventure of the grandest scale
        </div>
      </div>
    </div>
  </div>
);

const contentList = [tabOne, tabTwo, tabThree];

const TabContent = (props) => {
  return <div className="tab-content"> {contentList[props.tabIndex]} </div>;
};

export default TabContent;
