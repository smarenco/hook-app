
export const todoReducer = ( state = [], action ) => {

    
    switch ( action?.type ) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter((todo) => action.payload !== todo.id);
        case 'toggle':
            return state.map((todo) => (action.payload === todo.id) ? { ...todo, done: !todo.done } : todo);
        default:
           return state;
    }
}