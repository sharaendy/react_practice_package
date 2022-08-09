import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(<App />);
