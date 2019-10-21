import React ,{Component} from 'react'
import {Card} from 'antd'
import './token.less'
class User extends Component{
    jump(path){
        console.log(this,path)
    }
    render(){
        return(
            <div className='token-model'>
                <Card title='token失效'>
                    token丢失或者失效，请重新登录
                    <button onClick={this.jump.bind(this)}>去登录</button>
                </Card>
            </div>
        )
    }
}
export default User;
