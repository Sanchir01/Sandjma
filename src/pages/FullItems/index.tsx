import React, { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { IProduct, OneProduct } from '../../types/service.interface'
import { ProductService } from '../../services/product.service'
import styles from './oneItem.module.scss'
import Skeleton from '../catalog/components/Content/Skeleton'
import HeaderCatalog from '../catalog/components/Header/header-catalog'
import FullImages from './imagesBlock/FullImages'

const OneItemGet: FC = () => {
	const { id } = useParams()
	const { data, isLoading, isSuccess, isError, error } = useQuery<OneProduct>(
		['items', id],
		() => ProductService.getOneProduct(String(id)),
		{
			keepPreviousData: true,
			onError: (error: any) => {
				console.log(error.message)
			}
		}
	)
	console.log(data)

	if (isError) {
		return (
			<>
				<h4 className='flex justify-center items-center text-4xl'>
					Произошла ошибка при получении данных
				</h4>
				alert('Ошибка при получении данных')
			</>
		)
	}

	return (
		<div className={styles.app}>
			<HeaderCatalog />

			<div className={styles.root}>
				{isLoading
					? [...new Array(1)].map((_, i) => <Skeleton key={i} />)
					: isSuccess && (
							<div className={styles.content}>
								<img
									className={styles.img}
									src={data.imageUrl}
									alt={data.title}
								/>
								<div className={styles.right}>
									<div className={styles.breadcrumbs}>
										<Link to='/'>Дом / </Link>
										<Link to='/catalog'>Каталог / </Link>
										<p>{data.title}</p>
									</div>
									<p>{data.title}</p>
									<p>{data.price} P</p>
									<button className={styles.button}>
										<a href='https://t.me/sandjma' target='_blank'>
											Заказать
										</a>
									</button>
								</div>
							</div>
					  )}
			</div>
		</div>
	)
}

export default OneItemGet
