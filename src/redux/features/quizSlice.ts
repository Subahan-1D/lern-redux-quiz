import { quizData } from "@/home/quizData";
import { createSlice } from "@reduxjs/toolkit";

interface QuizState {
  questions: typeof quizData;
  currentQuestionIndex: number;
  userAnswer: (string | null)[];
  quizComplete: boolean;
}

const initialState: QuizState = {
  questions: quizData,
  currentQuestionIndex: 0,
  userAnswer: Array(quizData.length).fill(null),
  quizComplete: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { currentIndex, answer } = action.payload;
      state.userAnswer[currentIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    completeQuiz: (state) => {
      state.quizComplete = true;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.userAnswer = Array(state.questions.length).fill(null);
      state.quizComplete = false;
    },
  },
});

export const { setAnswer, nextQuestion, prevQuestion, completeQuiz , resetQuiz } =
  quizSlice.actions;

export default quizSlice.reducer;
