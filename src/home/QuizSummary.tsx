import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/redux/hook";

const QuizSummary = () => {
  const { userAnswer, questions } = useAppSelector((state) => state.quiz);
  /**
   * correct ans count
   * incorrect ans count
   * correct percenteage
   */
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
            You got <span className="text-green-600">You</span> out of{" "}
            <span className="text-blue-600">4</span>
          </div>
          <Progress value={33} className="h-4" />
          <div className="flex justify-between text-sm text-gray-700">
            <span>66%</span>
            <span>Performance: Good</span>
          </div>
          <div className="text-center text-red-500 font-medium">
            Incorrect Answers: 4
          </div>
          <div className="text-center text-lg">Good Job ! kep working</div>

          <div className="flex justify-center mt-6">
            <Button size="lg" className="px-8">
              🔄 Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizSummary;
