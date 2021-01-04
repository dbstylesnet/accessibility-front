import React from 'react'
import SupportContactDetails from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const SupportContact = ({
   supportContact 
}) => {
    const { name, email } = supportContact

    return <SupportContactDetails>
        <div>
            <div>{name}</div>
            <div className="contact-wrapper">
                <FontAwesomeIcon icon={faEnvelope} title="Envelope icon" />
                <div className="contact-links">
                    <a href={`mailto:${email}`} title="E-mail supporter" aria-label={`E-mail ${name}`}>{email}</a>
                    <a href="tel:02033624208" className="phone" title="Call supporter" aria-label={`Call ${name}`}>020 3362 4208</a>
                </div>
            </div>
        </div>
    </SupportContactDetails>
}

export default SupportContact
