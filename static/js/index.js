// global
import ReactDom from 'react-dom';
import Routes from './routes';

// render
const root = document.createElement('div');
root.style.cssText = 'width:100%;height:100%;overflow:hidden;';
document.body.appendChild(root);

ReactDom.render(
	Routes,
	root
);