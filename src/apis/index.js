import axios from 'axios'

const KEY= 'AIzaSyB9nEGt15sQSOrXJ_QJm6Rb2dna_qVqdeI'

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})
const params = {
    part: 'snippet',
    maxResults: 40,
    key:KEY,
    regionCode: 'jp',
    type: 'video',
    
}

export const fetchPopularData = async () => {
    return await youtube.get('/videos', {
        params:{
            ...params,
            chart: 'mostPopular'
        }
    })
}

export const fetchSelectedData = async (id) => {
    return await youtube.get('Videos', {
        params:{
            ...params,
            id
        }
    })
}