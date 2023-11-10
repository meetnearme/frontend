// "use client"
import { Container } from 'styled-system/jsx'
import { CardWrapper } from '~/components/card-wrapper'
import { Card } from '~/components/card'

import { events } from "~/data/mockEvents"
// async function getData() {
// 	const res = await fetch('http://localhost:4000/all-events', {
// 		next: { revalidate: 10 },
// 	})
// 	// The return value is *not* serialized
// 	// You can return Date, Map, Set, etc.

// 	if (!res.ok) {
// 		// This will activate the closest `error.js` Error Boundary
// 		throw new Error('Failed to fetch data')
// 	}

// 	return res.json()
// }

export default async function Home() {
	// const events = await getData()
	// console.log({ events })
	return (
		<Container py={{ base: '12', md: '16' }} maxW="5xl">
			<CardWrapper>
				{events.map(
					(el: {
						heading: string
						eventDate: Date
						desc?: string
						categories?: string[]
					}) => (
						<Card
							key={el.heading}
							heading={el.heading}
							eventDate={el.eventDate}
							desc={el.desc}
							categories={el.categories}
						/>
					)
				)}
			</CardWrapper>
		</Container>
	)
}
