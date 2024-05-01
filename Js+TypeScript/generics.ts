function entity<T>(args: T):T {
    return args
}

entity<number>(15)
entity<string>('hu')

// strelochnaya function

const generics = <T>(arument: T):T => {
    return arument
}

generics<string>('this is string')

// interface & generics

interface IPair<K,V> {
    key: K
    value: V
}

const pair1: IPair<number,string> = {
    key: 15,
    value: 'str'
}