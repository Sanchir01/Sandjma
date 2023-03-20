import React, { FC } from 'react'
import styles from './styles.module.scss'
import HeaderCatalog from './components/Header/header-catalog'
import ContentCatalog from './components/Content/Content-Catalog'

const Catalog: FC = () => {
	return (
		<div className={styles.app}>
			<div className={styles.wrapper}>
				<HeaderCatalog />
				<ContentCatalog />
			</div>
		</div>
	)
}

export default Catalog
