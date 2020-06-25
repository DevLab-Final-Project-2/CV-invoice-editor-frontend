import React from 'react';
import { Table } from 'antd';
import { Input } from 'antd';

const { Search } = Input;

class CVTable extends React.Component {
    state = {}

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
                <Table dataSource={dataSource} columns={columns} />
            </React.Fragment>
        );
    }
}

export default CVTable;