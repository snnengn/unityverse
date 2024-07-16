import React from 'react'

function IlanAra({onSearch}) {
    const handleChange = (e) => {
        onSearch(e.target.value);
    };

  return (
    <div className='container mt-5'>
        <div className='d-flex flex-row p-5 bg-dark rounded'>
            <input className="form-control" type="text" placeholder="İş ara..." onChange={handleChange}></input>
        </div>
    </div>
  )
}

export default IlanAra
