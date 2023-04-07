import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from '../firebaseConfig';
import Footer from './components/Footer';
import Header from './components/Header';
import { Item } from './components/Item';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsubscribe = onValue(ref(database, '/data'), (snapshot) => {
      const response = snapshot.val();
      const dataprev = [];
      for (const property in response) {
        dataprev.push(response[property]);
      }
      setData(dataprev);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(data);

  return (
    <div className='main-container'>
      <Header />
      <div className='content-container'>
        {data.map((item, index) => (
          <Item title={item} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
