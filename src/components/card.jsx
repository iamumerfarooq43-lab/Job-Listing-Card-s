import React from "react";
import { Bookmark } from "lucide-react";

const card = (props) => {
  console.log(props.company);

  return (
    <div className="parent">
      <div className="top">
        <img src={props.img} alt="brand logo" className="logo" />
        <button>
          Save <Bookmark size={14} />
        </button>
      </div>
      <div className="center">
        <h1>
          {props.company}
          <span>{props.date}</span>
        </h1>
        <h4>{props.post}</h4>
        <div className="subcenter">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>
      <div className="last">
        <div className="lastleft">
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default card;
