import { IoIosArrowDropup } from 'react-icons/io';
import css from "./ScrollUp.module.css"
import React from 'react'

const ScrollUp = ({onScrollBtn}) => {
  return (
    <div className={css.scrollUp} onClick={onScrollBtn}><IoIosArrowDropup size='50'/></div>
  )
}

export default ScrollUp