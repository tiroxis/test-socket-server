import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { InternalNamePath } from 'rc-field-form/lib/interface';

interface IAuthFormProps {

}

interface IOnSubmitValues {
  username: string
}

interface IOnFailedValues{
  errorFields: {
    name: InternalNamePath;
    errors: string[];
  }[]
}

export default class AuthForm extends Component<IAuthFormProps>{

  constructor(props: IAuthFormProps) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onFailed = this.onFailed.bind(this);
  }

  private onSubmit(values: IOnSubmitValues){
    console.log(values.username);
  }

  private onFailed(errors: IOnFailedValues) {
    console.log(errors);
  }

  public render() {
    return (
      <Form
        name="basic"
        onFinish={this.onSubmit}
        onFinishFailed={this.onFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
