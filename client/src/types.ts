export type category = {
	id: number
	title: string
	image: string
	tag: string
}

export type product = {
	id: number
	title: string
	price: number
	image: string
}

export type gameMode = {
	id: number
	title: string
	numPlayers: number
}

export type notification = {
	id: string
	title: string
	text: string
	image: string
}

export type setting = {
	icon: string
	color: string
	text: string
	onPress: () => void
}

export type storeItem = {
	title: string
	price: string
	content: string
	amount: number
	image: string
	onPress?: (amount: number) => void
	loading?: boolean
}

export type gameItem = {
	title: string
	price: string
	image: string
}
