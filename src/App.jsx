//Dependencies


//Context
import { QuoterProvider } from "./context/QuoterProvider" 

//Components
import AppInsurance from "./components/AppInsurance"

function App() {

  return (
    <QuoterProvider>
      <AppInsurance />
    </QuoterProvider>
  )
}

export default App
