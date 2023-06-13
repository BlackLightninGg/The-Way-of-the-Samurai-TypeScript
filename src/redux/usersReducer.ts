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
    status: string
    location: LocationUserType
    follow: boolean
}



const FOLLOW = "FOLLOW"
const SET_USERS = "SET-USERS"

const initialState: UsersType = {
    users: [
        { id: 1, fullName: "Artur", status: "I love work!", location: { city: "Astana", country: "Kazakhstan" }, follow: true },
        { id: 2, fullName: "Matvey", status: "My life my rules", location: { city: "Tbilisi", country: "Georgia" }, follow: false },
        { id: 3, fullName: "Maria", status: "Live without regrets", location: { city: "Altai", country: "Kazakhstan" }, follow: true },
    ]
}


type UsersAtionType = FollowACType | SetUsersACACType


export const usersReducer = (state = initialState, action: UsersAtionType) => {
    switch (action.type) {
        case FOLLOW:
            return state.users.map(u => u.id === action.payload.userId ? { ...u, follow: !u.follow } : u);

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