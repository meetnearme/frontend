import { cva } from "../../styled-system/css"
import { styled } from "../../styled-system/jsx"

const cardWrapperStyle = cva({
  base: {
    display: "grid",
    gap: "3ch",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 35ch) , 1fr))",
    marginTop: "2rem"
  }
})

export const CardWrapper = styled('div', cardWrapperStyle)
