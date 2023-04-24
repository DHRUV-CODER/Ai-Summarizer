import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center flex-row w-full mb-10 pt-3'>
            <img src={logo} alt="logo" className='w-28 object-contain' />
            <button type='button' onClick={()=>{window.open("https://github.com/dhruv-coder")}} className='black_btn'>Github</button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles With <br className='max-md:hidden' />
            <span className='orange_gradient'>OpenAI Gpt-4</span>
        </h1>
        <h2 className='desc'>
            Lmao very good shit
        </h2>
    </header>
  )
}

export default Hero