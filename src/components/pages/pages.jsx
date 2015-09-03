var React = require('react'),
  {debounce, showFooter} = require('../../lib/helpers'),
  changeMeta = require('../../lib/changeMeta');

require('./pages.styl');

var Pages = React.createClass({
  refreshPage() {
    try {
      location.reload();
    } catch(e) {}
  },

  changeMeta() {
    changeMeta({
      title: this.props.meta.title
    });
  },

  componentDidMount() {
    this.infiniteScroll();

    this.changeMeta();

    if (!this.isStopped()) {
      showFooter(false);
    }
    window.addEventListener('scroll', this.infiniteScroll);
  },

  componentDidUpdate(prevProps) {
    this.changeMeta();

    if (prevProps.stopped !== this.props.stopped && this.isStopped()) {
      showFooter(true);
    }
  },

  componentWillUnmount() {
    if (!this.isStopped()) {
      showFooter(true);
    }

    window.removeEventListener('scroll', this.infiniteScroll);
  },

  isStopped() {
    return this.props.stopped === true || (this.props.stopped === null || this.props.stopped === undefined);
  },

  infiniteScroll: debounce(function() {
    if (this.props.infiniteScroll && this.isMounted()) {
      var content = this.refs.content.getDOMNode();
      if ((content.offsetTop + content.offsetHeight) <= (window.scrollY + window.innerHeight)) {
        typeof this.props.onScroll === 'function' && this.props.onScroll();
      }
    }
  }, 400),

  render() {
    var contentStyle = 'pages__content';

    if (this.props.tinyContent) contentStyle += ' pages__content--tiny';

    return (
      <div className={`pages${this.props.stopped ? ' pages--stopped' : ''}`}>
        <div className="pages__category">
          <div className="pages__category-wrapper">
            <div className="pages__category-image-wrapper" onClick={this.refreshPage}>
              <img className="pages__category-image" src={this.props.categoryImg} style={this.props.categoryImgBg ? null : {background: '#333336'}} alt="" />
                      {this.props.categoryImgBg && <img className="pages__category-image-background" src={this.props.categoryImgBg} alt="" />}
            </div>
            <div className={`pages__category-text${this.props.extra ? ' pages__category-text--extra' : ''}`}></div>
          </div>
        </div>
        <div className={contentStyle} ref="content">
          {this.props.children}
        </div>
        <div className={`pages__loading${this.props.infiniteScroll && ' pages__loading--active'}`}></div>
      </div>
    );
  }
});

module.exports = Pages;