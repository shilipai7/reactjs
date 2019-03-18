import React ,{Component} from 'react'

const personArr=[

    {name:'zhangsan',age:10},
    {name:'lisi',age:10},
    {name:'wangwu',age:10}
]

export default class ArrayTest extends Component{


    render(){
        return <div>

            {personArr.map((item,index)=>{

                return(
                    <div>
                        <h1>姓名: {item.name}</h1>
                        <h1>年龄:{item.age}</h1>
                        <h1>{index}</h1>
                    </div>
                )


            })}


        </div>
    }
}