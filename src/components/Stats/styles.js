import styled from 'styled-components'

const StatsDetails = styled.div`
  display: flex;
  div:first-child {
    margin-right: 1px;
  }
  div {
    font-size: 1em;
  }
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    div:first-child {
      margin-right: 0px;
      margin-bottom: 1px;
    }
  }
`

export default StatsDetails
