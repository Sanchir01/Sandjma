import React from 'react'

import styles from './HoodyBlock.module.scss'
import { Link } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

const JsonSlider = [
	{
		id: 1,
		img: ' https://i.ibb.co/jZLhQ9V/photo-2023-03-17-11-31-54.jpg',
		text: 'Футболки'
	},
	{
		id: 2,
		img: ' https://i.ibb.co/m6L63rr/photo-2023-03-17-11-31-42.jpg',
		text: 'Толстовки'
	},
	{
		id: 3,
		img: 'https://i.ibb.co/x8qN1Sr/photo-2023-03-17-11-31-49.jpg',
		text: 'Панамки'
	},
	{
		id: 4,
		img: ' https://i.ibb.co/GQLQDYx/photo-2023-03-17-11-31-31.jpg',
		text: 'Штаны'
	},
	{
		id: 5,
		img: 'https://i.ibb.co/0Xc3Jtm/photo-2023-03-17-11-41-30.jpg',
		text: 'Ветровки'
	}
]

const HoodyBlock = () => {
	return (
		<div className={styles.app}>
			<div className={styles.content}>
				<Swiper
					// modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={30}
					slidesPerView={2}
					modules={[Pagination]}
					navigation={true}
					className='mySwiper '
					scrollbar={{ draggable: true }}
				>
					{JsonSlider.map(items => (
						<SwiperSlide>
							<Link to='/Catalog' className={styles.categories}>
								<img src={items.img} alt={items.text} />
								<p className={styles.text}>{items.text}</p>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default HoodyBlock
