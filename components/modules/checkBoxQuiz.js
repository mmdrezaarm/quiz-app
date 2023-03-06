import { QUIZ_LIST } from "@/data/db";
import useQuiz from "@/hooks/useQuiz";
import { Checkbox, FormControl, FormGroup, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { StyledCheckBoxLabel } from "./checkBoxQuiz.style";
import QuizCard from "./quizCard";

export default function CheckBoxQuiz() {
  const QuizCtx = useQuiz();

  //get initial answer
  const currentAnswer = QuizCtx.answers.filter(
    (item) => item.id === QuizCtx.currentQuiz
  );
  const [answers, setAnswers] = useState(
    currentAnswer[0] ? currentAnswer[0].answer : []
  );

  const handleChange = (event) => {
    const index = answers.indexOf(event.target.value);
    if (index === -1) {
      setAnswers([...answers, event.target.value]);
    } else {
      setAnswers(answers.filter((answer) => answer !== event.target.value));
    }
  };

  useEffect(() => {
    if (answers.length > 0) {
      QuizCtx.isAnsweredHandler();
    } else {
      QuizCtx.cleanisAnsweredHandler();
    }
    QuizCtx.setAnswersHandler(answers);
  }, [answers]);

  return (
    <QuizCard quiz={QUIZ_LIST[QuizCtx.currentQuiz].quiz}>
      <FormControl fullWidth>
        <FormGroup>
          <Grid container spacing={1}>
            {QUIZ_LIST[QuizCtx.currentQuiz].answers.map((item, index) => (
              <Grid item md={6} xs={12} key={index}>
                <StyledCheckBoxLabel
                  label={item}
                  value={item}
                  control={
                    <Checkbox
                      checked={answers.includes(item)}
                      onChange={handleChange}
                    />
                  }
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </FormControl>
    </QuizCard>
  );
}
