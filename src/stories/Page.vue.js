import './page.css';
import MyHeader from './Header.vue';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const user = ref(null);
const onLogin = () => {
    user.value = { name: 'Jane Doe' };
};
const onLogout = () => {
    user.value = null;
};
const onCreateAccount = () => {
    user.value = { name: 'Jane Doe' };
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({});
    // @ts-ignore
    [MyHeader,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(MyHeader, new MyHeader({ ...{ 'onLogin': {} }, ...{ 'onLogout': {} }, ...{ 'onCreateAccount': {} }, user: ((__VLS_ctx.user)), }));
    const __VLS_1 = __VLS_0({ ...{ 'onLogin': {} }, ...{ 'onLogout': {} }, ...{ 'onCreateAccount': {} }, user: ((__VLS_ctx.user)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onLogin: (__VLS_ctx.onLogin)
    };
    const __VLS_7 = {
        onLogout: (__VLS_ctx.onLogout)
    };
    const __VLS_8 = {
        onCreateAccount: (__VLS_ctx.onCreateAccount)
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("storybook-page") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://componentdriven.org"), target: ("_blank"), rel: ("noopener noreferrer"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://storybook.js.org/tutorials/"), target: ("_blank"), rel: ("noopener noreferrer"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://storybook.js.org/docs"), target: ("_blank"), rel: ("noopener noreferrer"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tip-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("tip") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ width: ("10"), height: ("10"), viewBox: ("0 0 12 12"), xmlns: ("http://www.w3.org/2000/svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.g, __VLS_intrinsicElements.g)({ fill: ("none"), "fill-rule": ("evenodd"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"), id: ("a"), fill: ("#999"), });
    __VLS_styleScopedClasses['storybook-page'];
    __VLS_styleScopedClasses['tip-wrapper'];
    __VLS_styleScopedClasses['tip'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            MyHeader: MyHeader,
            user: user,
            onLogin: onLogin,
            onLogout: onLogout,
            onCreateAccount: onCreateAccount,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
