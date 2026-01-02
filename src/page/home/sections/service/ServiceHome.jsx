import React from "react";
import FlipCard from "../../../../component/Common/FlipCard/FlipCard";
import "./ServiceHome.css";

const ServiceHome = () => {
  const users = [
    {
      name: "Income Tax",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?",
    },
    {
      name: "Income Tax",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?",
    },
    {
      name: "Income Tax",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?",
    },
    {
      name: "Income Tax",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?",
    },
    {
      name: "Income Tax",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?",
    },
    {
      name: "Income Tax",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?",
    },
    {
      name: "Income Tax",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?",
    },
    {
      name: "Income Tax",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?",
    },
    {
      name: "Income Tax",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?",
    },
    {
      name: "Income Tax",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, dolorem debitis. Porro dolor sit dignissimos ratione fugit commodi? Autem ex, est facilis reiciendis dignissimos voluptatem natus quae pariatur numquam nesciunt?",
    },
  ];
  return (
    <div className="ServiceHomeCtn">
      <svg
        className="wave-svg top"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,80 C240,120 480,40 720,40 960,40 1200,120 1440,80 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="ServiceHomeMain">
        <h1>Our Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, </p>
        <p>
          cumque velit eligendi atque ut reprehenderit inventore sunt in nulla,{" "}
        </p>
      </div>

      <div className="card-container">
        {users.map((user, index) => (
          <FlipCard key={index} {...user} />
        ))}
      </div>
      <svg
        className="wave-svg bottom"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,40 C240,0 480,80 720,80 960,80 1200,0 1440,40 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
};

export default ServiceHome;
