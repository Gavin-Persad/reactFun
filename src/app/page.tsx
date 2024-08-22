import Image from "next/image";
import Counter from "./components/counter";
import DadJoke from "./components/dad-joke.js";
import FocusInput from "./components/focus-input";
import ExpensiveCalculation from "./components/expensive-calculation";


export default function Home() {
  return (
    <main className="grid gap-20">
      <Counter/>
      <DadJoke/>
      <FocusInput/>
      <ExpensiveCalculation/>
    </main>
  );
}
