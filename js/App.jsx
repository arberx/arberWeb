// App.jsx
import React from "react";
import moment from 'moment';
import { TimePicker } from 'antd';

export default class App extends React.Component {
  render () {
    return <TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />
  }
}
