import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

class Qualif extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>Qualifications:</h1>
                <TextArea rows={4} placeholder={'Enter your qualifications'} />
            </React.Fragment>);
    }
}

export default Qualif;