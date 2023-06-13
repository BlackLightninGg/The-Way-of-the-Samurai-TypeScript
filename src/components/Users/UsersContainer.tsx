import { useDispatch } from "react-redux"
import { Users } from "./Users"
import { useSelector } from "react-redux"
import { ReducersType } from "../../redux/reduxStore"
import { UserType, UsersType, followAC, setUsersAC } from "../../redux/usersReducer"

export const UsersContainer = () => {

    const usersData = useSelector<ReducersType, UsersType>(state => state.usersData)
    const dispatch = useDispatch()
    
        const dispatchFollow = (userId: number) => {
            dispatch(followAC(userId))
        }
        const dispatchNewUsers = (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    

    return <Users usersData={usersData}/>
}