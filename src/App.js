import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { HashRouter, Route, Link, withRouter } from 'react-router-dom';
import Home from './home';
import Detail from './detail';
import Shop from './shop_car';
import Record from './record'
import './App.css';
const { SubMenu } = Menu;
const { Sider, Content } = Layout;

function NewMun(props) {
  return (
    <Menu
      mode="inline"
      selectedKeys={[props.location.pathname]}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%' }}
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="mail" />
            操作
          </span>
        }
      >
        <Menu.Item key="/">
          <Link to="/">主页</Link>
        </Menu.Item>
        <Menu.Item key="/shop_car">
          <Link to="/shop_car">购物车</Link>
        </Menu.Item>
        <Menu.Item key="/record"><Link to="/record">购买记录</Link></Menu.Item>
      </SubMenu>
    </Menu>
  );
}
const NewM = withRouter(NewMun)
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <Sider>
            <NewM />
          </Sider>
          <Layout>
            <Content>
              <Route exact path="/" component={Home} />
              <Route exact path="/shoes/:id" component={Detail} />
              <Route exact path="/shop_car" component={Shop} />
              <Route exact path="/record" component={Record}></Route>
            </Content>
          </Layout>
        </Layout>
      </HashRouter>
    );
  }
}
