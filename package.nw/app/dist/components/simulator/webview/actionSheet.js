'use strict';var _exports;function init(){const a=require('../../../lib/react.js');require('../../../lib/react-dom.js');const b=require('../../../stores/webviewStores.js'),c=a.createClass({displayName:'ActionSheet',getInitialState:function(){return{itemList:[],itemColor:'#000000',cancelColor:'#000000',cancelText:'\u53D6\u6D88',hidden:!0,lazyLoaded:!1}},componentDidMount:function(){b.on('SEND_AS_SDK',this._handleAssdkCommand)},componentWillUnmount:function(){b.removeListener('SEND_AS_SDK',this._handleAssdkCommand)},componentWillReceiveProps:function(d){d.webviewID!=this.__showOnWebviewID&&this.setState({hidden:!0})},_handleAssdkCommand:function(d,e,f){let{args:g}=e;'showActionSheet'===d&&(this.__showOnWebviewID=this.props.webviewID,this.setState({itemList:g.itemList,itemColor:g.itemColor,cancelText:g.cancelText,cancelColor:g.cancelColor,hidden:!1,lazyLoaded:!0}),this.callback=f)},handleCancelClick:function(){this.callback({errMsg:`showActionSheet:cancel`}),this.hide()},handleItemClick:function(d){this.callback({errMsg:'showActionSheet:ok',tapIndex:d}),this.hide()},hide:function(){this.setState({hidden:!0})},render:function(){if(!this.state.lazyLoaded)return null;let d=[];return this.state.itemList.map((e,f)=>{d.push(a.createElement('div',{className:'wx-action-sheet-item',onClick:this.handleItemClick.bind(this,f),style:{color:this.state.itemColor}},e))}),a.createElement('div',{style:{display:this.state.hidden?'none':'block'}},a.createElement('div',{className:'wx-action-sheet-mask',onClick:this.handleCancelClick}),a.createElement('div',{className:'wx-action-sheet wx-action-sheet-show'},a.createElement('div',{className:'wx-action-sheet-menu'},d,a.createElement('div',{className:'wx-action-sheet-item-cancel'},a.createElement('div',{className:'wx-action-sheet-middle'}),a.createElement('div',{className:'wx-action-sheet-cancel',onClick:this.handleCancelClick,style:{color:this.state.cancelColor}},this.state.cancelText)))))}});_exports=c}init(),module.exports=_exports;