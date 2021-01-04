import styled from 'styled-components'

const AccountHeader = styled.div`
  display: flex;
  height: 105px;
  p {
    margin-top: 0;
  }
  h3 {
    margin: 0 20px 0 0;
    font-size: .6em;
    font-weight: normal;
    color: #484446;
    padding: 20px 0 0 0;
    flex-grow: 1;
  }
  .support-contact {
    color: #9B9898;
    font-weight: bolder;
    font-size: 0.8rem;
    flex-basis: 350px;
    div {
      .support-letter {
        font-weight: bold;
        border-radius: 3px;
        background: #F9CF03;
        width: 40px;
        height: 40px;
        line-height: 40px;
        color: #000;
        text-align: center;
        float: left;
        margin: 0 10px 0 0;
        font-size: .9rem;
      }
    }
  }
  @media only screen and (max-width: 650px) {
    .support-contact {
      flex-basis: 410px;
    }
  }
`

export default AccountHeader
