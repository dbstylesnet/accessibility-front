import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import SalesDetails from './styles'

export const Sales = ({
    salesOverview = {
        successfulUploads: 10,
        linesSaved: 15,
    }
}) => {
    const {successfulUploads, linesSaved} = salesOverview

    return <>
        <SalesDetails>
            <div>
                <FontAwesomeIcon icon={faUpload} title="Up sales arrow" aria-label="Icon of uploads arrow" /> <span className="bold">Sales</span>
                    <div>You had <span className="bold">{successfulUploads} uploads </span>
                    and <span className="bold">{linesSaved}</span> lines added.
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faInfoCircle} title="Hint" aria-label="Icon of tooltip with more information" />
            </div>
        </SalesDetails>
    </>
}

export default Sales
