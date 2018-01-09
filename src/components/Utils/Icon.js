import React from 'react'
import styled from 'styled-components'
import icon from './icon.svg'

const Image =  styled.img`
  align-self: center;
`

const Icon = (props) => {
  
  const size = props.size ? props.size : 20

  return (
      <Image width={size} height={size}
        src={props.src ? props.src : icon}
        alt={props.alt}
        title={props.title} />
  )
}

export default Icon