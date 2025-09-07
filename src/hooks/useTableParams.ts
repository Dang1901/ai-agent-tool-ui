import { usePagination, type PaginationConfig } from './usePagination'
import { useFilterParams, type FilterConfig, type FilterState } from './useFilterParams'

export interface TableParamsConfig {
  pagination?: PaginationConfig
  filters?: FilterConfig
}

export function useTableParams<T extends FilterState = FilterState>(
  config: TableParamsConfig = {}
) {
  const pagination = usePagination(config.pagination)
  const filters = useFilterParams<T>(config.filters)

  return {
    pagination,
    filters,
    // Convenience methods
    reset: () => {
      pagination.resetPagination()
      filters.clearFilters()
    }
  }
}
