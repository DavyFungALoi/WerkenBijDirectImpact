import React from "react";

export default function Jobdetail(props) {
    console.log(props.title)
  return (
    <div>
      Jobdetail
      <div>{props.title}</div>
    </div>
  );
}
