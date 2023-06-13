import { UsersType } from "../../redux/usersReducer"

export type UsersPropsType = {
    usersData: UsersType
}

export const Users = ({ usersData }: UsersPropsType) => {
    return <div>
        {usersData.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src="#" alt="#" />
                </div>
                <div>
                    <button>Follow</button>
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
    </div>
}