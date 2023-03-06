import QuizContextProvider from "@/contexts/quiz-context";
import "@/styles/globals.css";
import ThemeCM from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeCM>
        <QuizContextProvider>
          <Component {...pageProps} />
        </QuizContextProvider>
      </ThemeCM>
    </>
  );
}
