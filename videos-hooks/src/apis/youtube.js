import axios from "axios";

const KEY = "AIzaSyC7P9j_9UqBiekIMP6qe8UBtGnStqLN7Uw";

export default axios.create({

    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type:"video",
        maxResults: 5,
        key: KEY
    }
})