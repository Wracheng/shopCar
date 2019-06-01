import React, { Component } from 'react';
import { Row, Col,Button,Modal } from 'antd';
import { connect } from 'react-redux';
import { record } from '../redux/action';
import './shop.css';
class Shop extends Component {
  state = {
    dataState: this.props.dataState,
    visible: false
  }
  render() {
    let { dataState } = this.state;
    console.log(dataState)
    return (
      <>
        <Row>
          <Col span={10}>商品名称</Col>
          <Col span={3}>尺码</Col>
          <Col span={3}>数量</Col>
          <Col span={3}>金额</Col>
        </Row>
        {dataState.shoes.map(item => (
          <Row key={item.id}>
            <Col span={3} ><img src={require('../images/' + item.src)} alt="shoes" style={{ width: 90, height:90 }} /></Col>
            <Col span={6}>{item.name}</Col>
            <Col span={3} offset={1}>
              {item.size}
            </Col>
            <Col span={3}>{item.count}</Col>
            <Col span={3}>{item.price * item.count}</Col>
          </Row>
        ))}

        <Row>
          <Col span={8}><Button className="clear" onClick={this.clear.bind(this)}>清空</Button></Col>
          <Col span={8} offset={8}>
          <Button className="pay" onClick={this.showModal.bind(this)}>去结算</Button>
          </Col>
        </Row>
        <Modal
          title="确认订单"
          visible={this.state.visible}
          onOk={this.handleOk.bind(this,dataState)}
          onCancel={this.handleCancel.bind(this)}
        >
          <p>您确定要支付吗？</p>
        </Modal>
      </>
    );
  }
  clear () {
    this.setState({
      // 对应map遍历时候的数据类型
      dataState : {shoes:[]}
    })
  }
  // 显示警告框
  showModal () {
    this.setState({
      visible: true,
    });
  }
  // 取消
  handleCancel () {
    this.setState({
      visible: false,
    });
  }
  // 确定 // 支付，一旦确定支付，马上存到redux中，当然了开一个新的reducer
  handleOk (dataState) {
    const {id, size, count, price, name, src} = dataState.shoes[0]
    this.setState({
      visible: false,
      dataState : {shoes:[]}
    });
    this.props.recordDispatch(id, size, count, price, name, src)
  }
}
const mapStateToProps = state => ({
  dataState: state
});
const mapDispatchToProps = dispatch => ({
  recordDispatch (id, size, num, price,name,src) {
    let action = record(id, size, num, price, name, src) 
    dispatch(action)
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
