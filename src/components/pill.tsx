import { cva } from "../../styled-system/css"
import { styled } from "../../styled-system/jsx"

const pillStyle = cva({
  base: {
    display: "inline-block",
    padding: "0.25em 0.4em",
    marginRight: "2ch",
    marginBottom: "0.5em",
    borderRadius: "8px",
    border: "1px solid gray",
    color: "gray"
  }
})

export const Pill = styled('span', pillStyle)
