import AvatarFox from "../imgs/Fox.png";
import AvatarBear from "../imgs/Bear.png";
import AvatarOwl from "../imgs/Owl.png";
import AvatarWolf from "../imgs/Wolf.png";

const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";

export type MessagesReducerActionType =
  | ChangeMessageTextActionType
  | AddMessageActionType;

export type MessagesDataType = {
  messagesUsersData: UsersDataType[];
  messagesTextData: TextDataType[];
  messageText: string;
};

export type UsersDataType = {
  id: number;
  animalName: string;
  photoAvatar: string;
};

export type TextDataType = {
  id: number;
  messageText: string;
};

const initialState: MessagesDataType = {
  messagesUsersData: [
    { id: 1, animalName: "Fox", photoAvatar: AvatarFox },
    { id: 2, animalName: "Bear", photoAvatar: AvatarBear },
    { id: 3, animalName: "Owl", photoAvatar: AvatarOwl },
    { id: 4, animalName: "Wolf", photoAvatar: AvatarWolf },
  ],

  messagesTextData: [
    { id: 1, messageText: "Frrr fr fr" },
    { id: 2, messageText: "Raaaaa!" },
    { id: 3, messageText: "Wo! Wooo!" },
    { id: 4, messageText: "Woyyyyy! woyyyy!" },
  ],

  messageText: "",
};

export const messagesReducer = (
  state = initialState,
  action: MessagesReducerActionType
): MessagesDataType => {
  switch (action.type) {
    case CHANGE_MESSAGE_TEXT:
      return { ...state, messageText: action.payload.newText };

    case ADD_MESSAGE:
      if (state.messageText.trim() !== "") {
        return {
          ...state,
          messagesTextData: [
            ...state.messagesTextData,
            {
              id: state.messagesTextData.length + 1,
              messageText: state.messageText,
            },
          ],
          messageText: "",
        };
      }

      return state;

    default:
      return state;
  }
};

export type AddMessageActionType = ReturnType<typeof addMessageAC>;

export type ChangeMessageTextActionType = ReturnType<
  typeof changeMessageTextAC
>;

export const addMessageAC = () => ({ type: ADD_MESSAGE } as const);

export const changeMessageTextAC = (newText: string) =>
  ({
    type: CHANGE_MESSAGE_TEXT,
    payload: {
      newText,
    },
  } as const);
