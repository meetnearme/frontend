import {Basic} from "./select"
import { Card } from "../components/card"

export default function Home() {
	return (
		<div>
			<Basic />
			<Card heading="Event 1" eventDate={new Date()} />
		</div>
	)
}
