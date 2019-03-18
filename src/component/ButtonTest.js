import React,{Component} from 'react'
import {Button,Card,Modal,message} from 'antd'


export default class ButtonTest extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:'我是原始的msg',
            me:'',
            flag:true,
            visible:false //默认弹框是不显示的
        }
    }

    render(){

        return <div>
            {/*事件传递参数的方式1 直接在onClick后面方法绑定bind()*/}
            {/*<button style={{color:'red',fontSize:30,backgroundColor:'blue'}} onClick={this.changeMsg.bind(this,'我是参数1')}>
                点击
            </button>

            <button onClick={this.changeMe.bind(this,this.state.flag)}>切换</button>


            <div style={{}}>
                <h1>{this.state.msg}</h1>
            </div>

            <div>
                <h1>{this.state.me}</h1>
            </div>*/}


            <Card title="我是卡片">
                <Button type="primary" shape="circle" size="large" icon="search" onClick={()=>{
                    this.myOnClick()
                }}></Button>

                <Button type="primary"  onClick={()=>{
                    this.showModal("我是参数一")
                }} >点击弹框</Button>

                <Modal
                    title="我是弹框的标题"
                    visible={this.state.visible}
                    onCancel={()=>{
                        this.setState({
                            visible:false
                        })
                    }}
                    onOk={()=>{
                        this.setState({
                            visible:false
                        })
                    }}
                    onText="确认"
                    cancelText='取消'
                    centered={true}

                >
                    <p>弹框中的内容</p>

                </Modal>
            </Card>

            <Card>
                <Button onClick={this.info}> 点我展示全局通知</Button>
            </Card>


        </div>

    }

    info=()=>{
         // message.info("登录失败")//普通通知
        message.success('登录成功')
        message.error("登录失败 ")
        message.warn("警告 18岁一下禁止进入!!!")
    }


    showModal=(e)=>{
        console.log(e)
        this.setState({
            visible:true
            }
        )
    }

    myOnClick=()=>{
        alert('你点击了一个按钮')
    }

    changeMsg=(arg)=>{

        this.setState({

            msg:'我是被修改的msg'+arg
        })

    }
    changeMe=(arg)=>{

        if (arg){
            this.setState({
                me:'状态二'

            })
        }else {
            this.setState({
                me:'状态一'
            })
        }
        this.setState({
            flag:!arg
        })


}


}
