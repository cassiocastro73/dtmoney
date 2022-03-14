import { GlobalStyle } from './styles/global'
import { Header } from './components/Header/index'
import Dashboard from './components/Dashboard';

export function App() {
  return (
    <>
      <Header></Header>
      <Dashboard />
     <GlobalStyle />
    </>
  );
}

export default App;
