import { defineComponent } from "vue";
export default defineComponent({
    name: "ButtonComponent",
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "medium",
        },
        color: {
            type: String,
            default: "primary",
        },
    },
});
; /* PartiallyEnd: #3632/script.vue */
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ((['button', __VLS_ctx.size, __VLS_ctx.color])) }, disabled: ((__VLS_ctx.disabled)), });
    var __VLS_0 = {};
    var __VLS_1 = {};
    var __VLS_2 = {};
    __VLS_styleScopedClasses['button'];
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
let __VLS_self;
