import React from 'react'
import styles from './Slider.module.scss'
import { Link } from 'react-router-dom'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const JsonSlider = [
	{
		id: 1,
		img: ' https://i.ibb.co/jZLhQ9V/photo-2023-03-17-11-31-54.jpg'
	},
	{
		id: 2,
		img: ' https://i.ibb.co/m6L63rr/photo-2023-03-17-11-31-42.jpg'
	},
	{
		id: 3,
		img: 'https://i.ibb.co/x8qN1Sr/photo-2023-03-17-11-31-49.jpg'
	},
	{
		id: 4,
		img: ' https://i.ibb.co/GQLQDYx/photo-2023-03-17-11-31-31.jpg'
	},
	{
		id: 5,
		img: 'https://i.ibb.co/0Xc3Jtm/photo-2023-03-17-11-41-30.jpg'
	}
]

const SliderHeader = () => {
	return (
		<div className={styles.app}>
			<h2 className='text-5xl pb-16 px-[15%]'>Новое на сайте</h2>
			<div className={styles.slider}>
				<Swiper
					// modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={30}
					slidesPerView={4}
					pagination={{
						dynamicBullets: true
					}}
					modules={[Pagination, Navigation]}
					navigation={true}
					className='mySwiper '
					scrollbar={{ draggable: true }}
				>
					{JsonSlider.map(item => (
						<SwiperSlide className=''>
							<Link to='/Catalog' className={styles.link}>
								<img
									className={styles.img}
									key={item.id}
									src={item.img}
									alt='123'
								/>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default SliderHeader
