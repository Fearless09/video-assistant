import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState('Welcome, Click on any button');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [right, setRight] = useState('null')
  const [left, setLeft] = useState(null)
  const [top, setTop] = useState(null)
  const [bottom, setBottom] = useState('20px')


  const handleButtonClick = (buttonName) => {

    const quotes = {
      button1: 'Button 1 says: "Life is beautiful, enjoy every moment!"',
      button2: 'Button 2 shares wisdom: "Be yourself; everyone else is already taken."',
      button3: 'Button 3 offers inspiration: "The only limit to our realization of tomorrow will be our doubts of today."',
      button4: 'Button 4 provides a smile: "Don\'t worry, be happy!"',
      button5: 'Button 5 gives a laugh: "Laughter is the best medicine!"',
      button6: 'Button 6 shares positivity: "Every day may not be good, but there is something good in every day."',
    };

    setQuote(quotes[buttonName]);
    setMousePosition({ x: event.clientX, y: event.clientY });

    setTop(`${event.clientY}px`)
    // setBottom(null)

    if ((window.innerWidth - event.clientX) < 450) {
      setRight(`${window.innerWidth - event.clientX}px`)
      setLeft('initial')
      // alert('123')
    } else {
      setLeft(`${event.clientX}px`)
      setRight('intial')
    }
  };

  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      <div className='container mx-auto'>

        <div className="flex justify-between items-center gap-5 mt-10">
          <button className='bg-blue-800 text-white py-4 px-20 text-4xl font-medium rounded-2xl active:scale-[0.985] active:bg-blue-950' onClick={() => handleButtonClick('button1')}>Button 1</button>
          <button className='bg-red-800 text-white py-4 px-20 text-4xl font-medium rounded-2xl active:scale-[0.985] active:bg-red-950' onClick={() => handleButtonClick('button2')}>Button 2</button>
          <button className='bg-green-800 text-white py-4 px-20 text-4xl font-medium rounded-2xl active:scale-[0.985] active:bg-green-950' onClick={() => handleButtonClick('button3')}>Button 3</button>
        </div>

        <div className="flex justify-between items-center gap-5 mt-36">
          <button className='bg-slate-800 text-white py-4 px-20 text-4xl font-medium rounded-2xl active:scale-[0.985] active:bg-slate-950' onClick={() => handleButtonClick('button4')}>Button 4</button>
          <button className='bg-cyan-800 text-white py-4 px-20 text-4xl font-medium rounded-2xl active:scale-[0.985] active:bg-cyan-950' onClick={() => handleButtonClick('button5')}>Button 5</button>
          <button className='bg-yellow-800 text-white py-4 px-20 text-4xl font-medium rounded-2xl active:scale-[0.985] active:bg-yellow-950' onClick={() => handleButtonClick('button6')}>Button 6</button>
        </div>
      </div>
      {/* bottom: `${bottom}`, */}
      <div className={`bg-slate-100 text-black w-[450px] font-medium text-2xl text-center flex justify-center items-center px-10 py-16 rounded-xl absolute transition-all duration-700`} style={{ top: `${top}`, left: `${left}`, right: `${right}` }}>
        {quote}
      </div>
    </div>
  )
}

export default App
