"use strict";(self.webpackChunktrpc=self.webpackChunktrpc||[]).push([[463],{"./stories/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,PrimaryDisabled:()=>PrimaryDisabled,Secondary:()=>Secondary,SecondaryDisabled:()=>SecondaryDisabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./packages/client/src/components/button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var Button=function Button(_ref){var onClick=_ref.onClick,label=_ref.label,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,mode=_ref.mode,_ref$dataTestId=_ref.dataTestId,dataTestId=void 0===_ref$dataTestId?"button":_ref$dataTestId;return react.createElement("button",{"data-testid":dataTestId,className:"primary"===mode?button_Button_module.primaryButton:button_Button_module.secondaryButton,onClick,disabled},label)};const button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"string"}},dataTestId:{defaultValue:{value:"button"},description:"",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/client/src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"packages/client/src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_PrimaryDisabled$para,_PrimaryDisabled$para2,_Secondary$parameters,_Secondary$parameters2,_SecondaryDisabled$pa,_SecondaryDisabled$pa2;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Button_stories={title:"Button",component:button_Button};var Primary=function Primary(){return react.createElement(button_Button,{label:"Click me!",onClick:function onClick(){return alert("Button clicked!")},mode:"primary"})},PrimaryDisabled=function PrimaryDisabled(){return react.createElement(button_Button,{label:"Click me!",onClick:function onClick(){return alert("Button clicked!")},disabled:!0,mode:"primary"})},Secondary=function Secondary(){return react.createElement(button_Button,{label:"Click me!",onClick:function onClick(){return alert("Button clicked!")},mode:"secondary"})},SecondaryDisabled=function SecondaryDisabled(){return react.createElement(button_Button,{label:"Click me!",onClick:function onClick(){return alert("Button clicked!")},disabled:!0,mode:"secondary"})};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:'() => <Button label="Click me!" onClick={() => alert(\'Button clicked!\')} mode="primary" />'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),PrimaryDisabled.parameters=_objectSpread(_objectSpread({},PrimaryDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PrimaryDisabled$para=PrimaryDisabled.parameters)||void 0===_PrimaryDisabled$para?void 0:_PrimaryDisabled$para.docs),{},{source:_objectSpread({originalSource:'() => <Button label="Click me!" onClick={() => alert(\'Button clicked!\')} disabled={true} mode="primary" />'},null===(_PrimaryDisabled$para2=PrimaryDisabled.parameters)||void 0===_PrimaryDisabled$para2||null===(_PrimaryDisabled$para2=_PrimaryDisabled$para2.docs)||void 0===_PrimaryDisabled$para2?void 0:_PrimaryDisabled$para2.source)})}),Secondary.parameters=_objectSpread(_objectSpread({},Secondary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:_objectSpread({originalSource:'() => <Button label="Click me!" onClick={() => alert(\'Button clicked!\')} mode="secondary" />'},null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters2=_Secondary$parameters2.docs)||void 0===_Secondary$parameters2?void 0:_Secondary$parameters2.source)})}),SecondaryDisabled.parameters=_objectSpread(_objectSpread({},SecondaryDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SecondaryDisabled$pa=SecondaryDisabled.parameters)||void 0===_SecondaryDisabled$pa?void 0:_SecondaryDisabled$pa.docs),{},{source:_objectSpread({originalSource:'() => <Button label="Click me!" onClick={() => alert(\'Button clicked!\')} disabled={true} mode="secondary" />'},null===(_SecondaryDisabled$pa2=SecondaryDisabled.parameters)||void 0===_SecondaryDisabled$pa2||null===(_SecondaryDisabled$pa2=_SecondaryDisabled$pa2.docs)||void 0===_SecondaryDisabled$pa2?void 0:_SecondaryDisabled$pa2.source)})});const __namedExportsOrder=["Primary","PrimaryDisabled","Secondary","SecondaryDisabled"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./packages/client/src/components/button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.INhM6j1Fe8dmaHAdTvVP{color:#3b2715;font-family:"Montserrat",sans-serif;font-size:1.1vw;font-weight:500;background-color:rgba(255,255,255,.4);border:none;border-radius:.1vw;padding:.2vw .8vw .2vw .8vw}@media(max-width: 1440px){.INhM6j1Fe8dmaHAdTvVP{font-size:1.3vw}}@media(max-width: 1280px){.INhM6j1Fe8dmaHAdTvVP{font-size:1.5vw}}@media(max-width: 1024px){.INhM6j1Fe8dmaHAdTvVP{font-size:1.8vw}}@media(max-width: 768px){.INhM6j1Fe8dmaHAdTvVP{font-size:2.4vw}}.INhM6j1Fe8dmaHAdTvVP:hover{background-color:rgba(255,255,255,.6);cursor:pointer}.INhM6j1Fe8dmaHAdTvVP:disabled{background-color:rgba(255,255,255,.2);color:rgba(59,39,21,.7);cursor:auto}.h8GnXkuG7Kg3TVoJV7gk{color:#3b2715;font-family:"Montserrat",sans-serif;font-size:1.1vw;font-weight:500;color:rgba(255,255,255,.8);background-color:rgba(0,0,0,0);border:.15vw solid rgba(255,255,255,.4);border-radius:.1vw;padding:.2vw .8vw .2vw .8vw}@media(max-width: 1440px){.h8GnXkuG7Kg3TVoJV7gk{font-size:1.3vw}}@media(max-width: 1280px){.h8GnXkuG7Kg3TVoJV7gk{font-size:1.5vw}}@media(max-width: 1024px){.h8GnXkuG7Kg3TVoJV7gk{font-size:1.8vw}}@media(max-width: 768px){.h8GnXkuG7Kg3TVoJV7gk{font-size:2.4vw}}.h8GnXkuG7Kg3TVoJV7gk:hover{background-color:rgba(255,255,255,.2);cursor:pointer}.h8GnXkuG7Kg3TVoJV7gk:disabled{background-color:rgba(0,0,0,0);border:.15vw solid rgba(255,255,255,.2);color:rgba(255,255,255,.4);cursor:auto}',"",{version:3,sources:["webpack://./packages/client/src/components/button/Button.module.scss","webpack://./packages/client/src/styles/fonts.scss"],names:[],mappings:"AAEA,sBCqBE,aAAA,CAEE,mCAAA,CACA,eAAA,CACA,eDxBY,CACd,qCAAA,CACA,WAAA,CACA,kBAAA,CACA,2BAAA,CCuBA,0BD5BF,sBC6BI,eAAA,CAAA,CAEF,0BD/BF,sBCgCI,eAAA,CAAA,CAEF,0BDlCF,sBCmCI,eAAA,CAAA,CAEF,yBDrCF,sBCsCI,eAAA,CAAA,CD/BF,4BACE,qCAAA,CACA,cAAA,CAGF,+BACE,qCAAA,CACA,uBAAA,CACA,WAAA,CAIJ,sBCEE,aAAA,CAEE,mCAAA,CACA,eAAA,CACA,eDLY,CACd,0BAAA,CACA,8BAAA,CACA,uCAAA,CACA,kBAAA,CACA,2BAAA,CCGA,0BDTF,sBCUI,eAAA,CAAA,CAEF,0BDZF,sBCaI,eAAA,CAAA,CAEF,0BDfF,sBCgBI,eAAA,CAAA,CAEF,yBDlBF,sBCmBI,eAAA,CAAA,CDXF,4BACE,qCAAA,CACA,cAAA,CAGF,+BACE,8BAAA,CACA,uCAAA,CACA,0BAAA,CACA,WAAA",sourcesContent:['@import "client/src/styles/fonts";\r\n\r\n.primaryButton {\r\n  @include text(500);\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n  border: none;\r\n  border-radius: 0.1vw;\r\n  padding: 0.2vw 0.8vw 0.2vw 0.8vw;\r\n\r\n  &:hover {\r\n    background-color: rgba(255, 255, 255, 0.6);\r\n    cursor: pointer;\r\n  }\r\n\r\n  &:disabled {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    color: rgba(59, 39, 21, 0.7);\r\n    cursor: auto;\r\n  }\r\n}\r\n\r\n.secondaryButton {\r\n  @include text(500);\r\n  color: rgba(255, 255, 255, 0.8);\r\n  background-color: transparent;\r\n  border: 0.15vw solid rgba(255, 255, 255, 0.4);\r\n  border-radius: 0.1vw;\r\n  padding: 0.2vw 0.8vw 0.2vw 0.8vw;\r\n\r\n  &:hover {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    cursor: pointer;\r\n  }\r\n\r\n  &:disabled {\r\n    background-color: transparent;\r\n    border: 0.15vw solid rgba(255, 255, 255, 0.2);\r\n    color: rgba(255, 255, 255, 0.4);\r\n    cursor: auto;\r\n  }\r\n}\r\n','@mixin title($weight) {\r\n  color: #3b2715;\r\n  font: {\r\n    family: "Montserrat", sans-serif;\r\n    size: 2vw;\r\n    weight: $weight;\r\n  }\r\n\r\n  @media (max-width: 1440px) {\r\n    font-size: 2.3vw;\r\n  }\r\n  @media (max-width: 1280px) {\r\n    font-size: 2.5vw;\r\n  }\r\n  @media (max-width: 1024px) {\r\n    font-size: 2.8vw;\r\n  }\r\n  @media (max-width: 768px) {\r\n    font-size: 4vw;\r\n  }\r\n}\r\n\r\n@mixin text($weight) {\r\n  color: #3b2715;\r\n  font: {\r\n    family: "Montserrat", sans-serif;\r\n    size: 1.1vw;\r\n    weight: $weight;\r\n  }\r\n\r\n  @media (max-width: 1440px) {\r\n    font-size: 1.3vw;\r\n  }\r\n  @media (max-width: 1280px) {\r\n    font-size: 1.5vw;\r\n  }\r\n  @media (max-width: 1024px) {\r\n    font-size: 1.8vw;\r\n  }\r\n  @media (max-width: 768px) {\r\n    font-size: 2.4vw;\r\n  }\r\n}\r\n\r\n@mixin textSmall($weight) {\r\n  color: #3b2715;\r\n  font: {\r\n    family: "Montserrat", sans-serif;\r\n    size: 0.8vw;\r\n    weight: $weight;\r\n  }\r\n\r\n  @media (max-width: 1440px) {\r\n    font-size: 1vw;\r\n  }\r\n  @media (max-width: 1024px) {\r\n    font-size: 1.4vw;\r\n  }\r\n  @media (max-width: 768px) {\r\n    font-size: 2.2vw;\r\n  }\r\n}'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={primaryButton:"INhM6j1Fe8dmaHAdTvVP",secondaryButton:"h8GnXkuG7Kg3TVoJV7gk"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);