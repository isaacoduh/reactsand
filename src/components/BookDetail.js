import React, {Component} from 'react';
import {connect} from 'react-redux';

const BookDetail = ({book}) => {
    if(!book){
        return <div>Select a Book</div>
    }
    return (
        <div>
            <h3>Details for: </h3>
            <p>
                Book: {book.title}
                <br/>
                Author: {book.author}
                <br/>
                Pages: {book.pages}
            </p>
        </div>
    );
};
const mapStateToProps = state => {
    return {book: state.selectedBook}
};

export default connect(mapStateToProps)(BookDetail);