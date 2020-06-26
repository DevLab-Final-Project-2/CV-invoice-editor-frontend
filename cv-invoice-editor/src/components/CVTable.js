/* import React from 'react'; */
import { Table } from 'antd';
import { Input } from 'antd';
import React, { Component } from 'react';
/* import { View, Text } from 'react-native'; */

const { Search } = Input;






class CVTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dataSource : [
            {
                key: '1',
                name: 'cv1',
                PDF: 'cv1.pdf',
            },
            {
                key: '2',
                name: 'cv2',
                PDF: 'cv.pdf'
            },
        ]};
      }

  componentWillMount() {
      this.renderMyData();
  }

    renderMyData=()=>{
        let token=localStorage.getItem("jwt").toString();
            let cvid="5eef646733180507a0e4ffc7";
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${token}`);
            myHeaders.append("Content-Type", "application/json");
            
            var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };
            
            fetch("http://78.155.34.239:3000/cvs", requestOptions)
              .then(response => response.json())
              .then((result)=>{ this.setState(
                 {dataSource: result}
              ) /* console.log(result); cvid=result.cv_id; */ })
              .catch(function(error){ console.log('error', error);  });
    }

/*     fetching(){
        let token=localStorage.getItem("jwt").toString();
        let cvid="5eef646733180507a0e4ffc7";
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("http://78.155.34.239:3000/cvs", requestOptions)
          .then(response => response.text())
          .then(function(result){ console.log(result); cvid=result.cv_id; })
          .catch(error => console.log('error', error));
    } */

    render() {

        const dataSource = [
            {
                key: '1',
                name: 'cv1',
                PDF: 'cv1.pdf',
            },
            {
                key: '2',
                name: 'cv2',
                PDF: 'cv.pdf'
            },
        ];

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'PDF',
                dataIndex: 'PDF',
                key: 'PDF',
            }
        ];
        return (
            <React.Fragment>
                <h1>Your CVs:</h1>
                <hr className='hLine'></hr>
                <Search
                    placeholder="Search CVs"
                    onSearch={value => console.log(value)}
                    style={{ width: 200, marginBottom: '1vh' }}
                />
                <Table dataSource={this.state.dataSource} columns={columns} />
            </React.Fragment>
        );
    }
}

export default CVTable;