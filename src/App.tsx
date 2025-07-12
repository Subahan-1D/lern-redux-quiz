import Question from "./home/Question";
import QuizSummary from "./home/QuizSummary";
import { useAppSelector } from "./redux/hook";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <>
      <h1 className="text-6xl text-center my-12">Quiz App</h1>
      {!quizComplete ? <Question></Question> : <QuizSummary></QuizSummary>}
    </>
  );
}

export default App;
