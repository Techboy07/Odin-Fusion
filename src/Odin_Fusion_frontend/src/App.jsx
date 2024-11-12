import { useState } from 'react';
import { Odin_Fusion_backend } from 'declarations/Odin_Fusion_backend';

import Home from './pages/Home';

function App() {
  // const [greeting, setGreeting] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   Odin_Fusion_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  return (
    <main>
      <Home/>
    </main>
  );
}

export default App;
