import styled from 'styled-components'

const SalesDetails = styled.div`
  background-color: #fff;
  margin-bottom: 1px; 
  padding: 18px;
  font-size: 1.1rem;
  color: #606060;
  display: flex;
  justify-content: space-around;
  div:first-child {
    flex-grow: 1;
  }
  > span{
    color: #333333;
    margin: 20px 0 0 0;
  }
  .fa-upload {
    color: #3EB1EB;
    width: 16px;
    margin: 0 5px 0 0;
  }
  .fa-info-circle {
    color: #B7B2B3;
  }
  div div {
    margin: 20px 0 0 0;
    font-size: 0.7em;
  }
`

export default SalesDetails
