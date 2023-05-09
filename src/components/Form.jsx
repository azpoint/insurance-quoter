//Dependencies
import { Fragment } from "react";

//Hooks
import useQuoter from "../hooks/useQuoter";

//DDBB
import { BRANDS, YEARS, PLAN } from "../constants";

//Components
import Error from "./Error";

function Form() {
    const { data, handleChangeData, error, setError, quoteInsurance } = useQuoter();

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(data).includes("")) {
            setError("All fields are required")
            return
        }

        setError("")
        quoteInsurance()

    }


    return (
        <>
            {error && <Error/>}
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400">
                        Brand
                    </label>
                    <select
                        name="brand"
                        id=""
                        className="w-full p-3 bg-gray-100 border border-gray-400 rounded-md"
                        onChange={(e) => handleChangeData(e)}
                        value={data.brand}
                    >
                        <option value="">--- Select Brand ---</option>

                        {BRANDS.map((brand) => (
                            <option key={brand.id} value={brand.id}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400">
                        Year
                    </label>
                    <select
                        name="year"
                        id=""
                        className="w-full p-3 bg-gray-100 border border-gray-400 rounded-md"
                        onChange={(e) => handleChangeData(e)}
                        value={data.year}

                    >
                        <option value="">--- Select Car Year ---</option>

                        {YEARS.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400">
                        Choose a Plan
                    </label>

                    <div className="flex gap-3 items-center">
                        {PLAN.map((plan) => (
                            <Fragment key={plan.id}>
                                <label>{plan.name}</label>
                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={ e => handleChangeData(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input
                    type="submit"
                    value="Quote"
                    className="w-1/2 block mx-auto bg-sky-700 hover:bg-sky-300 transition-colors text-gray-100 cursor-pointer p-3 uppercase font-bold rounded-md"
                />
            </form>
        </>
    );
}
export default Form;
