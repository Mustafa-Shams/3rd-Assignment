



export default function Hero(){
    return(
        
        
        <main className=" bg-cover bg-center h-screen flex justify-center items-center text-white relative" 
        style={{backgroundImage: 'url("https://img.freepik.com/free-photo/motherboard-closeup-technology-integrated-microchip-circuit-board-computer-processor-with-neon-light_90220-1203.jpg?size=626&ext=jpg")'}}>
            <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-md text-center">
        <h1 className=" text-pretty text-3xl font-bold underline decoration-teal-400 text-sky-400 ">
            Welcome to Visolab 
        </h1><br />
        <p className='text-balance text-center text-xl mt-4 text-cyan-300 underline tracking-wide decoration-teal-400 whitespace-pre-line'>
           Your Vision, Our Expertise .</p> 
           <p className="className='text-balance mt-1 text-center text-xl text-cyan-300 underline tracking-wide decoration-teal-400 whitespace-pre-line">
            VisioLab Turns Ideas Into Captivating Visuals. 
        </p>
</div>

        </main>
        
    )
}