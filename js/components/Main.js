import React from 'react';
import API from '../API';
import LinkStore from '../stores/LinkStore';

let _getAppSate = () => {
	return { links: LinkStore.getAll() }
}

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = _getAppSate();
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		API.fetchLinks();
		LinkStore.on('change', this.onChange);
	}
	componentWillUnmount() {
		LinkStore.removeListener('change', this.onChange);
	}
	onChange() {
		this.setState(_getAppSate());
	}
	render() {
		let content = this.state.links.map(link => {
			return <li key={ link._id }>
						<a href={link.url}>{link.title}</a>
					</li>
		})
		return (
			<div>
				<h3>Links</h3>
				<ul>
					{content}
				</ul>
			</div>
		);
	}
}