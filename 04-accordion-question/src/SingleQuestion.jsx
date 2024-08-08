import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  const [isToggle, setIsToggle] = useState(false);
  const toggleQuestion = () => {
    setIsToggle(!isToggle);
  };

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="btn question-btn"
          onClick={toggleQuestion}
        >
          {isToggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isToggle && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestion;
