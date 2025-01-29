import LinkComponent from './index.vue';
import { ELinkTheme } from './models';
export default {
  title: 'Atoms/LinkComponent',
  component: LinkComponent,
  argTypes: {
    theme : { control: 'select', options: Object.values(ELinkTheme) },
    disabled: { control: 'boolean' },
    isActive: { control: 'boolean' },
    href : { control: 'text', defaultValue: 'https://youtu.be/dQw4w9WgXcQ' },
  },
};

const DefaultTemplate = (args) => ({
  components: { LinkComponent },
  setup() {
    return { args };
  },
  template: `<LinkComponent  v-bind="args">Click it to get rickrolled</LinkComponent>`,
});

export const Default = DefaultTemplate.bind({});
