import React, {useRef} from 'react'
import { useInView} from 'framer-motion'

const Animations = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {all: true})
  return (
      <animate ref={ref}>
          <span 
          style={{
              transform: isInView ? "none" : "translateX(-500px)",
              opacity: isInView ? 1: 0,
              transition: "all 0.3s cubic-bezier(0.17,0.55,0.55,1) 0.5s"
          }}
          
          >
              

          </span>

      </animate>

    
  )
}

export default Animations