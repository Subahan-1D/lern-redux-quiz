import { Button } from "@/components/ui/button";
import {
  nextQuestion,
  prevQuestion,
  completeQuiz,
} from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function QuizControls() {
  const { currentQuestionIndex, userAnswer, questions } = useAppSelector(
    (state) => state.quiz
  );
  const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;
  const dispatch = useAppDispatch();

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleNext = () => {
    if (isAnswerSelected) {
      if (isLastQuestion) {
        dispatch(completeQuiz());
      } else {
        dispatch(nextQuestion());
      }
    }
  };

  const handlePrev = () => {
    dispatch(prevQuestion());
  };

  return (
    <div className="flex justify-between space-x-4 mt-4">
      <Button onClick={handlePrev} disabled={currentQuestionIndex === 0}>
        Previous
      </Button>

      <Button onClick={handleNext} disabled={!isAnswerSelected}>
        {isLastQuestion ? "Finish" : "Next"}
      </Button>
    </div>
  );
}
