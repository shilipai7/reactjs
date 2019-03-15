import React, {Component} from 'react'

class Comments extends Component {

    constructor(props) {
        super(props)


        this.state = {
            commentArr: [
                {user: 'zhangsan', comment: '你好'},
                {user: '里斯', comment: '你好'},
                {user: 'wangwu', comment: '你好'}
            ]
        }
    }


    render() {
        return <div>
            {
                this.state.commentArr.map(item => {
                    return <div>
                        <h1> {item.user}</h1>
                        <h3>{item.comment}</h3>
                    </div>
                })
            }

        </div>

    }
}

export default Comments;

