import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { resetQuiz } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const QuizSummary = () => {
  const { userAnswer, questions } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();
  /**
   * correct ans count
   * incorrect ans count
   * correct percenteage
   */

  // total question
  const totalQuestions = questions.length;
  // calculate correct ans

  const correctAnswerCount = questions.reduce((count, questions, inx) => {
    return questions.correctAnswer === userAnswer[inx] ? count + 1 : count;
  }, 0);

  // incorrect ans
  const incorrectAnswer = questions.length - correctAnswerCount;

  // percentage

  const correctPercentage = parseFloat(
    ((correctAnswerCount / questions.length) * 100).toFixed(2)
  );

  // performance

  let performance = "";
  if (correctPercentage >= 80) performance = "Excellent 🎉";
  else if (correctPercentage >= 50) performance = "Good 🙂";
  else performance = "Keep Practicing 💪";

  console.log(correctAnswerCount, incorrectAnswer, correctPercentage);
  const handleRetry = () => {
    dispatch(resetQuiz());
  };
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Card className="max-w-xl w-full shadow-lg p-6 border">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            🎉 Quiz Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center text-xl font-semibold">
            You got <span className="text-green-600">{correctAnswerCount}</span>{" "}
            out of <span className="text-blue-600">{totalQuestions}</span>
          </div>
          <Progress value={correctPercentage} className="h-4" />
          <div className="flex justify-between text-sm text-gray-700">
            <span>{correctPercentage}%</span>
            <span>Performance: {performance}</span>
          </div>
          <div className="text-center text-red-500 font-medium">
            Incorrect Answers: {incorrectAnswer}
          </div>
          <div className="text-center text-lg">{performance}</div>

          <div className="flex justify-center mt-6">
            <Button onClick={handleRetry} size="lg" className="px-8">
              🔄 Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizSummary;
