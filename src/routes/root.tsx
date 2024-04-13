import Balance from "../components/Balance.tsx";
import TransactionHistory from "../components/TransactionHistory.tsx";

const Root = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col gap-14">
                <Balance/>
                <TransactionHistory/>
            </div>
        </div>
    );
}

export default Root;