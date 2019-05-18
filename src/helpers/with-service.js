import React from 'react';

import { Consumer } from '../components/context/context';

const withService = () => (Wrapped) => {
    return (props) => {
        return (
            <Consumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped {... props} bookstoreService={bookstoreService} />
                        );
                    }
                }
            </Consumer>
        )
    }
}

export default withService;