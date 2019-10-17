import React,{Component} from 'react'
import Login from './component/login/login'
import Admin from './component/admin/admin'
import Home from './component/home/home'
import User from './component/user/user'

import CustomNav from './component/customNav/index'

import {HashRouter,Switch,Redirect,Route} from 'react-router-dom';
class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
                <CustomNav></CustomNav>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={()=>{
                        return(
                            <Admin>
                                <Route path='/admin/home' component={Home}/>
                                <Route path='/admin/user' component={User}/>
                            </Admin>
                        )
                    }} ></Route>

                </Switch>
            </HashRouter>
        )
    }
}
export default RootRouter
