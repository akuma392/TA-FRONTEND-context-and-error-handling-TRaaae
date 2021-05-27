import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import articles from './data/articles.json';
import withSearch from './withSearch';

class Articles extends React.Component {
  // state = {
  //   searchTerm: '',
  // };
  // handleChange = ({ target: { value } }) => {
  //   this.setState({ searchTerm: value });
  // };
  render() {
    let { searchTerm } = this.props;
    // let filteredArticles = articles.filter((article) =>
    //   article.title.toLowerCase().includes(this.state.searchTerm)
    // );
    let filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm)
    );
    return (
      <>
        {/* <input
          placeholder="Search"
          className="search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        /> */}
        <ul className="articles">
          {filteredArticles.map((article) => (
            <li>
              <Link to={'articles/' + article.slug}>
                <h3>{article.title}</h3>
              </Link>
              <small>{article.author}</small>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

// export default withRouter(Articles);
export default withSearch(Articles);
