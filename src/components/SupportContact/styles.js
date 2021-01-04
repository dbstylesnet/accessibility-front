import styled from 'styled-components'

const SupportContactDetails = styled.div`
  font-weight: bold;
  color: #606060;
  .contact-wrapper {
    margin: 4px 0 0;
  }
  .fa-envelope {
    width: 17px;
    margin: 3px 7px 0 0;
    float: left;
  }
  a {
    color: #606060;
    text-decoration: none;
    margin: 0
  }
  a:hover, a:active, a:visited {
    text-decoration: underline;
  }
  a.phone {
    display: inline-block;
    margin: 3px 0 0 26px;
  }
`

export default SupportContactDetails
