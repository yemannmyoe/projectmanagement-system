import React from 'react'

import { FaChevronUp, FaChevronDown } from "react-icons/fa";


export default function TableHeading({
    name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => {},
    className='',
    children,
    
}) {
  return (
    <th
    onClick={(e) =>
        sortChanged(name)
    }
>
    <div
       className={`px-6 py-4 font-semibold text-left flex items-center justify-between gap-1 ${className}`}
    >
        {children}
      {sortable && (
          <div>
          <FaChevronUp
              className={`w-4 ${
                  sort_field ===
                      name &&
                  sort_direction ===
                      "asc"
                      ? "text-white"
                      : ""
              }`}
          />
          <FaChevronDown
              className={`w-4 -mt-1 ${
                  sort_field ===
                      name &&
                  sort_direction ===
                      "desc"
                      ? "text-white"
                      : ""
              }`}
          />
      </div>
      )}
    </div>
</th>
  )
}
