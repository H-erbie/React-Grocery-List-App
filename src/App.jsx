import {useEffect, useState} from 'react';
import './App.css';
import Groceries from './Groceries.jsx';
import Alert from './Alert.jsx';

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
}

function App() {
  let emptyArray = []
  const [inputText, setInputText] = useState('');
  const [isEditting, setIsEditting] = useState(false);
  const [groceryTxt, setGroceryTxt] = useState(getLocalStorage());
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''})
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(isEditting){
      showAlert(true, 'Success', 'item changed');
      setInputText(...groceryTxt, groceryTxt[editId].title = inputText);
      console.log('edit!');
      setIsEditting(false);
      setEditId(null);
    }
    else if(!inputText){
      showAlert(true, 'error', 'Inbox is empty');
    }
    else{
      showAlert(true, 'Success', 'new item added!');
      let newItem = {id: new Date().getTime().toString(), title: inputText};
    setGroceryTxt([...groceryTxt, newItem]);    
    }
    setInputText('')
  }   
  let newGroceryItems = []
  const deleteItem = (id) => {
    showAlert(true, 'Success', 'item deleted')
    newGroceryItems = groceryTxt.filter((item) => item.id != id)
    setGroceryTxt(newGroceryItems);
}
  let toEdit = ''
const editItem = (title, index) => {
  setIsEditting(true)
  setEditId(index)
  toEdit = title;
  setInputText(toEdit); 
}
const showAlert  = (show=false, type='', msg='') => {
  setAlert({show, type, msg})
}
const clearItems = () => {
  showAlert(true, 'Success', 'items cleared')
  setGroceryTxt([])
}

useEffect(()=> {
  localStorage.setItem('list', JSON.stringify(groceryTxt))
}, [groceryTxt])
  return (
    <div className="App">
    <main className="container">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} groceryTxt={groceryTxt}/>}
        <h3>Groceries</h3>
        <div className="form-control">
        <input type="text" placeholder='enter in some groceries' value={inputText} onChange={(e) => setInputText(e.target.value)}/>
        <button className="btn" type='submit'>{isEditting ? 'edit' : '+'}</button>
        </div>
      </form>
      {
        groceryTxt.length > 0 && (
          <article className='lists'>
        <Groceries  items={groceryTxt} deleteItem={deleteItem} editItem={editItem}/>
        <button className="btn clear" onClick={() => clearItems()}>Clear all</button>
      </article>
        )
      }
    </main>
    </div>
  )
}

export default App
