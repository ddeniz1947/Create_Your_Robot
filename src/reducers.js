import { ADD_ROBOTS , CLICK_ROBOTS} from './constants'; 

const initialArray = {
    deneme: ' '
}

// let initialClick = {
//     arrayClick: []
// }

const İnitialList = {
    arr : []
}

export const addRobotsImgReducer = (state = initialArray, action) => {
    switch (action.type) {
        case ADD_ROBOTS:
            return Object.assign({}, state, { deneme: action.payload });
        default:
            return state;
    }
}

export const clickRobotsReducer = (state = İnitialList, action) => {
    switch (action.type) {
        case CLICK_ROBOTS:
            return { 
                ...state,
                arr: [...state.arr, action.payload]
            }
        default:
            return state;
    }
}