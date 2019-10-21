import state from './state'
export default(preState = state,action)=>{
    let newData = JSON.parse(JSON.stringify( preState))
    return newData
}