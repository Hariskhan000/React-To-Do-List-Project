import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';


const App = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])

  //  here is submit functionality

  const submithandler = (e) => {
    e.preventDefault();
    setMainTask([...MainTask, { title, desc }])
    settitle("");
    setdesc("");
    // console.log(MainTask);
  }
  // here is delete functionality

  const deletehandler = (i) => {
    let copytask = [...MainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }

  let rendortask = <h2>No Task Available</h2>
  if (MainTask.length > 0) {
    rendortask = MainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between w-2/4'>
            <h5 className='text-2xl  text-black font-semibold'>{t.title}</h5>
            <h6 className='text-2xl  text-black font-semibold'>{t.desc}</h6>
          </div>
          <MdDelete
            className='text-black-400 cursor-pointer'
            size={30}
            onClick={() => deletehandler(i)}
          />
        </li>
      )
    })
  }
  return (
    <>
      <h1 className="bg-black text-center font-bold text-white text-5xl py-4">Haris-Todo-List</h1>
      <form onSubmit={submithandler} className='text-center mt-5'>
        <input type="text" className='border-4 text-2xl border-zinc-800  font-bold m-8 p-3  rounded-md' placeholder='Enter Title Here....' value={title} onChange={(e) => { settitle(e.target.value) }} />
        <input type="text" className='border-4 text-2xl border-zinc-800  font-bold m-8 p-3  rounded-md' placeholder='Enter Description Here....' value={desc} onChange={(e) => { setdesc(e.target.value) }} />
        <button className='bg-black text-2xl text-white text-1xl py-3 px-4 m-8 font-bold rounded-md'>Add Task</button>
      </form>
      <br />
      <div className='p-5 bg-slate-300 text-2xl text-center'>
        <ul>
          {rendortask}
        </ul>
      </div>
    </>
  )
}



export default App