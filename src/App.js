import './App.css';
import Header from './Header';
import Body from './Body';


const App = () => {
  const items = [
    {
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q0FSfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      description: 'Haught or Naught',
      semiDescription: 'High Minded or Absent Minded? You decide?',
      serialNo : 1,
      field: 'Submitted By:',
      picture : 'https://cdn-icons-png.flaticon.com/512/4086/4086679.png'
    },
    {
      image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENBUnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'SuperMajority: The Fantasy Congress League',
      semiDescription : 'Earn points when your favourite politicians pass legislature',
      serialNo : 2,
      field: 'Submitted By: ',
      picture : 'https://cdn-icons-png.flaticon.com/512/2335/2335114.png'
    },
    {
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENBUnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'Yellow Pail',
      semiDescription : 'On-Demand sand castle construction expertise.',
      serialNo : 3,
      field: 'Submitted By: ',
      picture : 'https://cdn-icons-png.flaticon.com/512/1864/1864593.png'
    },
    // Add more objects as needed
  ];
  return (
    <div className="App">
      <Header />
      <Body items={items}/>
    </div>
  );
}

export default App;
