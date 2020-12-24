import Article from './Article';

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
        Far far away, behind the word mountains, far from the countries <br/>
        Vokalia and Consonantia, there live the blind texts.
      </p>

      <div className='blog__carousel'>
        <Article
            banner={imageBlog1}
            title='Quick-start guide to nuts and seeds'
            authorAvatar={imageAuthor1}
            authorName='Kevin Ibrahim'
        />
        <Article
          banner={imageBlog2}
          title='Nutrition: Tips for Improving Your Health'
          authorAvatar={imageAuthor2}
          authorName='Mike Jackson'
        />
        <Article
          banner={imageBlog3}
          title='The top 10 benefits of eating healthy'
          authorAvatar={imageAuthor3}
          authorName='Bryan McGregor'
        />
        <Article
          banner={imageBlog4}
          title='What Makes a Healthy Diet?'
          authorAvatar={imageAuthor4}
          authorName='Jashua'
        />
      </div>
    </section>
  );
}