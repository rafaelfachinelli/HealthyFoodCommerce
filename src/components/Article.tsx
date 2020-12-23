import { Link } from 'react-router-dom';

import '../styles/components/article.css';

import imageBlog1 from '../images/blog_1.svg';
import imageAuthor1 from '../images/author_1.png';

export default function Article(props) {
  return (
    <article className='article'>
      <img src={props.banner} alt={props.title}/>
      <div className="article__details">
        <p className='article__title'>{props.title}</p>
        <div className='article__author'>
          <img
            className='author__image'
            src={props.authorAvatar}
            alt={props.authorName}
          />
          <p className="author__name">{props.authorName}</p>
        </div>
      </div>
    </article>
  );
}