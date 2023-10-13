import { CardWrapper } from "../components/card-wrapper"
import { Card } from "../components/card"

import { events } from "../data/mockEvents"

export default function Home() {
	return (
		<div>
			{/* form */}
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
		</div>
	)
}
