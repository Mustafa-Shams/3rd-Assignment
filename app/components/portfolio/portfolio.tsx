
import Link from "next/link"
import Image from "next/image"
export default function Portfolio(){
    return(
        <section className="bg-gray-200 bg-opacity-50">
            
            <h1 className="font-bold text-center  text-5xl pt-7 pb-5 border-b-8 border-black">
                PortFolio
            </h1>
        <div className="border-black border-b-8">
            <h2 className="text-center pt-4 font-semibold text-3xl">
                Mustafa Shams
            </h2>

            <h3 className="text-center pt-6 font-semibold text-3xl">
              Aspiring Web-Developer 
            </h3> <br />

             <div className="ml-96 pl-32" >
        <Image src={"/profilepic.jpeg"} alt="profilepic " width="300" height="400" className=" border-black border-4 "/> 
            </div><br />

            <h1 className="text-center font-semibold text-3xl pt-4">
                ABOUT ME
            </h1><br />
           
            <h1 className="  text-center font-medium text-xl text-balance pb-10 " >
            I am Mustafa Shams, a dedicated software engineer with a strong foundation in computer science. My passion for programming, combined with a keen eye for detail, drives me to create efficient and scalable solutions using TypeScript and Next.js.

Throughout my career, I have honed my problem-solving skills through various projects, such as Number guessing game and more . My experience in hackathons and coding challenges has further sharpened my ability to work under pressure and deliver results.

I am committed to staying up-to-date with the latest technologies and best practices. My goal is to leverage my technical expertise to contribute to innovative projects and make a positive impact in the tech industry.
            </h1></div><br />
        <div className="border-black border-b-8">
            <h1 className="text-center font-semibold text-3xl ">
                SKILLS
            </h1><br />

            <h1 className="font-medium text-2xl ">
                Technical Skills:
            </h1>
            <li className="text-lg pt-4">
                Programming Languages (Html , Css , TypeScript)
            </li>
            <li className="text-lg pt-2">
                Frameworks and Libraries ( React , Nextjs, TailwindCss)
            </li>
            <li className="text-lg pt-2">
                Tools and Software (GitHub, VsCode, Vercel)
            </li><br /><br />

            <h1 className="font-medium text-2xl ">
                Soft Skills:
            </h1>
            <li className="text-lg pt-4">
                Problem Solving
            </li>
            <li className="text-lg pt-2">
                Communications
            </li>
            <li className="text-lg pt-2">
                TeamWork
            </li>
            <li className="text-lg pt-2">
                Leadership
            </li>
            <li className="text-lg pt-2">
                Creativity
            </li>
</div><br />

<div className="border-black border-b-8">
        <h1 className="text-center font-semibold text-3xl " >
            Project 1
        </h1>

        <h1 className="font-medium text-2xl pt-4">
            Simple-Calculator
        </h1>

        <h1 className="text-lg pt-2">
            Description: This Is A CLI Based Simple-Calulator
        </h1>

        <h1 className="text-lg pt-2">
            Role: Lead-Developer
        </h1>

        <h1 className="text-lg pt-2">
            Technologies Used : VSCODE, GITHUB
        </h1>

        <h1 className="text-lg pt-2">
            Language Used : Typescript 
        </h1>

        <h1 className="text-lg pt-2">
            OutCome: It is able to perform basic Arthematic Operations (e.g Addition, Subtraction , Multiplication & Division)
        </h1>

        <h1 className="text-lg pt-2">
            Link: <Link href="https://github.com/Mustafa-Shams/Governor-It-Initiative-Assignment.git" target="_blank" className="text-blue-600">Simple-Calculator</Link>
        </h1>
</div> <br />

        <div>
        <h1 className="text-center font-semibold text-3xl " >
            Project 2
        </h1>

        <h1 className="font-medium text-2xl pt-4">
            Number-Guessing-game
        </h1>

        <h1 className="text-lg pt-2">
            Description: This Is A CLI Based Number-Guessing-Game
        </h1>

        <h1 className="text-lg pt-2">
            Role: Lead-Developer
        </h1>

        <h1 className="text-lg pt-2">
            Technologies Used : VSCODE, GITHUB
        </h1>

        <h1 className="text-lg pt-2">
            Language Used : Typescript 
        </h1>

        <h1 className="text-lg pt-2">
            OutCome: Developed a Cli-based Number-Guessing-Game In Which You Have To Guess a Number and You Only Have One Try
        </h1>

        <h1 className="text-lg pt-2">
            Link: <Link href="https://github.com/Mustafa-Shams/number-guessing-game.git" target="_blank" className="text-blue-600">Number-Guessing-Game</Link>
        </h1>
        </div>

           
        </section>
    )
}