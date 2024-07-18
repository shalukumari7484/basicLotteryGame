import Lottery from './Lottery'
import './App.css'
import Ticket from './Ticket'
import { sum } from './helper'

function App() {
  
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  }

  return (
    <>
    <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
