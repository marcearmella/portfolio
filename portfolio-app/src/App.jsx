import './styles/styles.scss';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import mouse from './media/cursors/ow.png';

function App() {
  return (
    <div className='app' style={{
      cursor: "url(" + mouse + "), auto"
    }}>
      <Header />
      <NavMenu />
    </div>
  )
}

export default App