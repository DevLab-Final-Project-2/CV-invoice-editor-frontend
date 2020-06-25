import React from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import InvoiceItem from './InvoiceItem'



class InvoiceItemList extends React.Component {
    state = { itemList: [] }
    deleteItem = (index) => {
        const copyItemList = Object.assign([], this.state.itemList)
        copyItemList.splice(index, 1)
        this.setState({ itemList: copyItemList })
        console.log('delete button')
    }
    addItem = (item) => {
        const newItemList = [item, ...this.state.itemList]
        this.setState({ itemList: newItemList })
        console.log('add item')
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.itemList.map((item, index) => {
                        console.log(this.state.itemList)
                        return (
                            <InvoiceItem
                                delete={this.deleteItem.bind(this, index)}
                            />
                        )
                    })
                }
                <Button onClick={this.addItem} style={{ marginLeft: '2vw', marginTop: '2vh', backgroundColor: 'rgba(17, 70, 73, 1)', color: 'white' }} icon={<PlusCircleOutlined />}>
                    Add Item
                    </Button>
            </React.Fragment>
        );
    }
}

export default InvoiceItemList;