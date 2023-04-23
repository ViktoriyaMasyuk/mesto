(()=>{"use strict";var t={submitButtonSelector:".form__save",inactiveButtonClass:"form__save_inactive",inputSelector:".form__info",inputErrorClass:"form__input_type_error",inputActiveClass:"form__input-error_active",errorClass:"form__info_error"},e=document.querySelector(".elements"),n=document.querySelector(".image-popup"),r=document.querySelector(".basket-popup"),o=document.querySelector(".place-popup"),i=document.querySelector(".profile-popup"),u=document.querySelector(".profile__add-button"),a=document.querySelector(".profile__edit-button"),c=document.querySelector(".form-place"),l=document.querySelector("#name-input"),s=document.querySelector("#job-input"),f=document.querySelector(".profile__title"),p=document.querySelector(".profile__subtitle"),y=document.querySelector(".delete-card__submit"),h=document.querySelector(".update-avatar"),d=document.querySelector(".profile__avatar");function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,b(r.key),r)}}function b(t){var e=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===v(e)?e:String(e)}var _=function(){function t(e,n){var r,o,i,u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=function(){u._hasInvalidInput()?(u._buttonSubmit.classList.add(u._inactiveButtonClass),u._buttonSubmit.disabled=!0):(u._buttonSubmit.classList.remove(u._inactiveButtonClass),u._buttonSubmit.removeAttribute("disabled"))},(o=b(o="_toggleButtonState"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._inputActiveClass=e.inputActiveClass,this._errorClass=e.errorClass,this._formToValidate=document.querySelector(n),this._inputFields=Array.from(this._formToValidate.querySelectorAll(e.inputSelector)),this._buttonSubmit=this._formToValidate.querySelector(e.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._formToValidate.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._inputActiveClass),this._formToValidate.querySelector(".form__info_".concat(t.id)).classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formToValidate.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._inputActiveClass),e.textContent="",this._formToValidate.querySelector(".form__info_".concat(t.id)).classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputFields.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))})),this._formToValidate.addEventListener("reset",(function(){setTimeout((function(){return t._toggleButtonState()}),0)}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputFields.forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this._inputFields.some((function(t){return!t.validity.valid}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var k=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._templateSelector=n,this._title=e.name,this._link=e.link,this._id=e._id,this._likes=e.likes,this._user=o,this._handleImageClick=r,this._isMeAuthor=o._id===e.owner._id,this._handleCardDelete=i,this._handleToggleLike=u}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"toggleLike",value:function(){this._buttonLike.classList.toggle("card__like_active")}},{key:"_addEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){t._handleToggleLike(t)})),this._buttonDelete.addEventListener("click",(function(){t._handleCardDelete(t)})),this._imagePopup.addEventListener("click",(function(){t._handleImageClick(t._title,t._link)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardImage.src=this._link,this._element.querySelector(".card__title").textContent=this._title,this._cardImage.alt=this._title,this._buttonLike=this._element.querySelector(".card__like"),this._buttonDelete=this._element.querySelector(".card__delete"),this._isMeAuthor||this._buttonDelete.remove(),this._countLike=this._element.querySelector(".card__count-likes"),this._countLike.textContent=this._likes.length,this._imagePopup=this._element.querySelector(".card__image"),this._addEventListeners(),this.isUserLiked()&&this.toggleLike(),this._element}},{key:"isUserLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id==t._user._id}))}},{key:"updateLikes",value:function(){var t=this;this.isUserLiked()?this._likes=this._likes.filter((function(e){return e!==t._user})):this._likes.push(this._user),this.toggleLike(),this._countLike.textContent=this._likes.length}},{key:"getId",value:function(){return this._id}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var j=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=n}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;this._initialArray=t,this._initialArray.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.append(t)}},{key:"prependItem",value:function(t){this._container.prepend(t)}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var C=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=e,this._document=document,this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),this._document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),this._document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleOverlayClose",value:function(t){t.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.querySelector(".popup__close").addEventListener("click",(function(){return t.close()})),this._popupElement.addEventListener("click",this._handleOverlayClose)}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._photoImagePopup=e._popupElement.querySelector(".image-card__photo"),e._titleImagePopup=e._popupElement.querySelector(".image-card__title"),e}return e=u,(n=[{key:"open",value:function(t,e){this._photoImagePopup.src=e,this._photoImagePopup.setAttribute("alt",t),this._titleImagePopup.textContent=t,T(R(u.prototype),"open",this).call(this)}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},V.apply(this,arguments)}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(r);if(o){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=t.querySelector(".form"),n._handleSubmit=e,n._inputs=n._form.querySelectorAll(".form__info"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputs.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;V(D(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._getInputValues())}))}},{key:"close",value:function(){V(D(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setSubmitButtonText",value:function(t){this._buttonSubmit=this._popupElement.querySelector(".form__submit"),this._buttonSubmit.textContent=t}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}function J(){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},J.apply(this,arguments)}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}var $=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(r);if(o){var n=z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=t.querySelector(".form__save"),e._buttonDeleteCard=y,e}return e=u,(n=[{key:"setCallback",value:function(t){this._handleSubmit=t}},{key:"setEventListeners",value:function(){var t=this;J(z(u.prototype),"setEventListeners",this).call(this),this._buttonDeleteCard.addEventListener("click",(function(e){e.preventDefault(),t._handleSubmit()}))}},{key:"setSubmitButtonText",value:function(t){this._buttonSubmit=this._popupElement.querySelector(".form__submit"),this._buttonSubmit.textContent=t}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(C);function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}var Q=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameInfo=e,this._jobInfo=n,this._avatar=r}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){return{name:this._nameInfo.textContent,profession:this._jobInfo.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){this._nameInfo.textContent=t.name,this._jobInfo.textContent=t.profession,this._avatar.src=t.avatar}},{key:"setAvatarLink",value:function(t){this._avatar.src=t}},{key:"setUser",value:function(t){this._user=t}},{key:"getUser",value:function(){return this._user}}],n&&K(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function W(t){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}function X(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==W(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==W(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===W(o)?o:String(o)),r)}var o}function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Z(t){return new k(t,"#card",rt,nt.getUser(),lt,st).generateCard()}var tt=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=e.baseUrl,this.headers=e.headers}var e,n;return e=t,(n=[{key:"_getResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.url,"users/me/"),{headers:this.headers}).then(this._getResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.url,"cards/"),{headers:this.headers}).then(this._getResponse)}},{key:"updateUserInfo",value:function(t){return fetch("".concat(this.url,"users/me/"),{method:"PATCH",headers:this.headers,body:JSON.stringify(t)}).then(this._getResponse)}},{key:"addNewCard",value:function(t){return fetch("".concat(this.url,"cards/"),{method:"POST",headers:this.headers,body:JSON.stringify(t)}).then(this._getResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this.url,"cards/").concat(t,"/"),{method:"DELETE",headers:this.headers}).then(this._getResponse)}},{key:"setLike",value:function(t){return fetch("".concat(this.url,"cards/").concat(t,"/likes"),{method:"PUT",headers:this.headers})}},{key:"unsetLike",value:function(t){return fetch("".concat(this.url,"cards/").concat(t,"/likes"),{method:"DELETE",headers:this.headers})}},{key:"changeAvatar",value:function(t){return fetch("".concat(this.url,"users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:t})})}}])&&X(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64/",headers:{authorization:"ade0a831-d345-4d2c-8394-f99ed3b27f1b","Content-Type":"application/json"}}),et=new j((function(t){var e=Z(t);et.addItem(e)}),e),nt=new Q(f,p,d);function rt(t,e){ot.open(t,e)}Promise.all([tt.getUserInfo(),tt.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];nt.setUser(o),nt.setUserInfo({name:o.name,profession:o.about,avatar:o.avatar}),et.renderItems(i)})).catch((function(t){console.log(t)}));var ot=new A(n);ot.setEventListeners();var it=new N(o,(function(t){tt.addNewCard(t).then((function(t){var e=Z(t);et.prependItem(e),it.close()})).catch((function(t){console.log(t)}))}),c);it.setEventListeners();var ut=new N(i,(function(t){ft(!0,ut),tt.updateUserInfo({name:t.name,about:t.profession}).then((function(t){nt.setUserInfo({name:t.name,profession:t.about,avatar:t.avatar}),ut.close()})).catch((function(t){console.log(t)})).finally((function(){ft(!1,ut)}))}));ut.setEventListeners();var at=new N(h,(function(t){ft(!0,at),tt.changeAvatar(t["avatar-link"]).then((function(e){console.log(e),nt.setAvatarLink(t["avatar-link"]),at.close()})).catch((function(t){console.log(t)})).finally((function(){ft(!1,at)}))}));at.setEventListeners();var ct=new $(r);function lt(t){ct.setCallback((function(){tt.deleteCard(t.getId()).then((function(){t.deleteCard(),ct.close()})).catch((function(t){console.log("".concat(t))}))})),ct.open()}function st(t){t.isUserLiked()?tt.unsetLike(t.getId()).then((function(){t.updateLikes()})).catch((function(t){console.log("".concat(t))})):tt.setLike(t.getId()).then((function(){t.updateLikes()})).catch((function(t){console.log("".concat(t))}))}function ft(t,e){t?e.setSubmitButtonText("Сохранение..."):e.setSubmitButtonText("Сохранить")}ct.setEventListeners(),u.addEventListener("click",(function(){pt.resetValidation(),it.open()})),a.addEventListener("click",(function(){yt.resetValidation();var t=nt.getUserInfo();l.value=t.name,s.value=t.profession,ut.open()})),d.addEventListener("click",(function(){at.open()}));var pt=new _(t,".form-place"),yt=new _(t,".form-profile"),ht=new _(t,".form_avatar");pt.enableValidation(),yt.enableValidation(),ht.enableValidation()})();