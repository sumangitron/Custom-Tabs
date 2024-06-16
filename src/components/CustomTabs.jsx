import { useState } from "react";
import "./style.css";

const CustomTabs = ({ tabsItem }) => {
  const [id, setId] = useState(1);

  const handelTabs = (currentId) => {
    setId(currentId);
  };

  return (
    <div className="container">
      <div className="tab-heading">
        {tabsItem.map((item) => {
          return (
            <span
              className={`item ${id === item.id ? "active" : ""}`}
              key={item.id}
              onClick={() => handelTabs(item.id)}
            >
              {item.label}
            </span>
          );
        })}
      </div>
      <div className="content">
        {tabsItem.map((item) => {
          return id === item.id && <p key={item.id}>{item.title}</p>;
        })}
      </div>
    </div>
  );
};

export default CustomTabs;
