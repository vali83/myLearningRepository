/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);;/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;/*!
 * imagesLoaded PACKAGED v3.0.1
 * JavaScript is all like "You images are done yet or what?"
 */

(function(e){"use strict";function t(){}function n(e,t){if(r)return t.indexOf(e);for(var n=t.length;n--;)if(t[n]===e)return n;return-1}var i=t.prototype,r=Array.prototype.indexOf?!0:!1;i._getEvents=function(){return this._events||(this._events={})},i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,t){var i,r=this.getListenersAsObject(e);for(i in r)r.hasOwnProperty(i)&&-1===n(t,r[i])&&r[i].push(t);return this},i.on=i.addListener,i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,t){var i,r,s=this.getListenersAsObject(e);for(r in s)s.hasOwnProperty(r)&&(i=n(t,s[r]),-1!==i&&s[r].splice(i,1));return this},i.off=i.removeListener,i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)s.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?s.call(this,i,r):o.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.emitEvent=function(e,t){var n,i,r,s=this.getListenersAsObject(e);for(i in s)if(s.hasOwnProperty(i))for(n=s[i].length;n--;)r=t?s[i][n].apply(null,t):s[i][n](),r===!0&&this.removeListener(e,s[i][n]);return this},i.trigger=i.emitEvent,i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},"function"==typeof define&&define.amd?define(function(){return t}):e.EventEmitter=t})(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===a.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,o){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?o=n:t(this.options,n),o&&this.on("always",o),this.getImages(),s&&(this.jqDeferred=new s.Deferred);var h=this;setTimeout(function(){h.check()})}function a(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,s=i.length;s>r;r++){var o=i[r];this.addImage(o)}}},r.prototype.addImage=function(e){var t=new a(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&h&&o.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;this.hasAnyBroken=!1;for(var r=0;i>r;r++){var s=this.images[r];s.on("confirm",e),s.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emit("progress",this,e),this.jqDeferred&&this.jqDeferred.notify(this,e)},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(e,this),this.emit("always",this),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},s&&(s.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(s(this))});var f={};return a.prototype=new e,a.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},a.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},a.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},a.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},a.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},a.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},a.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var s=e.jQuery,o=e.console,h=o!==void 0,a=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter","eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);;/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);;/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if(!document.getElementById('fit-vids-style')) {

      var div = document.createElement('div'),
          ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0],
          cssStyles = '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';

      div.className = 'fit-vids-style';
      div.id = 'fit-vids-style';
      div.style.display = 'none';
      div.innerHTML = cssStyles;

      ref.parentNode.insertBefore(div,ref);

    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );
;(function(e,t,n){"use strict";t.infinitescroll=function(n,r,i){this.element=t(i);if(!this._create(n,r)){this.failed=true}};t.infinitescroll.defaults={loading:{finished:n,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"data:image/gif;base64,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",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:n},state:{isDuringAjax:false,isInvalidPage:false,isDestroyed:false,isDone:false,isPaused:false,isBeyondMaxPage:false,currPage:1},debug:false,behavior:n,binder:t(e),nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:false,pathParse:n,dataType:"html",appendCallback:true,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:n,path:n,prefill:false,maxPage:n};t.infinitescroll.prototype={_binding:function(t){var r=this,i=r.options;i.v="2.0b2.120520";if(!!i.behavior&&this["_binding_"+i.behavior]!==n){this["_binding_"+i.behavior].call(this);return}if(t!=="bind"&&t!=="unbind"){this._debug("Binding value  "+t+" not valid");return false}if(t==="unbind"){this.options.binder.unbind("smartscroll.infscr."+r.options.infid)}else{this.options.binder[t]("smartscroll.infscr."+r.options.infid,function(){r.scroll()})}this._debug("Binding",t)},_create:function(i,s){var o=t.extend(true,{},t.infinitescroll.defaults,i);this.options=o;var u=t(e);var a=this;if(!a._validate(i)){return false}var f=t(o.nextSelector).attr("href");if(!f){this._debug("Navigation selector not found");return false}o.path=o.path||this._determinepath(f);o.contentSelector=o.contentSelector||this.element;o.loading.selector=o.loading.selector||o.contentSelector;o.loading.msg=o.loading.msg||t('<div id="infscr-loading"><img alt="Loading..." src="'+o.loading.img+'" /><div>'+o.loading.msgText+"</div></div>");(new Image).src=o.loading.img;if(o.pixelsFromNavToBottom===n){o.pixelsFromNavToBottom=t(document).height()-t(o.navSelector).offset().top;this._debug("pixelsFromNavToBottom: "+o.pixelsFromNavToBottom)}var l=this;o.loading.start=o.loading.start||function(){t(o.navSelector).hide();o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed,t.proxy(function(){this.beginAjax(o)},l))};o.loading.finished=o.loading.finished||function(){if(!o.state.isBeyondMaxPage)o.loading.msg.fadeOut(o.loading.speed)};o.callback=function(e,r,i){if(!!o.behavior&&e["_callback_"+o.behavior]!==n){e["_callback_"+o.behavior].call(t(o.contentSelector)[0],r,i)}if(s){s.call(t(o.contentSelector)[0],r,o,i)}if(o.prefill){u.bind("resize.infinite-scroll",e._prefill)}};if(i.debug){if(Function.prototype.bind&&(typeof console==="object"||typeof console==="function")&&typeof console.log==="object"){["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(e){console[e]=this.call(console[e],console)},Function.prototype.bind)}}this._setup();if(o.prefill){this._prefill()}return true},_prefill:function(){function s(){return r.options.contentSelector.height()<=i.height()}var r=this;var i=t(e);this._prefill=function(){if(s()){r.scroll()}i.bind("resize.infinite-scroll",function(){if(s()){i.unbind("resize.infinite-scroll");r.scroll()}})};this._prefill()},_debug:function(){if(true!==this.options.debug){return}if(typeof console!=="undefined"&&typeof console.log==="function"){if(Array.prototype.slice.call(arguments).length===1&&typeof Array.prototype.slice.call(arguments)[0]==="string"){console.log(Array.prototype.slice.call(arguments).toString())}else{console.log(Array.prototype.slice.call(arguments))}}else if(!Function.prototype.bind&&typeof console!=="undefined"&&typeof console.log==="object"){Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments))}},_determinepath:function(t){var r=this.options;if(!!r.behavior&&this["_determinepath_"+r.behavior]!==n){return this["_determinepath_"+r.behavior].call(this,t)}if(!!r.pathParse){this._debug("pathParse manual");return r.pathParse(t,this.options.state.currPage+1)}else if(t.match(/^(.*?)\b2\b(.*?$)/)){t=t.match(/^(.*?)\b2\b(.*?$)/).slice(1)}else if(t.match(/^(.*?)2(.*?$)/)){if(t.match(/^(.*?page=)2(\/.*|$)/)){t=t.match(/^(.*?page=)2(\/.*|$)/).slice(1);return t}t=t.match(/^(.*?)2(.*?$)/).slice(1)}else{if(t.match(/^(.*?page=)1(\/.*|$)/)){t=t.match(/^(.*?page=)1(\/.*|$)/).slice(1);return t}else{this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");r.state.isInvalidPage=true}}this._debug("determinePath",t);return t},_error:function(t){var r=this.options;if(!!r.behavior&&this["_error_"+r.behavior]!==n){this["_error_"+r.behavior].call(this,t);return}if(t!=="destroy"&&t!=="end"){t="unknown"}this._debug("Error",t);if(t==="end"||r.state.isBeyondMaxPage){this._showdonemsg()}r.state.isDone=true;r.state.currPage=1;r.state.isPaused=false;r.state.isBeyondMaxPage=false;this._binding("unbind")},_loadcallback:function(i,s,o){var u=this.options,a=this.options.callback,f=u.state.isDone?"done":!u.appendCallback?"no-append":"append",l;if(!!u.behavior&&this["_loadcallback_"+u.behavior]!==n){this["_loadcallback_"+u.behavior].call(this,i,s);return}switch(f){case"done":this._showdonemsg();return false;case"no-append":if(u.dataType==="html"){s="<div>"+s+"</div>";s=t(s).find(u.itemSelector)}break;case"append":var c=i.children();if(c.length===0){return this._error("end")}l=document.createDocumentFragment();while(i[0].firstChild){l.appendChild(i[0].firstChild)}this._debug("contentSelector",t(u.contentSelector)[0]);t(u.contentSelector)[0].appendChild(l);s=c.get();break}u.loading.finished.call(t(u.contentSelector)[0],u);if(u.animate){var h=t(e).scrollTop()+t(u.loading.msg).height()+u.extraScrollPx+"px";t("html,body").animate({scrollTop:h},800,function(){u.state.isDuringAjax=false})}if(!u.animate){u.state.isDuringAjax=false}a(this,s,o);if(u.prefill){this._prefill()}},_nearbottom:function(){var i=this.options,s=0+t(document).height()-i.binder.scrollTop()-t(e).height();if(!!i.behavior&&this["_nearbottom_"+i.behavior]!==n){return this["_nearbottom_"+i.behavior].call(this)}this._debug("math:",s,i.pixelsFromNavToBottom);return s-i.bufferPx<i.pixelsFromNavToBottom},_pausing:function(t){var r=this.options;if(!!r.behavior&&this["_pausing_"+r.behavior]!==n){this["_pausing_"+r.behavior].call(this,t);return}if(t!=="pause"&&t!=="resume"&&t!==null){this._debug("Invalid argument. Toggling pause value instead")}t=t&&(t==="pause"||t==="resume")?t:"toggle";switch(t){case"pause":r.state.isPaused=true;break;case"resume":r.state.isPaused=false;break;case"toggle":r.state.isPaused=!r.state.isPaused;break}this._debug("Paused",r.state.isPaused);return false},_setup:function(){var t=this.options;if(!!t.behavior&&this["_setup_"+t.behavior]!==n){this["_setup_"+t.behavior].call(this);return}this._binding("bind");return false},_showdonemsg:function(){var r=this.options;if(!!r.behavior&&this["_showdonemsg_"+r.behavior]!==n){this["_showdonemsg_"+r.behavior].call(this);return}r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({opacity:1},2e3,function(){t(this).parent().fadeOut(r.loading.speed)});r.errorCallback.call(t(r.contentSelector)[0],"done")},_validate:function(n){for(var r in n){if(r.indexOf&&r.indexOf("Selector")>-1&&t(n[r]).length===0){this._debug("Your "+r+" found no elements.");return false}}return true},bind:function(){this._binding("bind")},destroy:function(){this.options.state.isDestroyed=true;this.options.loading.finished();return this._error("destroy")},pause:function(){this._pausing("pause")},resume:function(){this._pausing("resume")},beginAjax:function(r){var i=this,s=r.path,o,u,a,f;r.state.currPage++;if(r.maxPage!=n&&r.state.currPage>r.maxPage){r.state.isBeyondMaxPage=true;this.destroy();return}o=t(r.contentSelector).is("table, tbody")?t("<tbody/>"):t("<div/>");u=typeof s==="function"?s(r.state.currPage):s.join(r.state.currPage);i._debug("heading into ajax",u);a=r.dataType==="html"||r.dataType==="json"?r.dataType:"html+callback";if(r.appendCallback&&r.dataType==="html"){a+="+callback"}switch(a){case"html+callback":i._debug("Using HTML via .load() method");o.load(u+" "+r.itemSelector,n,function(t){i._loadcallback(o,t,u)});break;case"html":i._debug("Using "+a.toUpperCase()+" via $.ajax() method");t.ajax({url:u,dataType:r.dataType,complete:function(t,n){f=typeof t.isResolved!=="undefined"?t.isResolved():n==="success"||n==="notmodified";if(f){i._loadcallback(o,t.responseText,u)}else{i._error("end")}}});break;case"json":i._debug("Using "+a.toUpperCase()+" via $.ajax() method");t.ajax({dataType:"json",type:"GET",url:u,success:function(e,t,s){f=typeof s.isResolved!=="undefined"?s.isResolved():t==="success"||t==="notmodified";if(r.appendCallback){if(r.template!==n){var a=r.template(e);o.append(a);if(f){i._loadcallback(o,a)}else{i._error("end")}}else{i._debug("template must be defined.");i._error("end")}}else{if(f){i._loadcallback(o,e,u)}else{i._error("end")}}},error:function(){i._debug("JSON ajax request failed.");i._error("end")}});break}},retrieve:function(r){r=r||null;var i=this,s=i.options;if(!!s.behavior&&this["retrieve_"+s.behavior]!==n){this["retrieve_"+s.behavior].call(this,r);return}if(s.state.isDestroyed){this._debug("Instance is destroyed");return false}s.state.isDuringAjax=true;s.loading.start.call(t(s.contentSelector)[0],s)},scroll:function(){var t=this.options,r=t.state;if(!!t.behavior&&this["scroll_"+t.behavior]!==n){this["scroll_"+t.behavior].call(this);return}if(r.isDuringAjax||r.isInvalidPage||r.isDone||r.isDestroyed||r.isPaused){return}if(!this._nearbottom()){return}this.retrieve()},toggle:function(){this._pausing()},unbind:function(){this._binding("unbind")},update:function(n){if(t.isPlainObject(n)){this.options=t.extend(true,this.options,n)}}};t.fn.infinitescroll=function(n,r){var i=typeof n;switch(i){case"string":var s=Array.prototype.slice.call(arguments,1);this.each(function(){var e=t.data(this,"infinitescroll");if(!e){return false}if(!t.isFunction(e[n])||n.charAt(0)==="_"){return false}e[n].apply(e,s)});break;case"object":this.each(function(){var e=t.data(this,"infinitescroll");if(e){e.update(n)}else{e=new t.infinitescroll(n,r,this);if(!e.failed){t.data(this,"infinitescroll",e)}}});break}return this};var r=t.event,i;r.special.smartscroll={setup:function(){t(this).bind("scroll",r.special.smartscroll.handler)},teardown:function(){t(this).unbind("scroll",r.special.smartscroll.handler)},handler:function(e,n){var r=this,s=arguments;e.type="smartscroll";if(i){clearTimeout(i)}i=setTimeout(function(){t(r).trigger("smartscroll",s)},n==="execAsap"?0:100)}};t.fn.smartscroll=function(e){return e?this.bind("smartscroll",e):this.trigger("smartscroll",["execAsap"])}})(window,jQuery)
;/* jquery.nicescroll
-- version 3.5.1
-- copyright 2011-12-13 InuYaksa*2013
-- licensed under the MIT
--
-- http://areaaperta.com/nicescroll
-- https://github.com/inuyaksa/jquery.nicescroll
--
*/

