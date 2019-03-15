import React, {Component} from 'react'
import {Row,Col,Switch} from 'antd'


export  default  class ColTest extends Component {

    render() {

        return <div>

            <Row>

                <Col span={24}>
                    <Col span={12}> A</Col>
                    <Col span={12}> B</Col>
                </Col>
                <Switch defaultChecked onChange={this.onChanged}/>

            </Row>


        </div>
    }
      //checked表示是开还是关 如果是关 就返回false
    onChanged=(checked)=>{
        console.log(`switch to ${checked}`)
    }
}
