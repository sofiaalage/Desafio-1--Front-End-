import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




import React from 'react';
import { Button } from './styles';

interface ButtonProps {
  text: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
  fontSize: string;
}

const ButtonTag = ({ text, height, onClick, width, fontSize }: ButtonProps) => (
  <Button>
    <button type='button' style={{ height, width, fontSize }} onClick={onClick}>
      {text}
    </button>
  </Button>
);

export default ButtonTag;