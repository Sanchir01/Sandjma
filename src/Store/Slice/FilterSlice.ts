import {
	FilterSliceInterface,
	FilterSliceSort,
	SortPropertyEnum
} from '../../types/FilterSlice.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState: FilterSliceInterface = {
	categoryId: 0,
	sort: {
		name: 'популярности',
		sortName: SortPropertyEnum.PRICE_DESC
	}
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload
		},
		setSort(state, action: PayloadAction<FilterSliceSort>) {
			state.sort = action.payload
		}
	}
})

export const selectCategories = (state: RootState) => state.filter.categoryId

export const selectFilters = (state: RootState) => state.filter.sort

export const { setCategoryId, setSort } = filterSlice.actions

export default filterSlice.reducer
