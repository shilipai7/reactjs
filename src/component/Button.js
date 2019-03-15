import React,{Component} from 'react'


export default class Button extends Component{
    constructor(props){
        super(props)
        this.state={
            msg:'我是原始的msg',
            me:'',
            flag:true
        }
    }

    render(){

        return <div>
            {/*事件传递参数的方式1 直接在onClick后面方法绑定bind()*/}
            <button style={{color:'red',fontSize:30,backgroundColor:'blue'}} onClick={this.changeMsg.bind(this,'我是参数1')}>
                点击
            </button>

            <button onClick={this.changeMe.bind(this,this.state.flag)}>切换</button>


            <div style={{marginTop:-30}}>
                <h1>{this.state.msg}</h1>
            </div>

            <div>
                <h1>{this.state.me}</h1>
            </div>

        </div>

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
