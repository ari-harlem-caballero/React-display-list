import Ingredient from './Ingredient';

export default function IngredientList({ ingredients }) {
  return <div className='ingredient-list'>
    <h4>Ingredients:</h4>
    {ingredients.map((ingredient, i) => <Ingredient key={`${ingredient.name}-${i}`} {...ingredient} />)}
  </div>;
}
