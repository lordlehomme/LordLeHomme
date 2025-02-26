import { createRoot } from 'node_modules/react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

function NavigationBar() {
  
  
  return <h1>Hello from React!</h1>;
}

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);
