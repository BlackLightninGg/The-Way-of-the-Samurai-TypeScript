const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";

export const profileReducer = (state: any, action: any) => {

  switch (action.type) {
    case ADD_POST:
      if (state.textPost.trim() !== "") {
        state.postData = [
          {
            id: state.postData.length + 1,
            message: state.textPost,
            likeCounter: 0,
          },
          ...state.postData,
        ];

        state.textPost = "";

      }
      
      return state

    case CHANGE_POST_TEXT:
      state.textPost = action.payload.newText;


      return state;

    default:
      return state;
  }
};

export const addPostAC = () => ({ type: ADD_POST } as const);

export const changePostTextAC = (newText: string) =>
({
  type: CHANGE_POST_TEXT,
  payload: {
    newText,
  },
} as const);
