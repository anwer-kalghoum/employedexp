
import React, { Component } from 'react';

import * as RecordsAPI from '../../utils/RecordsAPI';
import Summary from './Summary';

class index extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            error: null,
            records: []
        }
    }

    componentDidMount() {
       RecordsAPI.getAll()
            .then(
                response => this.setState({
                    records: response.data,
                    isLoaded: true
                })
            ).catch(
                error => this.setState({
                    isLoaded: true,
                    error: error
                })
            )

    }

    addRecord(r) {
        let newRecords = [...this.state.records, r];
        this.setState({
            records: newRecords
        });
    }

    deleteRecord(r) {
        const recordIndex = this.state.records.indexOf(r);
        const newRecords = this.state.records.filter((record, index) => index !== recordIndex);

        this.setState({
            records: newRecords
        });
    }

    updateRecord(oldNew) {
        const recordIndex = this.state.records.indexOf(oldNew.old);
        let newRecords = this.state.records.map(
            (record, index) => {
                if (index === recordIndex) {
                    return oldNew.new;
                } else {
                    return record;
                }
            }
        );

        this.setState({
            records: newRecords
        });
    }

    credits() {
        var d = new Date();
        var n = d.getMonth();
   
        let c = this.state.records.reduce((preVal, curItem) => {
            console.log();
            if (curItem.amount > 0 && new Date(curItem.date).getMonth() === n) {
                return preVal += curItem.amount;
            } else {
                return preVal;
            }
        }, 0);
        return c;
    }

    debits() {
        return this.state.records.reduce((preVal, curItem) => {
            if (curItem.amount < 0) {
                return preVal += curItem.amount;
            } else {
                return preVal;
            }
        }, 0);
    }

    balance() {
        return this.credits() + this.debits();
    }

    render() {
        return (
            <div className="container">
                <h1> Expense Summay By month</h1>
                <br></br>
                <Summary text="Expense" type="success" amount={this.credits()} />
            </div>


        );
    }
}

export default index;
