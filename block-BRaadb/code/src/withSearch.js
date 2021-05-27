import React from 'react';

function withSearch(WrappedComponent) {
  return class extends React.Component {
    state = {
      searchTerm: '',
    };
    handleChange = ({ target: { value } }) => {
      this.setState({ searchTerm: value });
    };
    render() {
      return (
        <div>
          <div>
            <input
              placeholder="Search"
              className="search"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </div>
          <WrappedComponent searchTerm={this.state.searchTerm} />
        </div>
      );
    }
  };
}

export default withSearch;
