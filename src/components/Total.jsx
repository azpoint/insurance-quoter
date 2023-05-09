import { useCallback, useMemo, useRef } from "react";

import useQuoter from "../hooks/useQuoter";

import { BRANDS, PLAN } from "../constants";

function Total() {
    const { total, data } = useQuoter();
    const { brand, plan, year } = data;
    const yearRef = useRef(year)



    const [brandName] = useCallback(
        BRANDS.filter((b) => b.id === Number(brand)),
        [total]
    );
    const [planName] = useCallback(PLAN.filter((p) => p.id === Number(plan)), [total]);

    if (total === 0) return null;

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-500 font-black text-3xl">Summary</h2>

            <p className="my-2">
                <span className="font-semibold">Brand: </span>
                {brandName.name}
            </p>

            <p className="my-2">
                <span className="font-semibold">Plan: </span>
                {planName.name}
            </p>

            <p className="my-2">
                <span className="font-semibold">Car Year: </span>
                {yearRef.current}
            </p>

            <p className="my-2 text-2xl">
                <span className="font-semibold">Insurance Plan Total </span>
                {total}
            </p>
        </div>
    );
}
export default Total;
