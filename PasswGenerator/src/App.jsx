import { StrictMode } from 'react'
import { useState, useCallback } from 'react'


function App() {
  const [length, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('')

  const PasswordGenerator = () => useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) string += "0123456789"
    if (charAllowed) string += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    for (let i = 1; i < Array.length; i++) {
     let char = Math.floor(Math.random() * string.length + 1)

     pass = str.charAt(char)
    }

      setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-2xl text-center font-bold py-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input 
              type='text'
              value = {password}
              className= 'outline-none w-full py-1 px-3'
              placeholder = 'Password'  
              readOnly
              />
              <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

        </div>
        <div className ='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6} 
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLenght(e.target.value)}
            />
            <label> Length: {length}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
