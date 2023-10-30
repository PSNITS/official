import * as types from "./actionType"

const getDrawer = () => ({
    type:types.GET_DRAWER,
})

const getHireUs = () => ({
    type:types.GET_HIREUS,
})





export const drawerFun = () =>{
    return function(dispatch){
        dispatch(getDrawer())
    }
}


export const hireUsFun = () =>{
    return function(dispatch){
        dispatch(getHireUs())
    }
}