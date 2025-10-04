import type { Meta, StoryObj } from '@storybook/vue3';
import TypographyText from './index.vue';

const meta: Meta<typeof TypographyText> = {
  title: 'Atoms/TypographyText',
  component: TypographyText,
  argTypes: {
  size: { control: { type: 'select' }, options: ['large','default', 'medium', 'small', 'caption'] },
    tag: { control: { type: 'select' }, options: ['p', 'span', 'div', 'small', 'time'] },
  },
};

export default meta;
type Story = StoryObj<typeof TypographyText>;

export const Default: Story = {
  args: { size: 'default', tag: 'p' },
  render: (args) => ({
    components: { TypographyText },
    setup: () => ({ args }),
    template: `<TypographyText v-bind="args">Обычный абзац текста</TypographyText>`,
  }),
};

export const Caption: Story = {
  args: { size: 'caption', tag: 'span' },
  render: (args) => ({
    components: { TypographyText },
    setup: () => ({ args }),
    template: `<TypographyText v-bind="args">ПОДПИСЬ</TypographyText>`,
  }),
};
