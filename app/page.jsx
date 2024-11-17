
import Link from 'next/link'
import Intro_Img from '../public/fischl_bg.jpg'
import Skills from './components/skills'

export default function Home() {
  return (
    <main  className="py-6 backdrop-contrast-75" style={{backgroundColor: 'rgba(213,81,162,0.8)' }}>

      <div className="flex justify-center">
        <img src={'intro_img.jpg'} alt="Paul Main Picture" width={300} height={900}/>
      </div>
      <br />
      
      <h2 className="flex justify-center font-extrabold text-6xl white-text-shadow ">Paul Josef P. Agbuya</h2>
      <h2 className="flex justify-center font-extrabold text-1xl sub-h">Graduate in BS Computer Science of De La Salle University</h2>
      
      <h3 className="flex justify-center font-extrabold sub-h2">
        <span className="text-amber font-black">LS Link:</span> &nbsp;<a className='underline no-shadows hover:text-slate-50' href="https://dlsu-vcf-csm.symplicity.com/profiles/pauljosef.agbuya" target="_blank">https://dlsu-vcf-csm.symplicity.com/profiles/pauljosef.agbuya </a>
      </h3>
      <div className="card-default">
      <p className="intro-text ">Student committed with
any tasks and aspiring to develop his
skills regarding Computer Science or
workplace related fields. Adapts quickly
on situations and builds strong social
relationships among other peers or coworkers. Confident in arithmetic and 
Tutoring particular Math-related or Computer Science related topics. Currently interested in the field of
AI generation, Data Analysis, and Empathic Computing. 

</p>

      </div>
     




      <br/><br/>
      <Skills/>

      {/* <div className="card-default">
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
      </div>
      <div className="card-default">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
      </div> */}
    </main>
  )
}

// about.jsx -> /about

