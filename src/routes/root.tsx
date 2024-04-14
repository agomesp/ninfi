import Balance from "../components/Balance.tsx";
import TransactionHistory from "../components/TransactionHistory.tsx";
import {Card, CardHeader} from "@/components/ui/card";

const Root = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-14">
                        <Balance/>
                        <TransactionHistory/>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}

export default Root;