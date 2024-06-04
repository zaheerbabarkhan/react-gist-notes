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

export type GistFileType = {
    content: string;
    filename: string;
  };

export interface CreateGistI {
    public: boolean;
  description?: string;
  files: { [key: string]: GistFileType | null };
}