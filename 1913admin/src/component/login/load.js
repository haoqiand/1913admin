import React from 'react'
import Loadable from 'react-loadable'
import './loder.less'

// 过场组件
const loadingComponent=()=>{
    return(
        <div className='loadding'>loading</div>
    )
}
export default Loadable({
    loader:()=>import('./login'),
    loading:loadingComponent
})