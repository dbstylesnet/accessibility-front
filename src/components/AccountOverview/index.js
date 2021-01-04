import React from 'react'
import AccountHeader from './styles'
import SupportContact from '../SupportContact'
import Sales from '../Sales'
import Stats from '../Stats'
import PropTypes from 'prop-types';
export const AccountOverview = ({
    data = {
        supportContact: {
            name: 'Name',
            email: 'name@feefo.com'
        },
        salesOverview: {
            uploads: 0,
            successfulUploads: 0,
            linesAttempted: 0,
            linesSaved: 0,
            lastUploadDate: 0,
        }
    }
}) => {
    const {salesOverview, supportContact} = data

    return data !== 'undefined' ? <section role="complementary">
        <AccountHeader>
            <h3>Account Overview</h3>
            <div className="support-contact">
                <p>YOUR FEEFO SUPPORT CONTACT</p>
                <div className='support-wrapper'>
                    <div className='support-letter'>S</div>
                    <SupportContact supportContact={supportContact} />
                </div>
            </div>    
        </AccountHeader>
        <Sales salesOverview={salesOverview} />
        <Stats salesOverview={salesOverview} />
    </section> : 'Loading'
}
export default AccountOverview

SupportContact.propTypes = {
    supportContact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired
}

Sales.propTypes = {
    salesOverview: PropTypes.shape({
        uploads: PropTypes.number.isRequired,
        successfulUploads: PropTypes.number.isRequired,
    }).isRequired
}

Stats.propTypes = {
    salesOverview: PropTypes.shape({
        linesAttempted: PropTypes.number.isRequired,
        linesSaved: PropTypes.number.isRequired,
    }).isRequired
}
