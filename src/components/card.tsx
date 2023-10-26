'use client'

import { Pill } from "../components/pill"
import { cva, css } from "../../styled-system/css"
import { styled } from "../../styled-system/jsx"
import { Badge } from "~/components/ui/badge"

type propType = {
	heading: string
	eventDate: Date
	desc?: string
	categories?: string[]
}

const cardStyle = cva({
	base: {
		padding: "0.75em",
		borderRadius: "sm",
		border: "2px solid gray",
		width: "100%",
		display: "flex",
		flexFlow: "column",
		gap: "1rem",
	},
})

const CardBox = styled("div", cardStyle)

export const Card = (props: propType) => (
	<CardBox>
		<h2>{props.heading}</h2>
		<p>
			{props.eventDate.toLocaleString(undefined, {
				year: "numeric",
				month: "long",
				day: "numeric",
			})}
		</p>
		{<p>Description: {props.desc ? props.desc : ""}</p>}
		{props.categories && (

				<p>
					{props.categories.map((category) => (
						<Badge key={category}>{category}</Badge>
					))}
				</p>
		)}
	</CardBox>
)
