(this["webpackJsonppic-gallery"]=this["webpackJsonppic-gallery"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/space.bde89f90.jpg"},18:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(1),l=a(2),i=a(4),r=a(3),c=a(5),m=(a(27),a(17)),u=a.n(m),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"search-container"},s.a.createElement("div",{id:"background"}),s.a.createElement("img",{src:u.a,alt:"search-back"}),s.a.createElement("div",{className:"search-bar-area"},s.a.createElement("span",null,"My Unsplash API"),s.a.createElement("div",null,s.a.createElement("input",{type:"text",className:"search-bar search-bar-text",placeholder:"Search Images",onKeyUp:this.props.onKeypress}))))}}]),t}(n.Component),p=a(8),h=a(7),f=a.n(h),g=(a(42),function(e){var t=e.user,a=e.onMouseOver,n=void 0!==a&&a,o=e.link,l=e.download;t||(t={profile_image:{large:""},username:""});return s.a.createElement("div",{className:"image-buttons-container ".concat(!1===n?"hidden":"visible")},s.a.createElement("div",{className:"image-shadow"}),s.a.createElement("div",{className:"image-buttons image-buttons-top"},s.a.createElement("button",{className:"fas fa-heart"}),s.a.createElement("button",{className:"fas fa-plus"}," Collect")),s.a.createElement("div",{className:"image-buttons image-buttons-bottom"},s.a.createElement("span",{className:"image-buttons-profile"},s.a.createElement("div",null,s.a.createElement("img",{src:t.profile_image.large,alt:t.username})),s.a.createElement("div",{className:"image-buttons-profile-username"},t.username)),s.a.createElement("button",{onClick:function(e){e.stopPropagation(),l(o)},className:"fas fa-arrow-down"})))}),v=(a(43),function(e){function t(e){var a,n=e.props;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,n))).submitInfo=function(){a.props.onClick(a.props.src,a.props.user,a.props.img,a.props.download,a.props.link)},a.onMouseOver=function(){a.setState({hover:!0})},a.onMouseLeave=function(){a.setState({hover:!1})},a.state={hover:!1},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"picture show-up"},s.a.createElement("a",{href:"#none",onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseLeave,onClick:this.submitInfo},s.a.createElement("img",{className:"unsplash-img",src:this.props.src.regular,alt:""}),s.a.createElement(g,{user:this.props.user,onMouseOver:this.state.hover,link:this.props.link,download:this.props.download})))}}]),t}(n.Component)),E=(a(44),function(e){function t(e){var a,n=e.props;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,n))).changeModalImg=function(){!0===a.state.isSmall?a.setState({isSmall:!1}):a.setState({isSmall:!0})},a.onMouseOverImg=function(){a.setState({imgHover:!0})},a.onMouseLeaveImg=function(){a.setState({imgHover:!1})},a.clickDownload=function(){a.props.modalDownload(a.props.modalDownloadlink)},a.state={isSmall:!0,imgHover:!1},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"image-modal-portal ".concat(!1===this.props.modalShow?"hidden":"visible")},s.a.createElement("div",{className:"image-modal-close"},s.a.createElement("button",{className:"fas fa-times",onClick:function(){e.setState({isSmall:!0}),e.props.onClickCloseModal()}})),s.a.createElement("div",{className:"image-modal"},s.a.createElement("div",null,s.a.createElement("div",{className:"image-modal-header"},s.a.createElement("span",{className:"image-buttons-profile"},s.a.createElement("div",null,s.a.createElement("img",{src:null===this.props.modalUser?"":this.props.modalUser.profile_image.large,alt:null===this.props.modalUser?"":this.props.modalUser.username})),s.a.createElement("div",{className:"image-buttons-profile-username",style:{color:"black"}},null===this.props.modalUser?"":this.props.modalUser.username)),s.a.createElement("div",{className:"image-buttons image-buttons-top",style:{position:"relative",display:"inline-flex",top:"initial"}},s.a.createElement("button",{className:"fas fa-heart"}),s.a.createElement("button",{className:"fas fa-plus"}," Collect"),s.a.createElement("button",{className:"fas fa-download",onClick:this.clickDownload}," Download"))),s.a.createElement("div",{className:"image-modal-body"},s.a.createElement("div",null,s.a.createElement("a",{href:"#none",onClick:this.changeModalImg,onMouseOver:this.onMouseOverImg,onMouseLeave:this.onMouseLeaveImg,style:{active:"none"}},s.a.createElement("i",{className:"fas fa-expand ".concat(!1===this.state.imgHover?"hidden":"visible")}),s.a.createElement("img",{src:!0===this.state.isSmall?this.props.modalSrc:this.props.modalImg.urls.regular,alt:""})))),s.a.createElement("div",null,s.a.createElement("div",null)))))}}]),t}(n.Component)),b=(a(45),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).chunkArray=function(e,t){for(var a=[];e.length;)a.push(e.splice(0,t));return a},a.onClickPic=function(e,t,n,s,o){a.setState({modalSrc:e.small,modalUser:t,modalShow:!0,modalImg:n,modalDownload:s,modalDownloadlink:o}),document.body.classList.add("body-modal-open")},a.onClickCloseModal=function(){a.setState({modalShow:!1}),document.body.classList.remove("body-modal-open")},a.download=function(e){window.open(e,"_blank")},a.state={page:1,perPage:9,images:[],modalShow:!1,modalSrc:"",modalUser:null,modalImg:null},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.searchUnsplashAPI(this.props.keyword,this.state.page,this.state.perPage),window.addEventListener("scroll",this.handleScroll.bind(this))}},{key:"componentDidUpdate",value:function(e){e.keyword!==this.props.keyword&&(this.initState(),this.searchUnsplashAPI(this.props.keyword,this.state.page,this.state.perPage))}},{key:"initState",value:function(){this.setState({page:1,perPage:9,images:[]})}},{key:"componentWillMount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,t=document.body,a=document.documentElement,n=Math.max(t.scrollHeight,t.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight);e+window.pageYOffset>=n-200&&(this.setState({page:this.state.page+1}),this.searchUnsplashAPI(this.props.keyword,this.state.page,this.state.perPage))}},{key:"searchUnsplashAPI",value:function(e,t,a){var n=this;new f.a({accessKey:Object({NODE_ENV:"production",PUBLIC_URL:"/pic-gallery"}).REACT_APP_UNSPLASH_ACCESS_KEY,secret:Object({NODE_ENV:"production",PUBLIC_URL:"/pic-gallery"}).REACT_APP_UNSPLASH_SCREAT_KEY,callbackUrl:Object({NODE_ENV:"production",PUBLIC_URL:"/pic-gallery"}).REACT_APP_UNSPLASH_CALL_BACK_URL}).search.photos(e,t,a).then(h.toJson).then((function(e){if(e.results){var t=n.chunkArray(e.results,3);n.state.images.length>0?(t=n.state.images.map((function(e,a){return[].concat(Object(p.a)(e),Object(p.a)(t[a]))})),n.setState({images:t})):n.setState({images:t})}}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},this.state.images.map((function(t,a){return s.a.createElement("div",{className:"column",key:a},t.map((function(t,a){return s.a.createElement(v,{img:t,src:t.urls,link:t.links.download,download:e.download,user:t.user,key:t.id,onClick:e.onClickPic})})))})))),s.a.createElement(E,{modalShow:this.state.modalShow,modalUser:this.state.modalUser,modalSrc:this.state.modalSrc,modalDownloadlink:this.state.modalDownloadlink,modalImg:this.state.modalImg,modalDownload:this.state.modalDownload,onClickCloseModal:this.onClickCloseModal}))}}]),t}(n.Component)),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).onKeypress=function(e){var t=e.target.value;"Enter"===e.key&&a.setState({keyword:t})},a.state={keyword:"puppy"},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d,{onKeypress:this.onKeypress}),s.a.createElement(b,{keyword:this.state.keyword}))}}]),t}(n.Component);a(46);t.a=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(k,null))}},19:function(e,t,a){e.exports=a(20)},20:function(e,t,a){"use strict";a.r(t),function(e){var t=a(14),n=a.n(t),s=a(0),o=a.n(s),l=a(15),i=a.n(l),r=a(16),c=a.n(r),m=a(18);n.a.config(),e.fetch=c.a,i.a.render(o.a.createElement(m.a,null),document.getElementById("root"))}.call(this,a(6))},27:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.095edb28.chunk.js.map