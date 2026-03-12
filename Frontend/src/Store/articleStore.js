import axios from "axios"
import { create } from "zustand"

// fetching all articles using axios
export const autherAuth = create((set) => ({
    loading: false,
    error: null,
    fetchArticles: async () => {
        try {
            let articles = await axios.get("http://localhost:4000/user-api/user/69aeeaa0a54ded8516c4ea94", { withCredentials: true })
            console.log(articles)
        } catch (error) {
            console.log(error)
        }
    }
}))

