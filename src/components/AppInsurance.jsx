//Dependencies


//Hooks
import useQuoter from "../hooks/useQuoter"

//Components
import Form from "./Form"
import Spinner from "./Spinner"
import Total from "./Total"


function AppInsurance() {
  
  const { loading } = useQuoter()

  return (
    <>
        <header className="my-10">
            <h1 className="text-gray-50 text-center text-4xl">Car Insurance Quoter</h1>
        </header>

        <main className="bg-gray-100 md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
            <Form />
            {loading ? <Spinner/> : <Total/>}
        </main>
    </>
  )
}
export default AppInsurance