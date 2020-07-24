function Job({
  jobTitle,
  jobSubTitle,
  jobDescription,
  jobLocation,
  jobPublishedDate,
  url,
}) {
  return (
    <div className="container">
      <a href={url}></a>
      <div className="text">
        <h2>{jobTitle}</h2>
        <h4>{jobPublishedDate}</h4>
        <h4>{jobSubTitle}</h4>
        <div>{jobDescription}</div>
        <h4>{jobLocation}</h4>
      </div>
      <style jsx>{`
        .container {
          cursor: pointer;
          height: 453px;
          margin-bottom: 48px;
        }
        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        .text {
          margin-top: -160px;
          padding: 24px;
          position: absolute;
        }
        h2 {
          color: white;
          font-size: 24px;
          margin-bottom: 0;
        }
        h4 {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          font-weight: 500;
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
}

export default Job;
