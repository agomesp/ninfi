export interface ICategory {
    id: number;
    name: string;
    color: string;
}

const categoryMock: Array<ICategory> = [
    {
        id: 1,
        name: "Furniture",
        color: "#8F49DE"
    },
    {
        id: 2,
        name: "Electronics",
        color: "#167B7D"
    }
]

export default categoryMock;