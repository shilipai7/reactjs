import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'

import 'antd/dist/antd.css'

import App from './App'
import Father from "./component/Father";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Home from './component/Home'
import ButtonTest from './component/ButtonTest'
import ColTest from './component/ColTest'
import SiderDemo from "./component/SiderDemo";

import ArrayTest from "./component/ArrayTest";
import NoMatch from "./component/NoMatch";
import SpinTest from "./component/SpinTest";
import Carouseltest from "./component/Carouseltest";
import siderDemo2 from "./component/siderDemo2";




ReactDOM.render( <BrowserRouter>
             <div>

                 <Switch>

                     <Route exact path="/" component={ArrayTest}/>
                     <Route path="/father" component={Father}/>
                     <Route path="/home" component={Home}/>


                     <Route path="/siderDemo" render={()=>
                         <SiderDemo>
                             <Route path="/siderDemo/arrayTest" component={ArrayTest}></Route>
                             <Route path="/siderDemo/colTest" component={ColTest}></Route>
                             <Route path="/siderDemo/button" component={ButtonTest}></Route>
                             <Route path="/siderDemo/spintest" component={SpinTest}></Route>
                             <Route path="/siderDemo/carousel" component={Carouseltest}></Route>
                         </SiderDemo>}>

                     </Route>
                     <Route path="/siderDemo2" component={siderDemo2}/>
                     <Route  component={NoMatch }/>


                 </Switch>




             </div>


    </BrowserRouter>,
    document.getElementById('app'));
serviceWorker.unregister()




