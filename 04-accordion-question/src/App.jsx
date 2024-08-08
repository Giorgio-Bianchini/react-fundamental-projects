import data from "./data";
import SingleQuestion from "./SingleQuestion";
import { useState } from "react";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </section>
    </main>
  );
};

export default App;
