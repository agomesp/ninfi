import { FiPlus, FiMinus } from "react-icons/fi";
function Balance() {
    return (
        <div>
            <h4 className="text-2xl text-gray-400">Your balance</h4>
            <div className="flex items-center gap-2">
                <h1 className="text-9xl font-semibold">1304</h1>
                <div className="flex flex-col gap-2 justify-between">
                    <button className="border border-solid rounded-full p-2 border-green-500 hover:bg-green-50"><FiPlus className="stroke-green-500"/></button>
                    <button className="border border-solid rounded-full p-2 border-red-500 hover:bg-red-50"><FiMinus className="stroke-red-500"/></button>
                </div>
            </div>
        </div>
    );
}

export default Balance;