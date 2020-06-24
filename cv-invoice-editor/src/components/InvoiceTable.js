import React from 'react';
import { Table } from 'antd';
import { Input } from 'antd';

const { Search } = Input;

class InvoiceTable extends React.Component {
    state = {}

    render() {
        const dataSource = [
            {
                key: '1',
                name: 'invoice1',
                PDF: 'invoice1.pdf',
            },
            {
                key: '2',
                name: 'invoice2',
                PDF: 'invoice2.pdf'
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
                <h1>Your Invoices:</h1>
                <hr className='hLine'></hr>
                <Search
                    placeholder="Search invoices"
                    onSearch={value => console.log(value)}
                    style={{ width: 200, marginBottom: '1vh' }}
                />
                <Table dataSource={dataSource} columns={columns} />
            </React.Fragment>
        );
    }
}

export default InvoiceTable;