webpackHotUpdate(0,{12:function(e,t,n){"use strict";function r(){var e=y("/app/api/slides"),t=y("/app/api/posts/all"),n=y("/app/api/music"),r=y("/app/api/service/twitter"),i=y("/app/api/service/instagram");return v.all([e,t,n,r,i]).then(function(e){var t=o(e),n=t[0],r=t[1],i=t[2],a=t[3],s=t[4];return v.fcall(function(){var e=r.data.stories,t=r.data.gallery,o="#ffffff";return{slides:n.data.filter(function(e){return e.media&&(u()?"image"===e.media.type:!0)}).map(function(e){return{id:e.id,title:e.title,align:e.align,category:e.category.title,text:e.text,author:e.author,ext:e.ext,categoryColor:e.color_category||o,titleColor:e.color_title||o,textColor:e.color_text||o,authorColor:e.color_author||o,linkType:e.link_type,linkUrl:e.link_url,linkText:e.link_text,linkColor:e.color_link||o,media:e.media}}),stories:e.posts.map(function(e){return{id:e.id,title:e.title,slug:e.slug,preview:e.description,ext:e.ext,img:e.media?g.join(e.media.content,e.media.thumbnail):null,author:e.author,media:e.media}}),gallery:t.posts.map(function(e){return{id:e.id,title:e.title,slug:e.slug,preview:e.description,ext:e.ext,img:e.media?g.join(e.media.content,e.media.name):null,date:M(e.create_date).format("L")}}),music:i.data.map(function(e){return{id:e.id,title:e.name,slug:e.slug,embed:e.content,date:M(e.create_date).format("L")}}),twitter:{lastTweet:a.data[0].text,id:a.data[0].id_str},instagram:s.data.data.filter(function(e){return"image"===e.type}).map(function(e){return{id:e.id,img:e.images.standard_resolution.url,source:e.link}})}})})}var o=function(e){return Array.isArray(e)?e:Array.from(e)},i=n(3),a=n(41),s=a.first,u=(a.range,a.isMobile),l=n(45),c=n(47),d=n(48),p=(n(57),n(50)),h=n(49),f=(n(55),n(56)),m=n(5),_=(m.Link,n(154),n(51)),y=n(42),v=n(87),g=n(75),M=n(86),L=n(46),w=n(43);n(79);var b=i.createClass({displayName:"Home",mixins:[_(r)],statics:{willTransitionFrom:function(){L.set("/")}},componentDidMount:function(){var e=L.get();w({}),"/"===e.path&&setTimeout(function(){return window.scrollTo(0,e.scroll)},0)},render:function(){var e=this.props.store.getStore(),t=s(4,e.stories).map(function(e){return i.createElement(c,i.__spread({key:e.id},e))});return s(2,e.gallery).map(function(e){return i.createElement(d,i.__spread({key:e.id},e))}),s(21,e.instagram).map(function(e){return i.createElement(p,i.__spread({key:e.id},e))}),s(3,e.music).map(function(e){return i.createElement(h,i.__spread({key:e.id},e))}),i.createElement("div",{className:"home"},i.createElement(f,{slides:e.slides}),i.createElement("div",{className:"home__wrapper"},i.createElement("div",{className:"home__sections"},i.createElement(l,{title:"Stories",link:"/stories"},t))))}});e.exports=b}});