import { QUIZ_LIST } from "@/data/db";
import useQuiz from "@/hooks/useQuiz";
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ResultCard from "../modules/resultCard";
import { StyledBox } from "./resultTemplate.style";

export default function ResultTemplate() {
  const QuizCtx = useQuiz();
  const router = useRouter();
  useEffect(() => {
    if(!QuizCtx.answers[0]) router.push('/')
  } , [])
  return (
    <Grid container p={5} spacing={2}>
      {QuizCtx.answers.map((item, index) => (
        <Grid item md={4} xs={12} spacing={2}>
          <ResultCard quiz={QUIZ_LIST[item.id].quiz}>
            <Stack height={"100%"} spacing={2}>
              {typeof QuizCtx.answers[item.id].answer === "string" && (
                <StyledBox>{QuizCtx.answers[item.id].answer}</StyledBox>
              )}
              {typeof QuizCtx.answers[item.id].answer === "object" &&
                QuizCtx.answers[item.id].answer.map((answer , index) => (
                  <StyledBox key={index}>{answer}</StyledBox>
                ))}

            </Stack>
          </ResultCard>
        </Grid>
      ))}
    </Grid>
  );
}
