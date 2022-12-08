class RegisterForm extends React.Component {
    constructor(){
        super();
        this.state={
            fields:{},
            errors:{}
        }
        this.handleChange=this.handleChange.bind(this);
        this.submituserRegistrationForm=this.submituserRegistrationForm;
    };

    handleChange(e){
        let fields=this.state.fields;
        fields[e.target.name]=e.target.value;
        this.setState({
            fields
        });
    }

    submituserregistrationForn(e)[
        console.log(this.validateForm());
    
    
    ]
    render(){
        return(
                <div id="main-registration-container">
                    <div id="register">
                        <h3>Registration Form</h3>
                        <form method="post" name="RegistrationForm"  onSubmit={this.submituserRegistrationForm}>
                            <label>Name:</label>
                            <input type="text" name="username" placeholder="Enter your username" value={this.state.fields.username}
                            <div classname
                        </form>
                    </div>
                </div>
        );
    }
}