import '../styles/components/join.css';

import imageJoin from '../images/join.svg';

export default function Join() {
  return (
    <section className='join' id='join'>
      <div className='join__email'>
        <label htmlFor='email'>Join our membership to get special offer</label>
        <div className="email__input">
          <input id='email' type="email" placeholder='Enter your email address'/>
          <button>Join</button>
        </div>
      </div>
      <div className='join__image'>
        <img className='image__join' src={imageJoin} alt="Join"/>
      </div>
    </section>
  )
}