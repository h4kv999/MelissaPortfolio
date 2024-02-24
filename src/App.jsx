import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Divider } from "./components/Divider";
import { Nav } from "./components/Nav";
import { Card } from "./components/Card";

export function App() {
  return (
    <div className="bg-zinc-800 max-w-[1280px] m-auto font-spaceMono flex flex-col gap-4 p-4">
      <Header/>
      <Divider/>
      <Card/>
      <Nav/>
      <Main/>
    </div>
  )
}
