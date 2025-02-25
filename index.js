// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-blue; icon-glyph: magic;
import { createRoot } from 'react-dom/client';

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
