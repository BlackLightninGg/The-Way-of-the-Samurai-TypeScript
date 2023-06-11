import {ProfileInformation} from './ProfileInformation/ProfileInformation';
import {ActionType, ProfileDataType} from "../../redux/profileReducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profileData: ProfileDataType
    dispatch: (action: ActionType) => void
}
export const Profile = ({profileData, dispatch}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInformation/>
            <MyPostsContainer profileData={profileData} dispatch={dispatch}/>
        </div>
    )
}