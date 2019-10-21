import React ,{Component} from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'
class Home extends Component{
    constructor(){
        super()
        this.state={
            option:{
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[],
                    }
                ]
            }
            
        }
    }
    componentWillUpdate(){
        console.log('页面将要更新')
    }
    componentDidUpdate(){
        console.log('页面更新完毕')
    }
    componentDidMount(){
        this.$axios.get('http://yapi.demo.qunar.com/mock/8110/getPieData')
        .then((data)=>{
            console.log(data);
            let option = JSON.parse(JSON.stringify(this.state.option)) 
            option.series[0].data = data.data.data
            console.log(this.state.option)
            this.setState({option})
        })
    }
    render(){
        return(
            <Card className='home-box'>
                这里是管理的首页
                <ReactEcharts option={this.state.option} />
            </Card>
        )
    }
}
export default Home;
