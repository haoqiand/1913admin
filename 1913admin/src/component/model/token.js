import React ,{Component,Fragment} from 'react'
import {Card} from 'antd'
import {connect} from 'react-redux'
import './token.less'
// import state from '../../store/state'
class TokenModel extends Component{
    jump(path){
        console.log(this,path)
    }
    render(){
        console.log(this,'model')
        let {tokenmodel} = this.props
        return(
            <Fragment>
                {!tokenmodel||
                <div className='token-model'>
                    <Card title='token失效'>
                        token丢失或者失效，请重新登录
                        <button onClick={this.jump.bind(this)}>去登录</button>
                    </Card>
                </div>}
            </Fragment>
        )
    }
}
export default connect(state=>state)(TokenModel);
