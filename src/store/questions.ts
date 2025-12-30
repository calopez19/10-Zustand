import { create } from "zustand";
import { type Questions } from "../types";

interface State {
  questions: Questions[];
  currentQuestion: number;
  fetchQuestion: (limit: number) => Promise<void>;
}

export const useQuestionStore = create<State>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestion: async (limit: number) => {
      set({
        questions: [{
          id: 49,
          question: "¿Cuál es la salida de este código?",
          code: "const arr = [1, 2, 3];\nconst [x, y] = arr;\nconsole.log(y);",
          answers: ["1", "2", "3", "undefined"],
          correctAnswer: 1,
        }],
      });
    },
  };
});