(function(jQuery){

  // globals
  var domfocus = false;
  var mousefocus = false;
  var zoomactive = false;
  var tabindexcounter = 5000;
  var ascrailcounter = 2000;
  var globalmaxzindex = 0;
  
  var $ = jQuery;  // sandbox
 
  // http://stackoverflow.com/questions/2161159/get-script-path
  function getScriptPath() {
    var scripts=document.getElementsByTagName('script');
    var path=scripts[scripts.length-1].src.split('?')[0];
    return (path.split('/').length>0) ? path.split('/').slice(0,-1).join('/')+'/' : '';
  }
  var scriptpath = getScriptPath();
  
  var vendors = ['ms','moz','webkit','o'];
  
  var setAnimationFrame = window.requestAnimationFrame||false;
  var clearAnimationFrame = window.cancelAnimationFrame||false;

  if (!setAnimationFrame) {
    for(var vx in vendors) {
      var v = vendors[vx];
      if (!setAnimationFrame) setAnimationFrame = window[v+'RequestAnimationFrame'];
      if (!clearAnimationFrame) clearAnimationFrame = window[v+'CancelAnimationFrame']||window[v+'CancelRequestAnimationFrame'];
    }
  }
  
  var clsMutationObserver = window.MutationObserver || window.WebKitMutationObserver || false;
  
  var _globaloptions = {
      zindex:"auto",
      cursoropacitymin:0,
      cursoropacitymax:1,
      cursorcolor:"#424242",
      cursorwidth:"5px",
      cursorborder:"1px solid #fff",
      cursorborderradius:"5px",
      scrollspeed:60,
      mousescrollstep:8*3,
      touchbehavior:false,
      hwacceleration:true,
      usetransition:true,
      boxzoom:false,
      dblclickzoom:true,
      gesturezoom:true,
      grabcursorenabled:true,
      autohidemode:true,
      background:"",
      iframeautoresize:true,
      cursorminheight:32,
      preservenativescrolling:true,
      railoffset:false,
      bouncescroll:true,
      spacebarenabled:true,
      railpadding:{top:0,right:0,left:0,bottom:0},
      disableoutline:true,
      horizrailenabled:true,
      railalign:"right",
      railvalign:"bottom",
      enabletranslate3d:true,
      enablemousewheel:true,
      enablekeyboard:true,
      smoothscroll:true,
      sensitiverail:true,
      enablemouselockapi:true,
//      cursormaxheight:false,
      cursorfixedheight:false,      
      directionlockdeadzone:6,
      hidecursordelay:400,
      nativeparentscrolling:true,
      enablescrollonselection:true,
      overflowx:true,
      overflowy:true,
      cursordragspeed:0.3,
      rtlmode:false,
      cursordragontouch:false,
      oneaxismousemode:"auto"
  }
  
  var browserdetected = false;
  
  var getBrowserDetection = function() {
  
    if (browserdetected) return browserdetected;
  
    var domtest = document.createElement('DIV');

    var d = {};
    
		d.haspointerlock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document;
		
    d.isopera = ("opera" in window);
    d.isopera12 = (d.isopera&&("getUserMedia" in navigator));
    d.isoperamini = (Object.prototype.toString.call(window.operamini) === "[object OperaMini]");
    
    d.isie = (("all" in document) && ("attachEvent" in domtest) && !d.isopera);
    d.isieold = (d.isie && !("msInterpolationMode" in domtest.style));  // IE6 and older
    d.isie7 = d.isie&&!d.isieold&&(!("documentMode" in document)||(document.documentMode==7));
    d.isie8 = d.isie&&("documentMode" in document)&&(document.documentMode==8);
    d.isie9 = d.isie&&("performance" in window)&&(document.documentMode>=9);
    d.isie10 = d.isie&&("performance" in window)&&(document.documentMode>=10);
    
    d.isie9mobile = /iemobile.9/i.test(navigator.userAgent);  //wp 7.1 mango
    if (d.isie9mobile) d.isie9 = false;
    d.isie7mobile = (!d.isie9mobile&&d.isie7) && /iemobile/i.test(navigator.userAgent);  //wp 7.0
    
    d.ismozilla = ("MozAppearance" in domtest.style);
		
    d.iswebkit = ("WebkitAppearance" in domtest.style);
    
    d.ischrome = ("chrome" in window);
		d.ischrome22 = (d.ischrome&&d.haspointerlock);
    d.ischrome26 = (d.ischrome&&("transition" in domtest.style));  // issue with transform detection (maintain prefix)
    
    d.cantouch = ("ontouchstart" in document.documentElement)||("ontouchstart" in window);  // detection for Chrome Touch Emulation
    d.hasmstouch = (window.navigator.msPointerEnabled||false);  // IE10+ pointer events
		
    d.ismac = /^mac$/i.test(navigator.platform);
    
    d.isios = (d.cantouch && /iphone|ipad|ipod/i.test(navigator.platform));
    d.isios4 = ((d.isios)&&!("seal" in Object));
    
    d.isandroid = (/android/i.test(navigator.userAgent));
    
    d.trstyle = false;
    d.hastransform = false;
    d.hastranslate3d = false;
    d.transitionstyle = false;
    d.hastransition = false;
    d.transitionend = false;
    
    var check = ['transform','msTransform','webkitTransform','MozTransform','OTransform'];
    for(var a=0;a<check.length;a++){
      if (typeof domtest.style[check[a]] != "undefined") {
        d.trstyle = check[a];
        break;
      }
    }
    d.hastransform = (d.trstyle != false);
    if (d.hastransform) {
      domtest.style[d.trstyle] = "translate3d(1px,2px,3px)";
      d.hastranslate3d = /translate3d/.test(domtest.style[d.trstyle]);
    }
    
    d.transitionstyle = false;
    d.prefixstyle = '';
    d.transitionend = false;
    var check = ['transition','webkitTransition','MozTransition','OTransition','OTransition','msTransition','KhtmlTransition'];
    var prefix = ['','-webkit-','-moz-','-o-','-o','-ms-','-khtml-'];
    var evs = ['transitionend','webkitTransitionEnd','transitionend','otransitionend','oTransitionEnd','msTransitionEnd','KhtmlTransitionEnd'];
    for(var a=0;a<check.length;a++) {
      if (check[a] in domtest.style) {
        d.transitionstyle = check[a];
        d.prefixstyle = prefix[a];
        d.transitionend = evs[a];
        break;
      }
    }
    if (d.ischrome26) {  // use always prefix
      d.prefixstyle = prefix[1];
    }
    
    d.hastransition = (d.transitionstyle);
    
    function detectCursorGrab() {      
      var lst = ['-moz-grab','-webkit-grab','grab'];
      if ((d.ischrome&&!d.ischrome22)||d.isie) lst=[];  // force setting for IE returns false positive and chrome cursor bug
      for(var a=0;a<lst.length;a++) {
        var p = lst[a];
        domtest.style['cursor']=p;
        if (domtest.style['cursor']==p) return p;
      }
      return 'url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize';  // thank you google for custom cursor!
    }
    d.cursorgrabvalue = detectCursorGrab();

    d.hasmousecapture = ("setCapture" in domtest);
    
    d.hasMutationObserver = (clsMutationObserver !== false);
    
    domtest = null;  //memory released

    browserdetected = d;
    
    return d;  
  }
  
  var NiceScrollClass = function(myopt,me) {

    var self = this;

    this.version = '3.5.1';
    this.name = 'nicescroll';
    
    this.me = me;
    
    this.opt = {
      doc:$("body"),
      win:false
    };
    
    $.extend(this.opt,_globaloptions);
    
// Options for internal use
    this.opt.snapbackspeed = 80;
    
    if (myopt||false) {
      for(var a in self.opt) {
        if (typeof myopt[a] != "undefined") self.opt[a] = myopt[a];
      }
    }
    
    this.doc = self.opt.doc;
    this.iddoc = (this.doc&&this.doc[0])?this.doc[0].id||'':'';    
    this.ispage = /BODY|HTML/.test((self.opt.win)?self.opt.win[0].nodeName:this.doc[0].nodeName);
    this.haswrapper = (self.opt.win!==false);
    this.win = self.opt.win||(this.ispage?$(window):this.doc);
    this.docscroll = (this.ispage&&!this.haswrapper)?$(window):this.win;
    this.body = $("body");
    this.viewport = false;
    
    this.isfixed = false;
    
    this.iframe = false;
    this.isiframe = ((this.doc[0].nodeName == 'IFRAME') && (this.win[0].nodeName == 'IFRAME'));
    
    this.istextarea = (this.win[0].nodeName == 'TEXTAREA');
    
    this.forcescreen = false; //force to use screen position on events

    this.canshowonmouseevent = (self.opt.autohidemode!="scroll");
    
// Events jump table    
    this.onmousedown = false;
    this.onmouseup = false;
    this.onmousemove = false;
    this.onmousewheel = false;
    this.onkeypress = false;
    this.ongesturezoom = false;
    this.onclick = false;
    
// Nicescroll custom events
    this.onscrollstart = false;
    this.onscrollend = false;
    this.onscrollcancel = false;    
    
    this.onzoomin = false;
    this.onzoomout = false;
    
// Let's start!  
    this.view = false;
    this.page = false;
    
    this.scroll = {x:0,y:0};
    this.scrollratio = {x:0,y:0};    
    this.cursorheight = 20;
    this.scrollvaluemax = 0;
    
    this.checkrtlmode = false;
    
    this.scrollrunning = false;
    
    this.scrollmom = false;
    
    this.observer = false;
    this.observerremover = false;  // observer on parent for remove detection
    
    do {
      this.id = "ascrail"+(ascrailcounter++);
    } while (document.getElementById(this.id));
    
    this.rail = false;
    this.cursor = false;
    this.cursorfreezed = false;  
    this.selectiondrag = false;
    
    this.zoom = false;
    this.zoomactive = false;
    
    this.hasfocus = false;
    this.hasmousefocus = false;
    
    this.visibility = true;
    this.locked = false;
    this.hidden = false; // rails always hidden
    this.cursoractive = true; // user can interact with cursors
    
    this.overflowx = self.opt.overflowx;
    this.overflowy = self.opt.overflowy;
    
    this.nativescrollingarea = false;
    this.checkarea = 0;
    
    this.events = [];  // event list for unbind
    
    this.saved = {};
    
    this.delaylist = {};
    this.synclist = {};
    
    this.lastdeltax = 0;
    this.lastdeltay = 0;
    
    this.detected = getBrowserDetection(); 
    
    var cap = $.extend({},this.detected);
 
    this.canhwscroll = (cap.hastransform&&self.opt.hwacceleration);
    this.ishwscroll = (this.canhwscroll&&self.haswrapper);
    
    this.istouchcapable = false;  // desktop devices with touch screen support
    
//## Check Chrome desktop with touch support
    if (cap.cantouch&&cap.ischrome&&!cap.isios&&!cap.isandroid) {
      this.istouchcapable = true;
      cap.cantouch = false;  // parse normal desktop events
    }    

//## Firefox 18 nightly build (desktop) false positive (or desktop with touch support)
    if (cap.cantouch&&cap.ismozilla&&!cap.isios&&!cap.isandroid) {
      this.istouchcapable = true;
      cap.cantouch = false;  // parse normal desktop events
    }    
    
//## disable MouseLock API on user request

    if (!self.opt.enablemouselockapi) {
      cap.hasmousecapture = false;
      cap.haspointerlock = false;
    }
    
    this.delayed = function(name,fn,tm,lazy) {
      var dd = self.delaylist[name];
      var nw = (new Date()).getTime();
      if (!lazy&&dd&&dd.tt) return false;
      if (dd&&dd.tt) clearTimeout(dd.tt);
      if (dd&&dd.last+tm>nw&&!dd.tt) {      
        self.delaylist[name] = {
          last:nw+tm,
          tt:setTimeout(function(){self.delaylist[name].tt=0;fn.call();},tm)
        }
      }
      else if (!dd||!dd.tt) {
        self.delaylist[name] = {
          last:nw,
          tt:0
        }
        setTimeout(function(){fn.call();},0);
      }
    };
    
    this.debounced = function(name,fn,tm) {
      var dd = self.delaylist[name];
      var nw = (new Date()).getTime();      
      self.delaylist[name] = fn;
      if (!dd) {        
        setTimeout(function(){var fn=self.delaylist[name];self.delaylist[name]=false;fn.call();},tm);
      }
    }
    
    this.synched = function(name,fn) {
    
      function requestSync() {
        if (self.onsync) return;
        setAnimationFrame(function(){
          self.onsync = false;
          for(name in self.synclist){
            var fn = self.synclist[name];
            if (fn) fn.call(self);
            self.synclist[name] = false;
          }
        });
        self.onsync = true;
      };    
    
      self.synclist[name] = fn;
      requestSync();
      return name;
    };
    
    this.unsynched = function(name) {
      if (self.synclist[name]) self.synclist[name] = false;
    }
    
    this.css = function(el,pars) {  // save & set
      for(var n in pars) {
        self.saved.css.push([el,n,el.css(n)]);
        el.css(n,pars[n]);
      }
    };
    
    this.scrollTop = function(val) {
      return (typeof val == "undefined") ? self.getScrollTop() : self.setScrollTop(val);
    };

    this.scrollLeft = function(val) {
      return (typeof val == "undefined") ? self.getScrollLeft() : self.setScrollLeft(val);
    };
    
// derived by by Dan Pupius www.pupius.net
    BezierClass = function(st,ed,spd,p1,p2,p3,p4) {
      this.st = st;
      this.ed = ed;
      this.spd = spd;
      
      this.p1 = p1||0;
      this.p2 = p2||1;
      this.p3 = p3||0;
      this.p4 = p4||1;
      
      this.ts = (new Date()).getTime();
      this.df = this.ed-this.st;
    };
    BezierClass.prototype = {
      B2:function(t){ return 3*t*t*(1-t) },
      B3:function(t){ return 3*t*(1-t)*(1-t) },
      B4:function(t){ return (1-t)*(1-t)*(1-t) },
      getNow:function(){
        var nw = (new Date()).getTime();
        var pc = 1-((nw-this.ts)/this.spd);
        var bz = this.B2(pc) + this.B3(pc) + this.B4(pc);
        return (pc<0) ? this.ed : this.st+Math.round(this.df*bz);
      },
      update:function(ed,spd){
        this.st = this.getNow();
        this.ed = ed;
        this.spd = spd;
        this.ts = (new Date()).getTime();
        this.df = this.ed-this.st;
        return this;
      }
    };
    
    if (this.ishwscroll) {  
    // hw accelerated scroll
      this.doc.translate = {x:0,y:0,tx:"0px",ty:"0px"};
      
      //this one can help to enable hw accel on ios6 http://indiegamr.com/ios6-html-hardware-acceleration-changes-and-how-to-fix-them/
      if (cap.hastranslate3d&&cap.isios) this.doc.css("-webkit-backface-visibility","hidden");  // prevent flickering http://stackoverflow.com/questions/3461441/      
      
      //derived from http://stackoverflow.com/questions/11236090/
      function getMatrixValues() {
        var tr = self.doc.css(cap.trstyle);
        if (tr&&(tr.substr(0,6)=="matrix")) {
          return tr.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g,'').split(/, +/);
        }
        return false;
      }
      
      this.getScrollTop = function(last) {
        if (!last) {
          var mtx = getMatrixValues();
          if (mtx) return (mtx.length==16) ? -mtx[13] : -mtx[5];  //matrix3d 16 on IE10
          if (self.timerscroll&&self.timerscroll.bz) return self.timerscroll.bz.getNow();
        }
        return self.doc.translate.y;
      };

      this.getScrollLeft = function(last) {
        if (!last) {
          var mtx = getMatrixValues();          
          if (mtx) return (mtx.length==16) ? -mtx[12] : -mtx[4];  //matrix3d 16 on IE10
          if (self.timerscroll&&self.timerscroll.bh) return self.timerscroll.bh.getNow();
        }
        return self.doc.translate.x;
      };
      
      if (document.createEvent) {
        this.notifyScrollEvent = function(el) {
          var e = document.createEvent("UIEvents");
          e.initUIEvent("scroll", false, true, window, 1);
          el.dispatchEvent(e);
        };
      }
      else if (document.fireEvent) {
        this.notifyScrollEvent = function(el) {
          var e = document.createEventObject();
          el.fireEvent("onscroll");
          e.cancelBubble = true; 
        };
      }
      else {
        this.notifyScrollEvent = function(el,add) {}; //NOPE
      }
      
      if (cap.hastranslate3d&&self.opt.enabletranslate3d) {
        this.setScrollTop = function(val,silent) {
          self.doc.translate.y = val;
          self.doc.translate.ty = (val*-1)+"px";
          self.doc.css(cap.trstyle,"translate3d("+self.doc.translate.tx+","+self.doc.translate.ty+",0px)");          
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
        this.setScrollLeft = function(val,silent) {          
          self.doc.translate.x = val;
          self.doc.translate.tx = (val*-1)+"px";
          self.doc.css(cap.trstyle,"translate3d("+self.doc.translate.tx+","+self.doc.translate.ty+",0px)");          
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
      } else {
        this.setScrollTop = function(val,silent) {
          self.doc.translate.y = val;
          self.doc.translate.ty = (val*-1)+"px";
          self.doc.css(cap.trstyle,"translate("+self.doc.translate.tx+","+self.doc.translate.ty+")");
          if (!silent) self.notifyScrollEvent(self.win[0]);          
        };
        this.setScrollLeft = function(val,silent) {        
          self.doc.translate.x = val;
          self.doc.translate.tx = (val*-1)+"px";
          self.doc.css(cap.trstyle,"translate("+self.doc.translate.tx+","+self.doc.translate.ty+")");
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
      }
    } else {
    // native scroll
      this.getScrollTop = function() {
        return self.docscroll.scrollTop();
      };
      this.setScrollTop = function(val) {        
        return self.docscroll.scrollTop(val);
      };
      this.getScrollLeft = function() {
        return self.docscroll.scrollLeft();
      };
      this.setScrollLeft = function(val) {
        return self.docscroll.scrollLeft(val);
      };
    }
    
    this.getTarget = function(e) {
      if (!e) return false;
      if (e.target) return e.target;
      if (e.srcElement) return e.srcElement;
      return false;
    };
    
    this.hasParent = function(e,id) {
      if (!e) return false;
      var el = e.target||e.srcElement||e||false;
      while (el && el.id != id) {
        el = el.parentNode||false;
      }
      return (el!==false);
    };
    
    function getZIndex() {
      var dom = self.win;
      if ("zIndex" in dom) return dom.zIndex();  // use jQuery UI method when available
      while (dom.length>0) {        
        if (dom[0].nodeType==9) return false;
        var zi = dom.css('zIndex');        
        if (!isNaN(zi)&&zi!=0) return parseInt(zi);
        dom = dom.parent();
      }
      return false;
    };
    
//inspired by http://forum.jquery.com/topic/width-includes-border-width-when-set-to-thin-medium-thick-in-ie
    var _convertBorderWidth = {"thin":1,"medium":3,"thick":5};
    function getWidthToPixel(dom,prop,chkheight) {
      var wd = dom.css(prop);
      var px = parseFloat(wd);
      if (isNaN(px)) {
        px = _convertBorderWidth[wd]||0;
        var brd = (px==3) ? ((chkheight)?(self.win.outerHeight() - self.win.innerHeight()):(self.win.outerWidth() - self.win.innerWidth())) : 1; //DON'T TRUST CSS
        if (self.isie8&&px) px+=1;
        return (brd) ? px : 0; 
      }
      return px;
    };
    
    this.getOffset = function() {
      if (self.isfixed) return {top:parseFloat(self.win.css('top')),left:parseFloat(self.win.css('left'))};
      if (!self.viewport) return self.win.offset();
      var ww = self.win.offset();
      var vp = self.viewport.offset();
      return {top:ww.top-vp.top+self.viewport.scrollTop(),left:ww.left-vp.left+self.viewport.scrollLeft()};
    };
    
    this.updateScrollBar = function(len) {
      if (self.ishwscroll) {
        self.rail.css({height:self.win.innerHeight()});
        if (self.railh) self.railh.css({width:self.win.innerWidth()});
      } else {
        var wpos = self.getOffset();
        var pos = {top:wpos.top,left:wpos.left};
        pos.top+= getWidthToPixel(self.win,'border-top-width',true);
        var brd = (self.win.outerWidth() - self.win.innerWidth())/2;
        pos.left+= (self.rail.align) ? self.win.outerWidth() - getWidthToPixel(self.win,'border-right-width') - self.rail.width : getWidthToPixel(self.win,'border-left-width');
        
        var off = self.opt.railoffset;
        if (off) {
          if (off.top) pos.top+=off.top;
          if (self.rail.align&&off.left) pos.left+=off.left;
        }
        
				if (!self.locked) self.rail.css({top:pos.top,left:pos.left,height:(len)?len.h:self.win.innerHeight()});
				
				if (self.zoom) {				  
				  self.zoom.css({top:pos.top+1,left:(self.rail.align==1) ? pos.left-20 : pos.left+self.rail.width+4});
			  }
				
				if (self.railh&&!self.locked) {
					var pos = {top:wpos.top,left:wpos.left};
					var y = (self.railh.align) ? pos.top + getWidthToPixel(self.win,'border-top-width',true) + self.win.innerHeight() - self.railh.height : pos.top + getWidthToPixel(self.win,'border-top-width',true);
					var x = pos.left + getWidthToPixel(self.win,'border-left-width');
					self.railh.css({top:y,left:x,width:self.railh.width});
				}
		
				
      }
    };
    
    this.doRailClick = function(e,dbl,hr) {

      var fn,pg,cur,pos;
      
//      if (self.rail.drag&&self.rail.drag.pt!=1) return;
      if (self.locked) return;
//      if (self.rail.drag) return;

//      self.cancelScroll();       
      
      self.cancelEvent(e);
      
      if (dbl) {
        fn = (hr) ? self.doScrollLeft : self.doScrollTop;
        cur = (hr) ? ((e.pageX - self.railh.offset().left - (self.cursorwidth/2)) * self.scrollratio.x) : ((e.pageY - self.rail.offset().top - (self.cursorheight/2)) * self.scrollratio.y);
        fn(cur);
      } else {
//        console.log(e.pageY);
        fn = (hr) ? self.doScrollLeftBy : self.doScrollBy;
        cur = (hr) ? self.scroll.x : self.scroll.y;
        pos = (hr) ? e.pageX - self.railh.offset().left : e.pageY - self.rail.offset().top;
        pg = (hr) ? self.view.w : self.view.h;        
        (cur>=pos) ? fn(pg) : fn(-pg);
      }
    
    }
    
    self.hasanimationframe = (setAnimationFrame);
    self.hascancelanimationframe = (clearAnimationFrame);
    
    if (!self.hasanimationframe) {
      setAnimationFrame=function(fn){return setTimeout(fn,15-Math.floor((+new Date)/1000)%16)}; // 1000/60)};
      clearAnimationFrame=clearInterval;
    } 
    else if (!self.hascancelanimationframe) clearAnimationFrame=function(){self.cancelAnimationFrame=true};
    
    this.init = function() {

      self.saved.css = [];
      
      if (cap.isie7mobile) return true; // SORRY, DO NOT WORK!
      if (cap.isoperamini) return true; // SORRY, DO NOT WORK!
      
      if (cap.hasmstouch) self.css((self.ispage)?$("html"):self.win,{'-ms-touch-action':'none'});
      
      self.zindex = "auto";
      if (!self.ispage&&self.opt.zindex=="auto") {
        self.zindex = getZIndex()||"auto";
      } else {
        self.zindex = self.opt.zindex;
      }
      
      if (!self.ispage&&self.zindex!="auto") {
        if (self.zindex>globalmaxzindex) globalmaxzindex=self.zindex;
      }
      
      if (self.isie&&self.zindex==0&&self.opt.zindex=="auto") {  // fix IE auto == 0
        self.zindex="auto";
      }
      
/*      
      self.ispage = true;
      self.haswrapper = true;
//      self.win = $(window);
      self.docscroll = $("body");
//      self.doc = $("body");
*/
      
      if (!self.ispage || (!cap.cantouch && !cap.isieold && !cap.isie9mobile)) {
      
        var cont = self.docscroll;
        if (self.ispage) cont = (self.haswrapper)?self.win:self.doc;
        
        if (!cap.isie9mobile) self.css(cont,{'overflow-y':'hidden'});      
        
        if (self.ispage&&cap.isie7) {
          if (self.doc[0].nodeName=='BODY') self.css($("html"),{'overflow-y':'hidden'});  //IE7 double scrollbar issue
          else if (self.doc[0].nodeName=='HTML') self.css($("body"),{'overflow-y':'hidden'});  //IE7 double scrollbar issue
        }
        
        if (cap.isios&&!self.ispage&&!self.haswrapper) self.css($("body"),{"-webkit-overflow-scrolling":"touch"});  //force hw acceleration
        
        var cursor = $(document.createElement('div'));
        cursor.css({
          position:"relative",top:0,"float":"right",width:self.opt.cursorwidth,height:"0px",
          'background-color':self.opt.cursorcolor,
          border:self.opt.cursorborder,
          'background-clip':'padding-box',
          '-webkit-border-radius':self.opt.cursorborderradius,
          '-moz-border-radius':self.opt.cursorborderradius,
          'border-radius':self.opt.cursorborderradius
        });   
        
        cursor.hborder = parseFloat(cursor.outerHeight() - cursor.innerHeight());        
        self.cursor = cursor;        
        
        var rail = $(document.createElement('div'));
        rail.attr('id',self.id);
        rail.addClass('nicescroll-rails');
        
        var v,a,kp = ["left","right"];  //"top","bottom"
        for(var n in kp) {
          a=kp[n];
          v = self.opt.railpadding[a];
          (v) ? rail.css("padding-"+a,v+"px") : self.opt.railpadding[a] = 0;
        }
        
        rail.append(cursor);
        
        rail.width = Math.max(parseFloat(self.opt.cursorwidth),cursor.outerWidth()) + self.opt.railpadding['left'] + self.opt.railpadding['right'];
        rail.css({width:rail.width+"px",'zIndex':self.zindex,"background":self.opt.background,cursor:"default"});        
        
        rail.visibility = true;
        rail.scrollable = true;
        
        rail.align = (self.opt.railalign=="left") ? 0 : 1;
        
        self.rail = rail;
        
        self.rail.drag = false;
        
        var zoom = false;
        if (self.opt.boxzoom&&!self.ispage&&!cap.isieold) {
          zoom = document.createElement('div');          
          self.bind(zoom,"click",self.doZoom);
          self.zoom = $(zoom);
          self.zoom.css({"cursor":"pointer",'z-index':self.zindex,'backgroundImage':'url('+scriptpath+'zoomico.png)','height':18,'width':18,'backgroundPosition':'0px 0px'});
          if (self.opt.dblclickzoom) self.bind(self.win,"dblclick",self.doZoom);
          if (cap.cantouch&&self.opt.gesturezoom) {
            self.ongesturezoom = function(e) {
              if (e.scale>1.5) self.doZoomIn(e);
              if (e.scale<0.8) self.doZoomOut(e);
              return self.cancelEvent(e);
            };
            self.bind(self.win,"gestureend",self.ongesturezoom);             
          }
        }
        
// init HORIZ

        self.railh = false;

        if (self.opt.horizrailenabled) {

          self.css(cont,{'overflow-x':'hidden'});

          var cursor = $(document.createElement('div'));
          cursor.css({
            position:"relative",top:0,height:self.opt.cursorwidth,width:"0px",
            'background-color':self.opt.cursorcolor,
            border:self.opt.cursorborder,
            'background-clip':'padding-box',
            '-webkit-border-radius':self.opt.cursorborderradius,
            '-moz-border-radius':self.opt.cursorborderradius,
            'border-radius':self.opt.cursorborderradius
          });   
          
          cursor.wborder = parseFloat(cursor.outerWidth() - cursor.innerWidth());
          self.cursorh = cursor;
          
          var railh = $(document.createElement('div'));
          railh.attr('id',self.id+'-hr');
          railh.addClass('nicescroll-rails');
          railh.height = Math.max(parseFloat(self.opt.cursorwidth),cursor.outerHeight());
          railh.css({height:railh.height+"px",'zIndex':self.zindex,"background":self.opt.background});
          
          railh.append(cursor);
          
          railh.visibility = true;
          railh.scrollable = true;
          
          railh.align = (self.opt.railvalign=="top") ? 0 : 1;
          
          self.railh = railh;
          
          self.railh.drag = false;
          
        }
        
//        
        
        if (self.ispage) {
          rail.css({position:"fixed",top:"0px",height:"100%"});
          (rail.align) ? rail.css({right:"0px"}) : rail.css({left:"0px"});
          self.body.append(rail);
          if (self.railh) {
            railh.css({position:"fixed",left:"0px",width:"100%"});
            (railh.align) ? railh.css({bottom:"0px"}) : railh.css({top:"0px"});
            self.body.append(railh);
          }
        } else {          
          if (self.ishwscroll) {
            if (self.win.css('position')=='static') self.css(self.win,{'position':'relative'});
            var bd = (self.win[0].nodeName == 'HTML') ? self.body : self.win;
            if (self.zoom) {
              self.zoom.css({position:"absolute",top:1,right:0,"margin-right":rail.width+4});
              bd.append(self.zoom);
            }
            rail.css({position:"absolute",top:0});
            (rail.align) ? rail.css({right:0}) : rail.css({left:0});
            bd.append(rail);
            if (railh) {
              railh.css({position:"absolute",left:0,bottom:0});
              (railh.align) ? railh.css({bottom:0}) : railh.css({top:0});
              bd.append(railh);
            }
          } else {
            self.isfixed = (self.win.css("position")=="fixed");
            var rlpos = (self.isfixed) ? "fixed" : "absolute";
            
            if (!self.isfixed) self.viewport = self.getViewport(self.win[0]);
            if (self.viewport) {
              self.body = self.viewport;              
              if ((/fixed|relative|absolute/.test(self.viewport.css("position")))==false) self.css(self.viewport,{"position":"relative"});
            }            
            
            rail.css({position:rlpos});
            if (self.zoom) self.zoom.css({position:rlpos});
            self.updateScrollBar();
            self.body.append(rail);
            if (self.zoom) self.body.append(self.zoom);
            if (self.railh) {
              railh.css({position:rlpos});
              self.body.append(railh);           
            }
          }
          
          if (cap.isios) self.css(self.win,{'-webkit-tap-highlight-color':'rgba(0,0,0,0)','-webkit-touch-callout':'none'});  // prevent grey layer on click
          
					if (cap.isie&&self.opt.disableoutline) self.win.attr("hideFocus","true");  // IE, prevent dotted rectangle on focused div
					if (cap.iswebkit&&self.opt.disableoutline) self.win.css({"outline":"none"});
//          if (cap.isopera&&self.opt.disableoutline) self.win.css({"outline":"0"});  // Opera to test [TODO]
          
        }
        
        if (self.opt.autohidemode===false) {
          self.autohidedom = false;
          self.rail.css({opacity:self.opt.cursoropacitymax});          
          if (self.railh) self.railh.css({opacity:self.opt.cursoropacitymax});
        }
        else if ((self.opt.autohidemode===true)||(self.opt.autohidemode==="leave")) {
          self.autohidedom = $().add(self.rail);          
          if (cap.isie8) self.autohidedom=self.autohidedom.add(self.cursor);
          if (self.railh) self.autohidedom=self.autohidedom.add(self.railh);
          if (self.railh&&cap.isie8) self.autohidedom=self.autohidedom.add(self.cursorh);
        }
        else if (self.opt.autohidemode=="scroll") {
          self.autohidedom = $().add(self.rail);
          if (self.railh) self.autohidedom=self.autohidedom.add(self.railh);
        }
        else if (self.opt.autohidemode=="cursor") {
          self.autohidedom = $().add(self.cursor);
          if (self.railh) self.autohidedom=self.autohidedom.add(self.cursorh);
        }
        else if (self.opt.autohidemode=="hidden") {
          self.autohidedom = false;
          self.hide();
          self.locked = false;
        }
        
        if (cap.isie9mobile) {

          self.scrollmom = new ScrollMomentumClass2D(self);        

          /*
          var trace = function(msg) {
            var db = $("#debug");
            if (isNaN(msg)&&(typeof msg != "string")) {
              var x = [];
              for(var a in msg) {
                x.push(a+":"+msg[a]);
              }
              msg ="{"+x.join(",")+"}";
            }
            if (db.children().length>0) {
              db.children().eq(0).before("<div>"+msg+"</div>");
            } else {
              db.append("<div>"+msg+"</div>");
            }
          }
          window.onerror = function(msg,url,ln) {
            trace("ERR: "+msg+" at "+ln);
          }
*/          
  
          self.onmangotouch = function(e) {
            var py = self.getScrollTop();
            var px = self.getScrollLeft();
            
            if ((py == self.scrollmom.lastscrolly)&&(px == self.scrollmom.lastscrollx)) return true;
//            $("#debug").html('DRAG:'+py);

            var dfy = py-self.mangotouch.sy;
            var dfx = px-self.mangotouch.sx;            
            var df = Math.round(Math.sqrt(Math.pow(dfx,2)+Math.pow(dfy,2)));            
            if (df==0) return;
            
            var dry = (dfy<0)?-1:1;
            var drx = (dfx<0)?-1:1;
            
            var tm = +new Date();
            if (self.mangotouch.lazy) clearTimeout(self.mangotouch.lazy);
            
            if (((tm-self.mangotouch.tm)>80)||(self.mangotouch.dry!=dry)||(self.mangotouch.drx!=drx)) {
//              trace('RESET+'+(tm-self.mangotouch.tm));
              self.scrollmom.stop();
              self.scrollmom.reset(px,py);
              self.mangotouch.sy = py;
              self.mangotouch.ly = py;
              self.mangotouch.sx = px;
              self.mangotouch.lx = px;
              self.mangotouch.dry = dry;
              self.mangotouch.drx = drx;
              self.mangotouch.tm = tm;
            } else {
              
              self.scrollmom.stop();
              self.scrollmom.update(self.mangotouch.sx-dfx,self.mangotouch.sy-dfy);
              var gap = tm - self.mangotouch.tm;              
              self.mangotouch.tm = tm;
              
//              trace('MOVE:'+df+" - "+gap);
              
              var ds = Math.max(Math.abs(self.mangotouch.ly-py),Math.abs(self.mangotouch.lx-px));
              self.mangotouch.ly = py;
              self.mangotouch.lx = px;
              
              if (ds>2) {
                self.mangotouch.lazy = setTimeout(function(){
//                  trace('END:'+ds+'+'+gap);                  
                  self.mangotouch.lazy = false;
                  self.mangotouch.dry = 0;
                  self.mangotouch.drx = 0;
                  self.mangotouch.tm = 0;                  
                  self.scrollmom.doMomentum(30);
                },100);
              }
            }
          }
          
          var top = self.getScrollTop();
          var lef = self.getScrollLeft();
          self.mangotouch = {sy:top,ly:top,dry:0,sx:lef,lx:lef,drx:0,lazy:false,tm:0};
          
          self.bind(self.docscroll,"scroll",self.onmangotouch);
        
        } else {
        
          if (cap.cantouch||self.istouchcapable||self.opt.touchbehavior||cap.hasmstouch) {
          
            self.scrollmom = new ScrollMomentumClass2D(self);
          
            self.ontouchstart = function(e) {
              if (e.pointerType&&e.pointerType!=2) return false;
              
							self.hasmoving = false;
							
              if (!self.locked) {
							
                if (cap.hasmstouch) {
                  var tg = (e.target) ? e.target : false;
                  while (tg) {
                    var nc = $(tg).getNiceScroll();
                    if ((nc.length>0)&&(nc[0].me == self.me)) break;
                    if (nc.length>0) return false;
                    if ((tg.nodeName=='DIV')&&(tg.id==self.id)) break;
                    tg = (tg.parentNode) ? tg.parentNode : false;
                  }
                }
              
                self.cancelScroll();
                
                var tg = self.getTarget(e);
                
                if (tg) {
                  var skp = (/INPUT/i.test(tg.nodeName))&&(/range/i.test(tg.type));
                  if (skp) return self.stopPropagation(e);
                }
                
                if (!("clientX" in e) && ("changedTouches" in e)) {
                  e.clientX = e.changedTouches[0].clientX;
                  e.clientY = e.changedTouches[0].clientY;
                }
                
                if (self.forcescreen) {
                  var le = e;
                  var e = {"original":(e.original)?e.original:e};
                  e.clientX = le.screenX;
                  e.clientY = le.screenY;    
                }
                
                self.rail.drag = {x:e.clientX,y:e.clientY,sx:self.scroll.x,sy:self.scroll.y,st:self.getScrollTop(),sl:self.getScrollLeft(),pt:2,dl:false};
                
                if (self.ispage||!self.opt.directionlockdeadzone) {
                  self.rail.drag.dl = "f";
                } else {
                
                  var view = {
                    w:$(window).width(),
                    h:$(window).height()
                  };
                  
                  var page = {
                    w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
                    h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)
                  }
                  
                  var maxh = Math.max(0,page.h - view.h);
                  var maxw = Math.max(0,page.w - view.w);                
                
                  if (!self.rail.scrollable&&self.railh.scrollable) self.rail.drag.ck = (maxh>0) ? "v" : false;
                  else if (self.rail.scrollable&&!self.railh.scrollable) self.rail.drag.ck = (maxw>0) ? "h" : false;
                  else self.rail.drag.ck = false;
                  if (!self.rail.drag.ck) self.rail.drag.dl = "f";
                }
                
                if (self.opt.touchbehavior&&self.isiframe&&cap.isie) {
                  var wp = self.win.position();
                  self.rail.drag.x+=wp.left;
                  self.rail.drag.y+=wp.top;
                }
                
                self.hasmoving = false;
                self.lastmouseup = false;
                self.scrollmom.reset(e.clientX,e.clientY);
                if (!cap.cantouch&&!this.istouchcapable&&!cap.hasmstouch) {
                  
                  var ip = (tg)?/INPUT|SELECT|TEXTAREA/i.test(tg.nodeName):false;
                  if (!ip) {
                    if (!self.ispage&&cap.hasmousecapture) tg.setCapture();                   

										if (self.opt.touchbehavior) {										
										  if (tg.onclick&&!(tg._onclick||false)) {  // intercept DOM0 onclick event
//											  console.log('pre.click');
												tg._onclick = tg.onclick;
												tg.onclick = function(e){
												  var df = (+new Date()) - self.scrollmom.lasttime;
//												  console.log('click:'+df);
												  if (self.hasmoving) return false;
													tg._onclick.call(this,e);
												}
											}
											return self.cancelEvent(e);
									  }

                    return self.stopPropagation(e);
                  }
									
                  if (/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr('type'))) {
                    pc = {"tg":tg,"click":false};
                    self.preventclick = pc;
                  }
                  
                }
              }
              
            };
            
            self.ontouchend = function(e) {
              if (e.pointerType&&e.pointerType!=2) return false;
              if (self.rail.drag&&(self.rail.drag.pt==2)) {
                self.scrollmom.doMomentum();
                self.rail.drag = false;
                if (self.hasmoving) {                  
                  self.lastmouseup = true;
                  self.hideCursor();
                  if (cap.hasmousecapture) document.releaseCapture();
                  if (!cap.cantouch) return self.cancelEvent(e);
                }                            
              }                        
              
            };
            
            var moveneedoffset = (self.opt.touchbehavior&&self.isiframe&&!cap.hasmousecapture);
            
            self.ontouchmove = function(e,byiframe) {
              
              if (e.pointerType&&e.pointerType!=2) return false;
    
              if (self.rail.drag&&(self.rail.drag.pt==2)) {
                if (cap.cantouch&&(typeof e.original == "undefined")) return true;  // prevent ios "ghost" events by clickable elements
              
                self.hasmoving = true;

                if (self.preventclick&&!self.preventclick.click) {
                  self.preventclick.click = self.preventclick.tg.onclick||false;                
                  self.preventclick.tg.onclick = self.onpreventclick;
                }

                var ev = $.extend({"original":e},e);
                e = ev;
                
                if (("changedTouches" in e)) {
                  e.clientX = e.changedTouches[0].clientX;
                  e.clientY = e.changedTouches[0].clientY;
                }                
                
                if (self.forcescreen) {
                  var le = e;
                  var e = {"original":(e.original)?e.original:e};
                  e.clientX = le.screenX;
                  e.clientY = le.screenY;      
                }
                
                var ofx = ofy = 0;
                
                if (moveneedoffset&&!byiframe) {
                  var wp = self.win.position();
                  ofx=-wp.left;
                  ofy=-wp.top;
                }                
                
                var fy = e.clientY + ofy;
                var my = (fy-self.rail.drag.y);
                var fx = e.clientX + ofx;
                var mx = (fx-self.rail.drag.x);
                
                var ny = self.rail.drag.st-my;
                
                if (self.ishwscroll&&self.opt.bouncescroll) {
                  if (ny<0) {
                    ny = Math.round(ny/2);
//                    fy = 0;
                  }
                  else if (ny>self.page.maxh) {
                    ny = self.page.maxh+Math.round((ny-self.page.maxh)/2);
//                    fy = 0;
                  }
                } else {
                  if (ny<0) {ny=0;fy=0}
                  if (ny>self.page.maxh) {ny=self.page.maxh;fy=0}
                }
                  
                if (self.railh&&self.railh.scrollable) {
                  var nx = self.rail.drag.sl-mx;
                  
                  if (self.ishwscroll&&self.opt.bouncescroll) {                  
                    if (nx<0) {
                      nx = Math.round(nx/2);
//                      fx = 0;
                    }
                    else if (nx>self.page.maxw) {
                      nx = self.page.maxw+Math.round((nx-self.page.maxw)/2);
//                      fx = 0;
                    }
                  } else {
                    if (nx<0) {nx=0;fx=0}
                    if (nx>self.page.maxw) {nx=self.page.maxw;fx=0}
                  }
                
                }
                
                var grabbed = false;
                if (self.rail.drag.dl) {
                  grabbed = true;
                  if (self.rail.drag.dl=="v") nx = self.rail.drag.sl;
                  else if (self.rail.drag.dl=="h") ny = self.rail.drag.st;                  
                } else {
                  var ay = Math.abs(my);
                  var ax = Math.abs(mx);
                  var dz = self.opt.directionlockdeadzone;
                  if (self.rail.drag.ck=="v") {    
                    if (ay>dz&&(ax<=(ay*0.3))) {
                      self.rail.drag = false;                      
                      return true;
                    }
                    else if (ax>dz) {
                      self.rail.drag.dl="f";                      
                      $("body").scrollTop($("body").scrollTop());  // stop iOS native scrolling (when active javascript has blocked)
                    }
                  }
                  else if (self.rail.drag.ck=="h") {
                    if (ax>dz&&(ay<=(ax*0.3))) {
                      self.rail.drag = false;                      
                      return true;
                    }
                    else if (ay>dz) {                      
                      self.rail.drag.dl="f";
                      $("body").scrollLeft($("body").scrollLeft());  // stop iOS native scrolling (when active javascript has blocked)
                    }
                  }  
                }
                
                self.synched("touchmove",function(){
                  if (self.rail.drag&&(self.rail.drag.pt==2)) {
                    if (self.prepareTransition) self.prepareTransition(0);
                    if (self.rail.scrollable) self.setScrollTop(ny);
                    self.scrollmom.update(fx,fy);
                    if (self.railh&&self.railh.scrollable) {
                      self.setScrollLeft(nx);
                      self.showCursor(ny,nx);
                    } else {
                      self.showCursor(ny);
                    }
                    if (cap.isie10) document.selection.clear();
                  }
                });
                
                if (cap.ischrome&&self.istouchcapable) grabbed=false;  //chrome touch emulation doesn't like!
                if (grabbed) return self.cancelEvent(e);
              }
              
            };
          
          }
          
          self.onmousedown = function(e,hronly) {    
            if (self.rail.drag&&self.rail.drag.pt!=1) return;
            if (self.locked) return self.cancelEvent(e);            
            self.cancelScroll();              
            self.rail.drag = {x:e.clientX,y:e.clientY,sx:self.scroll.x,sy:self.scroll.y,pt:1,hr:(!!hronly)};
            var tg = self.getTarget(e);
            if (!self.ispage&&cap.hasmousecapture) tg.setCapture();
            if (self.isiframe&&!cap.hasmousecapture) {
              self.saved["csspointerevents"] = self.doc.css("pointer-events");
              self.css(self.doc,{"pointer-events":"none"});
            }
            return self.cancelEvent(e);
          };
          
          self.onmouseup = function(e) {
            if (self.rail.drag) {
              if (cap.hasmousecapture) document.releaseCapture();
              if (self.isiframe&&!cap.hasmousecapture) self.doc.css("pointer-events",self.saved["csspointerevents"]);
              if(self.rail.drag.pt!=1)return;
              self.rail.drag = false;
              //if (!self.rail.active) self.hideCursor();
              return self.cancelEvent(e);
            }
          };        
          
          self.onmousemove = function(e) {
            if (self.rail.drag) {
              if(self.rail.drag.pt!=1)return;
              
              if (cap.ischrome&&e.which==0) return self.onmouseup(e);
              
              self.cursorfreezed = true;
                  
              if (self.rail.drag.hr) {
                self.scroll.x = self.rail.drag.sx + (e.clientX-self.rail.drag.x);
                if (self.scroll.x<0) self.scroll.x=0;
                var mw = self.scrollvaluemaxw;
                if (self.scroll.x>mw) self.scroll.x=mw;
              } else {                
                self.scroll.y = self.rail.drag.sy + (e.clientY-self.rail.drag.y);
                if (self.scroll.y<0) self.scroll.y=0;
                var my = self.scrollvaluemax;
                if (self.scroll.y>my) self.scroll.y=my;
              }
              
              self.synched('mousemove',function(){
                if (self.rail.drag&&(self.rail.drag.pt==1)) {
                  self.showCursor();
                  if (self.rail.drag.hr) self.doScrollLeft(Math.round(self.scroll.x*self.scrollratio.x),self.opt.cursordragspeed);
                  else self.doScrollTop(Math.round(self.scroll.y*self.scrollratio.y),self.opt.cursordragspeed);
                }
              });
              
              return self.cancelEvent(e);
            } 
/*              
            else {
              self.checkarea = true;
            }
*/              
          };          
         
          if (cap.cantouch||self.opt.touchbehavior) {
          
            self.onpreventclick = function(e) {
              if (self.preventclick) {
                self.preventclick.tg.onclick = self.preventclick.click;
                self.preventclick = false;            
                return self.cancelEvent(e);
              }
            }
          
//            self.onmousedown = self.ontouchstart;            
//            self.onmouseup = self.ontouchend;
//            self.onmousemove = self.ontouchmove;

            self.bind(self.win,"mousedown",self.ontouchstart);  // control content dragging

            self.onclick = (cap.isios) ? false : function(e) { 
              if (self.lastmouseup) {
                self.lastmouseup = false;
                return self.cancelEvent(e);
              } else {
                return true;
              }
            }; 
            
            if (self.opt.grabcursorenabled&&cap.cursorgrabvalue) {
              self.css((self.ispage)?self.doc:self.win,{'cursor':cap.cursorgrabvalue});            
              self.css(self.rail,{'cursor':cap.cursorgrabvalue});
            }
            
          } else {

            function checkSelectionScroll(e) {
              if (!self.selectiondrag) return;
              
              if (e) {
                var ww = self.win.outerHeight();
                var df = (e.pageY - self.selectiondrag.top);
                if (df>0&&df<ww) df=0;
                if (df>=ww) df-=ww;
                self.selectiondrag.df = df;                
              }
              if (self.selectiondrag.df==0) return;
              
              var rt = -Math.floor(self.selectiondrag.df/6)*2;              
//              self.doScrollTop(self.getScrollTop(true)+rt);
              self.doScrollBy(rt);
              
              self.debounced("doselectionscroll",function(){checkSelectionScroll()},50);
            }
            
            if ("getSelection" in document) {  // A grade - Major browsers
              self.hasTextSelected = function() {  
                return (document.getSelection().rangeCount>0);
              }
            } 
            else if ("selection" in document) {  //IE9-
              self.hasTextSelected = function() {
                return (document.selection.type != "None");
              }
            } 
            else {
              self.hasTextSelected = function() {  // no support
                return false;
              }
            }            
            
            self.onselectionstart = function(e) {
              if (self.ispage) return;
              self.selectiondrag = self.win.offset();
            }
            self.onselectionend = function(e) {
              self.selectiondrag = false;
            }
            self.onselectiondrag = function(e) {              
              if (!self.selectiondrag) return;
              if (self.hasTextSelected()) self.debounced("selectionscroll",function(){checkSelectionScroll(e)},250);
            }
            
            
          }
          
          if (cap.hasmstouch) {
            self.css(self.rail,{'-ms-touch-action':'none'});
            self.css(self.cursor,{'-ms-touch-action':'none'});
            
            self.bind(self.win,"MSPointerDown",self.ontouchstart);
            self.bind(document,"MSPointerUp",self.ontouchend);
            self.bind(document,"MSPointerMove",self.ontouchmove);
            self.bind(self.cursor,"MSGestureHold",function(e){e.preventDefault()});
            self.bind(self.cursor,"contextmenu",function(e){e.preventDefault()});
          }

          if (this.istouchcapable) {  //desktop with screen touch enabled
            self.bind(self.win,"touchstart",self.ontouchstart);
            self.bind(document,"touchend",self.ontouchend);
            self.bind(document,"touchcancel",self.ontouchend);
            self.bind(document,"touchmove",self.ontouchmove);            
          }
          
          self.bind(self.cursor,"mousedown",self.onmousedown);
          self.bind(self.cursor,"mouseup",self.onmouseup);

          if (self.railh) {
            self.bind(self.cursorh,"mousedown",function(e){self.onmousedown(e,true)});
            self.bind(self.cursorh,"mouseup",function(e){
              if (self.rail.drag&&self.rail.drag.pt==2) return;
              self.rail.drag = false;
              self.hasmoving = false;
              self.hideCursor();
              if (cap.hasmousecapture) document.releaseCapture();
              return self.cancelEvent(e);
            });
          }
		
          if (self.opt.cursordragontouch||!cap.cantouch&&!self.opt.touchbehavior) {

            self.rail.css({"cursor":"default"});
            self.railh&&self.railh.css({"cursor":"default"});          
          
            self.jqbind(self.rail,"mouseenter",function() {
              if (self.canshowonmouseevent) self.showCursor();
              self.rail.active = true;
            });
            self.jqbind(self.rail,"mouseleave",function() { 
              self.rail.active = false;
              if (!self.rail.drag) self.hideCursor();
            });
            
            if (self.opt.sensitiverail) {
              self.bind(self.rail,"click",function(e){self.doRailClick(e,false,false)});
              self.bind(self.rail,"dblclick",function(e){self.doRailClick(e,true,false)});
              self.bind(self.cursor,"click",function(e){self.cancelEvent(e)});
              self.bind(self.cursor,"dblclick",function(e){self.cancelEvent(e)});
            }

            if (self.railh) {
              self.jqbind(self.railh,"mouseenter",function() {
                if (self.canshowonmouseevent) self.showCursor();
                self.rail.active = true;
              });          
              self.jqbind(self.railh,"mouseleave",function() { 
                self.rail.active = false;
                if (!self.rail.drag) self.hideCursor();
              });
              
              if (self.opt.sensitiverail) {
                self.bind(self.railh, "click", function(e){self.doRailClick(e,false,true)});
                self.bind(self.railh, "dblclick", function(e){self.doRailClick(e, true, true) });
                self.bind(self.cursorh, "click", function (e) { self.cancelEvent(e) });
                self.bind(self.cursorh, "dblclick", function (e) { self.cancelEvent(e) });
              }
              
            }
          
          }
    
          if (!cap.cantouch&&!self.opt.touchbehavior) {

            self.bind((cap.hasmousecapture)?self.win:document,"mouseup",self.onmouseup);            
            self.bind(document,"mousemove",self.onmousemove);
            if (self.onclick) self.bind(document,"click",self.onclick);
            
            if (!self.ispage&&self.opt.enablescrollonselection) {
              self.bind(self.win[0],"mousedown",self.onselectionstart);
              self.bind(document,"mouseup",self.onselectionend);
              self.bind(self.cursor,"mouseup",self.onselectionend);
              if (self.cursorh) self.bind(self.cursorh,"mouseup",self.onselectionend);
              self.bind(document,"mousemove",self.onselectiondrag);
            }

						if (self.zoom) {
							self.jqbind(self.zoom,"mouseenter",function() {
								if (self.canshowonmouseevent) self.showCursor();
								self.rail.active = true;
							});          
							self.jqbind(self.zoom,"mouseleave",function() { 
								self.rail.active = false;
								if (!self.rail.drag) self.hideCursor();
							});
						}

          } else {
            
            self.bind((cap.hasmousecapture)?self.win:document,"mouseup",self.ontouchend);
            self.bind(document,"mousemove",self.ontouchmove);
            if (self.onclick) self.bind(document,"click",self.onclick);
            
            if (self.opt.cursordragontouch) {
              self.bind(self.cursor,"mousedown",self.onmousedown);
              self.bind(self.cursor,"mousemove",self.onmousemove);
              self.cursorh&&self.bind(self.cursorh,"mousedown",function(e){self.onmousedown(e,true)});
              self.cursorh&&self.bind(self.cursorh,"mousemove",self.onmousemove);
            }
          
          }
						
					if (self.opt.enablemousewheel) {
						if (!self.isiframe) self.bind((cap.isie&&self.ispage) ? document : self.win /*self.docscroll*/ ,"mousewheel",self.onmousewheel);
						self.bind(self.rail,"mousewheel",self.onmousewheel);
						if (self.railh) self.bind(self.railh,"mousewheel",self.onmousewheelhr);
					}						
						
          if (!self.ispage&&!cap.cantouch&&!(/HTML|BODY/.test(self.win[0].nodeName))) {
            if (!self.win.attr("tabindex")) self.win.attr({"tabindex":tabindexcounter++});
            
            self.jqbind(self.win,"focus",function(e) {
              domfocus = (self.getTarget(e)).id||true;
              self.hasfocus = true;
              if (self.canshowonmouseevent) self.noticeCursor();
            });
            self.jqbind(self.win,"blur",function(e) {
              domfocus = false;
              self.hasfocus = false;
            });
            
            self.jqbind(self.win,"mouseenter",function(e) {
              mousefocus = (self.getTarget(e)).id||true;
              self.hasmousefocus = true;
              if (self.canshowonmouseevent) self.noticeCursor();
            });
            self.jqbind(self.win,"mouseleave",function() {
              mousefocus = false;
              self.hasmousefocus = false;
							if (!self.rail.drag) self.hideCursor();
            });
            
          };
          
        }  // !ie9mobile
        
        //Thanks to http://www.quirksmode.org !!
        self.onkeypress = function(e) {
          if (self.locked&&self.page.maxh==0) return true;
          
          e = (e) ? e : window.e;
          var tg = self.getTarget(e);
          if (tg&&/INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)) {
            var tp = tg.getAttribute('type')||tg.type||false;            
            if ((!tp)||!(/submit|button|cancel/i.tp)) return true;
          }
          
          if (self.hasfocus||(self.hasmousefocus&&!domfocus)||(self.ispage&&!domfocus&&!mousefocus)) {
            var key = e.keyCode;
            
            if (self.locked&&key!=27) return self.cancelEvent(e);

            var ctrl = e.ctrlKey||false;
            var shift = e.shiftKey || false;
            
            var ret = false;
            switch (key) {
              case 38:
              case 63233: //safari
                self.doScrollBy(24*3);
                ret = true;
                break;
              case 40:
              case 63235: //safari
                self.doScrollBy(-24*3);
                ret = true;
                break;
              case 37:
              case 63232: //safari
                if (self.railh) {
                  (ctrl) ? self.doScrollLeft(0) : self.doScrollLeftBy(24*3);
                  ret = true;
                }
                break;
              case 39:
              case 63234: //safari
                if (self.railh) {
                  (ctrl) ? self.doScrollLeft(self.page.maxw) : self.doScrollLeftBy(-24*3);
                  ret = true;
                }
                break;
              case 33:
              case 63276: // safari
                self.doScrollBy(self.view.h);
                ret = true;
                break;
              case 34:
              case 63277: // safari
                self.doScrollBy(-self.view.h);
                ret = true;
                break;
              case 36:
              case 63273: // safari                
                (self.railh&&ctrl) ? self.doScrollPos(0,0) : self.doScrollTo(0);
                ret = true;
                break;
              case 35:
              case 63275: // safari
                (self.railh&&ctrl) ? self.doScrollPos(self.page.maxw,self.page.maxh) : self.doScrollTo(self.page.maxh);
                ret = true;
                break;
              case 32:
                if (self.opt.spacebarenabled) {
                  (shift) ? self.doScrollBy(self.view.h) : self.doScrollBy(-self.view.h);
                  ret = true;
                }
                break;
              case 27: // ESC
                if (self.zoomactive) {
                  self.doZoom();
                  ret = true;
                }
                break;
            }
            if (ret) return self.cancelEvent(e);
          }
        };
        
        if (self.opt.enablekeyboard) self.bind(document,(cap.isopera&&!cap.isopera12)?"keypress":"keydown",self.onkeypress);
        
        self.bind(window,'resize',self.lazyResize);
        self.bind(window,'orientationchange',self.lazyResize);
        
        self.bind(window,"load",self.lazyResize);
		
        if (cap.ischrome&&!self.ispage&&!self.haswrapper) { //chrome void scrollbar bug - it persists in version 26
          var tmp=self.win.attr("style");
					var ww = parseFloat(self.win.css("width"))+1;
          self.win.css('width',ww);
          self.synched("chromefix",function(){self.win.attr("style",tmp)});
        }
        
        
// Trying a cross-browser implementation - good luck!

        self.onAttributeChange = function(e) {
          self.lazyResize(250);
        }
        
        if (!self.ispage&&!self.haswrapper) {
          // redesigned MutationObserver for Chrome18+/Firefox14+/iOS6+ with support for: remove div, add/remove content
          if (clsMutationObserver !== false) {
            self.observer = new clsMutationObserver(function(mutations) {            
              mutations.forEach(self.onAttributeChange);
            });
            self.observer.observe(self.win[0],{childList: true, characterData: false, attributes: true, subtree: false});
            
            self.observerremover = new clsMutationObserver(function(mutations) {
               mutations.forEach(function(mo){
                 if (mo.removedNodes.length>0) {
                   for (var dd in mo.removedNodes) {
                     if (mo.removedNodes[dd]==self.win[0]) return self.remove();
                   }
                 }
               });
            });
            self.observerremover.observe(self.win[0].parentNode,{childList: true, characterData: false, attributes: false, subtree: false});
            
          } else {        
            self.bind(self.win,(cap.isie&&!cap.isie9)?"propertychange":"DOMAttrModified",self.onAttributeChange);            
            if (cap.isie9) self.win[0].attachEvent("onpropertychange",self.onAttributeChange); //IE9 DOMAttrModified bug
            self.bind(self.win,"DOMNodeRemoved",function(e){
              if (e.target==self.win[0]) self.remove();
            });
          }
        }
        
//

        if (!self.ispage&&self.opt.boxzoom) self.bind(window,"resize",self.resizeZoom);
        if (self.istextarea) self.bind(self.win,"mouseup",self.lazyResize);
        
        self.checkrtlmode = true;
        self.lazyResize(30);
        
      }
      
      if (this.doc[0].nodeName == 'IFRAME') {
        function oniframeload(e) {
          self.iframexd = false;
          try {
            var doc = 'contentDocument' in this ? this.contentDocument : this.contentWindow.document;
            var a = doc.domain;            
          } catch(e){self.iframexd = true;doc=false};
          
          if (self.iframexd) {
            if ("console" in window) console.log('NiceScroll error: policy restriced iframe');
            return true;  //cross-domain - I can't manage this        
          }
          
          self.forcescreen = true;
          
          if (self.isiframe) {            
            self.iframe = {
              "doc":$(doc),
              "html":self.doc.contents().find('html')[0],
              "body":self.doc.contents().find('body')[0]
            };
            self.getContentSize = function(){
              return {
                w:Math.max(self.iframe.html.scrollWidth,self.iframe.body.scrollWidth),
                h:Math.max(self.iframe.html.scrollHeight,self.iframe.body.scrollHeight)
              }
            }            
            self.docscroll = $(self.iframe.body);//$(this.contentWindow);
          }
          
          if (!cap.isios&&self.opt.iframeautoresize&&!self.isiframe) {
            self.win.scrollTop(0); // reset position
            self.doc.height("");  //reset height to fix browser bug
            var hh=Math.max(doc.getElementsByTagName('html')[0].scrollHeight,doc.body.scrollHeight);
            self.doc.height(hh);          
          }
          self.lazyResize(30);
          
          if (cap.isie7) self.css($(self.iframe.html),{'overflow-y':'hidden'});
          //self.css($(doc.body),{'overflow-y':'hidden'});
          self.css($(self.iframe.body),{'overflow-y':'hidden'});
          
          if (cap.isios&&self.haswrapper) {
            self.css($(doc.body),{'-webkit-transform':'translate3d(0,0,0)'});  // avoid iFrame content clipping - thanks to http://blog.derraab.com/2012/04/02/avoid-iframe-content-clipping-with-css-transform-on-ios/
          }
          
          if ('contentWindow' in this) {
            self.bind(this.contentWindow,"scroll",self.onscroll);  //IE8 & minor
          } else {          
            self.bind(doc,"scroll",self.onscroll);
          }                    
          
          if (self.opt.enablemousewheel) {
            self.bind(doc,"mousewheel",self.onmousewheel);
          }
          
          if (self.opt.enablekeyboard) self.bind(doc,(cap.isopera)?"keypress":"keydown",self.onkeypress);
          
          if (cap.cantouch||self.opt.touchbehavior) {
            self.bind(doc,"mousedown",self.ontouchstart);
            self.bind(doc,"mousemove",function(e){self.ontouchmove(e,true)});
            if (self.opt.grabcursorenabled&&cap.cursorgrabvalue) self.css($(doc.body),{'cursor':cap.cursorgrabvalue});
          }
          
          self.bind(doc,"mouseup",self.ontouchend);
          
          if (self.zoom) {
            if (self.opt.dblclickzoom) self.bind(doc,'dblclick',self.doZoom);
            if (self.ongesturezoom) self.bind(doc,"gestureend",self.ongesturezoom);             
          }
        };
        
        if (this.doc[0].readyState&&this.doc[0].readyState=="complete"){
          setTimeout(function(){oniframeload.call(self.doc[0],false)},500);
        }
        self.bind(this.doc,"load",oniframeload);
        
      }
      
    };
    
    this.showCursor = function(py,px) {
      if (self.cursortimeout) {
        clearTimeout(self.cursortimeout);
        self.cursortimeout = 0;
      }
      if (!self.rail) return;
      if (self.autohidedom) {
        self.autohidedom.stop().css({opacity:self.opt.cursoropacitymax});
        self.cursoractive = true;
      }
      
      if (!self.rail.drag||self.rail.drag.pt!=1) {      
        if ((typeof py != "undefined")&&(py!==false)) {
          self.scroll.y = Math.round(py * 1/self.scrollratio.y);
        }
        if (typeof px != "undefined") {
          self.scroll.x = Math.round(px * 1/self.scrollratio.x);
        }
      }
      
      self.cursor.css({height:self.cursorheight,top:self.scroll.y}); 
      if (self.cursorh) {
        (!self.rail.align&&self.rail.visibility) ? self.cursorh.css({width:self.cursorwidth,left:self.scroll.x+self.rail.width}) : self.cursorh.css({width:self.cursorwidth,left:self.scroll.x});
        self.cursoractive = true;
      }
      
      if (self.zoom) self.zoom.stop().css({opacity:self.opt.cursoropacitymax});      
    };
    
    this.hideCursor = function(tm) {
      if (self.cursortimeout) return;
      if (!self.rail) return;
      if (!self.autohidedom) return;
			if (self.hasmousefocus&&self.opt.autohidemode=="leave") return;
      self.cursortimeout = setTimeout(function() {
         if (!self.rail.active||!self.showonmouseevent) {				   
           self.autohidedom.stop().animate({opacity:self.opt.cursoropacitymin});
           if (self.zoom) self.zoom.stop().animate({opacity:self.opt.cursoropacitymin});
           self.cursoractive = false;
         }
         self.cursortimeout = 0;
      },tm||self.opt.hidecursordelay);
    };
    
    this.noticeCursor = function(tm,py,px) {
      self.showCursor(py,px);
      if (!self.rail.active) self.hideCursor(tm);
    };
        
    this.getContentSize = 
      (self.ispage) ?
        function(){
          return {
            w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
            h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)
          }
        }
      : (self.haswrapper) ?
        function(){
          return {
            w:self.doc.outerWidth()+parseInt(self.win.css('paddingLeft'))+parseInt(self.win.css('paddingRight')),
            h:self.doc.outerHeight()+parseInt(self.win.css('paddingTop'))+parseInt(self.win.css('paddingBottom'))
          }
        }
      : function() {        
        return {
          w:self.docscroll[0].scrollWidth,
          h:self.docscroll[0].scrollHeight
        }
      };
  
    this.onResize = function(e,page) {
    
			if (!self||!self.win) return false;
	
      if (!self.haswrapper&&!self.ispage) {
        if (self.win.css('display')=='none') {
          if (self.visibility) self.hideRail().hideRailHr();
          return false;
        } else {          
          if (!self.hidden&&!self.visibility) self.showRail().showRailHr();
        }        
      }
    
      var premaxh = self.page.maxh;
      var premaxw = self.page.maxw;

      var preview = {h:self.view.h,w:self.view.w};   
      
      self.view = {
        w:(self.ispage) ? self.win.width() : parseInt(self.win[0].clientWidth),
        h:(self.ispage) ? self.win.height() : parseInt(self.win[0].clientHeight)
      };
      
      self.page = (page) ? page : self.getContentSize();
      
      self.page.maxh = Math.max(0,self.page.h - self.view.h);
      self.page.maxw = Math.max(0,self.page.w - self.view.w);
      
      if ((self.page.maxh==premaxh)&&(self.page.maxw==premaxw)&&(self.view.w==preview.w)) {
        // test position        
        if (!self.ispage) {
          var pos = self.win.offset();
          if (self.lastposition) {
            var lst = self.lastposition;
            if ((lst.top==pos.top)&&(lst.left==pos.left)) return self; //nothing to do            
          }
          self.lastposition = pos;
        } else {
          return self; //nothing to do
        }
      }
      
      if (self.page.maxh==0) {
        self.hideRail();        
        self.scrollvaluemax = 0;
        self.scroll.y = 0;
        self.scrollratio.y = 0;
        self.cursorheight = 0;
        self.setScrollTop(0);
        self.rail.scrollable = false;
      } else {       
        self.rail.scrollable = true;
      }
      
      if (self.page.maxw==0) {
        self.hideRailHr();
        self.scrollvaluemaxw = 0;
        self.scroll.x = 0;
        self.scrollratio.x = 0;
        self.cursorwidth = 0;
        self.setScrollLeft(0);
        self.railh.scrollable = false;
      } else {        
        self.railh.scrollable = true;
      }
  
      self.locked = (self.page.maxh==0)&&(self.page.maxw==0);
      if (self.locked) {
				if (!self.ispage) self.updateScrollBar(self.view);
			  return false;
		  }

      if (!self.hidden&&!self.visibility) {
        self.showRail().showRailHr();
      }      
      else if (!self.hidden&&!self.railh.visibility) self.showRailHr();
      
      if (self.istextarea&&self.win.css('resize')&&self.win.css('resize')!='none') self.view.h-=20;      

      self.cursorheight = Math.min(self.view.h,Math.round(self.view.h * (self.view.h / self.page.h)));
      self.cursorheight = (self.opt.cursorfixedheight) ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight,self.cursorheight);

      self.cursorwidth = Math.min(self.view.w,Math.round(self.view.w * (self.view.w / self.page.w)));
      self.cursorwidth = (self.opt.cursorfixedheight) ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight,self.cursorwidth);
      
      self.scrollvaluemax = self.view.h-self.cursorheight-self.cursor.hborder;
      
      if (self.railh) {
        self.railh.width = (self.page.maxh>0) ? (self.view.w-self.rail.width) : self.view.w;
        self.scrollvaluemaxw = self.railh.width-self.cursorwidth-self.cursorh.wborder;
      }
      
      if (self.checkrtlmode&&self.railh) {
        self.checkrtlmode = false;
        if (self.opt.rtlmode&&self.scroll.x==0) self.setScrollLeft(self.page.maxw);
      }
      
      if (!self.ispage) self.updateScrollBar(self.view);
      
      self.scrollratio = {
        x:(self.page.maxw/self.scrollvaluemaxw),
        y:(self.page.maxh/self.scrollvaluemax)
      };
     
      var sy = self.getScrollTop();
      if (sy>self.page.maxh) {
        self.doScrollTop(self.page.maxh);
      } else {     
        self.scroll.y = Math.round(self.getScrollTop() * (1/self.scrollratio.y));
        self.scroll.x = Math.round(self.getScrollLeft() * (1/self.scrollratio.x));
        if (self.cursoractive) self.noticeCursor();     
      }      
      
      if (self.scroll.y&&(self.getScrollTop()==0)) self.doScrollTo(Math.floor(self.scroll.y*self.scrollratio.y));
      
      return self;
    };
    
    this.resize = self.onResize;
    
    this.lazyResize = function(tm) {   // event debounce
      tm = (isNaN(tm)) ? 30 : tm;
      self.delayed('resize',self.resize,tm);
      return self;
    }
   
