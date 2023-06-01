import React from 'react'

const FormData = ({ show }) => {
  const { name, schedule } = show;
  return (
    <>
      <div className="formSection">
        <h1>Book Your Tickets Now!</h1>
        <form className='form' action="#">
          <input type="text" name='name' placeholder="Your name" />
          <input type="email" name='email' placeholder="Your email" />
          <input type="number" name='phone' placeholder="Your phone number" />
          <input type="text" name='movie' value={`Movie Name: ${name}`} />
          <p>Show timing: {schedule.time} on {schedule.days[0]}</p>
          <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default FormData
