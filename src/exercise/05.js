// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({size, className, style, children}) {

  const availableSizes = {
    small: 'box--small',
    medium: 'box--medium',
    large: 'box--large',
    default: ''
  };

  function boxSizeUsing(size) {
    return availableSizes[size] !== undefined ? availableSizes[size] : availableSizes['default'];
  }

  return (
    <div className={`box ${className} ${boxSizeUsing(size)}`} style={{...style, fontStyle: 'italic'}}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
