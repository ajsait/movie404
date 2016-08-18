import React from "react";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    return (
      <nav class="uk-navbar uk-margin-large-bottom">
        <a class="uk-navbar-brand uk-hidden-small" href="layouts_frontpage.html">Brand</a>
        <ul class="uk-navbar-nav uk-hidden-small">
            <li>
                <a href="layouts_frontpage.html">Frontpage</a>
            </li>
            <li class="uk-active">
                <a href="layouts_portfolio.html">Portfolio</a>
            </li>
            <li>
                <a href="layouts_blog.html">Blog</a>
            </li>
            <li>
                <a href="layouts_documentation.html">Documentation</a>
            </li>
            <li>
                <a href="layouts_contact.html">Contact</a>
            </li>
            <li>
                <a href="layouts_login.html">Login</a>
            </li>
        </ul>
        <a href="#offcanvas" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas=""/>
        <div class="uk-navbar-brand uk-navbar-center uk-visible-small">Brand</div>
    </nav>
    );
  }
}
