import  {ADD_ROBOTS , CLICK_ROBOTS} from './constants';

export const setAddRobots = (text) => (
    {
        type: ADD_ROBOTS ,
        payload: text
    }
)

export const setClickRobots = (text) => (
    {
        type : CLICK_ROBOTS,
        payload : text
    }
)