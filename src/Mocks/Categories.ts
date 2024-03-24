export interface ICategory {
    id: number;
    name: string;
    color: string;
}

const categoryMock: Array<ICategory> = [
    {
        id: 1,
        name: "Furniture",
        color: "bg-purple-400"
    },
    {
        id: 2,
        name: "Electronics",
        color: "bg-cyan-400"
    },
    {
        id: 3,
        name: "Job Income",
        color: "bg-green-400"
    }
]

export default categoryMock;