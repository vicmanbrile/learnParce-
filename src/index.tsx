import {render} from 'react-dom'

import './styles.css'

function App(){
		return (
		 	<h1>Hello Word</h1>
		)
}

const app = document.getElementById('app')

render(<App />, app)