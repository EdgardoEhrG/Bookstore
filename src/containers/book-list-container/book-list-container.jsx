import React, { Component } from 'react';
import { connect } from 'react-redux';

import './book-list-container.scss';

import BookList from '../../components/book-list/book-list';
import Loader from '../../components/loader/loader';
import ErrorIndicator from '../../components/error-indicator/error-indicator';

import withService from '../../helpers/with-service';
import { fetchBooks, bookAddedToCart } from '../../store/actions';
import compose from '../../utils/compose';

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return <Loader />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books} onAddedToCart={onAddedToCart} />
    }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
   return {
       fetchBooks: fetchBooks(bookstoreService, dispatch),
       onAddedToCart: (id) => dispatch(bookAddedToCart(id))
   }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
