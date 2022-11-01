import React from "react";
import { NewsCageItems } from "./NewsCageItems";

const NewsCage = () => {
  return (
    <div className="newsCage_container" dir="ltr">
      {NewsCageItems.map((item) => (
        <div className={item.cName} key={item.id}>
          <a href="#">
            <img src={item.img} alt="" />
            <div className="title">
              <span>{item.title}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsCage;
