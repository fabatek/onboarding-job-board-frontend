import { Page, PAGECURRENT } from '../types/pageType'

const pageReducer = (state:number = 1 , action:Page)=>{
    switch(action.type){
        case PAGECURRENT:
            return action.payload
        default:
            return state
    }   
}
export default pageReducer