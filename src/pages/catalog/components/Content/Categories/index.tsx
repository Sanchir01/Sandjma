import React, { FC } from 'react'
import styles from './Categories.module.scss'
import { useAppDispatch } from '../../../../../Store/store'
import { useSelector } from 'react-redux'
import {
	selectCategories,
	setCategoryId
} from '../../../../../Store/Slice/FilterSlice'

type CategoryNameInterface = string[]

const categoryName: CategoryNameInterface = [
	'Все',
	'Худи',
	'Футболки',
	'Штаны',
	'Панамки',
	'Сувениры'
]

const Categories: FC = () => {
	const dispatch = useAppDispatch()
	const categoryId = useSelector(selectCategories)

	const onClickCategory = (i: number) => {
		dispatch(setCategoryId(i))
	}

	return (
		<div className={styles.app}>
			<ul className={styles.nav}>
				{categoryName.map((category, i) => (
					<li
						key={i}
						onClick={() => onClickCategory(i)}
						className={categoryId === i ? styles.active : ''}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories
