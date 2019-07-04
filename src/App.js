import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';

import './App.css';
import Login from './components/login/NormalLoginForm';
import ButtonTest from './components/test/ButtonTest';
import PropTest from './components/test/PropTest';
import StatePropTest2 from './components/test/StatePropTest2';
import TodoApp from './components/todo/TodoApp';
import TodoApp1 from './components/todo/TodoApp1';
import TodoAntD2 from './components/todo/TodoAntD2';
import TodoAntD3 from './components/todo/TodoAntD3';
import RegistrationForm from './components/todo/RegistrationForm';
import CollectionsPage from './components/todo/CollectionsPage';
import DynamicFieldSet from './components/todo/DynamicFieldSet';
import FormCustomizedValidation from './components/todo/FormCustomizedValidation';
import Complete from './components/todo/AutoComplete';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <FormCustomizedValidation/>    
    );
  }
}

export default App;