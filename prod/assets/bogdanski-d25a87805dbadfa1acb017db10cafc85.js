"use strict";define("bogdanski/app",["exports","ember","ember/resolver","ember/load-initializers","bogdanski/config/environment"],function(e,n,t,a,i){var o;n["default"].MODEL_FACTORY_INJECTIONS=!0,o=n["default"].Application.extend({modulePrefix:i["default"].modulePrefix,podModulePrefix:i["default"].podModulePrefix,Resolver:t["default"]}),a["default"](o,i["default"].modulePrefix),e["default"]=o}),define("bogdanski/components/app-version",["exports","ember-cli-app-version/components/app-version","bogdanski/config/environment"],function(e,n,t){var a=t["default"].APP,i=a.name,o=a.version;e["default"]=n["default"].extend({version:o,name:i})}),define("bogdanski/controllers/array",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("bogdanski/controllers/object",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("bogdanski/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","bogdanski/config/environment"],function(e,n,t){var a=t["default"].APP,i=a.name,o=a.version;e["default"]={name:"App Version",initialize:n["default"](i,o)}}),define("bogdanski/initializers/export-application-global",["exports","ember","bogdanski/config/environment"],function(e,n,t){function a(){var e=arguments[1]||arguments[0];if(t["default"].exportApplicationGlobal!==!1){var a,i=t["default"].exportApplicationGlobal;a="string"==typeof i?i:n["default"].String.classify(t["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("bogdanski/router",["exports","ember","bogdanski/config/environment"],function(e,n,t){var a=n["default"].Router.extend({location:t["default"].locationType});a.map(function(){}),e["default"]=a}),define("bogdanski/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"bogdanski/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("h2");e.setAttribute(t,"id","title");var a=e.createTextNode("Welcome to Ember");e.appendChild(t,a),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var a=new Array(1);return a[0]=e.createMorphAt(n,2,2,t),a},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("bogdanski/config/environment",["ember"],function(e){var n="bogdanski";try{var t=n+"/config/environment",a=e["default"].$('meta[name="'+t+'"]').attr("content"),i=JSON.parse(unescape(a));return{"default":i}}catch(o){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests?require("bogdanski/tests/test-helper"):require("bogdanski/app")["default"].create({name:"bogdanski",version:"0.0.0+22830d12"});