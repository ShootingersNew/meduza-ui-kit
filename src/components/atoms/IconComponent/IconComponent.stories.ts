import IconComponent from './index.vue';

export default {
  title: 'Atoms/IconComponent',
  component: IconComponent,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    isCurrentColor: { control: 'boolean' },
    inline: { control: 'boolean' },
  },
};

const DefaultTemplate = (args) => ({
  components: { IconComponent },
  setup() {
    return { args };
  },
  template: '<div style="color:red;"><IconComponent v-bind="args" /></div>',
});

export const Logo = DefaultTemplate.bind({});
Logo.args = {
  name: 'logo',
  width: 55,
  isCurrentColor: false,
  inline: false,
};