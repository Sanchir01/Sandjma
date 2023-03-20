export interface FilterSliceInterface {
	categoryId: number
	sort: FilterSliceSort
}

export interface FilterSliceSort {
	name: string
	sortName: SortPropertyEnum
}

export enum SortPropertyEnum {
	RATING_DESC = 'rating',
	RATING_ASC = '-rating',
	TITLE_DESC = 'title',
	TITLE_ASC = '-title',
	PRICE_DESC = 'price',
	PRICE_ASC = '-price'
}