// modified by MDN https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/wheel
    function _modernWheelEvent(dom,name,fn,bubble) {      
      self._bind(dom,name,function(e){
        var  e = (e) ? e : window.event;
        var event = {
          original: e,
          target: e.target || e.srcElement,
          type: "wheel",
          deltaMode: e.type == "MozMousePixelScroll" ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: function() {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            return false;
          },
          stopImmediatePropagation: function() {
            (e.stopImmediatePropagation) ? e.stopImmediatePropagation() : e.cancelBubble = true;
          }
        };
            
        if (name=="mousewheel") {
          event.deltaY = - 1/40 * e.wheelDelta;
          e.wheelDeltaX && (event.deltaX = - 1/40 * e.wheelDeltaX);
        } else {
          event.deltaY = e.detail;
        }

        return fn.call(dom,event);      
      },bubble);
    };     
   
    this._bind = function(el,name,fn,bubble) {  // primitive bind
      self.events.push({e:el,n:name,f:fn,b:bubble,q:false});
      if (el.addEventListener) {
        el.addEventListener(name,fn,bubble||false);
      }
      else if (el.attachEvent) {
        el.attachEvent("on"+name,fn);
      }
      else {
        el["on"+name] = fn;        
      }        
    };
   
    this.jqbind = function(dom,name,fn) {  // use jquery bind for non-native events (mouseenter/mouseleave)
      self.events.push({e:dom,n:name,f:fn,q:true});
      $(dom).bind(name,fn);
    }
   
    this.bind = function(dom,name,fn,bubble) {  // touch-oriented & fixing jquery bind
      var el = ("jquery" in dom) ? dom[0] : dom;
      
      if (name=='mousewheel') {
        if ("onwheel" in self.win) {            
          self._bind(el,"wheel",fn,bubble||false);
        } else {            
          var wname = (typeof document.onmousewheel != "undefined") ? "mousewheel" : "DOMMouseScroll";  // older IE/Firefox
          _modernWheelEvent(el,wname,fn,bubble||false);
          if (wname=="DOMMouseScroll") _modernWheelEvent(el,"MozMousePixelScroll",fn,bubble||false);  // Firefox legacy
        }
      } 
      else if (el.addEventListener) {
        if (cap.cantouch && /mouseup|mousedown|mousemove/.test(name)) {  // touch device support
          var tt=(name=='mousedown')?'touchstart':(name=='mouseup')?'touchend':'touchmove';
          self._bind(el,tt,function(e){
            if (e.touches) {
              if (e.touches.length<2) {var ev=(e.touches.length)?e.touches[0]:e;ev.original=e;fn.call(this,ev);}
            } 
            else if (e.changedTouches) {var ev=e.changedTouches[0];ev.original=e;fn.call(this,ev);}  //blackberry
          },bubble||false);
        }
        self._bind(el,name,fn,bubble||false);
        if (cap.cantouch && name=="mouseup") self._bind(el,"touchcancel",fn,bubble||false);
      }
      else {
        self._bind(el,name,function(e) {
          e = e||window.event||false;
          if (e) {
            if (e.srcElement) e.target=e.srcElement;
          }
          if (!("pageY" in e)) {
            e.pageX = e.clientX + document.documentElement.scrollLeft;
            e.pageY = e.clientY + document.documentElement.scrollTop; 
          }
          return ((fn.call(el,e)===false)||bubble===false) ? self.cancelEvent(e) : true;
        });
      } 
    };
    
    this._unbind = function(el,name,fn,bub) {  // primitive unbind
      if (el.removeEventListener) {
        el.removeEventListener(name,fn,bub);
      }
      else if (el.detachEvent) {
        el.detachEvent('on'+name,fn);
      } else {
        el['on'+name] = false;
      }
    };
    
    this.unbindAll = function() {
      for(var a=0;a<self.events.length;a++) {
        var r = self.events[a];        
        (r.q) ? r.e.unbind(r.n,r.f) : self._unbind(r.e,r.n,r.f,r.b);
      }
    };
    
    // Thanks to http://www.switchonthecode.com !!
    this.cancelEvent = function(e) {
      var e = (e.original) ? e.original : (e) ? e : window.event||false;
      if (!e) return false;      
      if(e.preventDefault) e.preventDefault();
      if(e.stopPropagation) e.stopPropagation();
      if(e.preventManipulation) e.preventManipulation();  //IE10
      e.cancelBubble = true;
      e.cancel = true;
      e.returnValue = false;
      return false;
    };

    this.stopPropagation = function(e) {
      var e = (e.original) ? e.original : (e) ? e : window.event||false;
      if (!e) return false;
      if (e.stopPropagation) return e.stopPropagation();
      if (e.cancelBubble) e.cancelBubble=true;
      return false;
    }
    
    this.showRail = function() {
      if ((self.page.maxh!=0)&&(self.ispage||self.win.css('display')!='none')) {
        self.visibility = true;
        self.rail.visibility = true;
        self.rail.css('display','block');
      }
      return self;
    };

    this.showRailHr = function() {
      if (!self.railh) return self;
      if ((self.page.maxw!=0)&&(self.ispage||self.win.css('display')!='none')) {
        self.railh.visibility = true;
        self.railh.css('display','block');
      }
      return self;
    };
    
    this.hideRail = function() {
      self.visibility = false;
      self.rail.visibility = false;
      self.rail.css('display','none');
      return self;
    };

    this.hideRailHr = function() {
      if (!self.railh) return self;
      self.railh.visibility = false;
      self.railh.css('display','none');
      return self;
    };
    
    this.show = function() {
      self.hidden = false;
      self.locked = false;
      return self.showRail().showRailHr();
    };

    this.hide = function() {
      self.hidden = true;
      self.locked = true;
      return self.hideRail().hideRailHr();
    };
    
    this.toggle = function() {
      return (self.hidden) ? self.show() : self.hide();
    };
    
    this.remove = function() {
      self.stop();
      if (self.cursortimeout) clearTimeout(self.cursortimeout);
      self.doZoomOut();
      self.unbindAll();     

      if (cap.isie9) self.win[0].detachEvent("onpropertychange",self.onAttributeChange); //IE9 DOMAttrModified bug
      
      if (self.observer !== false) self.observer.disconnect();
      if (self.observerremover !== false) self.observerremover.disconnect();      
      
      self.events = null;
      
      if (self.cursor) {
        self.cursor.remove();
      }
      if (self.cursorh) {
        self.cursorh.remove();
      }
      if (self.rail) {
        self.rail.remove();
      }
      if (self.railh) {
        self.railh.remove();
      }
      if (self.zoom) {
        self.zoom.remove();
      }
      for(var a=0;a<self.saved.css.length;a++) {
        var d=self.saved.css[a];
        d[0].css(d[1],(typeof d[2]=="undefined") ? '' : d[2]);
      }
      self.saved = false;      
      self.me.data('__nicescroll',''); //erase all traces
      
      // memory leak fixed by GianlucaGuarini - thanks a lot!
      // remove the current nicescroll from the $.nicescroll array & normalize array
      var lst = $.nicescroll;
      lst.each(function(i){
        if (!this) return;
        if(this.id === self.id) {
          delete lst[i];          
          for(var b=++i;b<lst.length;b++,i++) lst[i]=lst[b];
          lst.length--;
          if (lst.length) delete lst[lst.length];
        }
      });      
      
      for (var i in self) {
        self[i] = null;
        delete self[i];
      }
      
      self = null;
      
    };
    
    this.scrollstart = function(fn) {
      this.onscrollstart = fn;
      return self;
    }
    this.scrollend = function(fn) {
      this.onscrollend = fn;
      return self;
    }
    this.scrollcancel = function(fn) {
      this.onscrollcancel = fn;
      return self;
    }
    
    this.zoomin = function(fn) {
      this.onzoomin = fn;
      return self;
    }
    this.zoomout = function(fn) {
      this.onzoomout = fn;
      return self;
    }
    
    this.isScrollable = function(e) {      
      var dom = (e.target) ? e.target : e;
      if (dom.nodeName == 'OPTION') return true;
      while (dom&&(dom.nodeType==1)&&!(/BODY|HTML/.test(dom.nodeName))) {
        var dd = $(dom);
        var ov = dd.css('overflowY')||dd.css('overflowX')||dd.css('overflow')||'';
        if (/scroll|auto/.test(ov)) return (dom.clientHeight!=dom.scrollHeight);
        dom = (dom.parentNode) ? dom.parentNode : false;        
      }
      return false;
    };

    this.getViewport = function(me) {      
      var dom = (me&&me.parentNode) ? me.parentNode : false;
      while (dom&&(dom.nodeType==1)&&!(/BODY|HTML/.test(dom.nodeName))) {
        var dd = $(dom);
        if (/fixed|absolute/.test(dd.css("position"))) return dd;        
        var ov = dd.css('overflowY')||dd.css('overflowX')||dd.css('overflow')||'';
        if ((/scroll|auto/.test(ov))&&(dom.clientHeight!=dom.scrollHeight)) return dd;
        if (dd.getNiceScroll().length>0) return dd;
        dom = (dom.parentNode) ? dom.parentNode : false;
      }
      return false;
    };
    
    function execScrollWheel(e,hr,chkscroll) {
      var px,py;
      var rt = 1;
      
      if (e.deltaMode==0) {  // PIXEL
        px = -Math.floor(e.deltaX*(self.opt.mousescrollstep/(18*3)));
        py = -Math.floor(e.deltaY*(self.opt.mousescrollstep/(18*3)));
      }
      else if (e.deltaMode==1) {  // LINE
        px = -Math.floor(e.deltaX*self.opt.mousescrollstep);
        py = -Math.floor(e.deltaY*self.opt.mousescrollstep);
      }
      
      if (hr&&self.opt.oneaxismousemode&&(px==0)&&py) {  // classic vertical-only mousewheel + browser with x/y support 
        px = py;
        py = 0;
      }

      if (px) {
        if (self.scrollmom) {self.scrollmom.stop()}
        self.lastdeltax+=px;
        self.debounced("mousewheelx",function(){var dt=self.lastdeltax;self.lastdeltax=0;if(!self.rail.drag){self.doScrollLeftBy(dt)}},120);
      }
      if (py) {
        if (self.opt.nativeparentscrolling&&chkscroll&&!self.ispage&&!self.zoomactive) {
          if (py<0) {
            if (self.getScrollTop()>=self.page.maxh) return true;
          } else {
            if (self.getScrollTop()<=0) return true;
          }
        }
        if (self.scrollmom) {self.scrollmom.stop()}
        self.lastdeltay+=py;
        self.debounced("mousewheely",function(){var dt=self.lastdeltay;self.lastdeltay=0;if(!self.rail.drag){self.doScrollBy(dt)}},120);
      }
      
      e.stopImmediatePropagation();
      return e.preventDefault();
//      return self.cancelEvent(e);
    };
    
    this.onmousewheel = function(e) {          
      if (self.locked) {
        self.debounced("checkunlock",self.resize,250);
        return true;
      }
      if (self.rail.drag) return self.cancelEvent(e);
      
      if (self.opt.oneaxismousemode=="auto"&&e.deltaX!=0) self.opt.oneaxismousemode = false;  // check two-axis mouse support (not very elegant)
      
      if (self.opt.oneaxismousemode&&e.deltaX==0) {
        if (!self.rail.scrollable) {
          if (self.railh&&self.railh.scrollable) {
            return self.onmousewheelhr(e);
          } else {          
            return true;
          }
        }
      }
      
      var nw = +(new Date());
      var chk = false;
      if (self.opt.preservenativescrolling&&((self.checkarea+600)<nw)) {
//        self.checkarea = false;
        self.nativescrollingarea = self.isScrollable(e);
        chk = true;
      }
      self.checkarea = nw;
      if (self.nativescrollingarea) return true; // this isn't my business
//      if (self.locked) return self.cancelEvent(e);
      var ret = execScrollWheel(e,false,chk);
      if (ret) self.checkarea = 0;
      return ret;
    };

    this.onmousewheelhr = function(e) {
      if (self.locked||!self.railh.scrollable) return true;
      if (self.rail.drag) return self.cancelEvent(e);
      
      var nw = +(new Date());
      var chk = false;
      if (self.opt.preservenativescrolling&&((self.checkarea+600)<nw)) {
//        self.checkarea = false;
        self.nativescrollingarea = self.isScrollable(e); 
        chk = true;
      }
      self.checkarea = nw;
      if (self.nativescrollingarea) return true; // this isn't my business
      if (self.locked) return self.cancelEvent(e);

      return execScrollWheel(e,true,chk);
    };
    
    this.stop = function() {
      self.cancelScroll();
      if (self.scrollmon) self.scrollmon.stop();
      self.cursorfreezed = false;
      self.scroll.y = Math.round(self.getScrollTop() * (1/self.scrollratio.y));      
      self.noticeCursor();
      return self;
    };
    
    this.getTransitionSpeed = function(dif) {
      var sp = Math.round(self.opt.scrollspeed*10);
      var ex = Math.min(sp,Math.round((dif / 20) * self.opt.scrollspeed));
      return (ex>20) ? ex : 0;
    }
    
    if (!self.opt.smoothscroll) {
      this.doScrollLeft = function(x,spd) {  //direct
        var y = self.getScrollTop();
        self.doScrollPos(x,y,spd);
      }      
      this.doScrollTop = function(y,spd) {   //direct
        var x = self.getScrollLeft();
        self.doScrollPos(x,y,spd);
      }
      this.doScrollPos = function(x,y,spd) {  //direct
        var nx = (x>self.page.maxw) ? self.page.maxw : x;
        if (nx<0) nx=0;
        var ny = (y>self.page.maxh) ? self.page.maxh : y;
        if (ny<0) ny=0;
        self.synched('scroll',function(){
          self.setScrollTop(ny);
          self.setScrollLeft(nx);
        });
      }
      this.cancelScroll = function() {}; // direct
    } 
    else if (self.ishwscroll&&cap.hastransition&&self.opt.usetransition) {
      this.prepareTransition = function(dif,istime) {
        var ex = (istime) ? ((dif>20)?dif:0) : self.getTransitionSpeed(dif);        
        var trans = (ex) ? cap.prefixstyle+'transform '+ex+'ms ease-out' : '';
        if (!self.lasttransitionstyle||self.lasttransitionstyle!=trans) {
          self.lasttransitionstyle = trans;
          self.doc.css(cap.transitionstyle,trans);
        }
        return ex;
      };
      
      this.doScrollLeft = function(x,spd) {  //trans
        var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
        self.doScrollPos(x,y,spd);
      }      
      
      this.doScrollTop = function(y,spd) {   //trans
        var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
        self.doScrollPos(x,y,spd);
      }
      
      this.doScrollPos = function(x,y,spd) {  //trans
   
        var py = self.getScrollTop();
        var px = self.getScrollLeft();        
      
        if (((self.newscrolly-py)*(y-py)<0)||((self.newscrollx-px)*(x-px)<0)) self.cancelScroll();  //inverted movement detection      
        
        if (self.opt.bouncescroll==false) {
          if (y<0) y=0;
          else if (y>self.page.maxh) y=self.page.maxh;
          if (x<0) x=0;
          else if (x>self.page.maxw) x=self.page.maxw;
        }
        
        if (self.scrollrunning&&x==self.newscrollx&&y==self.newscrolly) return false;
        
        self.newscrolly = y;
        self.newscrollx = x;
        
        self.newscrollspeed = spd||false;
        
        if (self.timer) return false;
        
        self.timer = setTimeout(function(){
        
          var top = self.getScrollTop();
          var lft = self.getScrollLeft();
          
          var dst = {};
          dst.x = x-lft;
          dst.y = y-top;
          dst.px = lft;
          dst.py = top;
          
          var dd = Math.round(Math.sqrt(Math.pow(dst.x,2)+Math.pow(dst.y,2)));          
          
//          var df = (self.newscrollspeed) ? self.newscrollspeed : dd;
          
          var ms = (self.newscrollspeed && self.newscrollspeed>1) ? self.newscrollspeed : self.getTransitionSpeed(dd);
          if (self.newscrollspeed&&self.newscrollspeed<=1) ms*=self.newscrollspeed;
          
          self.prepareTransition(ms,true);
          
          if (self.timerscroll&&self.timerscroll.tm) clearInterval(self.timerscroll.tm);    
          
          if (ms>0) {
          
            if (!self.scrollrunning&&self.onscrollstart) {
              var info = {"type":"scrollstart","current":{"x":lft,"y":top},"request":{"x":x,"y":y},"end":{"x":self.newscrollx,"y":self.newscrolly},"speed":ms};
              self.onscrollstart.call(self,info);
            }
            
            if (cap.transitionend) {
              if (!self.scrollendtrapped) {
                self.scrollendtrapped = true;
                self.bind(self.doc,cap.transitionend,self.onScrollEnd,false); //I have got to do something usefull!!
              }
            } else {              
              if (self.scrollendtrapped) clearTimeout(self.scrollendtrapped);
              self.scrollendtrapped = setTimeout(self.onScrollEnd,ms);  // simulate transitionend event
            }
            
            var py = top;
            var px = lft;
            self.timerscroll = {
              bz: new BezierClass(py,self.newscrolly,ms,0,0,0.58,1),
              bh: new BezierClass(px,self.newscrollx,ms,0,0,0.58,1)
            };            
            if (!self.cursorfreezed) self.timerscroll.tm=setInterval(function(){self.showCursor(self.getScrollTop(),self.getScrollLeft())},60);
            
          }
          
          self.synched("doScroll-set",function(){
            self.timer = 0;
            if (self.scrollendtrapped) self.scrollrunning = true;
            self.setScrollTop(self.newscrolly);
            self.setScrollLeft(self.newscrollx);
            if (!self.scrollendtrapped) self.onScrollEnd();
          });
          
          
        },50);
        
      };
      
      this.cancelScroll = function() {
        if (!self.scrollendtrapped) return true;        
        var py = self.getScrollTop();
        var px = self.getScrollLeft();
        self.scrollrunning = false;
        if (!cap.transitionend) clearTimeout(cap.transitionend);
        self.scrollendtrapped = false;
        self._unbind(self.doc,cap.transitionend,self.onScrollEnd);        
        self.prepareTransition(0);
        self.setScrollTop(py); // fire event onscroll
        if (self.railh) self.setScrollLeft(px);
        if (self.timerscroll&&self.timerscroll.tm) clearInterval(self.timerscroll.tm);
        self.timerscroll = false;
        
        self.cursorfreezed = false;

        //self.noticeCursor(false,py,px);
        self.showCursor(py,px);
        return self;
      };
      this.onScrollEnd = function() {                
        if (self.scrollendtrapped) self._unbind(self.doc,cap.transitionend,self.onScrollEnd);
        self.scrollendtrapped = false;        
        self.prepareTransition(0);
        if (self.timerscroll&&self.timerscroll.tm) clearInterval(self.timerscroll.tm);
        self.timerscroll = false;        
        var py = self.getScrollTop();
        var px = self.getScrollLeft();
        self.setScrollTop(py);  // fire event onscroll        
        if (self.railh) self.setScrollLeft(px);  // fire event onscroll left
        
        self.noticeCursor(false,py,px);     
        
        self.cursorfreezed = false;
        
        if (py<0) py=0
        else if (py>self.page.maxh) py=self.page.maxh;
        if (px<0) px=0
        else if (px>self.page.maxw) px=self.page.maxw;
        if((py!=self.newscrolly)||(px!=self.newscrollx)) return self.doScrollPos(px,py,self.opt.snapbackspeed);
        
        if (self.onscrollend&&self.scrollrunning) {
          var info = {"type":"scrollend","current":{"x":px,"y":py},"end":{"x":self.newscrollx,"y":self.newscrolly}};
          self.onscrollend.call(self,info);
        } 
        self.scrollrunning = false;
        
      };

    } else {

      this.doScrollLeft = function(x,spd) {  //no-trans
        var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
        self.doScrollPos(x,y,spd);
      }

      this.doScrollTop = function(y,spd) {  //no-trans
        var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
        self.doScrollPos(x,y,spd);
      }

      this.doScrollPos = function(x,y,spd) {  //no-trans
        var y = ((typeof y == "undefined")||(y===false)) ? self.getScrollTop(true) : y;
      
        if  ((self.timer)&&(self.newscrolly==y)&&(self.newscrollx==x)) return true;
      
        if (self.timer) clearAnimationFrame(self.timer);
        self.timer = 0;      

        var py = self.getScrollTop();
        var px = self.getScrollLeft();
        
        if (((self.newscrolly-py)*(y-py)<0)||((self.newscrollx-px)*(x-px)<0)) self.cancelScroll();  //inverted movement detection
        
        self.newscrolly = y;
        self.newscrollx = x;
        
        if (!self.bouncescroll||!self.rail.visibility) {
          if (self.newscrolly<0) {
            self.newscrolly = 0;
          }
          else if (self.newscrolly>self.page.maxh) {
            self.newscrolly = self.page.maxh;
          }
        }
        if (!self.bouncescroll||!self.railh.visibility) {
          if (self.newscrollx<0) {
            self.newscrollx = 0;
          }
          else if (self.newscrollx>self.page.maxw) {
            self.newscrollx = self.page.maxw;
          }
        }

        self.dst = {};
        self.dst.x = x-px;
        self.dst.y = y-py;
        self.dst.px = px;
        self.dst.py = py;
        
        var dst = Math.round(Math.sqrt(Math.pow(self.dst.x,2)+Math.pow(self.dst.y,2)));
        
        self.dst.ax = self.dst.x / dst;
        self.dst.ay = self.dst.y / dst;
        
        var pa = 0;
        var pe = dst;
        
        if (self.dst.x==0) {
          pa = py;
          pe = y;
          self.dst.ay = 1;
          self.dst.py = 0;
        } else if (self.dst.y==0) {
          pa = px;
          pe = x;
          self.dst.ax = 1;
          self.dst.px = 0;
        }

        var ms = self.getTransitionSpeed(dst);
        if (spd&&spd<=1) ms*=spd;
        if (ms>0) {
          self.bzscroll = (self.bzscroll) ? self.bzscroll.update(pe,ms) : new BezierClass(pa,pe,ms,0,1,0,1);
        } else {
          self.bzscroll = false;
        }
        
        if (self.timer) return;
        
        if ((py==self.page.maxh&&y>=self.page.maxh)||(px==self.page.maxw&&x>=self.page.maxw)) self.checkContentSize();
        
        var sync = 1;
        
        function scrolling() {          
          if (self.cancelAnimationFrame) return true;
          
          self.scrollrunning = true;
          
          sync = 1-sync;
          if (sync) return (self.timer = setAnimationFrame(scrolling)||1);

          var done = 0;
          
          var sc = sy = self.getScrollTop();
          if (self.dst.ay) {            
            sc = (self.bzscroll) ? self.dst.py + (self.bzscroll.getNow()*self.dst.ay) : self.newscrolly;
            var dr=sc-sy;          
            if ((dr<0&&sc<self.newscrolly)||(dr>0&&sc>self.newscrolly)) sc = self.newscrolly;
            self.setScrollTop(sc);
            if (sc == self.newscrolly) done=1;
          } else {
            done=1;
          }
          
          var scx = sx = self.getScrollLeft();
          if (self.dst.ax) {            
            scx = (self.bzscroll) ? self.dst.px + (self.bzscroll.getNow()*self.dst.ax) : self.newscrollx;            
            var dr=scx-sx;
            if ((dr<0&&scx<self.newscrollx)||(dr>0&&scx>self.newscrollx)) scx = self.newscrollx;
            self.setScrollLeft(scx);
            if (scx == self.newscrollx) done+=1;
          } else {
            done+=1;
          }
          
          if (done==2) {
            self.timer = 0;
            self.cursorfreezed = false;
            self.bzscroll = false;
            self.scrollrunning = false;
            if (sc<0) sc=0;
            else if (sc>self.page.maxh) sc=self.page.maxh;
            if (scx<0) scx=0;
            else if (scx>self.page.maxw) scx=self.page.maxw;
            if ((scx!=self.newscrollx)||(sc!=self.newscrolly)) self.doScrollPos(scx,sc);
            else {
              if (self.onscrollend) {
                var info = {"type":"scrollend","current":{"x":sx,"y":sy},"end":{"x":self.newscrollx,"y":self.newscrolly}};
                self.onscrollend.call(self,info);
              }             
            } 
          } else {
            self.timer = setAnimationFrame(scrolling)||1;
          }
        };
        self.cancelAnimationFrame=false;
        self.timer = 1;

        if (self.onscrollstart&&!self.scrollrunning) {
          var info = {"type":"scrollstart","current":{"x":px,"y":py},"request":{"x":x,"y":y},"end":{"x":self.newscrollx,"y":self.newscrolly},"speed":ms};
          self.onscrollstart.call(self,info);
        }        

        scrolling();
        
        if ((py==self.page.maxh&&y>=py)||(px==self.page.maxw&&x>=px)) self.checkContentSize();
        
        self.noticeCursor();
      };
  
      this.cancelScroll = function() {        
        if (self.timer) clearAnimationFrame(self.timer);
        self.timer = 0;
        self.bzscroll = false;
        self.scrollrunning = false;
        return self;
      };
      
    }
    
    this.doScrollBy = function(stp,relative) {
      var ny = 0;
      if (relative) {
        ny = Math.floor((self.scroll.y-stp)*self.scrollratio.y)
      } else {        
        var sy = (self.timer) ? self.newscrolly : self.getScrollTop(true);
        ny = sy-stp;
      }
      if (self.bouncescroll) {
        var haf = Math.round(self.view.h/2);
        if (ny<-haf) ny=-haf
        else if (ny>(self.page.maxh+haf)) ny = (self.page.maxh+haf);
      }
      self.cursorfreezed = false;      

      py = self.getScrollTop(true);
      if (ny<0&&py<=0) return self.noticeCursor();      
      else if (ny>self.page.maxh&&py>=self.page.maxh) {
        self.checkContentSize();
        return self.noticeCursor();
      }
      
      self.doScrollTop(ny);
    };

    this.doScrollLeftBy = function(stp,relative) {
      var nx = 0;
      if (relative) {
        nx = Math.floor((self.scroll.x-stp)*self.scrollratio.x)
      } else {
        var sx = (self.timer) ? self.newscrollx : self.getScrollLeft(true);
        nx = sx-stp;
      }
      if (self.bouncescroll) {
        var haf = Math.round(self.view.w/2);
        if (nx<-haf) nx=-haf
        else if (nx>(self.page.maxw+haf)) nx = (self.page.maxw+haf);
      }
      self.cursorfreezed = false;    

      px = self.getScrollLeft(true);
      if (nx<0&&px<=0) return self.noticeCursor();      
      else if (nx>self.page.maxw&&px>=self.page.maxw) return self.noticeCursor();
      
      self.doScrollLeft(nx);
    };
    
    this.doScrollTo = function(pos,relative) {
      var ny = (relative) ? Math.round(pos*self.scrollratio.y) : pos;
      if (ny<0) ny=0
      else if (ny>self.page.maxh) ny = self.page.maxh;
      self.cursorfreezed = false;
      self.doScrollTop(pos);
    };
    
    this.checkContentSize = function() {      
      var pg = self.getContentSize();
      if ((pg.h!=self.page.h)||(pg.w!=self.page.w)) self.resize(false,pg);
    };
    
    self.onscroll = function(e) {    
      if (self.rail.drag) return;
      if (!self.cursorfreezed) {
        self.synched('scroll',function(){
          self.scroll.y = Math.round(self.getScrollTop() * (1/self.scrollratio.y));
          if (self.railh) self.scroll.x = Math.round(self.getScrollLeft() * (1/self.scrollratio.x));
          self.noticeCursor();
        });
      }
    };
    self.bind(self.docscroll,"scroll",self.onscroll);
    
    this.doZoomIn = function(e) {
      if (self.zoomactive) return;
      self.zoomactive = true;
      
      self.zoomrestore = {
        style:{}
      };
      var lst = ['position','top','left','zIndex','backgroundColor','marginTop','marginBottom','marginLeft','marginRight'];
      var win = self.win[0].style;
      for(var a in lst) {
        var pp = lst[a];
        self.zoomrestore.style[pp] = (typeof win[pp] != "undefined") ? win[pp] : '';        
      }
      
      self.zoomrestore.style.width = self.win.css('width');
      self.zoomrestore.style.height = self.win.css('height');
      
      self.zoomrestore.padding = {
        w:self.win.outerWidth()-self.win.width(),
        h:self.win.outerHeight()-self.win.height()
      };
      
      if (cap.isios4) {
        self.zoomrestore.scrollTop = $(window).scrollTop();
        $(window).scrollTop(0);
      }
      
      self.win.css({
        "position":(cap.isios4)?"absolute":"fixed",
        "top":0,
        "left":0,
        "z-index":globalmaxzindex+100,
        "margin":"0px"
      });
      var bkg = self.win.css("backgroundColor");      
      if (bkg==""||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg)) self.win.css("backgroundColor","#fff");
      self.rail.css({"z-index":globalmaxzindex+101});
      self.zoom.css({"z-index":globalmaxzindex+102});      
      self.zoom.css('backgroundPosition','0px -18px');
      self.resizeZoom();
      
      if (self.onzoomin) self.onzoomin.call(self);
      
      return self.cancelEvent(e);
    };

    this.doZoomOut = function(e) {
      if (!self.zoomactive) return;
      self.zoomactive = false;
      
      self.win.css("margin","");
      self.win.css(self.zoomrestore.style);
      
      if (cap.isios4) {
        $(window).scrollTop(self.zoomrestore.scrollTop);
      }
      
      self.rail.css({"z-index":self.zindex});
      self.zoom.css({"z-index":self.zindex});
      self.zoomrestore = false;
      self.zoom.css('backgroundPosition','0px 0px');
      self.onResize();
      
      if (self.onzoomout) self.onzoomout.call(self);
      
      return self.cancelEvent(e);
    };
    
    this.doZoom = function(e) {
      return (self.zoomactive) ? self.doZoomOut(e) : self.doZoomIn(e);
    };
    
    this.resizeZoom = function() {
      if (!self.zoomactive) return;

      var py = self.getScrollTop(); //preserve scrolling position
      self.win.css({
        width:$(window).width()-self.zoomrestore.padding.w+"px",
        height:$(window).height()-self.zoomrestore.padding.h+"px"
      });
      self.onResize();
      
      self.setScrollTop(Math.min(self.page.maxh,py));
    };
   
    this.init();
    
    $.nicescroll.push(this);

  };
  
