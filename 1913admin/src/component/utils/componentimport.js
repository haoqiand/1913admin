import React from 'react'
import Loadable from 'react-loadable'

// 过场组件
const loadingComponent=()=>{
    return(
        <div>loading</div>
    )
}
export default (loader,loading=loadingComponent)=>{
    return Loadable({
        loader,
        loading
    })
}