import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'

import 'antd/dist/antd.css'

import App from './App'
import Father from "./component/Father";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Home from './component/Home'
import Button from './component/Button'
import ColTest from './component/ColTest'
import SiderDemo from "./component/SiderDemo";



ReactDOM.render( <BrowserRouter>
             <div>

                 <Route exact path="/" component={SiderDemo}/>
                 <Route path="/father" component={Father}/>
                 <Route path="/home" component={Home}/>
                 <Route path="/button" component={Button}></Route>
                 <Route path="/coltest" component={ColTest}></Route>

             </div>


    </BrowserRouter>,
    document.getElementById('app'));
serviceWorker.unregister()




