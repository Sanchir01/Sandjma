import React, { FC } from 'react'
import styles from './ItemBlock.module.scss'
import { IProduct } from '../../../../../types/service.interface'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import 'swiper/css/scrollbar'
import { Lazy, Scrollbar } from 'swiper'
import { Link } from 'react-router-dom'
const ItemBlock: FC<IProduct> = ({ id, title, imageUrl, price }) => {
	return (
		<div className={styles.app}>
			<div className={styles.nav}>
				<Swiper
					scrollbar={{
						hide: true
					}}
					modules={[Scrollbar]}
					className='mySwiper'
				>
					{imageUrl.map((image, i) => (
						<SwiperSlide>
							<Link key={id} to={`/items/${id}`}>
								<img
									loading='lazy'
									className={styles.img}
									src={image}
									alt={title}
								/>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
				<p className='text-1.5xl'>{title}</p>
				<p>{price} Р</p>
				<button className={styles.button}>
					<a target='_blank' href='https://t.me/sandjma'>
						Заказать
					</a>
				</button>
			</div>
		</div>
	)
}
{
}
export default ItemBlock
