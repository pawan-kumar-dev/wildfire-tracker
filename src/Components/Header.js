import React from 'react'
import ExploreIcon from '@material-ui/icons/Explore'
import GitHubIcon from '@material-ui/icons/GitHub'
const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ExploreIcon />
        <h5 style={{ marginLeft: '10px' }}>
          Wildfire tracker (Powered by NASA API)
        </h5>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <GitHubIcon />
        <a
          style={{
            marginLeft: '10px',
            fontSize: '15px',
            textDecoration: 'none',
          }}
          href="https://github.com/pawan-kumar-dev"
          rel="noreferrer"
          target="_blank"
        >
          follow me on github
        </a>
      </div>
    </div>
  )
}

export default Header
