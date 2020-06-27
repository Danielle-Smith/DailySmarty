import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';

class SearchBar extends Component {
    handleFormSubmit = function({query}) {
        this.props.onSubmit(query);
    }

    renderInput = (field) => {
        return( 
            <div className="search-bar">
                <div className="search-bar__wrapper">
                    <input type="text" placeholder="Search DailySmarty" {...field.input} />
                    <p>Press return to search</p>
                </div>
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;
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

SearchBar = withRouter(SearchBar);

export default SearchBar;
