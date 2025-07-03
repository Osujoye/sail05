import React, { useEffect, useState } from "react";

const About = () => {
  const [getFetchPost, setGetFetchPost] = useState([]);

  const fetchApiData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setGetFetchPost(data));
  };

  console.log(getFetchPost);

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div>
      <h1>API consumption using Fetch</h1>
      {getFetchPost.map((data, i) => (
        <section className=" bg-amber-300 p-5 m-10" key={i}>
          <h1> {data.title} </h1>
          <p> {data.body} </p>
        </section>
      ))}
    </div>
  );
};

export default About;
