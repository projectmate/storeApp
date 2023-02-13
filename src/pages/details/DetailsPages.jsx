import React, { useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai"

export const DetailsPages = () => {
const [counter, setCounter] = useState(0)

return (
<>
<h1>DetailsPages</h1>
<div className="actions">
<button onClick={() => setCounter(counter + 1)}>
<AiOutlinePlus />
</button>
<p>{counter}</p>
<button onClick={() => setCounter(counter - 1)}>
<AiOutlineMinus />
</button>
</div>
<Link to="/">
<AiOutlineHeart />
</Link>
</>
)
}