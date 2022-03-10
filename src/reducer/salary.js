import * as ActionType from "../contants/action-type"

const initialState = {
    isLoading: false,
    errMess:null,
    salary:[]
}

export const salaryReducer = ( state = initialState, action ) =>{
        switch (action.type){
            case ActionType.ADD_SALARY :
                return{...state, isLoading: false, salary : action.payload}
            case ActionType.SALARY_LOADING :
                return{...state, isLoading: true, salary : []}
            case ActionType.SALARY_FAILED :
                return{...state, isLoading: false, errMess: action.payload}

            default : 
            return state
        }
}