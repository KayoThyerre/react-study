import { useEffect, useState } from 'react'

async function getPosts() {
    const respose = await fetch('http://localhost:3000/json/posts.json')
    return await response.json()
}

const PostsList = () => {
    const [posts, setPosts] = useState([])
}

useEffect(() => {
    async function fetchData() {
        const posts = await getPosts()
        setPosts(posts.data)
    }
})