import { create } from "zustand";
import { type Questions } from "../types";
import { Http } from "@mui/icons-material";

interface State {
  questions: Questions[];
  currentQuestion: number;
  fetchQuestion: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goNextQuestion: () => void;
  goPreviousQuestion: () => void;
}

export const useQuestionStore = create<State>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestion: async (limit: number) => {
      const res = await fetch("http://localhost:5173/data.json");
      const json = await res.json();
      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
      set({ questions });      
    },    
    selectAnswer: (questionId: number, answerIndex: number) => {
      const { questions } = get();
      const newQuestion = structuredClone(questions);
      //questionIndex
      const questionIndex = newQuestion.findIndex((q) => q.id === questionId);
      const questionInfo = newQuestion[questionIndex];
      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;
      newQuestion[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: answerIndex,
      };
      set({ questions: newQuestion });
    },
    goNextQuestion : () => {
      const {currentQuestion, questions} = get()
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
        set({currentQuestion: nextQuestion})
      }
    },
    goPreviousQuestion : () => {
      const {currentQuestion, questions} = get()
      const nextQuestion = currentQuestion - 1
      if (nextQuestion >=0) {
        set({currentQuestion: nextQuestion})
      }
    }
  };
});