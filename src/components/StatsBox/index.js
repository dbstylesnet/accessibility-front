import React from 'react'
import StatsBoxDetails from './styles'

export const StatsBox = ({
    calculated,
    description    
}) => {
        return <StatsBoxDetails>
            <div>{calculated} % </div>
            <div>{description}</div>
    </StatsBoxDetails>
}

export default StatsBox
