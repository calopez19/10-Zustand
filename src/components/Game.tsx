import { Card, IconButton, Stack, Typography } from "@mui/material";
import { useQuestionStore } from "../store/questions";
import { type Questions as QuestionType } from "../types";
const Question = ({ info }: { info: QuestionType }) => {
  return (
    <Card variant="outlined">
      <Typography variant="h5">{info.question}</Typography>
    </Card>
  );
};
export function Game() {
  const currentQuestion = useQuestionStore((state) => state.currentQuestion);
  const questions = useQuestionStore((state) => state.questions);
  const questionInfo = questions[currentQuestion];
  return <Question info={questionInfo}></Question>;
}
