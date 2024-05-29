interface FileData {
    filename: string
    raw_url: string
}
interface Owner {
    login: string
    avatar_url: string
}
export interface Gist {
    title: string
    id: string
    owner: Owner
    files: {
        [key: string] : FileData
    }
    created_at: Date
    description: string
    updated_at: Date
}