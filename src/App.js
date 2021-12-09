import { useEffect, useState } from 'react'
const width = 8
const candyColors = ['blue', 'green', 'orange', 'purple', 'red', 'yellow']

const App = () => {
  const [currentColorArrangement,setCurrentColorArrangement] = useState([])

  const createBoard = () => {
    const randomColorArrangment = []

    for (let i = 0; i< width * width; i++){
      const randomNumberFrom0to5 = Math.floor(Math.random()*candyColors.length)
      const randomColor = candyColors[randomNumberFrom0to5]
      randomColorArrangment.push(randomColor)
    }
  
    setCurrentColorArrangement(randomColorArrangment)
  }

  useEffect(() => {
    createBoard()
  },[])

  console.log(currentColorArrangement)

  return (
    <div></div>
  );
}

export default App;
