import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Register from './pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/register' exact component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}