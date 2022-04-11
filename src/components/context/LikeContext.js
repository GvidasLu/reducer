import React, {useContext, useReducer} from 'react';
import LikeReducer from '../reducer/LikeReducer';
import {like,dislike} from "../actions/LikeActions";

const initialState = {
    likes: 0
}
const LikeContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(LikeReducer, initialState);
    const setLike = () => {
        dispatch(like())
    }
    const removeLike = () => {
        dispatch(dislike())
    }
    return(
        <LikeContext.Provider value={{
            ...state,
            setLike,
            removeLike
        }}>
            {children}
        </LikeContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(LikeContext)
}

export {LikeContext, AppProvider}