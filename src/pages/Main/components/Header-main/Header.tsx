import React from 'react'
import styles from '../../styles.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div>
			<header className={styles.header}>
				<div className='container'>
					<div className={styles.content}>
						<div className={styles.content_top}>
							<ul className='flex gap-20 text-xl'>
								<li>
									<Link to='/Catalog'>NEW</Link>
								</li>
								<li>
									<Link to='/Catalog'>КАТАЛОГ</Link>
								</li>
								<li>
									<Link to='/'>О НАС</Link>
								</li>
							</ul>
							<p className='pl-[120px] font-normal text-5xl text-brown '>
								<Link className='' to='/'>
									SANDJMA
								</Link>
							</p>
							<div className='text-xl flex gap-20 font-light place-content-end'>
								<a className='hover:text-brown' href='catalog/components'>
									ТАБЛИЦА РАЗМЕРОВ
								</a>
								<a
									className='hover:text-brown'
									href='https://t.me/sandjma'
									target='_blank'
								>
									ЗАКАЗАТЬ
								</a>
							</div>
						</div>
						<div className={styles.content__bot}>
							<h1 className='border-b border-3 te text-5xl pb-[10px]'>
								<Link to='/Catalog'>Новая коллекция</Link>
							</h1>
							<p className='text-xl pt-[10px]'>
								<Link to='/Catalog'>Смотреть новинки</Link>
							</p>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
