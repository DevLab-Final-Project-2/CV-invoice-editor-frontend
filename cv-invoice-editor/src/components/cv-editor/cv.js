import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from 'antd';
import { Row, Col } from 'antd';
import PersonalInfo from './personalInfo'
import WorkXp from './WorkXp'

class CV extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className='gridColor'>
                    <div className='cv'>
                        <h1>CV</h1>
                        <hr className='hLine' />
                        <Router>
                            <Row gutter={[8, 8]}>
                                <Col span={8} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Button style={{ width: '70%', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white', marginBottom: '10px' }} >
                                        <Link to='/personal-info'> Personal Info</Link>
                                    </Button>
                                    <Button style={{ width: '70%', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white', marginBottom: '10px' }} >
                                        <Link to='/work-experience'>Work experience</Link>
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
                                    <Switch>
                                        <Route path='/personal-info' component={PersonalInfo}></Route>
                                        <Route path='/work-experience' component={WorkXp}></Route>
                                    </Switch>
                                </Col>
                            </Row>
                        </Router>
                    </div>
                </div>
            </React.Fragment>);
    }
}

export default CV;