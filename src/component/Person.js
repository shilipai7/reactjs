import React, {Component} from 'react'

class Person extends Component {

    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }

    render() {
        return <h1>我是person类 {this.props.color}</h1>
    }

}

var p = new Person('zhangsan', 11)
console.log(p.name)

export default Person;