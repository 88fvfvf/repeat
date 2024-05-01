enum EnumRoles {
    ADMIN,GUEST,USER
}

interface IUser {
    role: EnumRoles
}

const user:IUser = {
    role: EnumRoles.ADMIN 
}

const enum EnumColors {
    black,
    dark,
    chockolate
}
interface IColors {
    role: EnumColors
}
const colors:IColors = {
    role: EnumColors.chockolate
}