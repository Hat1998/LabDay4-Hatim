import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Box} from '@chakra-ui/react'
import './App.css'
import GetData from './components/get'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <GetData/>
      
    </Box>
  )
}

export default App
