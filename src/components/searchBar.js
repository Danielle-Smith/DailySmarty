import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { withRouter } from 'react-router';

class SearchBar extends Component {
    handleFormSubmit = function({query}) {
        console.log("try to handle submit query", query);
    }

    renderInput = (field) => {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />
    }

    render() {
        const {handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div>
                    <Field name="query" component={this.renderInput}/>
                </div>
            </form>
        )
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

export default SearchBar;
