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
    const { collapsed } = this.state;

    const navClass = collapsed ? "" : "is-active";

    return (
      <section class="hero is-dark is-bold">
        <div class="hero-head">
          <div class="container">
            <nav class="nav">
              <div class="nav-left">
                <a class="nav-item is-brand" href="/">
                  movie404
                </a>
              </div>

              <div class="nav-center">
                <a class="nav-item" href="https://github.com/jgthms/bulma">
                  <span class="icon">
                    <i class="fa fa-github"/>
                  </span>
                </a>
                <a class="nav-item" href="https://twitter.com/jgthms">
                  <span class="icon">
                    <i class="fa fa-twitter"/>
                  </span>
                </a>
              </div>

              <span id="nav-toggle" class={`nav-toggle ${navClass}`}
                onClick={this.toggleCollapse.bind(this)}>
                <span/>
                <span/>
                <span/>
              </span>

              <div id="nav-menu" class={`nav-right nav-menu ${navClass}`}>
                <a class="nav-item is-active">
                  Home
                </a>
                <a class="nav-item">
                  Examples
                </a>
                <a class="nav-item">
                  Documentation
                </a>
                <span class="nav-item">
                  <a class="button is-dark is-inverted">
                    <span class="icon">
                      <i class="fa fa-github"/>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </nav>
          </div>
        </div>

        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column">
                <p class="title">
                  Documentation
                </p>
                <p class="subtitle">
                  Everything you need to <strong>create a website</strong> with Bulma
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
