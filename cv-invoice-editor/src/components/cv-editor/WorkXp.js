import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

class WorkXp extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>Work experience:</h1>
                <TextArea rows={4} placeholder={'Enter your work experience'} />
            </React.Fragment>);
    }
}

export default WorkXp;