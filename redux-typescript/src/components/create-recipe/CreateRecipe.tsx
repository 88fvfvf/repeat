import { FormEvent, useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/endPoints.api";
import Header from "../header/Header";
import { IRecipeData } from "../../types/recipe.types";

const defaultValue: IRecipeData = {
    name: '',
    image: ''
}

export default function CreateRecipe() {
    const [recipe, setRecipe] = useState<IRecipeData>(defaultValue)

    const [createRecipe] = useCreateRecipeMutation()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createRecipe(recipe).then(() => {
            setRecipe(defaultValue)
        })
    }

    return (
        <div className="Create">
            <form onSubmit={handleSubmit}>
                <h3>Create New Recipe</h3>
                <label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={recipe.name}
                        onChange={e => setRecipe({ ...recipe, name: e.target.value })}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="Image"
                        value={recipe.image}
                        onChange={e => setRecipe({ ...recipe, image: e.target.value })}
                    />
                </label>
                <button type="submit">
                    Create
                </button>
            </form>
            <Header />
        </div>
    )
}