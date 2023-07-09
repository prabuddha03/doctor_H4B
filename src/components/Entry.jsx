import React from "react";
import Medicinebottle from '../assets/medicinebottle.png'


function Entry(props) {
  return (
    <div className="term">
      <dt>
      <img src={Medicinebottle} alt="medbottle" className="mx-auto" />
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Entry;
