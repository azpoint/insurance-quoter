//Hooks
import useQuoter from "../hooks/useQuoter";

function Error() {
    const { error } = useQuoter();

    return <div className="border text-center border-red-400 bg-red-100 py-3 text-red-600 rounded-lg">
                {error}
            </div>;
}
export default Error;
