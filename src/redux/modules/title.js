const initialState = ''
const TITLE = "TITLE"

//액션크리에이터
export const addTitle = (title) => {
    return {
        type: TITLE,
        payload: title
    }
}

// 리듀서
const title = (state = initialState, action) => {
    switch (action.type) {
        case "TITLE":
            return action.payload

        default:
            return state;
    }
};

export default title;
