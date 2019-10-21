import state from './state'
export default(preState = state,action)=>{
    let newData = JSON.parse(JSON.stringify( preState))
    let {type,params} = action
    switch(type){
        case 'CHANGE_TOKEN_MODEL':
            newData.tokenmodel = params
            break;
        default:
            break;
    }
    return newData
}