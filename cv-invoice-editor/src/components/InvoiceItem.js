import React from 'react';
import { Button, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;

class nvoiceten extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Row style={{ marginTop: '5vh' }}>
                    <Col span={15} className='itemDes'>
                        <Tooltip title="delete">
                            <Button shape="circle" icon={<DeleteOutlined />} />
                        </Tooltip>
                        <TextArea rows={4} placeholder={'Enter item name/description'} />
                    </Col>
                    <Col span={3} className='oneItem'><InputNumber min={1} defaultValue={1} onChange={this.onChange} /></Col>
                    <Col span={3} className='oneItem'>
                        <InputNumber
                            min={0}
                            defaultValue={0}
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            onChange={this.onChange}
                        />
                    </Col>
                    <Col span={3} className='oneItem'>
                        <InputNumber
                            min={0}
                            defaultValue={0}
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default nvoiceten;