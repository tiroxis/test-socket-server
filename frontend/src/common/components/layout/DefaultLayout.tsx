import { Component } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './DefaultLayout.scss';

const { Content, Sider } = Layout;



export class DefaultLayout extends Component {
  public render(){
    return (
      <>
        <Layout className="page-layout">
          <Sider width={200} className="page-sidebar">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
            >
              <Menu.Item key="1"><UserOutlined /> Users</Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content className="page-content">
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </>
    )
  }
}
