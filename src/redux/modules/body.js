const initialState = ''
const BODY = "BODY"

//액션크리에이터
export const addBody = (body) => {
    return {
        type: BODY,
        payload: body
    }
}

// 리듀서
const body = (state = initialState, action) => {
    switch (action.type) {
        case "BODY":
            return action.payload

        default:
            return state;
    }
};

export default body;
