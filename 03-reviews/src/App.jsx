import { useState } from "react";
import reviews from "./data.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % reviews.length;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      return newIndex;
    });
  };

  const randomPerson = () => {
    setIndex((currentIndex) => {
      let newIndex = Math.floor(Math.random() * reviews.length);
      if (newIndex === index) {
        newIndex = (index + 1) % reviews.length;
      }
      return newIndex;
    });
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Suprise me
        </button>
      </article>
    </main>
  );
};

export default App;
