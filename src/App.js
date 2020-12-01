import Profile from './profile/Profile.js';
import './App.css';
import Steward from '../src/profile/Steward.jpg';



function App() {
  const handlName = () => alert('Oussema Amar')
  return (
    <div>


      <Profile FullName='Oussema Amar'  profession='Steward' bio='Welcome to my Blog' alert={handlName}>

        <img style={{ borderRadius: '5px', opacity: '80%' }} src={Steward} alt="not really me" />
       
      </Profile>


    </div>
  );
}
export default App;