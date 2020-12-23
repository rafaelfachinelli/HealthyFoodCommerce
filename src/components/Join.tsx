import imageJoin from '../images/join.svg';

export default function Join() {
  return (
    <section className='join' id='join'>
      <div className='join__image'>
        <img src={imageJoin} alt="Join"/>
      </div>
      <div className='join__email'>
        <label htmlFor='email'>Join our membership to get special offer</label>
        <input id='email' type="email" placeholder='Enter your email address'/>
        <button>Join</button>
      </div>
    </section>
  )
}