import { QUIZ_LIST } from "@/data/db";
import useQuiz from "@/hooks/useQuiz";
import CheckBoxQuiz from "../modules/checkBoxQuiz";
import RadioQuiz from "../modules/radioQuiz";
import SelectQuiz from "../modules/selectQuiz";

export default function HomeTemplate() {
  const QuizCtx = useQuiz();
  return (
    <>
      {QUIZ_LIST[QuizCtx.currentQuiz] && (
        <>
          {QUIZ_LIST[QuizCtx.currentQuiz].type === "radio" && <RadioQuiz />}
          {QUIZ_LIST[QuizCtx.currentQuiz].type === "checkbox" && (
            <CheckBoxQuiz />
          )}
          {QUIZ_LIST[QuizCtx.currentQuiz].type === "select" && <SelectQuiz />}
        </>
      )}
    </>
  );
}
