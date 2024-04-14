import React from 'react'

const Contact = () => {
  return (
    <div className='p-4 m-4 text-center'>
      <h1 className='font-bold'>Contact</h1>
      <p>you can contact me on <i>vinodkumar.nelanakula@gmail.com</i></p>
      <form>
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="message"
        />
        <button className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact