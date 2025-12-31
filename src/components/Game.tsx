import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useQuestionStore } from "../store/questions";
import { type Questions as QuestionType } from "../types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierLakesideDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const getBackGroundColor = (info: QuestionType, index: number) => {
  if (
    info.userSelectedAnswer != null &&
    info.correctAnswer !== index &&
    info.userSelectedAnswer === index
  )
    return "red";
  if (info.userSelectedAnswer != null && info.correctAnswer === index)
    return "green";
  return "transparent";
};
const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionStore((state) => state.selectAnswer);
  const createHandleClick = (answerId: number) => () => {
    selectAnswer(info.id, answerId);
  };
  return (
    <Card variant="outlined">
      <Typography variant="h5">{info.question}</Typography>

      <SyntaxHighlighter language="javascript" style={atelierLakesideDark}>
        {info.code}
      </SyntaxHighlighter>
      <List sx={{ backgroundColor: "#333" }}>
        {info.answers.map((answer, index) => {
          return (
            <ListItem key={index}>
              <ListItemButton
                disabled={info.userSelectedAnswer != null}
                onClick={createHandleClick(index)}
                sx={{ backgroundColor: getBackGroundColor(info, index) }}
              >
                <ListItemText
                  primary={answer}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                ></ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};
export function Game() {
  const currentQuestion = useQuestionStore((state) => state.currentQuestion);
  const questions = useQuestionStore((state) => state.questions);
  const questionInfo = questions[currentQuestion];
  return <Question info={questionInfo}></Question>;
}
