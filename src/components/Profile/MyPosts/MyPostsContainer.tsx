import { useDispatch, useSelector } from "react-redux";
import { addPostAC, changePostTextAC, ProfileDataType } from "../../../redux/profileReducer";
import { ReducersType } from "../../../redux/reduxStore";
import { MyPosts } from "./MyPosts";


export const MyPostsContainer = () => {

    const profileData = useSelector<ReducersType, ProfileDataType>(state => state.profileData)
    const dispatch = useDispatch()
    const dispatchNewTextInput = (newText: string) => {
        dispatch(changePostTextAC(newText))
    }

    const addPost = () => {
        dispatch(addPostAC())
    }

    return <MyPosts profileData={profileData} dispatchNewTextInput={dispatchNewTextInput} addPost={addPost} />

}