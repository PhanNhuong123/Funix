import { FALSE, TOGGLE, TRUE } from "../contants/action-type"







export const toggle = ( state = false, action) =>{
    switch (action.type) {
        case TRUE :
            
            
            return true
        case FALSE : 
           
            return false
        default:
            return state
    }
}