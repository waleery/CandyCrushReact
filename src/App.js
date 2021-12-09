import { useEffect, useState } from 'react'
const width = 8
const candyColors = ['blue', 'green', 'orange', 'purple', 'red', 'yellow']

const App = () => {
  const [currentColorArrangement,setCurrentColorArrangement] = useState([])

  const checkForColumnOfThree = () =>{
    for(let i=0; i<47 ; i++){
      const columnOfThree = [i, i+width, i+width*2]
      const decidedColor = currentColorArrangement[i]

      if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor)){
        columnOfThree.forEach(square => currentColorArrangement[square] = '')
      }
    }
  }
  
  
  
  
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

  useEffect(() => {
   const timer  = setInterval(() =>{
    checkForColumnOfThree()
    setCurrentColorArrangement([...currentColorArrangement])
    },100)
    return () => clearInterval(timer)
  }, [checkForColumnOfThree, currentColorArrangement])

  console.log(currentColorArrangement)

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img
            key= {index}
            style= {{backgroundColor: candyColor}}
            alt = {candyColor}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
