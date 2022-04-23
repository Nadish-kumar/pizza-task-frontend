import React from 'react'

const Carditems = (props) => {
    return (
      <div className='row'>
          
          {
                   props. cartitems.map((obj) =>{
                          return <li
                          class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        {obj.name}
                          <span>₹{obj.price}</span>
                          <button onClick={() => (props.handleRemoveCart(obj))} className='btn btn-danger btn-small badge'>X</button>
                        </li>
            
                    })
                }
      </div>
    )
}

export default Carditems
