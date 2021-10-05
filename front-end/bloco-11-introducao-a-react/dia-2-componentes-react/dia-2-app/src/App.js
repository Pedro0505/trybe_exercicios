import Greeting from './Greeting';
import Image from './Cat'

function App() {
  return (
    <main>
      <Greeting name="Samuel" lastName="Silva" />
      <Image source={'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'} alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;
