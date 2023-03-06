import { QUIZ_LIST } from "@/data/db";
import { createContext, useState } from "react";

export const QuizContext = createContext({
  currentQuiz: 0,
  nextHandler: () => {},
  prevHandler: () => {},
  isAnswered: false,
  isAnsweredHandler: () => {},
  setAnswersHandler: () => {},
  cleanisAnsweredHandler: () => {},
  answers: [],
});

export default function QuizContextProvider({ children }) {
  //get current quiz index
  const [currentQuiz, setCurrentQuiz] = useState(0);
  //user answered?
  const [isAnswered, setIsAnswered] = useState(false);
  //list of answers
  const [answers, setAnswers] = useState([]);

  //handle next quiz
  const nextHandler = () => {
    setCurrentQuiz(currentQuiz + 1);
  };

  //handle prev quiz
  const prevHandler = () => {
    setCurrentQuiz(currentQuiz - 1);
  };

  //for disabled button
  const isAnsweredHandler = () => {
    setIsAnswered(true);
  };

  //set isAnswered to false for next quiz
  const cleanisAnsweredHandler = () => {
    setIsAnswered(false);
  };

  //save answers  
  const setAnswersHandler = (value) => {
    const CheckedAnswers = answers.filter((item) => item.id !== currentQuiz);
    setAnswers([
      ...CheckedAnswers,
      {
        id: currentQuiz,
        answer: value,
      },
    ]);
  };
  const context = {
    currentQuiz: currentQuiz,
    isAnswered: isAnswered,
    answers: answers,
    nextHandler: nextHandler,
    prevHandler: prevHandler,
    isAnsweredHandler: isAnsweredHandler,
    cleanisAnsweredHandler: cleanisAnsweredHandler,
    setAnswersHandler: setAnswersHandler,
  };
  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
}
