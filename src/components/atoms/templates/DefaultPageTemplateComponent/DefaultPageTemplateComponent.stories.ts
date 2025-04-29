import DefaultPageTemplateComponent from './index.vue';

export default {
  title: 'Atoms/Template/DefaultPageTemplateComponent',
  component: DefaultPageTemplateComponent,
};

const DefaultTemplate = (args) => ({
  components: { DefaultPageTemplateComponent },
  setup() {
    return { args };
  },
  template: '<div style="color:red; height:500px"><default-page-template-component><template #header><div style="height:100px; backgroundColor:blue">Header</div></template><template #footer><div style="height:100px; backgroundColor:black">Footer</div></template>central content</default-page-template-component></div>',
});

export const Logo = DefaultTemplate.bind({});
Logo.args = {
  name: 'arrow',
  width: 55,
  isCurrentColor: false,
  inline: false,
};