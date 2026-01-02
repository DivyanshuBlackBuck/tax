import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Banner.css";
import pic from "../../../../Images/Img/SlideImg.jpg";
import pic2 from "../../../../Images/Img/img.jpeg";
import pic3 from "../../../../Images/Img/5.jpg";

const slideImages = [
  {
    url: pic,
    caption: "Welcome To Dream Sakar",
  },
  {
    url: pic2,
    caption: "Can You Find Job",
  },
  {
    url: pic3,
    caption: "Slide 3",
  },
];

const Banner = () => {
  return (
    <div className="slide-container">
      <Slide
        duration={2000} // ⏱️ slide rukne ka time (2 sec)
        transitionDuration={500} // 🔄 animation speed (0.5 sec)
        infinite={true}
        autoplay={true}
        arrows={true} // arrows hide (optional)
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <img
              src={slideImage.url}
              alt=""
              style={{
                width: "100%",
                height: "600px",
                marginTop: "20px",
              }}
            />
            {/* <div className='divStyle' style={{ 'backgroundImage': `url(${slideImage.url})` }}>
              <span className='spanStyle'>{slideImage.caption}</span>
            </div> */}
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Banner;
