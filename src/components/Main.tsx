import { Link } from 'react-router-dom';

import '../styles/components/main.css';

import iconSearch from '../images/icons/icon_search.svg';
import imageIllustration from '../images/Illustration.svg';

export default function Main() {
  return (
    <main className='main'>
      <nav className='main__nav'>
        <div className='nav__logo'>
          <p>Healthy Food</p>
        </div>
        <ul className='nav__list'>
          <li className='list__item'>
            <a href='#recipes' >HEALTHY RECIPES</a>
          </li>
          <li className='list__item'>
            <a href='#blog'>BLOG</a>
          </li>
          <li className='list__item'>
            <a href='#join'>JOIN</a>
          </li>
          <li>
            <Link className='item__register' to='/Register'>REGISTER</Link>
          </li>
        </ul>
      </nav>
      <div className='main__search'>
        <label htmlFor='search'>Ready for <br/> Trying a new</label>
        <div className="search__input">
          <input id='search' type="text" placeholder='Search healthy recipes'/>
          <button><img src={iconSearch} alt="Search"/></button>
        </div>
      </div>
      <div className='main__illustration'>
        <img src={imageIllustration} alt="Illustration"/>
      </div>
    </main>
  );
}