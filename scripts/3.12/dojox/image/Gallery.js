//>>built
define("dojox/image/Gallery",["dijit","dojo","dojox","dojo/require!dojo/fx,dijit/_Widget,dijit/_Templated,dojox/image/ThumbnailPicker,dojox/image/SlideShow"],function(d,a,c){a.provide("dojox.image.Gallery");a.experimental("dojox.image.Gallery");a.require("dojo.fx");a.require("dijit._Widget");a.require("dijit._Templated");a.require("dojox.image.ThumbnailPicker");a.require("dojox.image.SlideShow");a.declare("dojox.image.Gallery",[d._Widget,d._Templated],{imageHeight:375,imageWidth:500,pageSize:c.image.SlideShow.prototype.pageSize,
autoLoad:!0,linkAttr:"link",imageThumbAttr:"imageUrlThumb",imageLargeAttr:"imageUrl",titleAttr:"title",slideshowInterval:3,templateString:a.cache("dojox.image","resources/Gallery.html",'\x3cdiv dojoAttachPoint\x3d"outerNode" class\x3d"imageGalleryWrapper"\x3e\n\t\x3cdiv dojoAttachPoint\x3d"thumbPickerNode"\x3e\x3c/div\x3e\n\t\x3cdiv dojoAttachPoint\x3d"slideShowNode"\x3e\x3c/div\x3e\n\x3c/div\x3e'),postCreate:function(){this.widgetid=this.id;this.inherited(arguments);this.thumbPicker=new c.image.ThumbnailPicker({linkAttr:this.linkAttr,
imageLargeAttr:this.imageLargeAttr,imageThumbAttr:this.imageThumbAttr,titleAttr:this.titleAttr,useLoadNotifier:!0,size:this.imageWidth},this.thumbPickerNode);this.slideShow=new c.image.SlideShow({imageHeight:this.imageHeight,imageWidth:this.imageWidth,autoLoad:this.autoLoad,linkAttr:this.linkAttr,imageLargeAttr:this.imageLargeAttr,titleAttr:this.titleAttr,slideshowInterval:this.slideshowInterval,pageSize:this.pageSize},this.slideShowNode);var b=this;a.subscribe(this.slideShow.getShowTopicName(),function(a){b.thumbPicker._showThumbs(a.index)});
a.subscribe(this.thumbPicker.getClickTopicName(),function(a){b.slideShow.showImage(a.index)});a.subscribe(this.thumbPicker.getShowTopicName(),function(a){b.slideShow.moveImageLoadingPointer(a.index)});a.subscribe(this.slideShow.getLoadTopicName(),function(a){b.thumbPicker.markImageLoaded(a)});this._centerChildren()},setDataStore:function(a,e,c){this.thumbPicker.setDataStore(a,e,c);this.slideShow.setDataStore(a,e,c)},reset:function(){this.slideShow.reset();this.thumbPicker.reset()},showNextImage:function(a){this.slideShow.showNextImage()},
toggleSlideshow:function(){a.deprecated("dojox.widget.Gallery.toggleSlideshow is deprecated.  Use toggleSlideShow instead.","","2.0");this.toggleSlideShow()},toggleSlideShow:function(){this.slideShow.toggleSlideShow()},showImage:function(a,c){this.slideShow.showImage(a,c)},resize:function(a){this.thumbPicker.resize(a)},_centerChildren:function(){var b=a.marginBox(this.thumbPicker.outerNode),c=a.marginBox(this.slideShow.outerNode),b=(b.w-c.w)/2;0<b?a.style(this.slideShow.outerNode,"marginLeft",b+"px"):
0>b&&a.style(this.thumbPicker.outerNode,"marginLeft",-1*b+"px")}})});