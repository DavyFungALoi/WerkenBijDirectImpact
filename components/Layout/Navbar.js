import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
      <div>
        <ul className="nav__bar__container">
          <Link href="/">
            <li className="nav__bar_item">Home</li>
          </Link>
          <Link href="/vacancies">
            <li className="nav__bar_item">Vacancies</li>
          </Link>
          <Link href="/academy">
            <li className="nav__bar_item">Academy</li>
          </Link>
          <Link href="/jobalert">
            <li className="nav__bar_item">Jobalert</li>
          </Link>
          <Link href="/about/directimpact">
            <li className="nav__bar_item">About us</li>
          </Link>
          <Link href="/contact">
            <li className="nav__bar_item">Contact</li>
          </Link>
        </ul>
      </div>
    );
  }
  
