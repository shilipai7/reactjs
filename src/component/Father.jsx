import React ,{Component} from 'react'

class Father extends Component{

    constructor(props){
        super(props)

       this.state={
            content:'我是传值的内容'
       }

    }

    render(){
        return <div>
               {/*父组件像子组件中传值 将父组件的state传给 子组件的props 并且通过修改父组件的state来修改子组件的props*/}
               
            <h1>我是父组件 </h1>
            <input type="button" value="update" id="btn1" onClick={this.updateSon} />
            <Son content={this.state.content}></Son>
        </div>

    }

    updateSon=()=>{
        this.setState({
            content:'哈哈我被修改了'
        })
    }

}
export default Father


class Son extends Father{

    constructor(props){
        super(props)

    }


    render(){
        return <div>

            <h1>我是子组件---{this.props.content}</h1>
        </div>

    }

    componentWillReceiveProps(nextProps){
        console.log('有人修改了传给子组件的props')
        //注意 当componentWillReceiveProps被触发时  通过this.props取到的也是旧值  要最新的就是 nextProps
    }


}

