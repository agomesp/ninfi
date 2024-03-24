interface ITransaction {
    id: number;
    name: string;
    value: number;
    categoryId: number;
}

const transactionsMock: Array<ITransaction> = [
    {
        id: 1,
        name: "Computer Desk",
        value: 136.23,
        categoryId: 1,
    },
    {
        id: 2,
        name: "TV",
        value: 421,
        categoryId: 2,
    },
    {
        id: 3,
        name: "Dinner Table",
        value: 235,
        categoryId: 1,
    },
    {
        id: 4,
        name: "Book Shelf",
        value: 84,
        categoryId: 1,
    },
]

export default transactionsMock;