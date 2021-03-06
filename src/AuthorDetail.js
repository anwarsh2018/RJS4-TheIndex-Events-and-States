import React, { Component } from "react";

class AuthorDetail extends Component {
  render() {
    const author = this.props.author;
    const authorName = `${author.first_name} ${author.last_name}`
    return(
    <div className="author col-xs-10">
      <div>
          <h3>I {authorName}</h3>
          <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=IshouldBEanIMAGE&w=300&h=300" className="img-thumbnail"/>
      </div>
      <table className='mt-3 table'>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Authors</th>
                  <th>Color</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>I SHOULD BE A BOOK NAME</td>
                  <td>I SHOULD BE A STRING OF THIS BOOK'S AUTHORS</td>
                  <td>
                      <button className="btn" style={{backgroundColor: "blue"}}/>
                  </td>
              </tr>
              <tr>
                  <td>I SHOULD BE ANOTHER BOOK NAME</td>
                  <td>I SHOULD BE A STRING OF THIS OTHER BOOK'S AUTHORS</td>
                  <td>
                      <button className="btn" style={{backgroundColor: "red"}}/>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
);
  }
}

export default AuthorDetail;
