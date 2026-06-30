import { mores } from "summorist-shared"
import { Component } from "react";
import { Card, Input, Button } from "sketchbook-ui";
import { type NavigateFunction } from "react-router-dom";

type State = {
	mores: mores.Meta[]
}

type Props = {
	navigate: NavigateFunction
}

export default class MoresPage extends Component<Props, State> {
	state: State = {
		mores: []
	}
	constructor(props: any) {
		super(props);
		mores.Mores.GetFiltered({}, (more) => {
			this.setState(prev => ({mores: [...prev.mores, more]}));
			console.log(more, this.state);
		}, {pathPrefix: "api"});
	}
	search = (event: React.SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const query = formData.get("query");

		this.setState({mores: []} as State);
		console.log(query)
		mores.Mores.GetFiltered({query: query?.toString()}, (more) => {
			console.log(this.state);
			console.log(more);
			this.setState(prev => ({mores: [...prev.mores, more]}));
			console.log(more, this.state);
		}, {pathPrefix: "api"});
	}
	render() {
		return (
			<>
				<form style={{display: "flex", justifyContent: "center"}} onSubmit={this.search}>
					<Input size="lg" placeholder="Find by name..." name="query"></Input>
					<Button size="sm" type="submit">Search</Button>
				</form>
				<div style={{display: "grid", gap: 24, gridTemplateColumns: "repeat(3, 260px)", padding: "80px"}}>
					{this.state.mores.map((more, i) => (
						<Card key={i} variant="sticky" onClick={() => this.props.navigate(`mores/${more.moreId}`)}>
							<h1 className="more-card-header">{more.title}</h1>
							<p style={{margin: "0 0 8px"}}>More ID: {more.moreId}</p>
							<p style={{margin: "0 0 8px"}}>Creator ID: {more.creatorId}</p>
						</Card>
					))}
				</div>
			</>
		)
	}
}
