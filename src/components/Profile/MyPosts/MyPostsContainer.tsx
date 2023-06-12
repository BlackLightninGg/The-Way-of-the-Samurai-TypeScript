import {ActionType, addPostAC, changePostTextAC, ProfileDataType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {useContext} from "react";
import {StoreContext} from "../../../redux/storeContext";

// type MyPostsContainerPropsType = {
//     profileData: ProfileDataType
//     dispatch: (action: ActionType) => void
// }
export const MyPostsContainer = ({}) => {

    const profileData = useContext(StoreContext).getState().profileData
    const dispatch = useContext(StoreContext).dispatch

    const dispatchNewTextInput = (newText: string) => {
        dispatch(changePostTextAC(newText))
    }

    const addPost = () => {
        dispatch(addPostAC())
    }

    return <MyPosts profileData={profileData} dispatchNewTextInput={dispatchNewTextInput} addPost={addPost}/>

}