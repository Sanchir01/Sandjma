import React, { FC } from 'react'
import styles from './Contetent.module.scss'
import Categories from './Categories'
import SortPopup from './Sort'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../../../../services/product.service'
const ContentCatalog: FC = () => {
	const {
		data: product,
		error,
		isLoading,
		isSuccess
	} = useQuery(['item'], () => ProductService.getProduct())

	return (
		<div>
			<div className={styles.categories_and_sort}>
				<Categories />
				<SortPopup />
			</div>
		</div>
	)
}

export default ContentCatalog
