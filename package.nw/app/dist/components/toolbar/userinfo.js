'use strict';var _exports;function init(){const a=require('../../lib/react.js'),b=require('../../cssStr/cssStr.js'),c=require('../../actions/windowActions.js'),d=require('../../stores/windowStores.js'),e=a.createClass({displayName:'Userinfo',getInitialState:function(){return{show:!1}},clearUserInfo:function(){c.clearUserInfo()},showProfile:function(f){let g=this.state.show;this.setState({show:!g}),f.stopPropagation()},_bodyClick:function(){this.setState({show:!1})},componentDidMount:function(){d.on('BODY_CLICK',this._bodyClick)},componentWillUnmount:function(){d.removeListener('BODY_CLICK',this._bodyClick)},render:function(){let f=this.props.userInfo,g=this.props.project,h=this.state.show?{}:b.displayNone;return a.createElement('div',{onClick:this.showProfile,className:g?'toolbar-avatar':'toolbar-avatar-noproject'},a.createElement('img',{src:f.headUrl}),a.createElement('div',{className:'toolbar-profile',style:h},a.createElement('img',{className:'toolbar-profile-avatar',src:f.headUrl}),a.createElement('h3',{className:'toolbar-profile-nickname'},f.nickName),a.createElement('a',{href:'javascript:;',onClick:this.clearUserInfo,className:'toolbar-profile-button'},'\u9000\u51FA')))}});_exports=e}init(),module.exports=_exports;