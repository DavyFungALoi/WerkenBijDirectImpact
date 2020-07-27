import React from "react";
import moment from "moment";

export default function job(props) {
  return (
    <div className="jobpage__container">
      <div>Find the job for you</div>
      <div className="jobpage__container__title">{props.title}</div>
      <div className="jobpage__container__location">{props.location}</div>
      <div className="jobpage__container__date">
        {moment(props.date).format("MMMM Do, YYYY")}
      </div>
      <div className="jobpage__container__categories__container">
        {props.categories.map((category) => (
          <div className="jobpage__container__categories__container__category"key={category.sys.id}>
            {category.fields.jobCategoryName}
          </div>
        ))}
      </div>
    </div>
  );
}
