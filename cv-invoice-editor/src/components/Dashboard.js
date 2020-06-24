import React from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    AccountBookOutlined
} from '@ant-design/icons';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import InvoiceTable from './InvoiceTable';
import CVTable from './CVTable';
import DefaultDash from './DefaultDash';

const { Header, Content, Sider } = Layout;


class Dashboard extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider style={{ backgroundColor: 'rgb(45, 137, 139)' }} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ backgroundColor: 'rgb(45, 137, 139)' }}>
                            <Menu.Item key="1" icon={<AccountBookOutlined />}>
                                <Link to='/invoices'>Invoices</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<UserOutlined />}>
                                <Link to='/cvs'>CVs</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                                <Switch>
                                    <Route exact path='/dashboard' component={DefaultDash} />
                                    <Route exact path='/invoices' component={InvoiceTable} />
                                    <Route exact path='/cvs' component={CVTable} />
                                </Switch>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default Dashboard;