

import React from "react";

import Link from "next/link";

export default function About(){
  return(
    <body>
      <title>
        Aboutpage
      </title>
      <main>
        <h1>
          This is My AboutPage
        </h1>
      </main>

      <div>
        <nav>
          <ul>
            <li>
              <Link href="./about/contact"> This Contact Page </Link>
            </li>
          </ul>
        </nav>
      </div>
    </body>
  )
}