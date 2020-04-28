import React from 'react';

import BidList from './components/BidList';
import ConfirmedLines from './components/ConfirmedLines';

const BidPage = (): JSX.Element => {
    return (
        <div style={{padding: '24px'}}>
            <ConfirmedLines />
            <div style={{marginTop: 50}} />
            <BidList />
        </div>
    );
};

export default BidPage;
