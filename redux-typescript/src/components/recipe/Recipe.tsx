import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import { IRecipe } from '../../types/recipe.types'
import styles from './Recipe.module.css'

interface IRecipeItem {
  recipe: IRecipe
}

function Recipe({ recipe }: IRecipeItem) {
  const { favorites } = useFavorites()
  const { ToggleFavorites } = useActions()

  const isExists = favorites.some(r => r.id === recipe.id)

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src={recipe.image} alt="no Image" />
        <h2>{recipe.name}</h2>
        <button onClick={() => ToggleFavorites(recipe)}>
          {isExists ? ' DELETE' : 'ADD'}
        </button>
      </div>
    </div>
  )
}

export default Recipe
