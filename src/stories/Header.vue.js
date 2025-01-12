import './header.css';
import MyButton from './Button.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps();
const __VLS_emit = defineEmits();
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    __typeEmits: {},
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("storybook-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ width: ("32"), height: ("32"), viewBox: ("0 0 32 32"), xmlns: ("http://www.w3.org/2000/svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.g, __VLS_intrinsicElements.g)({ fill: ("none"), "fill-rule": ("evenodd"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"), fill: ("#FFF"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"), fill: ("#555AB9"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"), fill: ("#91BAF8"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    if (__VLS_ctx.user) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("welcome") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        (__VLS_ctx.user.name);
    }
    if (__VLS_ctx.user) {
        // @ts-ignore
        [MyButton,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(MyButton, new MyButton({ ...{ 'onClick': {} }, size: ("small"), label: ("Log out"), }));
        const __VLS_1 = __VLS_0({ ...{ 'onClick': {} }, size: ("small"), label: ("Log out"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        let __VLS_5;
        const __VLS_6 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.user)))
                    return;
                __VLS_ctx.$emit('logout');
            }
        };
        let __VLS_2;
        let __VLS_3;
        var __VLS_4;
    }
    if (!__VLS_ctx.user) {
        // @ts-ignore
        [MyButton,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(MyButton, new MyButton({ ...{ 'onClick': {} }, size: ("small"), label: ("Log in"), }));
        const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, size: ("small"), label: ("Log in"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        let __VLS_12;
        const __VLS_13 = {
            onClick: (...[$event]) => {
                if (!((!__VLS_ctx.user)))
                    return;
                __VLS_ctx.$emit('login');
            }
        };
        let __VLS_9;
        let __VLS_10;
        var __VLS_11;
    }
    if (!__VLS_ctx.user) {
        // @ts-ignore
        [MyButton,];
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(MyButton, new MyButton({ ...{ 'onClick': {} }, primary: (true), size: ("small"), label: ("Sign up"), }));
        const __VLS_15 = __VLS_14({ ...{ 'onClick': {} }, primary: (true), size: ("small"), label: ("Sign up"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
        let __VLS_19;
        const __VLS_20 = {
            onClick: (...[$event]) => {
                if (!((!__VLS_ctx.user)))
                    return;
                __VLS_ctx.$emit('createAccount');
            }
        };
        let __VLS_16;
        let __VLS_17;
        var __VLS_18;
    }
    __VLS_styleScopedClasses['storybook-header'];
    __VLS_styleScopedClasses['welcome'];
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
            MyButton: MyButton,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
