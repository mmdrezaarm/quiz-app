import HomeTemplate from "@/components/template/homeTemplate";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <HomeTemplate />
      </main>
    </>
  );
}
