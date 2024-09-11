import { Link } from '@inertiajs/react';
import React from 'react';

export default function Pagination({ links }) {
  return (
    <nav className="text-center mt-4">
      {links.map((link, index) => (
        <Link
        preserveScroll
          key={index}
          href={link.url || ''}
          className={
            "inline-block py-2 px-3 mx-1 rounded-lg text-gray-200 text-xs transition-colors duration-300 " + 
            (link.active 
              ? "bg-gray-950 text-white font-bold hover:bg-gray-600"  // Active link styles with hover effect
              : "bg-gray-700 hover:bg-gray-600") +  // Inactive link styles with hover effect
            (!link.url ? " !text-gray-500 cursor-not-allowed" : "")  // Disabled link styles
          }
        >
          <span dangerouslySetInnerHTML={{ __html: link.label }} />
        </Link>
      ))}
    </nav>
  );
}
