export function allcontactsReducer(state = [
    {
        id: 0,
        name: "Vivan sharma",
        mobile: "9999999999",
        email: "vivan@gmail.com",
        isFav: true
    },
    {
        id: 1,
        name: " biswas biswal",
        mobile: "9999998999",
        email: "rohit@gmail.com",
        isFav: false
    },
    {
        id: 2,
        name: "Yogesh mishra",
        mobile: "9999988999",
        email: "yuvi@gmail.com",
        isFav: false
    },
], action) {
    switch(action.type) {
        case 'NEW_CONTACT':
            return [...state, {...action.payload, isFav: false, id: (state? state[state.length-1].id+1: 0)}]
        case 'TOGGLE_FAV':
            let copyState = [...state]
            state.forEach((element, i) => {
                if(action.payload === element.id) {
                    copyState[i].isFav = !state[i].isFav
                }
            })
            return copyState
        default:
            return state
    }
}