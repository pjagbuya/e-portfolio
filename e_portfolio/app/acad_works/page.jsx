import Image from 'next/image'

export default function Acad_Works() {
    return (
      <main className="py-6 backdrop-contrast-75" style={{backgroundColor: 'rgba(213,81,162,0.8)' }}>
        <h1 className="flex justify-center font-extrabold text-6xl white-text-shadow">
          Academic Works
        </h1>

        <br/>
        <h2 className="flex font-extrabold text-2xl white-text-shadow">
          1.) C Program CLI Checker Project
        </h2>
        <div className="flex flex-row gap-5 justify-center mb-5">
            <Image src={"/checkers_1.png"} alt="temp" width={400} height={400}/>
            <Image src={"/checkers_2.png"} alt="temp" width={400} height={400}/>

          </div>
          <div className="flex flex-row gap-5 justify-center">
            <Image src={"/checkers_3.png"} alt="temp" width={400} height={400}/>
            <Image src={"/checkers_4.png"} alt="temp" width={400} height={400}/>
          </div>

        <h2 className="m-5 flex font-extrabold text-2xl white-text-shadow">
          2.) Unity Augmented Reality Health Education Learning App (ARHELA)
        </h2>
        
        
        <div className="flex flex-row gap-5 justify-center mb-5">
            <Image src={"/arhela_1.png"} alt="temp" width={300} height={600}/>
            <Image src={"/arhela_2.png"} alt="temp" width={300} height={600}/>
            <Image src={"/arhela_3.png"} alt="temp" width={300} height={600}/>
          </div>
          <h2 className="m-5 flex font-extrabold text-2xl white-text-shadow">
          3.) Java Object Oriented Vending Machine
        </h2>
        
        
          <div className="flex flex-row gap-5 justify-center mb-5">
            <Image src={"/vend_1.png"} alt="temp" width={500} height={500}/>
            <Image src={"/vend_2.png"} alt="temp" width={500} height={500}/>
          </div>

          <h2 className="m-5 flex font-extrabold text-2xl white-text-shadow">
          4.) Wine Data Modelling
        </h2>
        
        
          <div className="flex flex-row gap-5 justify-center mb-5">
            <Image src={"/datamod_1.png"} alt="temp" width={300} height={600}/>
            <Image src={"/datamod_2.png"} alt="temp" width={300} height={600}/>
            <Image src={"/datamod_3.png"} alt="temp" width={300} height={600}/>
          </div>

          <h2 className="m-5 flex font-extrabold text-2xl white-text-shadow">
          5.) Figma Application UX Designing
        </h2>
        
        
          <div className="flex flex-row gap-5 justify-center mb-5">
            <Image src={"/ux_design.png"} alt="temp" width={1200} height={800}/>
            
          </div>
          <div className="justify-center flex">
            <a className="underline text-violet-300 text-center" href="https://www.figma.com/proto/Ksg5gAgQG5u6UArZR4gz2a/STHCIUX-MCO3?page-id=0%3A1&node-id=3-6&node-type=canvas&viewport=1054%2C451%2C0.24&t=uU0ktnC5lytBQZ72-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A6">
            CLICK HERE FOR PROTOTYPE
            </a>
          </div>
        <h2 className="m-5 flex font-extrabold text-2xl white-text-shadow">
          More Website Works:
        </h2>
        
        <div className="flex gap-5 justify-center mb-5">

          <Image src={"/pers_2.png"} alt="temp" width={800} height={600}/>
          
          
        </div>
        <div className="justify-center flex">
          <a href="https://pjagbuya.github.io/PersonalSite/" className="underline text-violet-300 text-center" target="_blank">https://pjagbuya.github.io/PersonalSite/</a>

        </div>
        <div className="mt-5 flex gap-5 justify-center mb-5">

        <Image src={"/pers_1.png"} alt="temp" width={800} height={600}/>
        
      </div>

      <div className="justify-center flex">
      <a href="https://pjagbuya.github.io/cv/" className="underline text-violet-300 text-center" target="_blank">https://pjagbuya.github.io/cv/</a>

      </div>

      </main>
    )
  }