import { css } from "../../styled-system/css"

import {SelectMenu} from "../components/SelectMenu"

export default function Home() {
	return (
		<div className={css({ fontSize: "16px", fontWeight: "bold" })}>
      <SelectMenu />
		</div>
	)
}
