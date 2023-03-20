import React, { FC } from 'react'
import styles from './styles.module.scss'
import Header from './components/Header-main/Header'
import SliderHeader from './components/Slider/Slider'
import HoodyBlock from './components/hoody and t-shirt/hoodyBlock'
import Text from './components/Text'
import Footer from './components/footer'

const Main: FC = () => {
	return (
		<div className={styles.app}>
			<Header />
			<HoodyBlock />
			<SliderHeader />
			<Text />
			<Footer />
		</div>
	)
}

export default Main
