import { ToyReact, Component } from './ToyReact'

class MyComponent extends Component {
	render() {
		return (
			<div>
				<span>hello</span>
				<span>world</span>
        <div>
          {true}
          {this.children}
        </div>
			</div>
		)
	}
}

let a = <MyComponent name="a" id="id"><span>child</span></MyComponent>

ToyReact.render(a, document.body)
