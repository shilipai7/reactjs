import React, {Component} from 'react'



class Count2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name:'zhangsan',
            count:this.props.num
        }

    }

    //设置属性的默认值
    static defaultProps = {
        num: 0

    }

    componentWillMount(){

        console.log(123)
        console.log(this.state.name)
    }


    render() {

        return <div>
            <input type="button" value="+1" id="btn"/>
            <input type="button" value="-1" id="btn2" onClick={this.decrease}/>
            <h1 id="h1">当前的数是{this.state.count}</h1>
        </div>

    }


    decrease=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    //此时 虚拟dom已经创建好
    componentDidMount(){
        document.getElementById('btn').onclick=() =>{
            this.setState({
                count:this.state.count+1
            })
        }

    }

    /*shouldComponentUpdate(nextProps,n){
        // 如果count是偶数那么就更新页面
        if (n.count%2===0){
            return true
        }
        return false;

    }*/

    componentWillUpdate(){
         //此时还没有执行render  所以页面这里的dom还是旧的
        console.log(document.getElementById('h1').innerText+'这是WillUpdate')

    }
    componentDidUpdate(){

        console.log(document.getElementById('h1').innerText+'这是DidUpdate')
    }


}


export default Count2;