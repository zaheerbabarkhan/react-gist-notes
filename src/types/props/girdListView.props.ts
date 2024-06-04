import { Gist } from "../gist.types"

export interface GridListViewProps{
    gists: Gist[]
    currentPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}