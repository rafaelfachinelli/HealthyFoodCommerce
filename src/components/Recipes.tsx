import Recipe from './Recipe';

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
        <Recipe image={imageRecipe1} title='Broccoli Salad with Bacon'/>
        <Recipe image={imageRecipe2} title='Classic Beef Burgers'/>
        <Recipe image={imageRecipe3} title='Classic Potato Salad'/>
        <Recipe image={imageRecipe4} title='Cherry Cobbler on the Grill'/>
      </div>
    </section>
  );
}