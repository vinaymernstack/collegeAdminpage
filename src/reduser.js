const initialstate = {
    
    studentlodindata : [{regno:"123456"}]
}

const reduser = (state = initialstate,action)=>{

    if(action.type=="studentlogin"){
        return{
            ...state,
            studentlodindata : action.value
            
        }
    }
    return state
}

export default reduser;