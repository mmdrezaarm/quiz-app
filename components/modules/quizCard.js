import { QUIZ_LIST } from "@/data/db";
import useQuiz from "@/hooks/useQuiz";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { ActionBtn, Qz, StyledCard } from "./quizCard.style";

export default function QuizCard({ quiz, children }) {
  const QuizCtx = useQuiz();
  const router = useRouter();
  const QuizLength = QUIZ_LIST.length;
  const nextHandler = () => {
    QuizCtx.nextHandler();
    QuizCtx.cleanisAnsweredHandler();
  };

  const prevHandler = () => QuizCtx.prevHandler();

  return (
    <>
      <StyledCard>
        <Qz>
          <Typography variant="subtitle1">Quiz : {quiz}</Typography>
        </Qz>
        <Box p={5} boxSizing={"border-box"}>
          {children}
        </Box>
        <ActionBtn>
          <Button disabled={QuizCtx.currentQuiz < 1} onClick={prevHandler}>
            Prev Quiz
          </Button>
          {QuizLength - 1 === QuizCtx.currentQuiz && (
            <Button disabled={!QuizCtx.isAnswered === true} onClick={() => router.push('/result')}>
              Finish
            </Button>
          )}
          {QuizLength - 1 !== QuizCtx.currentQuiz && (
            <Button
              disabled={
                QuizCtx.currentQuiz == QuizLength - 1 ||
                !QuizCtx.isAnswered === true
              }
              onClick={nextHandler}
            >
              Next Quiz
            </Button>
          )}
        </ActionBtn>
      </StyledCard>
    </>
  );
}
