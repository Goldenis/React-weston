var React = require('react');

require('./home-social.styl');

var info = [
  {
    id: 0,
    title: 'Email',
    link: 'mailto:weston@wjpstudio.com',
    linkText: 'weston@wjpstudio.com',
    img: require('../images/email.svg')
  },
  {
    id: 1,
    title: 'Talk on Twitter',
    link: 'https://twitter.com/westonjamesp',
    linkText: '@westonjamesp',
    img: require('../images/twitter.svg')
  },
  {
    id: 2,
    title: 'Life on Instagram',
    link: 'http://instagram.com/westonjamespalmer',
    linkText: '@westonjamespalmer',
    img: require('../images/inst.svg')
  },
  {
    id: 7,
    title: 'Unedited on Snapchat',
    linkText: '@westonjamespalmer',
    img: require('../images/snapchat.svg'),
    customSize: {
      width: 23,
      height: 21
    }
  },
  {
    id: 3,
    title: 'Randomness on Phhhoto',
    link: 'http://phhhoto.com/westonjamespalmer',
    linkText: '@westonjamespalmer',
    img: require('../images/phhh.svg')
  },
  {
    id: 4,
    title: 'Listen on SoundCloud',
    link: 'https://soundcloud.com/westonjamespalmer',
    linkText: '@westonjamespalmer',
    img: require('../images/SoundCloud.svg')
  },
  {
    id: 5,
    title: 'Watch on Vimeo',
    link: 'http://vimeo.com/westonjamespalmer',
    linkText: '@westonjamespalmer',
    img: require('../images/Vimeo.svg')
  },
  {
    id: 6,
    title: 'Watch on Youtube',
    link: 'http://www.youtube.com/channel/UCBb3XxIWJvM-k6MsO5mvDew',
    linkText: '@westonjamespalmer',
    img: require('../images/YouTube.svg')
  }
];

var HomeSocial = React.createClass({
  render() {
    var blocks = info.map(item => <HomeSocialBlock key={item.id} {...item} />);

    return (
      <div className="home-social">
        {blocks}
      </div>
    );
  }
});

var HomeSocialBlock = React.createClass({
  render() {
    var LinkComponent = this.props.link ? 'a' : 'span';

    return (
      <div className="home-social__block">
        <div className="home-social__block-title">{this.props.title}</div>
        <LinkComponent className="home-social__link" href={this.props.link} target="_blank">{this.props.linkText}</LinkComponent>
        <div className="home-social__img" style={this.props.customSize}>
          <img src={this.props.img} alt="" />
        </div>
      </div>
    );
  }
});

module.exports = HomeSocial;