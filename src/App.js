import { useState } from 'react';
import "./App.css";

function BooksManagementForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [records, setRecords] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecord = { title, author, isbn };
    setRecords([...records, newRecord]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  };

  return (
    <div className="APP">
    <div class = "title">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <br></br>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className= "author">
          <label htmlFor="Author">Author:</label>
          <br></br>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <div className="isbn">
          <label htmlFor="isbn">ISBN:</label>
          <br></br>
          <input
            type="text"
            id="isbn"
            value={isbn}
            onChange={(event) => setIsbn(event.target.value)}
            
          />
        </div>
        <br></br>
        <button type="submit">Add Record</button>
      </form>
      <div className= "records">
        <h2>Records:</h2>
        {records.length > 0 ? (
          <div className="display">
          <table>
            <thead>
              <tr>
              
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.title}</td>
                  <td>{record.author}</td>
                  <td>{record.isbn}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        ) : (
          <p>No records yet.</p>
          
        )}
        {records.length > 0 && (
          <div>
            <button onClick={() => setRecords([])}>Remove All</button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default BooksManagementForm;