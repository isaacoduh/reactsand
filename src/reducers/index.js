import {combineReducers} from 'redux';

const booksReducer = () => {
    return[
        {title: 'Harry Potter and the Deathly Hallows', author: 'J K Rowling', pages: '607'},
        {title: 'Red', author: 'Ted Dekker', pages: '400'},
        {title: 'Americanah', author: 'Chimamanda Ngozi Adichie', pages: '200'},
        {title: 'A Thousand Splendid Suns', author: 'Khalid Hosseini', pages: '384'}
    ];
};

const selectedBookReducer = (selectedBook = null, action) => {
    if(action.type === 'BOOK_SELECTED'){
        return action.payload;
    }
    return selectedBook;
};

export default combineReducers({books: booksReducer, selectedBook: selectedBookReducer})