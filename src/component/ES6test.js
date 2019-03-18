import React ,{Component} from 'react'

 export default class ES6test extends Component{




    render(){
        return (
            <div>

                {test4()}

            </div>


        )
           /* <div>

            {/!*在组件中怎么写js代码  一个{}只能写一个语句吗?*!/}

            {

                  test4()

            }


        </div>*/
    }
 }
/*
const person={
    name:'zhangsan',
    age:10
}

const dalao={
    jishu:['java','es6']
}
const dog={
    ...person,...dalao
}*/

const test=()=>{
    new Promise((resolve,reject)=>{
        console.log('第一')


        resolve('成功了')
        reject('失败了')
    })
        .then((res)=> {
            console.log(res)
        },(e)=>{
            console.log(e)
        })
}




const test2=()=>{
      new Promise((resolve,reject)=>{
        resolve('我是成功以后返回的 信息')
        reject('我是失败以后返回的信息')
          console.log("我是同步代码")
    }).then((res)=>{
        console.log(res);
        console.log('我是回调函数中的代码 我等同步代码执行后才执行')
    }).catch((e)=>{
        console.log(e);
    })

    console.log('我是同步代码中 虽然看起来我在回调函数后面 ')
}





 /*一个函数中 可以定义一个函数  而且*/
const test4=()=>{
    //asycn 声明的函数 这个函数就是promise对象了  而且要返回一个  错误的信息在哪?
    async function test3() {

        console.log(123)
        console.log(234)
        return 'hello'
    }

    console.log(test3())  //这是一个promise对象

    test3().then((res)=>{
        console.log(res)
    }).catch((e)=>{
        console.log(e)
    })

}

//这是定义函数  返回的就是promise对象  只要调用这个函数就相当于得到promise对象
// promise()就是调用函数
const promise=()=>{
   return  new Promise((resolve ,reject )=>{
        resolve('我是成功是返回的信息')
        reject('我是失败时返回的信息')
    })
}


//定义一个最简单 promise对象 还没有接then
const p= new Promise((resolve ,reject )=>{
    resolve('我是成功是返回的信息')
    reject('我是失败时返回的信息')
})


 const test6=()=>{

     async function test5() {
       let a=  await promise()  //直接让promise实例 回调函数执行
         console.log('我是同步代码1')
         console.log(a)
     }

    test5().then((res)=>{
         console.log(res)
     }).catch((e)=>{
         console.log(e)
     })

     console.log('我是同步代码2')

 }







