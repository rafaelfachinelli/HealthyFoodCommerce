import '../styles/components/footer.css';

export default function Footer() {
  return (
    <footer className='footer' id='footer'>
      <div className='footer__copyright'>
        <p>© Copyrights 2020 Stack. All Rights Reserved.</p>
      </div>
      <div className="footer__links">
        <a href='#'>Privacy Policy</a>
        <a href='#'>Terms and Conditions</a>
      </div>
    </footer>
  );
}