import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import QuizControls from "./QuizControls";
import { setAnswer } from "@/redux/features/quizSlice";
export default function Question() {
  const { questions, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
  const dispatch = useAppDispatch();

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];
  console.log(userAnswer);

  const handleAnswerChange = (ans: string) => {
    dispatch(
      setAnswer({
        currentIndex: currentQuestionIndex,
        answer: ans,
      })
    );
  };

  return (
    <div className="flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {currentQuestion.options.map((option, idx) => (
              <Button
                variant={option === currentAnswer ? "default" : "outline"}
                onClick={() => handleAnswerChange(option)}
                className="w-full mt-5"
                size={"lg"}
                key={idx}
              >
                {option}
              </Button>
            ))}
          </div>
          <QuizControls></QuizControls>
        </CardContent>
      </Card>
    </div>
  );
}