// Inspired by the work of Kin Blas
// http://webpro.host.adobe.com/people/jblas/momentum/includes/jquery.momentum.0.7.js  
  
  
  var ScrollMomentumClass2D = function(nc) {
    var self = this;
    this.nc = nc;
    
    this.lastx = 0;
    this.lasty = 0;
    this.speedx = 0;
    this.speedy = 0;
    this.lasttime = 0;
    this.steptime = 0;
    this.snapx = false;
    this.snapy = false;
    this.demulx = 0;
    this.demuly = 0;
    
    this.lastscrollx = -1;
    this.lastscrolly = -1;
    
    this.chkx = 0;
    this.chky = 0;
    
    this.timer = 0;
    
    this.time = function() {
      return +new Date();//beautifull hack
    };
    
    this.reset = function(px,py) {
      self.stop();
      var now = self.time();
      self.steptime = 0;
      self.lasttime = now;
      self.speedx = 0;
      self.speedy = 0;
      self.lastx = px;
      self.lasty = py;
      self.lastscrollx = -1;
      self.lastscrolly = -1;
    };
    
    this.update = function(px,py) {
      var now = self.time();
      self.steptime = now - self.lasttime;
      self.lasttime = now;      
      var dy = py - self.lasty;
      var dx = px - self.lastx;
      var sy = self.nc.getScrollTop();
      var sx = self.nc.getScrollLeft();
      var newy = sy + dy;
      var newx = sx + dx;
      self.snapx = (newx<0)||(newx>self.nc.page.maxw);
      self.snapy = (newy<0)||(newy>self.nc.page.maxh);
      self.speedx = dx;
      self.speedy = dy;
      self.lastx = px;
      self.lasty = py;
    };
    
    this.stop = function() {
      self.nc.unsynched("domomentum2d");
      if (self.timer) clearTimeout(self.timer);
      self.timer = 0;
      self.lastscrollx = -1;
      self.lastscrolly = -1;
    };
    
    this.doSnapy = function(nx,ny) {
      var snap = false;
      
      if (ny<0) {
        ny=0;
        snap=true;        
      } 
      else if (ny>self.nc.page.maxh) {
        ny=self.nc.page.maxh;
        snap=true;
      }

      if (nx<0) {
        nx=0;
        snap=true;        
      } 
      else if (nx>self.nc.page.maxw) {
        nx=self.nc.page.maxw;
        snap=true;
      }
      
      if (snap) self.nc.doScrollPos(nx,ny,self.nc.opt.snapbackspeed);
    };
    
    this.doMomentum = function(gp) {
      var t = self.time();
      var l = (gp) ? t+gp : self.lasttime;

      var sl = self.nc.getScrollLeft();
      var st = self.nc.getScrollTop();
      
      var pageh = self.nc.page.maxh;
      var pagew = self.nc.page.maxw;
      
      self.speedx = (pagew>0) ? Math.min(60,self.speedx) : 0;
      self.speedy = (pageh>0) ? Math.min(60,self.speedy) : 0;
      
      var chk = l && (t - l) <= 60;
      
      if ((st<0)||(st>pageh)||(sl<0)||(sl>pagew)) chk = false;
      
      var sy = (self.speedy && chk) ? self.speedy : false;
      var sx = (self.speedx && chk) ? self.speedx : false;
      
      if (sy||sx) {
        var tm = Math.max(16,self.steptime); //timeout granularity
        
        if (tm>50) {  // do smooth
          var xm = tm/50;
          self.speedx*=xm;
          self.speedy*=xm;
          tm = 50;
        }
        
        self.demulxy = 0;

        self.lastscrollx = self.nc.getScrollLeft();
        self.chkx = self.lastscrollx;
        self.lastscrolly = self.nc.getScrollTop();
        self.chky = self.lastscrolly;
        
        var nx = self.lastscrollx;
        var ny = self.lastscrolly;
        
        var onscroll = function(){
          var df = ((self.time()-t)>600) ? 0.04 : 0.02;
        
          if (self.speedx) {
            nx = Math.floor(self.lastscrollx - (self.speedx*(1-self.demulxy)));
            self.lastscrollx = nx;
            if ((nx<0)||(nx>pagew)) df=0.10;
          }

          if (self.speedy) {
            ny = Math.floor(self.lastscrolly - (self.speedy*(1-self.demulxy)));
            self.lastscrolly = ny;
            if ((ny<0)||(ny>pageh)) df=0.10;
          }
          
          self.demulxy = Math.min(1,self.demulxy+df);
          
          self.nc.synched("domomentum2d",function(){

            if (self.speedx) {
              var scx = self.nc.getScrollLeft();
              if (scx!=self.chkx) self.stop();
              self.chkx=nx;
              self.nc.setScrollLeft(nx);
            }
          
            if (self.speedy) {
              var scy = self.nc.getScrollTop();
              if (scy!=self.chky) self.stop();          
              self.chky=ny;
              self.nc.setScrollTop(ny);
            }
            
            if(!self.timer) {
              self.nc.hideCursor();
              self.doSnapy(nx,ny);
            }
            
          });
          
          if (self.demulxy<1) {            
            self.timer = setTimeout(onscroll,tm);
          } else {
            self.stop();
            self.nc.hideCursor();
            self.doSnapy(nx,ny);
          }
        };
        
        onscroll();
        
      } else {
        self.doSnapy(self.nc.getScrollLeft(),self.nc.getScrollTop());
      }      
      
    }
    
  };

  
