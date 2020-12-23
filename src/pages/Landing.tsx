import Main from '../components/Main';
import Recipes from '../components/Recipes';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Join from '../components/Join';

import '../styles/pages/landing.css';

export default function Landing() {
  return (
    <>
      <Main/>
      <Recipes/>
      <Services/>
      <Blog/>
      <Join/>
    </>
  );
}