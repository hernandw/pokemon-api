import React from 'react'
import { useParams } from 'react-router-dom'

const Detalles = () => {

const {id} = useParams()

  return (
    <div>
      El detalle es del {id}
    </div>
  )
}

export default Detalles
