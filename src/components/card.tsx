import { cva } from "../../styled-system/css"
import { styled } from "../../styled-system/jsx"

type propType = {
  heading: string,
  eventDate: Date,
  desc?: string,
}

export const cardStyle = cva({
  base: {
    padding: "0.75em",
    borderRadius: 'sm',
    border: "2px solid gray",
    width: "50%",
    display: "flex",
    flexFlow: "column"
  },
})

const CardBox = styled('div', cardStyle)

export const Card = (props: propType) => (
  <CardBox>
    <h1>{props.heading}</h1>
    <p>{props.eventDate.toLocaleString()}</p>
  </CardBox>
)