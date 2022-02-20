import React from 'react'

type Props = {
  style:React.CSSProperties;
}

export default function Footer({style}: Props) {
  return (
    <div style={style}>
     <span style={{paddingLeft:240}}>
     Copyright © 2022 Tanapong Keawpho. All Rights Reserved. reserved.
     </span>
    </div>
  )
}