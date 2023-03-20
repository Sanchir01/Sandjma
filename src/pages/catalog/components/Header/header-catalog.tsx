import React from 'react'
import { Link } from 'react-router-dom'

const HeaderCatalog = () => {
	return (
		<div>
			<header className='header'>
				<div className='container'>
					<div className='grid grid-cols-3 pt-4 items-center '>
						<nav className=''>
							<ul className='flex gap-20 font-light text-xl'>
								<li className='hover:text-brown'>
									<a href='catalog/components'>NEW</a>
								</li>
								<li className='hover:text-brown'>
									<Link to='/Catalog'>КАТАЛОГ</Link>
								</li>
								<li className='hover:text-brown'>
									<a href='catalog/components'>О НАС</a>
								</li>
							</ul>
						</nav>
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
				</div>
			</header>
		</div>
	)
}

export default HeaderCatalog
