import Navbar from './Components/Navbar';
import Main from './Components/Main';

function App() {
  let variable = "navbar";
  return (
    <>
     <Navbar title={variable}/>
     <Main />
    </>
  );
}

export default App;
