/*
* 入口JS
* */
import React from 'react'
import ReactDOM from 'react-dom'

import {HashRouter,Switch,Route}from 'react-router-dom'

import Login from './containers/login/login'
import Register from './containers/register/register'
import Main from './containers/main/main'

//渲染组件
ReactDOM.render((
  <HashRouter>
    <Switch>
      <route path='/login' component={Login}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'))