

import React from "react";

import Link from "next/link";

export default function Contact(){
  return(
    <body>
      <title>
        Contactpage
      </title>
      <main>
        <h1>
          This is My Contact Page
        </h1>
      </main>

      <div>
        <nav>
          <ul>
            <li>
              <Link href="./contact/services"> This Services page </Link>
            </li>
          </ul>
        </nav>
      </div>
    </body>
  )
}