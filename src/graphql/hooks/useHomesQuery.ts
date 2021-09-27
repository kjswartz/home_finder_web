import { QueryResult, useQuery, QueryHookOptions } from '@apollo/client'
import { loader } from 'graphql.macro'

import { Homes, Homes_homes, HomesVariables } from '../schema'

const HOMES_QUERY = loader('src/graphql/queries/homes.graphql')

interface Result extends QueryResult<Homes> {
  homes: Homes_homes[]
}

const useHomesQuery = (options?: QueryHookOptions<Homes, HomesVariables>): Result => {
  const result = useQuery(HOMES_QUERY, {
    ...(options || {}),
  })

  const { homes = [] } = result.data || {}

  return { homes, ...result }
}

export default useHomesQuery