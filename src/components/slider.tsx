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
} from '@ark-ui/react'

import {css} from '../../styled-system/css'

import {events} from '../data/mockEvents'

const eventDates = events.map((event) => event.eventDate)
const earliestDate = Number(new Date(Math.min(...eventDates.map(Number))))
const latestDate = new Date(Math.max(...eventDates.map(Number)))

export const DateSlider = () => {
    // return <>test!</>
    return (
        <RangeSlider>
            <RangeSliderLabel>Label</RangeSliderLabel>
            <RangeSliderControl>
                <RangeSliderTrack>
                    <RangeSliderRange />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
            </RangeSliderControl>
        </RangeSlider>
    )
}
