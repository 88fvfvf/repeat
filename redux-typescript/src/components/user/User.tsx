import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector"

export const User = () => {
    const { user, isLoading, isError } = useTypedSelector(state => state.user)
    const { getUserById } = useActions()
    return (
        <div>
            <button onClick={() => getUserById(1)}>
                Get User
            </button>
            {isLoading ?
                <h3>Loading</h3>
                : isError
                    ? <h3>{isError}</h3>
                    : user
                        ? <h2>Users: {user.name}</h2>
                        : <h2>USER NOT FOUND</h2>}
        </div>
    )
}