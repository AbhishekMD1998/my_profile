import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../store/Store'

export default function Disply() {

    const {amount} =useSelector((store) => store.todo)
    console.log("the amount is ",amount);
  return (
    <div>Disply the amount is {amount}</div>

  )
}
