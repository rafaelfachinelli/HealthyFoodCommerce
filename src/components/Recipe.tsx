import { Link } from 'react-router-dom';

import '../styles/components/recipe.css'

export default function Recipe(props) {
  return (
    <article className='recipe'>
      <img className='recipe__image' src={props.image} alt={props.title}/>
      <div className="recipe__informations">
        <p className='recipe__title'>{props.title}</p>
        <Link className='recipe__button' to='/'>See Recipe</Link>
      </div>
    </article>
  );
}