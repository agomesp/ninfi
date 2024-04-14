import transactions, {ITransaction} from "../mocks/Transactions.ts";
import categories from "../mocks/Categories.ts";
import {Button} from "@/components/ui/button.tsx";

const TransactionHistory = () => {
    const getCategory = (transaction: ITransaction) => {
        return categories.find((category) => category.id === transaction.categoryId);
    };
    return (
        <div>
            <div className="flex flex-col gap-1">
                {
                    transactions.map((transaction) => {
                        const category = getCategory(transaction);
                        return (
                            <div className="text-sm flex gap-3 justify-between items-center">
                            <span
                                className={`${category?.color} text-xs py-1 px-2 rounded-md w-1/4 text-center overflow-hidden whitespace-nowrap overflow-ellipsis`}>{category?.name}</span>
                                <span className="text-left">{transaction.name}</span>
                                <div className="h-0 w-1/3 flex-1 border border-dashed border-gray-300"></div>
                                <span
                                    className={`${transaction.expense ? 'text-red-500' : 'text-green-500'}`}>{transaction.value}</span>
                            </div>
                        )
                    }, [])
                }
            </div>
            <div className="w-28 m-auto mt-4">
                <Button variant="outline">See More</Button>
            </div>
        </div>
    );
};

export default TransactionHistory;