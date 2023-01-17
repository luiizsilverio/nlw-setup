import { Habit } from "./components/Habit";

function App() {
  return (
    <>
      <h1>NLW Setup</h1>
      <Habit completed={3}></Habit>
      <Habit completed={15}></Habit>
      <Habit completed={2}></Habit>
    </>
  )
}

export default App
