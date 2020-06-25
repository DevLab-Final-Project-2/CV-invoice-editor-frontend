import React from 'react';
import { Input } from 'antd';
import Avatar from '../Avatar'
import { Row, Col } from 'antd';


class PersonalInfo extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>Personal Information:</h1>
                <Row gutter={[8, 8]}>
                    <Col span={14} style={{ display: 'flex', flexDirection: 'column' }}>
                        <Input placeholder="First name" className='cvInput' />
                        <Input placeholder="Last name" className='cvInput' />
                        <Input placeholder="Email" className='cvInput' />
                        <Input placeholder="Phone number" className='cvInput' />
                        <Input placeholder="Address" className='cvInput' />
                    </Col>
                    <Col span={10} className='column2'>
                        <Avatar />
                    </Col>
                </Row>
            </React.Fragment>);
    }
}

export default PersonalInfo;