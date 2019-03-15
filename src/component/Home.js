import React,{Component} from 'react'

import {DatePicker,Row,Col,Button,Icon} from 'antd'

import {Link} from 'react-router-dom'

export  default class Home extends Component{

    render(){
        return <div style={{backgroundColor:'#f8f8f8',width:window.screen.width,height:window.screen.height}}>

            <div style={{marginLeft:'40%'}}>
                <DatePicker></DatePicker>

            </div>

            <div>
                <Button type='primary' size="large" onClick={()=>this.goFather()}>Hello   <Icon type="search"></Icon></Button>


            </div>
            <div style={{marginTop:20}}>
                <Link to="/father"> <Button type='primary' size="large">到father组件</Button> </Link>
            </div>
            <div style={{marginTop:20}}>
                <Link to="/button"> <Button type='primary' size="large">到button组件</Button> </Link>
            </div>


        </div>

    }


    goFather=()=>{



    }


}