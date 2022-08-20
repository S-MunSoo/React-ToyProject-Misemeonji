import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faStar, faMap } from '@fortawesome/free-solid-svg-icons'
const FooterBar = () => {
  return (
    <div className="h-[100px] fixed bottom-0 w-full">
      <div className="h-full max-w-xl mx-auto flex items-center justify-around bg-indigo-900 text-white">
        <button className="cursor-pointer">
          <Link to="/">
            <div className="flex flex-col ">
              MyArea
              <FontAwesomeIcon icon={faHome} />
            </div>
          </Link>
        </button>
        <button>
          <Link to="/allarea">
            <div className="flex flex-col">
              AllArea
              <FontAwesomeIcon icon={faMap} />
            </div>
          </Link>
        </button>
        <button>
          <Link to="/favor">
            <div className="flex flex-col">
              BookMark
              <FontAwesomeIcon icon={faStar} />
            </div>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default FooterBar
