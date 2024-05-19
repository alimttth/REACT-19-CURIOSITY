import { version } from "react"
import CardList from "./components/Card/CardList"
import Theme from "./components/Theme"

function App() {
  return (
    <div className="m-10 text-white text-lg flex  flex-col justify-center items-center h-[100%]">
      ورژن ریکت {version}

      {/* <CardList /> */}
      <Theme />
    </div>
  )
}

export default App