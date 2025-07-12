import { Button } from "@/components/ui/button";
import { nextQuestion, prevQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function QuizControls() {
  const { currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
  const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;
  const dispatch = useAppDispatch();
  const handleNext = () => {
    if (isAnswerSelected) {
      dispatch(nextQuestion());
    }
  };
  const handlePrev = () => {
    dispatch(prevQuestion());
  };
  return (
    <div className="flex justify-between space-x-4 mt-4">
      <Button onClick={handlePrev}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
}
