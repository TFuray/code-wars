"use client"

import { useState } from "react"

const charCounter = () => {
  const [input, setInput] = useState("")
  const [count, setCount] = useState(1)
  const [show, setShow] = useState(false)

  const handleChange = (e) => {
     setInput(e.target.value)
    setCount(input.length + 1)
    // setShow(true)
  }

  return (
    <>
      <div className="flex flex-col">
        <label>
          Input Text to count characters:
          <input
            value={input}
            onChange={handleChange}
          />
        </label>
        {/* <button onClick={handleClick}>Count Characters</button> */}

        <br></br>

        {input !== '' && (
          <div>
            <p>
              {input} has {count} characters
            </p>
          </div>
        )}
      </div>
    </>
  )
}
export default charCounter
