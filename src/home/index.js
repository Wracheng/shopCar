import React, { Component } from 'react';
import { Card } from 'antd';
import './home.css';
const { Meta } = Card;
export default class Home extends Component {
  //私有属性
  state = {
    list: []
  };
  // 挂载完成阶段发请求
  componentDidMount() {
    fetch('http://localhost:3000/shoes').then(data => {
      data.json().then(res => {
        this.setState({
          list: res
        });
      });
    });
  }
  render() {
    return (
      <div className="shoes">
        {this.state.list.map(item => (
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="shoes" src={require(`../images/${item.src}`)} />}
            key={item.id}
            onClick={this.getDtail.bind(this,item.id)}
          >
            <Meta title={item.name} description={`￥${item.price}`} />
          </Card>
        ))}
      </div>
    );
  }
  getDtail(id){
    //编程式跳转
    this.props.history.push(`${this.props.location.pathname}shoes/${id}`)
  }
}
