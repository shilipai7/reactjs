import React ,{Component} from 'react'
import {Spin,Card} from 'antd'

export default class SpinTest extends Component{
    render(){
        return<div>

            <Spin tip="我在努力加载了..." spinning={false}>

            </Spin>
        </div>
    }
}