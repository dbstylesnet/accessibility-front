import React from 'react'
import PropTypes from 'prop-types'
import StatsDetails from './styles'
import StatsBox from '../StatsBox'

export const Stats = ({
    salesOverview = {
        uploads: 20,
        successfulUploads: 10,
        linesAttempted: 20,
        linesSaved: 15,
    }
}) => {
    const { uploads, successfulUploads, linesAttempted, linesSaved } = salesOverview
    const uploadCalculated =  successfulUploads / uploads * 100
    const linesCalculated = linesSaved / linesAttempted * 100
    
    return <div 
        data-testid='statsContainer'
        aria-label="Uploads and lines saved - statistics"> 
        <StatsDetails>
            <StatsBox 
                calculated={uploadCalculated} 
                description={'Upload Success'}
                data-testid='uploadsSuccessRate'
                />
            <StatsBox 
                calculated={linesCalculated} 
                description={'Lines Saved'}
                data-testid='linesSuccessRate' 
                />
        </StatsDetails>
    </div>
}

export default Stats

StatsBox.propTypes = {
    calculated: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
}
