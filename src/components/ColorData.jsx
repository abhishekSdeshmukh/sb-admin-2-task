import React from 'react'

const ColorData = () => {
    const ColorData = [
        { name: 'Primary', code: '#4e73df', background: 'bg-primary'},
        { name:'Success', code: '#1cc88a', background: 'bg-success'},
        { name:'Info', code: '#36b9cc', background: 'bg-info'},
        { name:'Warning', code: '#f6c23e', background: 'bg-warning'},
        { name:'Danger', code: '#e74a3b', background: 'bg-danger'},
        { name:'Secondary', code: '#858796', background: 'bg-secondary'},
        { name:'Light', code: '#f8f9fc', background: 'bg-light'},
        { name:'Dark', code: '#5a5c69', background: 'bg-dark'}
    ]

  return (
    <div className='row'>
        {ColorData.map((color,index) =>(
          <div key={index}  className='col-lg-6 mb-4'>
            <div className={`card ${color.background} text-white shadow`}>
                <div className='card-body'>
                <div className={`text-${color.name === 'Light' ? 'dark' : 'white'}  mb-2`}>
                {color.name}
              </div>
                    <div className={`text-${color.name === 'Light' ? 'dark' : 'white'} small`}>{color.code}</div>
                </div>
            </div>
          </div>  
        ))

        }
    </div>
  )
}

export default ColorData