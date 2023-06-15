import { UserType, UsersType } from "../../redux/usersReducer"
import s from "./Users.module.css"
import AvatarUnknownUser from "../../imgs//UnknownUser.png";
import { useEffect } from "react";

export type UsersPropsType = {
    usersData: UsersType
    dispatchFollow: (userId: number) => void
    dispatchNewUsers: (users: UserType[])=> void
}

export const Users = ({ usersData, dispatchFollow, dispatchNewUsers }: UsersPropsType) => {

    useEffect(()=>{dispatchNewUsers( [{ id: 1, fullName: "Artur", userAvatar: AvatarUnknownUser, status: "I love work!", location: { city: "Astana", country: "Kazakhstan" }, follow: true },
    { id: 2, fullName: "Matvey", userAvatar: AvatarUnknownUser, status: "My life my rules", location: { city: "Tbilisi", country: "Georgia" }, follow: false },
    { id: 3, fullName: "Maria", userAvatar: AvatarUnknownUser, status: "Live without regrets", location: { city: "Altai", country: "Kazakhstan" }, follow: true },])},[])

     
     
    return <div>
        {usersData.users.map(u => {
            const onClickFollow = () => {
                dispatchFollow(u.id)
            }
            return (<div key={u.id}>
                <span>
                    <div>
                        <img className={s.userAvatar} src={u.userAvatar} alt="#" />
                    </div>
                    <div>
                        <button onClick={onClickFollow}>{u.follow ? "Follow" : "Unfollow"}</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
    
            </div>)}
        )
        }
        
    </div>
}