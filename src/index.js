import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'

import 'antd/dist/antd.css'

import App from './App'

import {BrowserRouter, Route,Switch} from "react-router-dom";


import UploadPic from "./component/UploadPic";
import UploadPicList from "./component/UploadPicList";
import Avatar from "./component/Avatar";




ReactDOM.render( <BrowserRouter>
             <div>

                 <Switch>

                     <Route exact path="/" component={UploadPic}/>
                     <Route path="/uploadPic" component={UploadPic}/>
                     <Route path="/uploadPicList" component={UploadPicList}/>
                     <Route path="/avatar" component={Avatar}/>


                 </Switch>




             </div>


    </BrowserRouter>,
    document.getElementById('app'));
serviceWorker.unregister()




