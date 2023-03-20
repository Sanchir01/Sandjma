import React, { FC } from 'react'
import { IProduct } from '../../../types/service.interface'
import styles from './FULLImage.module.scss'

const FullImages: FC<IProduct> = ({ imageUrl, price }) => {
	return <div className={styles.app}>{price}</div>
}

export default FullImages
