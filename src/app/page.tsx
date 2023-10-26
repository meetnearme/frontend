"use client"
import { Container } from "styled-system/jsx"
import { CardWrapper } from "~/components/card-wrapper"
import { Card } from "~/components/card"

import { events } from "~/data/mockEvents"

export default function Home() {
	return (
		<Container py={{ base: "12", md: "16" }} maxW="5xl">
					<CardWrapper>
						{events.map((el) => (
							<Card
								key={el.heading}
								heading={el.heading}
								eventDate={el.eventDate}
								desc={el.desc}
								categories={el.categories}
							/>
						))}
					</CardWrapper>

		</Container>
	)
}
