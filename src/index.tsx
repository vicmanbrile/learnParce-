import * as React from 'react'
import {render} from 'react-dom'

import './styles.css'

class App extends React.Component{
	render() {
		return(
			<h1>Hello Word</h1>
		)
	}
}

const app = document.getElementById('app')

render(<App />, app)