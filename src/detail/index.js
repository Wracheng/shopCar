import React, { Component} from 'react';
import { Breadcrumb, Button, Icon } from 'antd';
import { addShoes } from '../redux/action';
import './detail.css';
import { connect } from 'react-redux';
class Detail extends Component {
  state = {
    list: [{ name: '', src: '1.jpg', mashu: [] }],
    size: '0',
    num: 0,
    id: '',
    price: 0
  };
  componentDidMount() {
    fetch(`http://localhost:3000/shoes?id=${this.props.match.params.id}`).then(
      data => {
        data.json().then(res => {
          this.setState({
            list: res,
            id: res[0].id,
            price: res[0].price,
          });
        });
      }
    );
  }
  render() {
    const { name, mashu, src } = this.state.list[0];
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="#/">Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{name}</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="outer-card"
          style={{ background: '#fff', padding: '30px' }}
        >
          <img src={require('../images/' + src)} alt="shoes" />
          <div className="right">
            <p>{name}</p>
            码数 ：
            <ul className="mashu">
              {mashu.map((item, index) => (
                <li key={item}>
                  <Button onClick={this.getSize.bind(this)}>{item}</Button>
                </li>
              ))}
            </ul>
            <Button
              type="danger"
              block
              onClick={this.addShoes.bind(this, this.state)}
            >
              加入购物车
            </Button>
          </div>
          <Icon type="minus-circle" onClick={this.reduceOne.bind(this)} />
          <span className="num">{this.state.num}</span>
          <Icon type="plus-circle" onClick={this.addOne.bind(this)} />
        </div>
      </div>
    );
  }
  // 获取选中尺码
  getSize(e) {
    this.setState({
      size: e.target.innerText
    });
  }
  reduceOne() {
    const { num } = this.state;
    let newNum = num > 0 ? num - 1 : num;
    this.setState({
      num: newNum
    });
  }
  addOne() {
    const { num } = this.state;
    this.setState({
      num: num + 1
    });
  }
  // 点击购物车
  addShoes(state) {
    const { id, num, size, price, list } = state;
    const { name,src } = list[0]
    this.props.dispatchAddShoes(id, size, num, price,name,src);
  }
}
const mapStateToProps = state => ({
  shopCar: state
});
const mapDispatchToProps = dispatch => ({
  dispatchAddShoes(id, size, count, price,name,src) {
    let action = addShoes(id, size, count, price,name,src);
    dispatch(action);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
