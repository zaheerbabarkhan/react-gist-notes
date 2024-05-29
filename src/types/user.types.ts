export interface User {
    imageURL: string
    displayName: string
    userId?: string
}

export interface AuthState {
    loggedIn: boolean
    userData: User | null,
    dataLoaded: boolean
}