import styled from 'styled-components'

const AppContent = styled.div`
  display: flex;
  align-self: center;
  height: 80vh;
  padding-top: 15vh;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  background-color: #F2F2F2;
  section {
    width: 75%;
    margin: 0 12.5%;
  }
  a:focus {
    outline: auto 2px Highlight;
    outline: auto 5px -webkit-focus-ring-color;
  }
  .bold {
    font-weight: bold;
  }
`

export default AppContent
