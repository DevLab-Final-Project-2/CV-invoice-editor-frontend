import React from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import PersonalInfo from './personalInfo'
import WorkXp from './WorkXp'
import Qualif from './Qualif'
import Education from './Education'
import Interests from './Interests'
import { UploadOutlined } from '@ant-design/icons'
import { Input } from 'antd';



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

    submitCV(){
//fetchˇ
let token=localStorage.getItem("jwt").toString();
let cvid="5eef646733180507a0e4ffc7";
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"name":"za posao"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://78.155.34.239:3000/create_cv", requestOptions)
  .then(response => response.text())
  .then(function(result){ console.log(result); cvid=result.cv_id; })
  .catch(error => console.log('error', error));


//-------------------------

var myHeaders2 = new Headers();
myHeaders2.append("Authorization", `Bearer ${token}`);
myHeaders2.append("Content-Type", "application/json");

let cvinput = document.getElementsByClassName("cvInput");

var raw2 = JSON.stringify({"cv_id":cvid,"fields":[{"name":cvinput[0].value,"value":"rger"},{"name":"rggr","value":"logate"}]});

var requestOptions2 = {
  method: 'POST',
  headers: myHeaders2,
  body: raw2,
  redirect: 'follow'
};

fetch("http://78.155.34.239:3000/save_cv_fields", requestOptions2)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//fetch^
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
                                <Input placeholder="File name" style={{ width: '70%', marginBottom: '1vh', marginTop: '3vh' }} />
                                <Button onClick={() => this.submitCV()} style={{ width: '70%', backgroundColor: 'white', color: 'rgba(17, 70, 73, 1)', borderRadius: '20px' }} icon={<UploadOutlined />}>
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