import "./App.css";
import { Container, Typography, Stack } from "@mui/material";
import { JavaScriptLogo } from "./JavaScriptLogo";
import { Start } from "./components/Start";
import { useQuestionStore } from "./store/questions";
import { Game } from "./components/Game";


function App() {
  const question = useQuestionStore(state => state.questions)
  console.log(question)
  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography variant="h2" component="h1">
            Javascript Quizz
          </Typography>
        </Stack>
        {question.length === 0? <Start/>: <Game></Game>}
      </Container>
    </main>
  );
}

export default App;
