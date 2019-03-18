import React ,{Component} from 'react'
import {Carousel,Row,Col} from 'antd'
import '../css/carousel.css'

export default class Carouseltest extends Component{

    render(){
        return <div>

            <Row>
                <Col>

                    <Col span={24}>
                        <Carousel autopaly>
                            <div>
                                <img src={require('../image/logo1.jpg')}/>
                            </div>
                            <div> <img src={require('../image/404.jpg')}/></div>
                            <div>  <img src={require('../image/404.jpg')}/></div>

                        </Carousel>
                    </Col>
                    <Col span={12}> nihao</Col>
                    <Col span={12}> nihao</Col>
                </Col>


            </Row>

        </div>
    }
}