import * as types from "../actions/actionType"

const initialState ={
    name:"nits",
   Drawer:false,
   hireus:false
}



export const userReducer = (state=initialState ,action) =>{

    switch(action.type){
      case types.GET_DRAWER:
      return {
        ...state,
        Drawer:!state.Drawer
      }
      case types.GET_HIREUS:
      return {
        ...state,
        hireus:!state.hireus
      }
        default:
            return state;
    }

}
