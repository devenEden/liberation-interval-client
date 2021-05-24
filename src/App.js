import React from 'react'
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import routes from './routes';
import 'antd/dist/antd.css';


const  App = () =>  {
  return (
    <div className="App">
    <Router>
       <Switch>
         {
           routes.map( route => {
             return (
               <Route exact key={route.key} path={route.path} title={route.title}  component={route.component}/>
             )
           })
         }
         <Route>404 not found </Route>
       </Switch>
    </Router>
    </div>
  );
}

export default App;
