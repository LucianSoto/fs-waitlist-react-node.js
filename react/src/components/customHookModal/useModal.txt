import { useState } from 'react'
// import React from 'react'

const useModal = () => {
  const [isShowing, setIsShowing ] = useState(false)

  function toggle() {
    setIsShowing(!isShowing)
    console.log("is showing: ", isShowing)
  }
  return {
    isShowing,
    toggle,
  }
}

export default useModal
