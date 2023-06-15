import AvatarUnknownUser from "../imgs//UnknownUser.png";


export type UsersType = {
    users: UserType[]
}

export type LocationUserType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    fullName: string
    userAvatar: string
    status: string
    location: LocationUserType
    follow: boolean
}



const FOLLOW = "FOLLOW"
const SET_USERS = "SET-USERS"

const initialState: UsersType = {
    users: [
        
    ]
}


type UsersAtionType = FollowACType | SetUsersACACType


export const usersReducer = (state = initialState, action: UsersAtionType): UsersType => {
    switch (action.type) {
        case FOLLOW:
            return { ...state, users: state.users.map(u => u.id === action.payload.userId ? { ...u, follow: !u.follow } : u) }

        case SET_USERS:
            
            return { ...state, users: [...state.users, ...action.payload.users] }

        default:
            return state
    }
}

export type FollowACType = ReturnType<typeof followAC>
export type SetUsersACACType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({
    type: FOLLOW,
    payload: {
        userId
    }
} as const)

export const setUsersAC = (users: UserType[]) => ({
    type: SET_USERS,
    payload: {
        users
    }
} as const)