import React, { Component } from 'react';
import './Application.scss';
import { DefaultLayout } from '../layout/DefaultLayout';
import AuthForm from '../../../site/components/AuthForm/AuthForm';

export class Application extends Component {
  public render() {
    return (
      <DefaultLayout>
        <AuthForm />
      </DefaultLayout>
    );
  }
}

export default Application;
