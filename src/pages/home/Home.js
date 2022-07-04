import { useFetch } from '../../hooks/useFetch'

// styles
import './Home.css'

// components
import RecipeList from '../../components/RecipeList'

export default function Home() {
  const { data, isPending, error } = useFetch('https://jsonserver-recipe.herokuapp.com/recipes')

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
