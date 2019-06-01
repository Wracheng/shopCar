import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
class Record extends Component {
  state = {
    dataState: this.props.dataState
  };
  render() {
      let { dataState } = this.state;
      let { record } = dataState
    return (
      <>
        <Row>
          <Col span={10}>商品名称</Col>
          <Col span={3}>尺码</Col>
          <Col span={3}>数量</Col>
          <Col span={3}>金额</Col>
        </Row>
        {record.map(item => (
          <Row key={item.id}>
            <Col span={3}>
              <img
                src={require('../images/' + item.src)}
                alt="shoes"
                style={{ width: 90, height: 90 }}
              />
            </Col>
            <Col span={6}>{item.name}</Col>
            <Col span={3} offset={1}>
              {item.size}
            </Col>
            <Col span={3}>{item.count}</Col>
            <Col span={3}>{item.price * item.count}</Col>
          </Row>
        ))}
      </>
    );
  }
}
const mapStatesToProps = state => ({
  dataState: state
});
export default connect(
  mapStatesToProps,
  null
)(Record);
