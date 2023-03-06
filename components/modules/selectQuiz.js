import { QUIZ_LIST } from "@/data/db";
import useQuiz from "@/hooks/useQuiz";
import {
  FormControl, InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import { useEffect, useState } from "react";
import QuizCard from "./quizCard";

export default function SelectQuiz() {
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
    QuizCtx.isAnsweredHandler();
  };

  useEffect(() => {
    QuizCtx.setAnswersHandler(value);
    if (value) return QuizCtx.isAnsweredHandler();
  }, [value]);

  return (
    <QuizCard quiz={QUIZ_LIST[QuizCtx.currentQuiz].quiz}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Answer</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Answer"
          onChange={handleChange}
        >
          {QUIZ_LIST[QuizCtx.currentQuiz].answers.map((item, index) => (
            <MenuItem value={item} key={index}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </QuizCard>
  );
}
