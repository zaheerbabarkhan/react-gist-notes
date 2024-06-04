import axiosInstacne from "./axios"

export const getGists = async (setGists: React.Dispatch<React.SetStateAction<never[]>>, currentPage: number, pageLimit: number) => {
    try {
      const response = await axiosInstacne.get(`/gists/public?page=${currentPage}&per_page=${pageLimit}`)
      if (response.status === 200) {
        console.log(response.data)
        setGists(response.data)
      }
      else {
        setGists([])
      }
    } catch (error) {
      setGists([])

    }
  }