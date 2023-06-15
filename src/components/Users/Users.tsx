import { UsersType } from "../../redux/usersReducer"
import s from "./Users.module.css"

export type UsersPropsType = {
    usersData: UsersType
    dispatchFollow: (userId: number) => void
}

export const Users = ({ usersData, dispatchFollow }: UsersPropsType) => {

    // const onClickFollow = () => {
    //     dispatchFollow()
    // }

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