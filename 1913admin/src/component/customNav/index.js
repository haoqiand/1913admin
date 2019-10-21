import React ,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Menu} from 'antd';
const { SubMenu } = Menu;
let navDate = [
    {name:'首页',path:'/admin/home'},
    {name:'设置',path:'/admin/setting'},
    {name:'用户管理',
        path:'/user',
        childen:[
            {name:'用户列表',path:'/user/list'},
            {name:'用户删除',path:'/user/del'}
            ]
    },
]
class CustomNav extends Component{
    jump=(path)=>{
        // console.log(path);
        // console.log(this);
        this.props.history.push(path)
    }
    renderItem=(data)=>{
        return data.map((item,index)=>{
            if(item.childen){
                return(
                    <SubMenu key={index} title={item.name}>
                        {this.renderItem(item.childen)}
                    </SubMenu>
                )
            }else{
                return <Menu.Item onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
            }
        })
    }
    render(){
        console.log(this,'自定义导航')
        return(
            <div className='login'>
                <Menu style={{ width: 256 }} mode="vertical">
                    {this.renderItem(navDate)}
                    {/* <Menu.Item >首页</Menu.Item>
                    <Menu.Item >设置</Menu.Item>
                    <SubMenu  title={用户管理}>
                        <Menu.Item key="3">用户列表</Menu.Item>
                        <Menu.Item key="4">用户删除</Menu.Item>
                        <SubMenu key="sub2" title={权限管理}>
                            <Menu.Item key="3">权限列表</Menu.Item>
                            <Menu.Item key="4">权限删除</Menu.Item>
                        </SubMenu>
                    </SubMenu> */}
                    {/* {navDate.map((item,index)=>{
                        if(item.childen){
                            // 有二级
                            return(
                                <SubMenu>

                                </SubMenu>
                            )
                        }else{
                            return(
                                <Menu.Item >{item.name}</Menu.Item>
                            )
                        }
                    })} */}
                </Menu>
            </div>
        )
    }
}
export default withRouter(CustomNav);
