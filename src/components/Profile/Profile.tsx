import { ActionType, ProfileDataType } from "../../redux/state";
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInformation } from './ProfileInformation/ProfileInformation';

type ProfilePropsType = {
    profileData: ProfileDataType
    dispatch: (action: ActionType) => void
}
export const Profile = ({ profileData, dispatch }: ProfilePropsType) => {
    return (
        <div>
            <ProfileInformation />
            <MyPosts profileData={profileData} dispatch={dispatch} />
        </div>
    )
}