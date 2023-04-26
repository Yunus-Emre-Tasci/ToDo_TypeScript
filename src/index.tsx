import ReactDOM from 'react-dom/client';
import App from './App';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//     <App />
// );

const root = ReactDOM.createRoot(
  document.getElementById("root")! // Non-null assertion operator used
);

root.render(<App />);


