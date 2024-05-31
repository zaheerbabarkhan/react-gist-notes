export interface User {
    imageURL: string
    displayName: string
    userId?: string
    username: string
    htmlURL: string
}

export interface AuthState {
    loggedIn: boolean
    userData: User | null,
    dataLoaded: boolean
}