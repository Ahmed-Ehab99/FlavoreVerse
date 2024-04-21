import axios from "axios"


export async function getAllRecipes(filter) {
    const {query, limit} = filter;
    const { data } = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}&`)
    return data?.hits
}

export async function getDetRecipes(id) {
    const { data } = await axios.get(`https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`)
    return data[0]
}