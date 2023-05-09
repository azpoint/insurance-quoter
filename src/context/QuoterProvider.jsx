/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getYearDiff, calcBrand, calcPlan, formatAmount } from "../helpers"; 


const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {

    const [data, setData] = useState({
        brand: "",
        year: "",
        plan: ""
    })

    const [error, setError] = useState("")
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)


    const handleChangeData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const quoteInsurance = () => {
        //Base quote
        let total = 2000

        //Years difference
        const diff = getYearDiff(Number(data.year))

        //substract 3% for each year
        total -= ((diff * 3) * total) / 100

        //American 15%
        //Erupean 30%
        //Asian 5%

        total *= calcBrand(data.brand)

        //Standar 20%
        // Full  50%
        total *= calcPlan(data.plan)

        total = formatAmount(total)

        setLoading(true)

        setTimeout(() => {
            setTotal(total)
            setLoading(false)            
        }, 1600);

    }
    
    return (
        <QuoterContext.Provider 
        value={{
            data,
            handleChangeData,
            error,
            setError,
            quoteInsurance,
            total,
            loading
        }}>{children}</QuoterContext.Provider>
    );
};

export { QuoterProvider };

export default QuoterContext;
