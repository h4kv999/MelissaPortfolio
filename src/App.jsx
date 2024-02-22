import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";

export function App() {
  return (
    <div className="bg-zinc-800 max-w-[1280px] h-screen m-auto font-spaceMono flex flex-col gap-6 p-4">
      <Header/>
      <Nav/>
      <Main/>
    </div>
  )
}
