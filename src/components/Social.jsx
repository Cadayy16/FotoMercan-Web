import React from 'react'

import { ImFacebook, ImTwitter, ImInstagram, ImYoutube } from "react-icons/im"

function Social() {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex items-center gap-x-4'>
        <li>
          <a href='#' target='_blank'><ImFacebook /></a>
        </li>

        <li>
          <a href='#' target='_blank'><ImTwitter /></a>
        </li>

        <li>
          <a href='#' target='_blank'><ImInstagram /></a>
        </li>

        <li>
          <a href='#' target='_blank'><ImYoutube /></a>
        </li>
      </ul>
    </div>
  )
}

export default Social