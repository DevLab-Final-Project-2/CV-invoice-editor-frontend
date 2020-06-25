import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

class Education extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>Education:</h1>
                <TextArea rows={4} placeholder={'Enter your education'} />
            </React.Fragment>);
    }
}

export default Education;