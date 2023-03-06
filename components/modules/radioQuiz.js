import { QUIZ_LIST } from "@/data/db";
import useQuiz from "@/hooks/useQuiz";
import {
  FormControl, Grid,
  Radio,
  RadioGroup
} from "@mui/material";
import { useEffect, useState } from "react";
import QuizCard from "./quizCard";
import { StyledRadioLabel } from "./radioQuiz.style";

export default function RadioQuiz() {
  const QuizCtx = useQuiz();

  //get initial answer
  const currentAnswer = QuizCtx.answers.filter(
    (item) => item.id === QuizCtx.currentQuiz
  );
  const [value, setValue] = useState(
    currentAnswer[0] ? currentAnswer[0].answer : null
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    QuizCtx.setAnswersHandler(value);
    if (value) return QuizCtx.isAnsweredHandler();
  }, [value]);

  return (
    <QuizCard quiz={QUIZ_LIST[QuizCtx.currentQuiz].quiz}>
      <FormControl fullWidth>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={handleChange}
          value={value}
        >
          <Grid container spacing={1}>
            {QUIZ_LIST[QuizCtx.currentQuiz].answers.map((item, index) => (
              <Grid item md={6} xs={12} key={index}>
                <StyledRadioLabel
                  value={item}
                  control={<Radio />}
                  label={item}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </FormControl>
    </QuizCard>
  );
}
