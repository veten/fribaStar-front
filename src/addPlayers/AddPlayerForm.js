import React from 'react';

class AddPlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"name" : ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({"name" : event.target.value});
    }

    handleReset(event) {
        this.setState({"name" : ''});
    }

    handleSubmit(event) {
        event.preventDefault();
        if('' != this.state.name) {
            this.props.handleSubmit(this.state.name);
            this.setState({"name" : ''});
        }
    }

    //TODO: FIX RESET
    render() {
        const styleInline = {
                display : "inline"
        };

        return (
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
            <label>
                Nimi:
                <input type="text" value={this.state.name} onChange={this.handleChange} />
            </label>
            <div>
                <input type="submit" value="UUSI PELAAJA" className="btn btn-primary" style={{"marginRight": '10px'}}/>
                <input type="reset" value="TYHJENNÄ NIMI" className="btn btn-primary" />
            </div>
            </form>
        );
    }
}

export default AddPlayerForm
