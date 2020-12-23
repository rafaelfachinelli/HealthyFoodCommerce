import { Link } from 'react-router-dom';

import imageRecipe1 from '../images/food_1.svg';
import imageRecipe2 from '../images/food_2.svg';
import imageRecipe3 from '../images/food_3.svg';
import imageRecipe4 from '../images/food_4.svg';

import '../styles/components/recipes.css';

export default function Recipes() {
  return (
    <section className='recipes' id='recipes'>
      <div className='recipes__introduction'>
        <p className='introduction__title'>Our Best Recipes</p>
        <p className='introduction__description'>
          Far far away, behind the word mountains,
          far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
      </div>
      <div className='recipes__best'>
        <article className='recipe'>
          <img className='recipe__image' src={imageRecipe1} alt="Broccoli Salad with Bacon"/>
          <div className="recipe__informations">
            <p className='recipe__title'>Broccoli Salad with Bacon</p>
            <Link className='recipe__button' to='/'>See Recipe</Link>
          </div>
        </article>
        <article className='recipe'>
          <img className='recipe__image' src={imageRecipe2} alt="Classic Beef Burgers"/>
          <div className="recipe__informations">
            <p className='recipe__title'>Classic Beef Burgers</p>
            <Link className='recipe__button' to='/'>See Recipe</Link>
          </div>
        </article>
        <article className='recipe'>
          <img className='recipe__image' src={imageRecipe3} alt="Classic Potato Salad"/>
          <div className="recipe__informations">
            <p className='recipe__title'>Classic Potato Salad</p>
            <Link className='recipe__button' to='/'>See Recipe</Link>
          </div>
        </article>
        <article className='recipe'>
          <img className='recipe__image' src={imageRecipe4} alt="Cherry Cobbler on the Grill"/>
          <div className="recipe__informations">
            <p className='recipe__title'>Cherry Cobbler on the Grill</p>
            <Link className='recipe__button' to='/'>See Recipe</Link>
          </div>
        </article>
      </div>
    </section>
  );
}