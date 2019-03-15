import React, {Component} from 'react'



class Count extends Component {

    constructor(props) {
        super(props)

        this.state = {}

    }

    //设置属性的默认值
    static defaultProps = {
        num: 0

    }

    componentWillMount(){

        console.log(123)

    }




    render() {

        return <div>
            <h1>{this.props.num}</h1>
        </div>

    }


}


export default Count;