import React from "react";
import Link from "next/link";

export default function Footertop() {
  return (
    <div>
      <ul className="footer__top__container">
        <Link href="/">
          <li className="footer__top__item">Home</li>
        </Link>
        <Link href="/jobs">
          <li className="footer__top__item">Jobs</li>
        </Link>
        <Link href="/about">
          <li className="footer__top__item">About</li>
        </Link>
        <Link href="/about/benefits">
          <li className="footer__top__item">Benefits</li>
        </Link>

        <Link href="/about/applyingprocess">
          <li className="footer__top__item">Applying Process</li>
        </Link>

        <Link href="/contact">
          <li className="footer__top__item">Contact</li>
        </Link>
      </ul>
    </div>
  );
}
