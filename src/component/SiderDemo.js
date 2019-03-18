import { Layout, Menu, Icon } from 'antd';
import React from 'react'
import {Image} from 'react-dom'
import {Link,Route} from 'react-router-dom'
import ArrayTest from "./ArrayTest";
import '../css/siderDemo.css'



const { Header, Sider, Content } = Layout;

 export  default class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout style={{minHeight:'100vh'}}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}

                >

                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}  style={{height:'100%'}}>
                        <Menu.Item key="1">
                            <Link to="/siderDemo/arrayTest"></Link>
                            <Icon type="user" />
                            <span>arrayTest</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>colTest</span>
                            <Link to="/siderDemo/colTest"></Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>button</span>
                            <Link to="/siderDemo/button"/>
                        </Menu.Item>

                        <Menu.Item key="4">
                            <Icon type="upload" />
                            <span>spintest</span>
                            <Link to="/siderDemo/spintest"></Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="upload" />
                            <span>carousel</span>
                            <Link to="/siderDemo/carousel"></Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#dbc4ff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{
                        margin: '24px 16px', padding: 24, background: '#c7edcc',
                    }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}


/*
components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
}

components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
}*/
