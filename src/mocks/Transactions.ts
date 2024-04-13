export interface ITransaction {
    id: number;
    name: string;
    value: number;
    categoryId: number;
    expense: boolean;
}

const transactionsMock: Array<ITransaction> = [
    {
        id: 1,
        name: "Computer Desk",
        value: 136.23,
        categoryId: 1,
        expense: true,
    },
    {
        id: 2,
        name: "TV",
        value: 421,
        categoryId: 2,
        expense: true
    },
    {
        id: 3,
        name: "Dinner Table",
        value: 235,
        categoryId: 1,
        expense: true
    },
    {
        id: 4,
        name: "Book Shelf",
        value: 87,
        categoryId: 1,
        expense: true
    },
    {
        id: 5,
        name: "Salary",
        value: 1876,
        categoryId: 3,
        expense: false
    },
]

export default transactionsMock;