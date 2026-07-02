import { useEffect, useState } from 'react';
// import { db } from './firebase'; // Import the db we exported earlier
import { collection, getDocs } from 'firebase/firestore'; 
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example: Fetching a collection called 'users' from Firestore
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => `, doc.data());
      });
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Firebase is connected!</h1>
      {loading ? <p>Loading data...</p> : <p>Data logged to console.</p>}
    </>
  );
}

export default App;