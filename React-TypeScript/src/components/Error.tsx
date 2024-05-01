interface IErorrProps {
    error: string
}

export function Error({error}:IErorrProps) {
    return (
        <h3 className="text-center text-red-600">{error}</h3>
    )
}