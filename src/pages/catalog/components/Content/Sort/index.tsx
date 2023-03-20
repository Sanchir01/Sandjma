import React, { FC } from 'react'
import './Sort.scss'
import {
	FilterSliceSort,
	SortPropertyEnum
} from '../../../../../types/FilterSlice.interface'
import { useSelector } from 'react-redux'
import { selectFilters, setSort } from '../../../../../Store/Slice/FilterSlice'
import { useAppDispatch } from '../../../../../Store/store'

const ListSort: FilterSliceSort[] = [
	{ name: 'Популярности(возр)', sortName: SortPropertyEnum.RATING_DESC },
	{ name: 'Популярности(убыв)', sortName: SortPropertyEnum.RATING_ASC },
	{ name: 'Цене(возр)', sortName: SortPropertyEnum.PRICE_DESC },
	{ name: 'Цене(убыв)', sortName: SortPropertyEnum.PRICE_ASC },
	{ name: 'Алфавиту(возр)', sortName: SortPropertyEnum.TITLE_DESC },
	{ name: 'Алфавиту(убыв)', sortName: SortPropertyEnum.TITLE_ASC }
]

const SortPopup: FC = () => {
	const [open, setOpen] = React.useState(false)
	const value = useSelector(selectFilters)
	const dispatch = useAppDispatch()

	const sortRef = React.useRef<HTMLDivElement>(null)

	const onClickSortPopup = (obj: FilterSliceSort) => {
		dispatch(setSort(obj))
		setOpen(!open)
	}

	React.useEffect(() => {
		const handleOutSideClick = (event: any) => {
			const path = event.composedPath()

			if (!path.includes(sortRef.current)) {
				setOpen(false)
			}
		}
		document.body.addEventListener('click', handleOutSideClick)

		return () => document.body.removeEventListener('click', handleOutSideClick)
	}, [])

	return (
		<div ref={sortRef} className='sort text-xl'>
			<div className='sort__label'>
				<svg
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
						fill='#2C2C2C'
					/>
				</svg>
				<b>Сортировка по:</b>
				<span onClick={() => setOpen(!open)}>{value.name}</span>
			</div>
			{open && (
				<div className='sort__popup'>
					<ul>
						{ListSort.map((obj, i) => (
							<li
								onClick={() => onClickSortPopup(obj)}
								key={i}
								className={value.sortName === obj.sortName ? 'active' : ''}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default SortPopup
