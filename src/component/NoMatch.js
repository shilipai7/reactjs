import React,{Component} from 'react'

export default class NoMatch extends Component{


    render(){
        return <div>
           <img src={require('../image/404.jpg')}/>
        </div>
    }
}