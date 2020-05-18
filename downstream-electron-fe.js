/*!
 * downstream-electron,0.4.0,2020-05-18 06:59:55.930,castlabs GmbH
 * 
 * Copyright (C) 2017 Castlabs GmbH.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("electron"));else if("function"==typeof define&&define.amd)define(["electron"],t);else{var o="object"==typeof exports?t(require("electron")):t(e.electron);for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(global,function(o){return n={},s.m=r={0:function(e,t,o){"use strict";function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=o(17),s=o(18),n=o(6),m=/%[A-Za-z0-9_-]+%/g,i={};function a(e,t){var o=e;return"object"===R(o)&&(o=o.msg),o=o?function(e,t){if((t=t||"")instanceof Array)for(var o=h(e.match(m)),r=0,s=Math.min(o.length,t.length);r<s;r++)e=e.replace(new RegExp(o[r],"g"),t[r]);else if("object"===R(t)){for(var n in t)t.hasOwnProperty(n)&&(e=e.replace(new RegExp("%"+n+"%","g"),t[n]));e=e.replace(m,t)}else"string"!=typeof t&&"number"!=typeof t&&"boolean"!=typeof t||(e=e.replace(m,t));return e}(o,t):"Internal Error"}function d(e){for(var t=[],o=1,r=e.length;o<r;o++)t.push(e[o]);return 0===t.length?t=void 0:1===t.length&&(t=t[0]),t}function h(e){for(var t={},o=[],r=0,s=(e=e||[]).length;r<s;r++)t[e[r]]||(t[e[r]]=!0,o.push(e[r]));return o}i.getError=function(e){var t=d(arguments),o=function(e,t){var o=e,r=[];if("object"===R(o)&&(o=o.msg),o)if(t instanceof Array)for(var s=h(o.match(m)),n=0,i=Math.min(s.length,t.length);n<i;n++){var a={};a[s[n].replace(/%/g,"")]=t[n],r.push(a)}else if("object"===R(t)){for(var d in t)if(t.hasOwnProperty(d)){var f={};f[d]=t[d],r.push(f)}}else if("string"==typeof t||"number"==typeof t||"boolean"==typeof t)for(var c=o.match(m)||[],l=0,u=c.length;l<u;l++){var p={};p[c[l].replace(/%/g,"")]=t,r.push(p)}return r&&!r.length&&(r=void 0),r}(e,t),r=a(e,t);return{code:function(e){var t=(e=e||{}).code;return t=t||n.GENERAL}(e),msg:r,keys:o}},i.getTranslation=function(e){return a(e,d(arguments))},i.e=r,i.t=s,e.exports=i},106:function(e,t,o){e.exports=o(107)},107:function(e,t,o){"use strict";var r,s=o(2).remote,n=o(2).ipcRenderer,d=o(0);function i(e,t){return function(){t.apply(e,arguments)}}function a(e,t){var o=s.getCurrentWindow();o&&(this._windowId=o.id),this._promisesObj={},this._subscribersId={},this._promiseCounter=0,this._window=e,this._persistent=t,function(e){for(var t=1,o=arguments.length;t<o;t++){var r=arguments[t];e[r]=i(e,e[r])}}(this,"_processApi","_beforeUnload"),this._createApiMethods("downloads",["create","createPersistent","getFolderInfo","getList","getListWithInfo","getOfflineLink","info","remove","removeAll","removeAllUnfinished","removePersistent","resume","saveData","savePersistent","start","stop","stopAll","subscribe","unsubscribe","updateDownloadFolder"]),this._attachEvents()}(a.prototype.downloads={}).createPersistent=function(e,o,r){var s=e[0],n=function(e){var t=JSON.parse(JSON.stringify(e));return void 0!==e.serverCertificate&&(t.serverCertificate=e.serverCertificate),"function"==typeof e.licenseRequest&&(t.licenseRequest=e.licenseRequest),"function"==typeof e.licenseResponse&&(t.licenseResponse=e.licenseResponse),t}(e[1]),i=e[2],a=this;this._persistent?this.downloads.info(s).then(function(e){if(e){var t=e.persistent;t&&!i?r("persistent session already exists:"+JSON.stringify(t)):(n.pssh||(n.pssh=function(t){var e=t.manifestInfo.protections,o=e.video[0]||{};e.video&&t.manifest.video&&(o=(o=e.video.filter(function(e){return 0<=t.manifest.video.indexOf(e.id)}))[0]||{});for(var r,s=o.protections||[],n=0,i=s.length;n<i;n++)if("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"===s[n].schemeIdUri){r=s[n].cencPSSH;break}return r}(e)),a._persistent.createPersistentSession(n).then(function(e){a.downloads.savePersistent(s,e).then(function(){t?a._persistent.removePersistentSession(t).then(function(){o(e)}).catch(function(){o(e)}):o(e)},r)},r))}else r(d.getError(d.e.manifests.NOT_FOUND,s))},r):r("No persistent plugin initialized")},a.prototype.downloads.removePersistent=function(e,t,o,r){this._persistent?r&&r.persistent?this._persistent.removePersistentSession(r.persistent).then(t,o):t():o("No persistent plugin initialized")},a.prototype.downloads.remove=function(e,t,o,r){this._persistent&&r&&r.persistent?this._persistent.removePersistentSession(r.persistent).then(t,o):t()},a.prototype.downloads.removeAll=function(e,t,o,r){var s=(r=r||[]).filter(function(e){return!!e.persistent}).map(function(e){return e.persistent});if(this._persistent&&0<s.length){for(var n=[],i=0,a=s.length;i<a;i++)n.push(this._persistent.removePersistentSession(s[i]));Promise.all(n).then(t,o)}else t()},a.prototype._apiCall=function(o,r,s){var n=this,i=this._generatePromiseId(),e=new Promise(function(e,t){n._promisesObj[i]={resolve:e,reject:t,method:o,args:r,originalMethod:s}}),t={};return t.promiseId=i,t.method=o,t.windowId=this._windowId,t.args=r,this._send(t),e},a.prototype._attachEvents=function(){o(2).ipcRenderer.on("downstreamElectronFE",this._processApi),this._window.addEventListener("beforeunload",this._beforeUnload)},a.prototype._beforeUnload=function(){this._removeSubscribers()},a.prototype._createApiMethods=function(e,t){this[e]=this[e]||{};for(var o=0,r=t.length;o<r;o++)s=this,n=e,i=t[o],a=void 0,"function"==typeof s[n][i]&&(a=s[n][i]),s[n][i]=function(e,t,o){return function(){return e._apiCall(t,arguments,o)}}(s,n+"."+i,a);var s,n,i,a},a.prototype._executeSubscriber=function(e,t,o,r){var s=this._subscribersId[e];s&&s.callback(t,o),r&&s&&this._removeLocalSubscribers(s.manifestId)},a.prototype._generatePromiseId=function(){var e=(new Date).getTime();return this._promiseCounter++,this._promiseCounter+"-"+e},a.prototype._processApi=function(e,t){var o=t.promiseId,r=t.error,s=t.result,n=this._promisesObj[o+""];function i(e){n.resolve(e),this._removeLocalSubscribersForDefinedMethods(n.method,n.args[0]||e)}n?("OK"===t.status?"function"==typeof n.originalMethod?n.originalMethod.call(this,n.args,i.bind(this),n.reject.bind(this),s):i.call(this,s):n.reject(r),t.subscribersId&&this._saveSubscribersId(n,t.subscribersId),delete this._promisesObj[o]):t.subscriberId&&this._executeSubscriber(t.subscriberId,t.err,s,t.subscriberFinished)},a.prototype._removeSubscribers=function(){var e,t={};for(var o in e=[],this._subscribersId)this._subscribersId.hasOwnProperty(o)&&e.push(o);t.method="removeSubscribers",t.args=[e],this._send(t)},a.prototype._removeLocalSubscribers=function(s){var n=this;function e(e){for(var t=0,o=s.length;t<o;t++)if("string"==typeof n._subscribersId[e].manifestId){if(n._subscribersId[e].manifestId===s[t]){delete n._subscribersId[e];break}}else{var r=n._subscribersId[e].manifestId.indexOf(s[t]);if(0<=r&&n._subscribersId[e].manifestId.splice(r,1),!n._subscribersId[e].manifestId.length){delete n._subscribersId[e];break}}}if("string"==typeof s?s=[s]:s instanceof Array&&(s=s.map(function(e){return"string"==typeof e?e:e.manifestInfo&&e.manifestInfo.id})),s)for(var t in this._subscribersId)this._subscribersId.hasOwnProperty(t)&&e(t);else this._subscribersId={}},a.prototype._removeLocalSubscribersForDefinedMethods=function(e,t){var o=["downloads.stop","downloads.stopAll","downloads.remove","downloads.removeAll","downloads.removeAllUnfinished","downloads.unsubscribe"];"downloads.removeAll"!==e&&"downloads.stopAll"!==e||(t=void 0);for(var r=0,s=o.length;r<s;r++)if(e===o[r]){this._removeLocalSubscribers(t);break}},a.prototype._saveSubscribersId=function(e,t){var o,r;for("string"!=typeof t&&"number"!=typeof t||(t=[String(t)]),o=0,r=t.length;o<r;o++)this._subscribersId[t[o]]={manifestId:e.args[0],callback:e.args[2+o]}},a.prototype._send=function(e){try{n.send("downstreamElectronBE",e)}catch(e){console.error(e)}},e.exports={init:function(e,t){return r=r||new a(e,t)}}},17:function(e,t,o){"use strict";var r=o(6),s={downloads:{_GENERAL:{code:r.ERRORS.INTERNAL_ERROR,msg:"Sorry we are unable to process your request - some internal error occurred"},ALREADY_FINISHED:{code:r.ERRORS.FINISHED,msg:"This download '%manifestId%' has been already finished."},ALREADY_REMOVED_ALL_UNFINISHED:{code:r.ERRORS.REMOVED,msg:"All unfinished downloads have been already removed, nothing left."},ALREADY_RESUMED:{code:r.ERRORS.RESUMED,msg:"This download '%manifestId%' has been already resumed."},ALREADY_STOPPED:{code:r.ERRORS.STOPPED,msg:"This download '%manifestId%' has been already stopped or has been already downloaded."},ALREADY_STOPPED_ALL:{code:r.ERRORS.STOPPED,msg:"There are no downloads to be stopped."},ALREADY_STARTED:{code:r.ERRORS.STARTED,msg:"This download '%manifestId%' has been already started."},BROKEN_CANNOT_BE_RESUMED:{code:r.ERRORS.BROKEN,msg:"This download '%manifestId%' is broken and cannot be resumed."},INFO_FAILED:{code:r.ERRORS.INFO,msg:"Gettting info of download '%manifestId%' failed."},REMOVING_ALL_FAILED:{code:r.ERRORS.INTERNAL_ERROR,msg:"Removing of all downloads failed."},REMOVING_ALL_UNFINISHED_FAILED:{code:r.ERRORS.INTERNAL_ERROR,msg:"Removing of all unfinished downloads failed."},REMOVING_FAILED:{code:r.ERRORS.INTERNAL_ERROR,msg:"Removing of download '%manifestId%' failed."},RESUMING_FAILED:{code:r.ERRORS.INTERNAL_ERROR,msg:"Resuming of download '%manifestId%' failed."},UPDATE_DOWNLOAD_FOLDER_FAILED:{code:r.ERRORS.INTERNAL_ERROR,msg:"Updating of download folder for '%manifestId%' failed."},STOPPING_FAILED:{code:r.ERRORS.INTERNAL_ERROR,msg:"Stopping of download '%manifestId%' failed."},SAVING_PERSISTENT_FAILED:{code:r.ERRORS.INTERNAL_ERROR,msg:"Saving persistent info for download '%manifestId%' failed."},SAVING_DATA_FAILED:{code:r.ERRORS.INTERNAL_ERROR,msg:"Saving data for download '%manifestId%' failed."},STOPPING_ALL_FAILED:{code:r.ERRORS.INTERNAL_ERROR,msg:"Stopping all downloads failed."},UNFINISHED:{code:r.ERRORS.UNFINISHED,msg:"This download is not ready yet."}},manifests:{NOT_FOUND:{code:r.ERRORS.NOT_FOUND,msg:"Manifest with id='%manifestId%' not found."},LOADING_FAILED:{code:r.ERRORS.LOADING,msg:"Could not load manifest from url '%manifestUrl%'."},LIST_LOADING_FAILED:{code:r.ERRORS.LOADING,msg:"Could not load list of manifests."},FOLDER_ALREADY_EXISTS:{code:r.ERRORS.EXISTS,msg:"Folder for manifest with id ='%manifestId%' already exists."},INVALID_ID:{code:r.ERRORS.BROKEN,msg:"Provided custom id for manifest is not valid: ('%invalid%')"}}};e.exports=s},18:function(e,t,o){"use strict";e.exports={test:"Hello world"}},2:function(e,t){e.exports=o},6:function(e,t,o){"use strict";e.exports={GENERAL:-1,ERRORS:{INTERNAL_ERROR:1,BROKEN:11,FINISHED:12,UNFINISHED:13,STOPPED:14,CREATED:15,MISSING:16,RESUMED:17,STARTED:18,LOADING:19,REMOVED:20,INFO:21,EXISTS:22,NOT_FOUND:100}}}},s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=106);function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}var r,n});