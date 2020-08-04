import React, { Component } from 'react';
import * as RecordsAPI from '../../utils/RecordsAPI';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            "date": "",
            "name": "",
            "description": "",
            "amount": ""
        }
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        let obj = {}
        obj["" + name] = value;

        this.setState((obj));
    }

    handleSubmit(event) {
        event.preventDefault();
        const entry = {
            id: Number.parseInt(this.state.amount, 0),
            date: this.state.date,
            name: this.state.name,
            description: this.state.description,
            amount: Number.parseInt(this.state.amount, 0)
        };

        console.log(entry);

        RecordsAPI.create(entry)
        this.setState({
            date: "",
            name: "",
            description: "",
            amount: ""
        });

    }

    valid() {
        return this.state.date && this.state.name && this.state.description && this.state.amount;
    }

    render() {
        return (
            <div>    <h1>Add new Expense</h1>
                <br></br>
                <form className="" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group mr-1">
                        <input type="date" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Date" name="date" value={this.state.date} />
                    </div>

                    <div className="form-group mr-1">
                        <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Name" name="name" value={this.state.name} />
                    </div>

                    <div className="form-group mr-1">
                        <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Description" name="description" value={this.state.description} />
                    </div>

                    <div className="form-group mr-1">
                        <input type="number" min="1" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Amount" name="amount" value={this.state.amount} />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!this.valid()}> Create Expense</button>
                </form>
            </div>
        );
    }
}


export default Form;
