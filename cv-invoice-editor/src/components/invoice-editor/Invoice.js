import React from 'react';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import Avatar from '../Avatar'
import { InputNumber } from 'antd';
import { DatePicker } from 'antd';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons'
import InvoiceItemList from './InvoiceItemList'
const { TextArea } = Input;


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
                    <h1>INVOICE</h1>
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
                            <div className='flexRight' ><Avatar></Avatar></div>
                            <div className='flexRow flexRight'>
                                <h2 style={{ marginRight: '1vw' }}>Invoice #:</h2>
                                <InputNumber min={1} defaultValue={1} onChange={this.onChange} />
                            </div>
                            <RangePicker className='datePicker flexRight' />
                        </Col>
                    </Row>
                    <hr className='hLine' />
                    <Row className='items'>
                        <Col span={15}><h3 style={{ color: 'white', marginLeft: '3vw' }}>Item</h3></Col>
                        <Col span={3} ><h3 className='oneItem'>Quantity</h3></Col>
                        <Col span={3}><h3 className='oneItem'>Rate</h3></Col>
                        <Col span={3}><h3 className='oneItem'>Amount</h3></Col>
                    </Row>
                    <InvoiceItemList ></InvoiceItemList>


                    <Row gutter={[8, 8]} style={{ marginTop: '5vh' }}>
                        <Col span={12} style={{ display: 'flex', flexDirection: 'column' }}>
                            <TextArea rows={4} style={{ marginLeft: '2vw', marginBottom: '3vh' }} placeholder={'Notes'} />
                            <TextArea rows={4} style={{ marginLeft: '2vw', marginBottom: '3vh' }} placeholder={'Terms & Conditions'} />
                            <Input placeholder="File name" style={{ width: '50%', marginBottom: '1vh', marginTop: '3vh' }} />
                            <Button style={{ width: '50%', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white' }} icon={<UploadOutlined />}>
                                Submit Invoice
                    </Button>
                        </Col>
                        <Col span={12} className="column3">
                            <div className='flexRow flexRight'>
                                <h2 style={{ marginRight: '1vw' }}>Sub Total:</h2>
                                <InputNumber min={0} defaultValue={0} onChange={this.onChange} />
                            </div>
                            <div className='flexRow flexRight'>
                                <h2 style={{ marginRight: '1vw' }}>Sales tax:</h2>
                                <InputNumber min={0} defaultValue={0} onChange={this.onChange} />
                            </div>
                            <div className='flexRow flexRight'>
                                <h2 style={{ marginRight: '1vw' }}>Total:</h2>
                                <InputNumber min={0} defaultValue={0} onChange={this.onChange} />
                            </div>

                        </Col>
                    </Row>
                </div>
            </div >
        );
    }
}

export default Invoice;