import '../styles/components/blog.css';

import imageBlog1 from '../images/blog_1.svg';
import imageBlog2 from '../images/blog_2.svg';
import imageBlog3 from '../images/blog_3.svg';
import imageBlog4 from '../images/blog_4.svg';
import imageAuthor1 from '../images/author_1.png';
import imageAuthor2 from '../images/author_2.png';
import imageAuthor3 from '../images/author_3.png';
import imageAuthor4 from '../images/author_4.png';

export default function Blog(){
  return(
    <section className='blog' id='blog'>
      <p className='blog__title'>Read Our Blog</p>
      <p className='blog__description'>
        Far far away, behind the word mountains,
        far from the countries Vokalia and Consonantia,
        there live the blind texts.
      </p>
      <div className="blog__exhibition">
        <article className='blog__article'>
          <img src={imageBlog1} alt='Blog Banner'/>
          <div className="blog__details">
            <p className='blog__title'>
              Quick-start guide to nuts and seeds
            </p>
            <div className='blog__author'>
              <img
                className='author__image'
                src={imageAuthor1}
                alt="Author Profile"
              />
              <p className="author__name">Kevin Ibrahim</p>
            </div>
          </div>
        </article>
        <article className='blog__article'>
          <img src={imageBlog2} alt='Blog Banner'/>
          <div className="blog__details">
            <p className='blog__title'>
              Quick-start guide to nuts and seeds
            </p>
            <div className='blog__author'>
              <img
                className='author__image'
                src={imageAuthor2}
                alt="Author Profile"
              />
              <p className="author__name">Kevin Ibrahim</p>
            </div>
          </div>
        </article>
        <article className='blog__article'>
          <img src={imageBlog3} alt='Blog Banner'/>
          <div className="blog__details">
            <p className='blog__title'>
              Quick-start guide to nuts and seeds
            </p>
            <div className='blog__author'>
              <img
                className='author__image'
                src={imageAuthor3}
                alt="Author Profile"
              />
              <p className="author__name">Kevin Ibrahim</p>
            </div>
          </div>
        </article>
        <article className='blog__article'>
          <img src={imageBlog4} alt='Blog Banner'/>
          <div className="blog__details">
            <p className='blog__title'>
              Quick-start guide to nuts and seeds
            </p>
            <div className='blog__author'>
              <img
                className='author__image'
                src={imageAuthor4}
                alt="Author Profile"
              />
              <p className="author__name">Kevin Ibrahim</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}