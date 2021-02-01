/*eslint-disable*/
import '../stylesheets/App.css';
import BookList from '../containers/BookList';
import BookForm from '../containers/BooksForm';

const App = () => (
  <div>
    <BookList />
    <BookForm />
  </div>
);
export default App;
