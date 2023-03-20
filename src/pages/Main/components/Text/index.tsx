import React from 'react'
import styles from './Text.module.scss'

const Text = () => {
	return (
		<div className={styles.app}>
			<h2 className='text-3xl '>Стильная одежда Sandjma </h2>
			<ul className={styles.root}>
				<li className='text-1.5xl '>
					Добро пожаловать в Sandjma – магазин стильной и комфортной одежды для
					всех, кто ценит качество и удобство. У нас вы найдете одежду на любой
					вкус и для любого случая: от повседневных нарядов до деловых костюмов
					и спортивной экипировки.
				</li>
				<li className='text-1.5xl'>
					В Sandjma мы предлагаем не только модные и актуальные коллекции, но и
					гарантируем высокое качество материалов и прочность каждой вещи. Мы
					следим за последними тенденциями и предлагаем только лучшие товары
				</li>
				<li className='text-1.5xl'>
					Наша команда заботится о каждом клиенте и всегда готова помочь в
					выборе наилучшего варианта для вас. Мы стремимся сделать ваше
					шопинг-путешествие максимально приятным и удобным. У нас вы найдете
					все необходимое для создания полного образа: от одежды до
					<br />
					<p className='pt-4'>
						Заходите к нам в гости и позвольте нам помочь вам выглядеть на
						высшем уровне!
					</p>
				</li>
			</ul>
		</div>
	)
}

export default Text