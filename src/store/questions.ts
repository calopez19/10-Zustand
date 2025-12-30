import { create } from "zustand";
import { type Questions } from "../types";
import { Http } from "@mui/icons-material";

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
      const res = await fetch("http://localhost:5173/data.json");
      const json = await res.json();
      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
      set({questions})
    },
  };
});
