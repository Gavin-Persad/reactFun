import Image from "next/image";
import Counter from "./components/counter";
import DadJoke from "./components/dad-joke.js";

export default function Home() {
  return (
    <main className=" ">
      <Counter/>
      <DadJoke/>
    </main>
  );
}
