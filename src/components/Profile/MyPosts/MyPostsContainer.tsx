import {ActionType, addPostAC, changePostTextAC, ProfileDataType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerPropsType = {
    profileData: ProfileDataType
    dispatch: (action: ActionType) => void
}
export const MyPostsContainer = ({profileData, dispatch}: MyPostsContainerPropsType) => {

    const dispatchNewTextInput = (newText: string) => {
        dispatch(changePostTextAC(newText))
    }

    const addPost = () => {
        dispatch(addPostAC())
    }

    return <MyPosts profileData={profileData} dispatchNewTextInput={dispatchNewTextInput} addPost={addPost}/>

}