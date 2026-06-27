import { Divider, Button, Textarea } from 'sketchbook-ui';
import 'sketchbook-ui/style.css';
import Header from './Header';
import MainPage from './MainPage';

function App() {
  return (
    <>
      <Header></Header>
      <Divider variant='dashed'></Divider>
      <MainPage></MainPage>
    </>
  );
}

export default App;
