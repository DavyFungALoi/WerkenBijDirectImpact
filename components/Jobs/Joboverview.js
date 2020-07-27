import React from "react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";

export default function job(props) {
  const router = useRouter();

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
          <div
            className="jobpage__container__categories__container__category"
            key={category.sys.id}
          >
            {category.fields.jobCategoryName}
          </div>
        ))}
        <div>Visit this URL</div>
        <div onClick={() => router.push("/vacancies/[jobdetail]", `/vacancies/${props.title}`)}>Click me</div>
        <Link
          href="/vacancies/[jobdetail]"
          as={`/vacancies/${props.title}`}
          title={props.title}
        >
          <a>To Hello World Blog post</a>
        </Link>
      </div>
    </div>
  );
}
