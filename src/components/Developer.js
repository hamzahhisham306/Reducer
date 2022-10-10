export const actionType = {
    ADD_NEW_DEV: 'ADD_NEW_DEV',
    DELETE_DEV:'DELETE_DEV'
}


export const Developer = (state, action) => {
    switch (action.type) {
        case actionType.ADD_NEW_DEV:
            console.log(action.payload);
            return [...state, {
                name: action.payload.state.name,
                lang: action.payload.state.lang,
                tech: action.payload.state.tech,
                foodFav: action.payload.state.foodFav,
                drinkFav: action.payload.state.drinkFav,
                id: state.length+1,
            }];
        case actionType.DELETE_DEV:
            console.log("ID",action.payload)
            return state.filter((data)=>{
                return data.id!==action.payload
            })
        default: return state;
    }
}

