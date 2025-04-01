import taskReducer from "./taskSlice"
import alertReducer from "./alertSlice"
import authRedcuer from "./authSlice"
import { combineReducers } from "@reduxjs/toolkit"

export default combineReducers({
    auth:  authRedcuer,
    tasks: taskReducer,
    alert:alertReducer
})