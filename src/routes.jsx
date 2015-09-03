var React = require('react'),
  Router = require('react-router'),
  {Route, DefaultRoute, NotFoundRoute} = Router,
  Base = require('./components/base/base.jsx'),
  Home = require('./components/home/home.jsx'),
  StoriesPage = require('./components/pages/stories-page.jsx'),
  GalleryPage = require('./components/pages/gallery-page.jsx'),
  SearchPage = require('./components/pages/search-page.jsx'),
  MusicPage = require('./components/pages/music-page.jsx'),
  //PhhhotoPage = require('./components/pages/phhhoto-page.jsx'),
  //ShopPage = require('./components/pages/shop-page.jsx'),
  //ShopPageFeatured = require('./components/pages/shop-page-featured.jsx'),
  //ShopPageCategory = require('./components/pages/shop-page-category.jsx'),
  InstagramPage = require('./components/pages/instagram-page.jsx'),
  StorySingle = require('./components/single-page/story-single.jsx'),
  GallerySingle = require('./components/single-page/gallery-single.jsx'),
  MusicSingle = require('./components/single-page/music-single.jsx'),
  PreviewSingle = require('./components/single-page/preview-single.jsx'),
  NotFound = require('./components/not-found.jsx'),
  Terms = require('./components/single-page/custom-pages/terms.jsx'),
  Careers = require('./components/single-page/custom-pages/careers.jsx'),
  ReturnPolicy = require('./components/single-page/custom-pages/return-policy.jsx'),
  ShippingInfo = require('./components/single-page/custom-pages/shipping-info.jsx'),
  Faq = require('./components/single-page/custom-pages/faq.jsx'),
  Contact = require('./components/single-page/custom-pages/contact.jsx'),
  About = require('./components/single-page/custom-pages/about.jsx');

var Routes = (
  <Route handler={Base} path="/">
    <Route name="stories" handler={StoriesPage} />
    <Route name="gallery" handler={GalleryPage} />
    <Route name="music" handler={MusicPage} />
    <Route name="instagram" handler={InstagramPage} />
    <Route name="search" handler={SearchPage} />
    <Route path="/stories/:slug" handler={StorySingle} />
    <Route path="/gallery/:slug" handler={GallerySingle} />
    <Route path="/music/:slug" handler={MusicSingle} />
    <Route name="terms" handler={Terms} />
    <Route name="careers" handler={Careers} />
    <Route name="return-policy" handler={ReturnPolicy} />
    <Route name="shipping-info" handler={ShippingInfo} />
    <Route name="faq" handler={Faq} />
    <Route name="contact" handler={Contact} />
    <Route name="about" handler={About} />
    <Route name="/preview/:slug" handler={PreviewSingle} />
    <DefaultRoute handler={Home} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

module.exports = Routes;