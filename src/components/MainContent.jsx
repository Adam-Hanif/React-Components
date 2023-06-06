import React from "react";
import cssMainContent from "../style.css/MainContent.module.css";
function MainContent() {
  return (
    <div className={cssMainContent.main_content}>
      <div className={cssMainContent.number}>140</div>
      <div className={cssMainContent.btn}>
        <button className={cssMainContent.increase}>Увеличить</button>
        <button className={cssMainContent.decrease}>Уменьшить</button>
        <button className={cssMainContent.reset}>Сбросить</button>
      </div>
    </div>
  );
}

export default MainContent;
