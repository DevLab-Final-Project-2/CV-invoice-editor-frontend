import React from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import PersonalInfo from './personalInfo'
import WorkXp from './WorkXp'


class CV extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <React.Fragment>
                <div className='gridColor'>
                    <div className='cv'>
                        <h1>CV</h1>
                        <hr className='hLine' />
                        <Row gutter={[8, 8]}>
                            <Col span={8} style={{ display: 'flex', flexDirection: 'column' }}>
                                <Button style={{ width: '70%', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white', marginBottom: '10px' }} >
                                    Personal Info
                                    </Button>

                                <Button style={{ width: '70%', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white', marginBottom: '10px' }} >
                                    Work experience
                                    </Button>
                                <Button style={{ width: '70%', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white', marginBottom: '10px' }} >
                                    Qualifications
                            </Button>
                                <Button style={{ width: '70%', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white', marginBottom: '10px' }} >
                                    Education
                            </Button>
                                <Button style={{ width: '70%', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white', marginBottom: '10px' }} >
                                    Interests
                            </Button>
                            </Col>
                            <Col span={16} className='column2'>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>);
    }
}

export default CV;