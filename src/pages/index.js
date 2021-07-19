import * as React from "react"
import { useEffect, useState } from "react"



// markup

  function IndexPage() {

    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : false)
  
    useEffect (() => {
      const handleWindowResize = () => (
        // console.log(window.innerWidth)
        setWidth(window.innerWidth)
      )
      window.addEventListener("resize", handleWindowResize)
  
      return () => window.removeEventListener("resize", handleWindowResize)
    }, [])
  
    return (
      
      
        <div style={{position: "fixed", zIndex: "100", left: 200, top: 0}}>{width}</div>
        
    )
  }
  

export default IndexPage
