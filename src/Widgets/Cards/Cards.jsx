import React from 'react'
import { Link } from 'react-router-dom';
import './Cards.css'

const HomeServiceCard = ({ item }) => {
  return (

    <div data-aos={item.animateCard_1} className="serviceCardHome p-8 space-y-3 border-2 border-objBackground-base light:border-blue-300 rounded-xl hover:bg-objBackground2-base">
      <span className="inline-block text-objBackground-base light:text-objborder-objBackground-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      </span>
      <h1 className="text-2xl font-semibold text-textColor-muted capitalize light:text-white">
        {item.name}
      </h1>
      <p className="text-textColor-light font-semibold light:text-textColor-light">
        {item.desc}
      </p>
      <button
        className="inline-flex p-2 text-objBackground-base capitalize transition-colors duration-200 transform bg-blue-100 rounded-full light:bg-objtext-objBackground-base light:text-white hover:underline hover:text-blue-600 light:hover:text-objBackground-base"
      >
        <Link to={`/service_detail/${item.id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-objBackground-base"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </button>
    </div>


  )
}

export default HomeServiceCard;
