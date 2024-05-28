export interface User {
    imageURL: string
    displayName: string
    userName?: string
}

export interface AuthState {
    loggedIn: boolean
    userData: User | null,
    dataLoaded: boolean
}