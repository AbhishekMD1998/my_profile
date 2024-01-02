import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../store/Store'

export const Info = () => {
    const {amount} =useSelector((store) => store.todo)
  return (
    <div>Info is {amount}</div>
  )
}
