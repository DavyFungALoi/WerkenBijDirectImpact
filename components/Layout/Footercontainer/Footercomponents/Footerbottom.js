import React from "react";
import Link from "next/link";

export default function Footerbottom() {
  return (
    <div>
      <div className="footer__bottom__container">
        <ul className="footer__bottom__container_list">
          <Link href="/about/privacypolicy">
            <li className="footer__bottom__container_list_item">
              Privacy Policy
            </li>
          </Link>
          <Link href="/about/cookies">
            <li className="footer__bottom__container_list_item">Cookies</li>
          </Link>

          <li className="footer__bottom__container_list_copyright">
            @Direct Impact 2020
          </li>
        </ul>
      </div>
    </div>
  );
}
