import React from 'react';
import { Input } from 'antd';
import { Loading3QuartersOutlined } from '@ant-design/icons';
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

/*  export function educationLoad(){
    let cvinput = document.getElementsByClassName("ant-input");

let fields = [];

for(let i=0; i<cvinput.length;i++){
let field = JSON.parse("{}");
field.name = cvinput[i].placeholder.replace(" ", "");
field.value = cvinput[i].value;
if (field.value==""){
    field.value=" ";
}
fields.push(field);
}

return fields;
}  */