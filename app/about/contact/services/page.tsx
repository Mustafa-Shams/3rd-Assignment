

import React from "react";

import Link from "next/link";

export default function Services(){
  return(
    <body>
      <title>
        Services
      </title>
      <main>
        <h1>
          This is My Service Page
        </h1>
      </main>

      <div>
        <nav>
          <ul>
            <li>
              <Link href="/"> back to homepage </Link>
            </li>
          </ul>
        </nav>
      </div>
    </body>
  )
}