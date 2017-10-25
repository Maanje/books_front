import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header"
import {Home} from "./components/Home"
class App extends React.Component {
	constructor(){
		super();
		this.state={
			homeLink:"Home",
			homeMounted:true
		}
	}
	onGreet(){
		alert("Hello!");
	}
	onChangeLinkName(newName){
		console.log(newName);
		this.setState({
			homeLink:newName
		});
	}
	onChangeHomeMounted(){
		this.setState({
			homeMounted:!this.state.homeMounted
		});
	}
	render() {
		let homeCmp="";
		if (this.state.homeMounted){
			homeCmp = (
				<Home 
					name={"max"} 
					intialAge={27} 
					greet={this.onGreet}
					changeLink={(newName)=>this.onChangeLinkName(newName)}
					initialLinkName={this.state.homeLink}
					/>		
				);
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header HomeLink={this.state.homeLink}/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
							{homeCmp}
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
					<button className="btn btn-primary" onClick={()=>this.onChangeHomeMounted()}>
						(Un)Mount Home Components
					</button>
					</div>
				</div>
			</div>		
		);
	}
}

render(<App/>,window.document.getElementById("app"));

