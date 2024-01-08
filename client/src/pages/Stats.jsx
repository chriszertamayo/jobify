import { ChartsContainer, StatsContainer } from '../components'
import customFetch from '../utils/customFetch.js'
import { useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const statsQuery = {
    queryKey:['stats'],
    queryFn: async ()=>{
        const response = await customFetch.get('/jobs/stats')
        console.log(response.data)
        return response.data
    } 
}

export const loader = (queryClient) => async()=> {
    const data = await queryClient.ensureQueryData(statsQuery)
    return null

    // try {
    //     const response = await customFetch.get('/jobs/stats')
    //     return response.data
    // } catch (error) {
    //     return error
    // }
}

const Stats = () => {
    // const { defaultStats, monthlyApplications } = useLoaderData()
    const {data} = useQuery(statsQuery)
    const  {defaultStats,monthlyApplications} = data
 
    return (
        <>
            <StatsContainer defaultStats={defaultStats} />
            {
                monthlyApplications?.length > 1 &&
                <ChartsContainer data={monthlyApplications} />
            }
        </>
    )
}

export default Stats