import { useState } from 'react'
import CreateRecipe from './components/create-recipe/CreateRecipe'
import Recipe from './components/recipe/Recipe'
import { useGetRecipesQuery } from './store/api/api'

// const userId = 1 Проверка на Авторизованнли пользователь

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, isLoading } = useGetRecipesQuery(searchTerm)
  const [queryTerm, setQueryTerm] = useState('')

  // const { data, isLoading } = useGetRecipesQuery(undefined, {
  //   skip: !userId  если пользователь не Авторизованн то нам не покажет данных
  // })

  const handleSearch = () => {
    setQueryTerm(searchTerm)
  }

  return (
    <section>
      <CreateRecipe />
      <div>
        <input
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder='Enter Search Term'
          style={{
            marginLeft: 10, width: 250, height: 40
          }}
        />
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="container">
        {isLoading
          ? <h2>Loading...</h2>
          : data?.map(recipe => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))
        }
      </div>


    </section>
  )
}

export default App
