import './styles/styles.scss';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import ParticlesBack from './components/Particles/ParticlesBack';

function App() {
  return (
    <div className='app'>
      <ParticlesBack />
      <Header />
      <NavMenu />
    </div>
  );
}

export default App;