import React from 'react';
import { Row, Col } from 'antd';


class Invoice extends React.Component {
    state = {}
    render() {
        return (
            <div className='gridColor'>
                <div className='invoice'>
                    <h1>Invoice</h1>
                    <hr className='hLine' />
                    <Row gutter={[8, 8]}>
                        <Col span={12} >1</Col>
                        <Col span={12} >2</Col>
                    </Row>
                </div>
            </div>);
    }
}

export default Invoice;