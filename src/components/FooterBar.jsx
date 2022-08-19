import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faStar, faMap } from '@fortawesome/free-solid-svg-icons'
const FooterBar = () => {
  return (
    <div className="w-full fixed bottom-0 shadow-lg text-1xl font-bold">
      <div className="nav-bar">
        <button>
          <Link to="/">
            <div className="flex flex-col ">
              마이지역
              <FontAwesomeIcon icon={faHome} />
            </div>
          </Link>
        </button>
        <button>
          <Link to="/allarea">
            <div className="flex flex-col">
              전체지역
              <FontAwesomeIcon icon={faMap} />
            </div>
          </Link>
        </button>
        <button>
          <Link to="/favor">
            <div className="flex flex-col">
              즐겨찾기
              <FontAwesomeIcon icon={faStar} />
            </div>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default FooterBar
