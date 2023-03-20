import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props: any) => (
	<ContentLoader
		speed={2}
		width={280}
		height={480}
		viewBox='0 0 280 480'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<circle cx='395' cy='243' r='27' />
		<circle cx='494' cy='290' r='17' />
		<rect x='-7' y='384' rx='14' ry='14' width='260' height='27' />
		<rect x='87' y='358' rx='0' ry='0' width='3' height='2' />
		<rect x='5' y='424' rx='0' ry='0' width='138' height='40' />
		<rect x='185' y='417' rx='17' ry='17' width='70' height='34' />
		<rect x='-2' y='-9' rx='0' ry='0' width='257' height='371' />
	</ContentLoader>
)

export default Skeleton
