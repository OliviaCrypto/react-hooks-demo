import React, {useState} from 'react'


export default () => {

  const [count, setCount] = useState(0)

  return <div>
    <p>Your count:{count}</p>
    <button className="huge ui secondary button" onClick={() => setCount(x => x + 1)}>
      + 1
    </button>
  </div>

}

