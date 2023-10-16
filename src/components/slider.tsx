import {
	RangeSlider,
	RangeSliderControl,
	RangeSliderLabel,
	RangeSliderMarker,
	RangeSliderMarkerGroup,
	RangeSliderOutput,
	RangeSliderRange,
	RangeSliderThumb,
	RangeSliderTrack,
} from "@ark-ui/react"

import { css } from "../../styled-system/css"

import { events } from "../data/mockEvents"

const eventDates = events.map((event) => event.eventDate)
const earliestDate = Number(new Date(Math.min(...eventDates.map(Number))))
const latestDate = new Date(Math.max(...eventDates.map(Number)))

export const DateSlider = () => {
	return (
		<RangeSlider
			min={+earliestDate}
			max={+latestDate}
			className={css({
				minHeight: "10rem",
				display: "flex",
			})}
		>
			<RangeSliderLabel>Label</RangeSliderLabel>
			<RangeSliderControl>
				<RangeSliderTrack className={css({height: "10px", bg: "black"})}>
					<RangeSliderRange />
				</RangeSliderTrack>
				<RangeSliderThumb index={0} />
				<RangeSliderThumb index={1} />
			</RangeSliderControl>
		</RangeSlider>
	)
}
