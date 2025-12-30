import "./App.css";
import { Container, Typography, Stack } from "@mui/material";
import { JavaScriptLogo } from "./JavaScriptLogo";
import { Start } from "./components/Start";
import { useQuestionStore } from "./store/questions";


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
        <Start></Start>
      </Container>
    </main>
  );
}

export default App;
