import React,{Component} from 'react'
import ComponentImport from './component/utils/componentimport'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom';

import Login from './component/login/load'
// const Login = ComponentImport(()=>import('./component/login/login'))
const Admin = ComponentImport(()=>import('./component/admin/admin'))
const Home = ComponentImport(()=>import('./component/home/home'))
const User = ComponentImport(()=>import('./component/user/user'))

// import CustomNav from './component/customNav/index'

class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={()=>{
                        return(
                            <Admin>
                                {/* <CustomNav></CustomNav> */}
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
