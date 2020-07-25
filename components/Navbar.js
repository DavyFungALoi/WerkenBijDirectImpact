import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
      <div>
        <ul className="nav__bar__container">
          <Link href="/">
            <li className="nav__bar_item">Home</li>
          </Link>
          <Link href="/jobs">
            <li className="nav__bar_item">Jobs</li>
          </Link>
          <Link href="/about">
            <li className="nav__bar_item">About</li>
          </Link>
          <Link href="/contact">
            <li className="nav__bar_item">Contact</li>
          </Link>
        </ul>
      </div>
    );
  }
  
