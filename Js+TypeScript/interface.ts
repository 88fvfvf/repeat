interface IAge {
    age: number
}

interface IUser extends IAge{
    name: string
    email: string
}

const user:IUser = {
    name: 'humo',
    email: 'humo@mgmail.com',
    age: 18
}
type Tex = {
    request: object
}
type TType = {
    result: number
} & Tex

const TtypesVar:TType = {
    request: {x: 'humoyun'},
    result: 15
}

interface IMass {
    data: string
    time: number
}

const mass:IMass[] = [{
    data: 'huhu',
    time: 1515
}]