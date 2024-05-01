interface ICar {
    id: number
    name: string
    year: number
    price: number
}

// interface ICarCreate extends Omit<ICar, 'id'> {
//     result: ICar
// }

// const car:ICarCreate = {}

// interface IPick extends Pick<ICar, 'id'> {
// }

// const car:IPick = {
//     id: 15
// }

// interface IPartials extends Partial<ICar> {
// }

// const car:IPartials = {

// }

interface IRecord extends Record<'name' | 'price', string | number> {}

const record: IRecord = {
    name: 15,
    price: 'sdsd'
}