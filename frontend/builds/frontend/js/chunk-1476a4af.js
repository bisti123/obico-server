(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1476a4af"],{"41aa":function(e,i,t){},"5c36":function(e,i,t){"use strict";var n=t("41aa"),a=t.n(n);a.a},"9c95":function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("section",{staticClass:"notifications"},[t("h2",{staticClass:"section-title"},[e._v("Notifications")]),"web"===e.theme?t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-form-label"},[t("saving-animation",{attrs:{errors:e.errorMessages.notification_enabled,saving:e.saving.notification_enabled}},[t("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.notification_enabled,expression:"user.notification_enabled"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"id_notification_enabled"},domProps:{checked:Array.isArray(e.user.notification_enabled)?e._i(e.user.notification_enabled,null)>-1:e.user.notification_enabled},on:{change:[function(i){var t=e.user.notification_enabled,n=i.target,a=!!n.checked;if(Array.isArray(t)){var o=null,s=e._i(t,o);n.checked?s<0&&e.$set(e.user,"notification_enabled",t.concat([o])):s>-1&&e.$set(e.user,"notification_enabled",t.slice(0,s).concat(t.slice(s+1)))}else e.$set(e.user,"notification_enabled",a)},function(i){return e.$emit("updateSetting","notification_enabled")}]}}),t("label",{staticClass:"custom-control-label",attrs:{for:"id_notification_enabled"}},[e._v(" Enable notifications ")])])])],1)]):t("div",[t("saving-animation",{attrs:{errors:e.errorMessages.notification_enabled,saving:e.saving.notification_enabled}},[t("div",{staticClass:"mobile-setting-item-wrapper"},[t("div",{staticClass:"setting-item-text"},[t("label",{attrs:{for:"id_notification_enabled"}},[e._v(" Enable notifications ")])]),t("div",{staticClass:"setting-item-switch"},[t("onoff-toggle",{staticClass:"mb-0",attrs:{theme:e.theme,width:"ios"===e.theme?48:30,height:"ios"===e.theme?24:12,onColor:"ios"===e.theme?"var(--color-primary)":"var(--color-on-primary)",offColor:"var(--color-divider)",borderColor:"var(--color-divider)",thumbColor:"ios"===e.theme?"var(--color-on-primary)":"var(--color-primary)"},on:{input:function(i){return e.$emit("updateSetting","notification_enabled")}},model:{value:e.user.notification_enabled,callback:function(i){e.$set(e.user,"notification_enabled",i)},expression:"user.notification_enabled"}})],1)])])],1)])},a=[],o=t("847e"),s=t("4f95"),r={name:"GeneralNotifications",components:{SavingAnimation:o["a"]},props:{errorMessages:{type:Object,required:!0},saving:{type:Object,required:!0},user:{type:Object,required:!0}},computed:{theme:function(){var e=Object(s["b"])();return e?"ios"===e?"ios":"material":"web"}}},c=r,l=(t("5c36"),t("2877")),d=Object(l["a"])(c,n,a,!1,null,"96179af4",null);i["default"]=d.exports}}]);
//# sourceMappingURL=chunk-1476a4af.js.map