import React from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import PersonalInfo from './personalInfo'
import WorkXp from './WorkXp'
import Qualif from './Qualif'
import Education from './Education'
import Interests from './Interests'
import { UploadOutlined } from '@ant-design/icons'



class CV extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showHidePersonalInfo: true,
            showHideWorkXp: false,
            showHideQualif: false,
            showHideEducation: false,
            showHideInterests: false,
        };
        this.hideComponent = this.hideComponent.bind(this);
    }
    hideComponent(name) {
        switch (name) {
            case "showHidePersonalInfo":
                this.setState({ showHidePersonalInfo: true });
                this.setState({ showHideWorkXp: false });
                this.setState({ showHideQualif: false });
                this.setState({ showHideEducation: false });
                break;
            case "showHideWorkXp":
                this.setState({ showHideWorkXp: true });
                this.setState({ showHidePersonalInfo: false });
                this.setState({ showHideQualif: false });
                this.setState({ showHideEducation: false });
                this.setState({ showHideInterests: false });

                break;
            case "showHideQualif":
                this.setState({ showHideQualif: true });
                this.setState({ showHidePersonalInfo: false });
                this.setState({ showHideWorkXp: false });
                this.setState({ showHideEducation: false });
                this.setState({ showHideInterests: false });

                break;
            case "showHideEducation":
                this.setState({ showHideEducation: true });
                this.setState({ showHideWorkXp: false });
                this.setState({ showHideQualif: false });
                this.setState({ showHidePersonalInfo: false });
                this.setState({ showHideInterests: false });
                break;
            case "showHideInterests":
                this.setState({ showHideInterests: true });
                this.setState({ showHideWorkXp: false });
                this.setState({ showHideQualif: false });
                this.setState({ showHidePersonalInfo: false });
                this.setState({ showHideEducation: false });
                break;
            default:
                this.setState({ showHidePersonalInfo: true });

        }
    }


    render() {
        const { showHidePersonalInfo, showHideWorkXp, showHideQualif, showHideEducation, showHideInterests } = this.state;
        return (
            <React.Fragment>
                <div className='gridColor'>
                    <div className='cv'>
                        <h1>CV</h1>
                        <hr className='hLine' />
                        <Row gutter={[8, 8]}>
                            <Col span={8} style={{ display: 'flex', flexDirection: 'column' }}>
                                <Button style={{ width: '70%', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white', marginBottom: '10px' }}
                                    onClick={() => this.hideComponent("showHidePersonalInfo")}>
                                    Personal Info
                                    </Button>

                                <Button style={{ width: '70%', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white', marginBottom: '10px' }}
                                    onClick={() => this.hideComponent("showHideWorkXp")}>
                                    Work experience
                                    </Button>
                                <Button style={{ width: '70%', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white', marginBottom: '10px' }}
                                    onClick={() => this.hideComponent("showHideQualif")}>
                                    Qualifications
                            </Button>
                                <Button style={{ width: '70%', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white', marginBottom: '10px' }}
                                    onClick={() => this.hideComponent("showHideEducation")}>
                                    Education
                            </Button>
                                <Button style={{ width: '70%', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white', marginBottom: '10px' }}
                                    onClick={() => this.hideComponent("showHideInterests")}>
                                    Interests
                            </Button>
                                <Button style={{ width: '70%', backgroundColor: 'white', color: 'rgba(17, 70, 73, 1)', borderRadius: '20px' }} icon={<UploadOutlined />}>
                                    Submit CV
                            </Button>
                            </Col>
                            <Col span={16} className='column2'>

                                {(showHidePersonalInfo && <PersonalInfo />) || (showHideWorkXp && <WorkXp />) || (showHideQualif && <Qualif />)
                                    || (showHideEducation && <Education />) || (showHideInterests && <Interests />)}


                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>);
    }
}

export default CV;