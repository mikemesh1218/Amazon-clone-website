import { createContext, useContext, useReducer} from 'react';
const StateContext = createContext();
export default StateContext;
export const StateProvider = ({reducer, initialState, children})=> (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// To use this inside a component
export const useStatevalue = () => useContext(StateContext) ;

