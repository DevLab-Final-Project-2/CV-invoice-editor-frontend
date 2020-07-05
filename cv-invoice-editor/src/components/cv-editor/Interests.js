import React from 'react';
import { Input } from 'antd';
import { load } from './cv';
const { TextArea } = Input;

class Interests extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>Interests:</h1>
                <TextArea rows={4} placeholder={'Enter your interests'} value={load(0)}/>
            </React.Fragment>);
    }
}


export default Interests;