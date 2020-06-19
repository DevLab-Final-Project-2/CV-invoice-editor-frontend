import React from 'react';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import Avatar from './Avatar'
import { InputNumber } from 'antd';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;


class Invoice extends React.Component {
    state = {}
    onChange(value) {
        console.log('changed', value);
    }
    render() {
        return (
            <div className='gridColor'>
                <div className='invoice'>
                    <h1> INVOICE</h1>
                    <hr className='hLine' />
                    <Row gutter={[8, 8]}>
                        <Col span={12}>
                            <h2 style={{ marginLeft: '3vw' }}>Your information:</h2>
                            <Input placeholder="Your company" className='invoiceInput' />
                            <Input placeholder="Company's address" className='invoiceInput' />
                            <Input placeholder="City, State Zip" className='invoiceInput' />
                            <h2 style={{ marginLeft: '5vw' }}>Bill to:</h2>
                            <Input placeholder="Client's company" className='invoiceInput' />
                            <Input placeholder="Client's address" className='invoiceInput' />
                            <Input placeholder="City, State Zip" className='invoiceInput' />
                        </Col>
                        <Col span={12} className='column2'>
                            <div className='flexRight' ><Avatar ></Avatar></div>
                            <div className='flexRow flexRight'>
                                <h2 style={{ marginRight: '1vw' }}>Invoice #:</h2>
                                <InputNumber min={1} defaultValue={1} onChange={this.onChange} />
                            </div>
                            <RangePicker className='datePicker flexRight' />
                        </Col>
                    </Row>
                </div>
            </div >);
    }
}

export default Invoice;