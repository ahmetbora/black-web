"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import BlackNav from "./BlackNav";
import { blackMenu } from "@/data/menuBlack";

export default function HeaderBlack({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap local-scroll">
        <Link href={`/`} className="logo">
          <Image
            src="/assets/black/logo.png"
            alt="Your Company Logo"
            width={140}
            height={50}
            className="light-mode-logo"
          />
          <Image
            src="/assets/black/logo.png"
            alt="Your Company Logo"
            width={140}
            height={50}
            className="dark-mode-logo"
          />
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist local-scroll">
          {/* Item With Sub */}
          <BlackNav links={blackMenu} />
          {/* End Item With Sub */}
        </ul>
        <ul className="items-end clearlist">
          {/* Languages */}

          {/* End Languages */}
          <li>
            <Link href="/iletisim" className="opacity-1 no-hover">
              <span className="link-hover-anim underline" data-link-animate="y">
                <span className="link-strong link-strong-unhovered">
                  Bize Ulaşın
                </span>
                <span
                  className="link-strong link-strong-hovered"
                  aria-hidden="true"
                >
                  Bize Ulaşın
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
