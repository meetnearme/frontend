import { Pill } from "./pill"
// import { DateSlider } from "./slider"
import { cva } from "../../styled-system/css"
import { styled } from "../../styled-system/jsx"

const selectionStyle = cva({
	base: {
		border: "1px solid black",
    padding: "0.75em",
	},
})

const categoryListStyle = cva({
	base: {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
		gap: "1em",
	},
})

const CategoryList = styled("div", categoryListStyle)

const SelectionBox = styled("div", selectionStyle)

const categories = ["Category A", "Category B", "Category C", "Category D"]

export const Selection = () => (
	<SelectionBox>
		<h2>Categories</h2>
		<CategoryList>
			{categories.map((el) => (
				<Pill key={el}>{el}</Pill>
			))}
		</CategoryList>
		{/* <DateSlider /> */}
	</SelectionBox>
)
