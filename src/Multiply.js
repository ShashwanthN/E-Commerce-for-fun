import React from 'react'

function Multiply() {

    const [multi,setMultiply] = useState();
    function Multiply(e){
        e.preventDefault()
        const a = e.tar
    }

  return (
    <div>
        <form onSubmit={(e)=>Multiply(e)}>
            <input type='number' value='a'></input>
            <input type='number' value='b'></input>
            <button>Multiply</button>
        </form>
    </div>
  )
}

export default Multiply