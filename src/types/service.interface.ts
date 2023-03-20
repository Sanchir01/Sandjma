export interface IProduct {
	id: number | string
	title: string
	imageUrl: string[]
	price: number
	rating: number
}

export interface OneProduct {
	id: number | string
	title: string
	imageUrl: string
	price: number
	rating: number
}
