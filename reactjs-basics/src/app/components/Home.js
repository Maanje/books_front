import React from "react";

export class Home extends React.Component{
	constructor(props){						
		super();
		this.state={
			age:props.intialAge,
			status:0,
			homeLink:"Link changed"
		}
		setTimeout(()=>{
			this.setState({
				status:1
			});
		},3000);
	};

	componentWillMount(){
		console.log("Component Will Mount!");
	}
	componentDidMount(){
		console.log("Component Did Mount!");
	}
	componentWillReceiveProps(nextProps){
		console.log("Component will receive props",nextProps);
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log("Component will receive update",nextProps,nextState);
		// if(nextState.status==1){
		// 	return false;
		// }
		return true;
	}
	componentDidUpdate(prevProps,prevState){
		console.log("Component did update",prevProps,prevState);
	}
	componentWillUnmount(){
		console.log("Component will unmount!")
	}

	onMakeOlder(){
		this.setState({
			age:this.state.age+3
		});
	}
	onChangeLink(){
		this.props.changeLink(this.state.homeLink)
	}
	onHandleChange(event){

		this.setState({
			homeLink:event.target.value
		});
	}
	render() {
		return (
			<div>	
				<p>Your name is {this.props.name}, Your age is {this.state.age}</p>
				<p>Status: {this.state.status}</p>
				<hr/>
				<button onClick={()=>this.onMakeOlder()} className="btn btn-primary">Make me Older!</button>	
				<hr/>
				<button onClick={this.props.greet} className="btn btn-primary">Greet</button>
				<hr/>
				<input type="text" value={this.state.homeLink}
									onChange={(event)=>this.onHandleChange(event)}/>	
				<button onClick={()=>this.onChangeLink()} className="btn btn-primary">Change Header Link</button>
				
			</div>		
		);
	}
}
Home.propTypes={
	name:React.PropTypes.string,
	intialAge:React.PropTypes.number,
	greet:React.PropTypes.func,
	initialLinkName:React.PropTypes.string
};
