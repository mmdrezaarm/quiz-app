import { MenuContext, QuizContext } from '@/contexts/quiz-context';
import { useContext } from 'react';

const useQuiz = () => {
    const QuizCtx = useContext(QuizContext);
    return QuizCtx
}

export default useQuiz;