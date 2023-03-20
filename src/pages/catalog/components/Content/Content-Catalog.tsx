import React, { FC } from 'react'
import styles from './Contetent.module.scss'
import Categories from './Categories'
import SortPopup from './Sort'
import { isError, useQuery } from '@tanstack/react-query'
import { ProductService } from '../../../../services/product.service'
import ItemBlock from './ItemBlock'
import Skeleton from './Skeleton'
import { IProduct } from '../../../../types/service.interface'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../Store/store'

const ContentCatalog: FC = () => {
	const { categoryId, sort } = useSelector((state: RootState) => state.filter)

	const category = categoryId > 0 ? `&category=${categoryId}` : ''

	const order = sort.sortName.includes('-') ? 'asc' : 'desc'
	const sortBy = sort.sortName.replace('-', '')

	const { data, isLoading, isSuccess, isError } = useQuery<IProduct[]>(
		['item', category, order, sortBy],
		() => ProductService.getProduct(category, sortBy, order),
		{
			keepPreviousData: true,
			onError: (error: any) => {
				console.log(error.message)
			}
		}
	)

	if (isError) {
		return (
			<h4 className='flex justify-center items-center text-4xl'>
				Произошла ошибка при получении данных
			</h4>
		)
	}
	return (
		<div>
			<div className={styles.categories_and_sort}>
				<Categories />
				<SortPopup />
			</div>

			<div className={styles.itemsBlock}>
				{isLoading
					? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
					: isSuccess &&
					  data.map((obj: IProduct) => <ItemBlock {...obj} key={obj.id} />)}
			</div>
		</div>
	)
}

export default ContentCatalog
