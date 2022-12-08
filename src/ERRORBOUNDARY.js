import { render } from "@testing-library/react";
import React from "react";

export class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={error:null,errorInfo: null};
    }
    componentDidCatch(error,errorInfo){
        this.setState({
            error:error,
            errorInfo: errorInfo
        })
    }
render(){
    if(this.state.errorInfo){
        return(
            <div>
                <h2>An Error Has Occured</h2>
                <details>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
        );
    }
    return this.props.children;
}
}
export default ErrorBoundary;