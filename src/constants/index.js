export const BRANDS = [
    { id: 1, name: "Euro" },
    { id: 2, name: "American" },
    { id: 3, name: "Asian" },
]

const YEARMAX = new Date().getFullYear()

export const YEARS = Array.from(
    new Array(20), (value, index) => YEARMAX - index
)

export const PLAN = [
    {id: 1, name: "Standar"},
    {id: 2, name: "Full"},
]