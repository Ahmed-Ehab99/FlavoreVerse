import React from 'react'
import { Link } from "react-router-dom"

export default function RecipeCard({recipe}) {
    const { image, label, cuisineType, mealType, uri } = recipe?.recipe
    const id = uri?.split("#")[1]
    
    return (
        <Link to={`/recipes/${id}`} className='w-full md:w-[220px]'>
            <div className='bg-gradient-to-t from-slate-900 to-transparent top-0 shadow w-full rounded-lg min-h-[260px]'>
                <img src={image} alt={label} className='rounded-lg h-[200px] md:h-[150px] w-full' />
                <div className='p-3'>
                    <p className='text-white font-semibold'>{label}</p>
                    <div className="mt-2">
                        <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full text-green-500'>
                            {cuisineType}
                        </span>
                        <span className='px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full text-green-500'>
                            {mealType}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
        
    )
}