// override jQuery scrollTop
 
  var _scrollTop = jQuery.fn.scrollTop; // preserve original function
   
  jQuery.cssHooks["pageYOffset"] = {
    get: function(elem,computed,extra) {      
      var nice = $.data(elem,'__nicescroll')||false;
      return (nice&&nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(elem);
    },
    set: function(elem,value) {
      var nice = $.data(elem,'__nicescroll')||false;    
      (nice&&nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call(elem,value);
      return this;
    }
  };
  
/*  
  $.fx.step["scrollTop"] = function(fx){    
    $.cssHooks["scrollTop"].set( fx.elem, fx.now + fx.unit );
  };
*/  
  
  jQuery.fn.scrollTop = function(value) {    
    if (typeof value == "undefined") {
      var nice = (this[0]) ? $.data(this[0],'__nicescroll')||false : false;
      return (nice&&nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(this);
    } else {      
      return this.each(function() {
        var nice = $.data(this,'__nicescroll')||false;
        (nice&&nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call($(this),value);
      });
    }
  }

// override jQuery scrollLeft
 
  var _scrollLeft = jQuery.fn.scrollLeft; // preserve original function
   
  $.cssHooks.pageXOffset = {
    get: function(elem,computed,extra) {
      var nice = $.data(elem,'__nicescroll')||false;
      return (nice&&nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(elem);
    },
    set: function(elem,value) {
      var nice = $.data(elem,'__nicescroll')||false;    
      (nice&&nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call(elem,value);
      return this;
    }
  };
  
/*  
  $.fx.step["scrollLeft"] = function(fx){
    $.cssHooks["scrollLeft"].set( fx.elem, fx.now + fx.unit );
  };  
*/  
 
  jQuery.fn.scrollLeft = function(value) {    
    if (typeof value == "undefined") {
      var nice = (this[0]) ? $.data(this[0],'__nicescroll')||false : false;
      return (nice&&nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(this);
    } else {
      return this.each(function() {     
        var nice = $.data(this,'__nicescroll')||false;
        (nice&&nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call($(this),value);
      });
    }
  }
  
  var NiceScrollArray = function(doms) {
    var self = this;
    this.length = 0;
    this.name = "nicescrollarray";
  
    this.each = function(fn) {
      for(var a=0,i=0;a<self.length;a++) fn.call(self[a],i++);
      return self;
    };
    
    this.push = function(nice) {
      self[self.length]=nice;
      self.length++;
    };
    
    this.eq = function(idx) {
      return self[idx];
    };
    
    if (doms) {
      for(a=0;a<doms.length;a++) {
        var nice = $.data(doms[a],'__nicescroll')||false;
        if (nice) {
          this[this.length]=nice;
          this.length++;
        }
      };
    }
    
    return this;
  };
  
  function mplex(el,lst,fn) {
    for(var a=0;a<lst.length;a++) fn(el,lst[a]);
  };  
  mplex(
    NiceScrollArray.prototype,
    ['show','hide','toggle','onResize','resize','remove','stop','doScrollPos'],
    function(e,n) {
      e[n] = function(){
        var args = arguments;
        return this.each(function(){          
          this[n].apply(this,args);
        });
      };
    }
  );  
  
  jQuery.fn.getNiceScroll = function(index) {
    if (typeof index == "undefined") {
      return new NiceScrollArray(this);
    } else {      
      var nice = this[index]&&$.data(this[index],'__nicescroll')||false;
      return nice;
    }
  };
  
  jQuery.extend(jQuery.expr[':'], {
    nicescroll: function(a) {
      return ($.data(a,'__nicescroll'))?true:false;
    }
  });  
  
  $.fn.niceScroll = function(wrapper,opt) {        
    if (typeof opt=="undefined") {
      if ((typeof wrapper=="object")&&!("jquery" in wrapper)) {
        opt = wrapper;
        wrapper = false;        
      }
    }
    var ret = new NiceScrollArray();
    if (typeof opt=="undefined") opt = {};
    
    if (wrapper||false) {      
      opt.doc = $(wrapper);
      opt.win = $(this);
    }    
    var docundef = !("doc" in opt);   
    if (!docundef&&!("win" in opt)) opt.win = $(this);    
    
    this.each(function() {
      var nice = $(this).data('__nicescroll')||false;
      if (!nice) {
        opt.doc = (docundef) ? $(this) : opt.doc;
        nice = new NiceScrollClass(opt,$(this));        
        $(this).data('__nicescroll',nice);
      }
      ret.push(nice);
    });
    return (ret.length==1) ? ret[0] : ret;
  };
  
  window.NiceScroll = {
    getjQuery:function(){return jQuery}
  };
  
  if (!$.nicescroll) {
   $.nicescroll = new NiceScrollArray();
   $.nicescroll.options = _globaloptions;
  }
  
})( jQuery );
  ;/*
# responsImg jQuery Plugin
# Turn your <img> tags into responsive images with retina alternatives
# version 1.4.0, July 12th, 2013
# by Etienne Talbot
*/
!function(){jQuery.responsImg=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;return d={allowDownsize:!1,elementQuery:!1,delay:200,breakpoints:null,considerDevice:!1},b&&jQuery.extend(d,b),o=jQuery(window),a=jQuery(a),m={},k=null,i=0,l=!1,h=function(){m[0]=new Array(a.attr("src")),window.devicePixelRatio>=1.5&&(l=!0),o.on("resize.responsImg orientationchange.responsImg",j),f()},f=function(){var b,e,f,g,h,i,j,k;f=a.data(),i=/^responsimg/;for(g in f)if(j=f[g],i.test(g)){if(h=g.replace("responsimg",""),isNaN(h)){h=h.toLowerCase(),k=d.breakpoints;for(b in k)e=k[b],h===b&&(h=e)}else h=parseInt(h,10);m[h]=j.replace(" ","").split(",")}c()},j=function(){clearTimeout(k),k=setTimeout(c,d.delay)},e=function(){var b,c,e;return b=null,d.elementQuery===!0?(b=a.width(),null!=window.orientation&&d.considerDevice&&(e=o.width(),c=g(),b=Math.ceil(c*b/e))):b=null!=window.orientation&&d.considerDevice?g():o.width(),b},g=function(){var a;return a=0===window.orientation?window.screen.width:window.screen.height,navigator.userAgent.indexOf("Android")>=0&&window.devicePixelRatio&&(a/=window.devicePixelRatio),a},c=function(){var a,b,c,f,g,h;if(g=e(),a=0,i=0,b=!0,f="",g>i?i=g:d.allowDownsize===!1&&(b=!1),b===!0){for(c in m)h=m[c],parseInt(c,10)<=g&&parseInt(c,10)>=a&&(a=parseInt(c,10),f=m[a][0]);l===!0&&null!=m[a][1]&&(f=m[a][1]),n(f)}},n=function(b){var c;c=a.attr("src"),b!==c&&a.attr("src",b)},h(),this.recheck=function(){c()},this},jQuery.fn.responsImg=function(a){return this.each(function(){var b,c;b=jQuery(this),void 0===b.data("responsImg")&&(c=new jQuery.responsImg(this,a),b.data("responsImg",c))})}}.call(this);;/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-inlinesvg-svg-svgclippaths-touch-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.flexboxlegacy=function(){return I("boxDirection")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",true);n("y",true);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(z,s,y,C){var D=this;var u=0;var w=true;if(typeof s==="function"){C=s;s=undefined}if(typeof y==="function"){C=y;y=undefined}if(typeof z.easing!=="undefined"){y=z.easing;delete z.easing}if(typeof z.duration!=="undefined"){s=z.duration;delete z.duration}if(typeof z.complete!=="undefined"){C=z.complete;delete z.complete}if(typeof z.queue!=="undefined"){w=z.queue;delete z.queue}if(typeof z.delay!=="undefined"){u=z.delay;delete z.delay}if(typeof s==="undefined"){s=k.fx.speeds._default}if(typeof y==="undefined"){y=k.cssEase._default}s=l(s);var E=g(z,s,y,u);var B=k.transit.enabled&&q.transition;var t=B?(parseInt(s,10)+parseInt(u,10)):0;if(t===0){var A=function(F){D.css(z);if(C){C.apply(D)}if(F){F()}};m(D,w,A);return D}var x={};var r=function(H){var G=false;var F=function(){if(G){D.unbind(f,F)}if(t>0){D.each(function(){this.style[q.transition]=(x[this]||null)})}if(typeof C==="function"){C.apply(D)}if(typeof H==="function"){H()}};if((t>0)&&(f)&&(k.transit.useTransitionEnd)){G=true;D.bind(f,F)}else{window.setTimeout(F,t)}D.each(function(){if(t>0){this.style[q.transition]=E}k(this).css(z)})};var v=function(F){this.offsetWidth;r(F)};m(D,w,v);return this};function n(s,r){if(!r){k.cssNumber[s]=true}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(k.fx.speeds[r]){r=k.fx.speeds[r]}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);