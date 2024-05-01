import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from './url'
import { IRecipe } from '../../types/recipe.types'

export const api = createApi({
    reducerPath: "api",
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getRecipes: builder.query<IRecipe[], string>({
            query: (searchTerm) => ({
                url: `/?_q=${searchTerm}`,
            }),
            providesTags: (result,error,searchTerm) => [{
                type: 'Recipe',
                id: searchTerm
            }]
        }),
    })
})

export const { useGetRecipesQuery } = api