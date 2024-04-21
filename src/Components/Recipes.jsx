import React, { useState, useEffect } from 'react'
import { BiSearchAlt2 } from "react-icons/bi"
import Loading from './Loading'
import SearchBar from './SearchBar'
import RecipeCard from './RecipeCard'
import Buttons from './Buttons'
import {getAllRecipes} from "./API"

export default function Recipes() {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState("Vegan")
    const [limit, setLimit] = useState(30)
    const [loading, setLoading] = useState(false)  
    
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSearchedRecipe = async (e) => {
        e.preventDefault()
        getAPI()
    }

    const showMore = () => {
        setLimit(prev => prev + 10)
        getAPI()
    }  

    const getAPI =  async ()=> {
        try {
            const data = await getAllRecipes({query,limit})
            setRecipes(data)
            setLoading(false)
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)
        }
    }   

    useEffect(() => {
        setLoading(true)
        getAPI()
    }, [])

    if (loading) {
        return (<Loading />)
    } 
    
    return (
        <div className='w-full'>
            <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
                <form onSubmit={handleSearchedRecipe} className='w-full lg:w-2/4'><SearchBar placeholder="eg. Cake,Vegan, Chicken"
                    handleInputChange={handleChange} rightIcon={<BiSearchAlt2 className='text-gray-600' onClick={handleSearchedRecipe}/>} /></form>
            </div>
            {recipes?.length > 0 ? (
                <>
                    <div className='w-full gap-10 px-0 lg:px-10 py-10 flex flex-wrap justify-center'>
                        {recipes?.map((item, index) => <RecipeCard recipe={item} key={index}/>)}
                    </div>
                    <div className="flex w-full items-center justify-center py-10">
                        <Buttons title="Show More" containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
                                handleClick={showMore}/>
                    </div>
                </>
            ) : <div className='text-white w-full items-center justify-center py-10'><p className='text-center'>No Recipe Found</p></div>}
        </div>
    )
}
