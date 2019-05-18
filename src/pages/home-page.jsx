import React from 'react';

import BookListContainer from '../containers/book-list-container/book-list-container';
import CartTable from '../components/cart-table/cart-table';

const HomePage = () => {
    return (
        <div>
            <BookListContainer />
            <CartTable />
        </div>
    );
}

export default HomePage;