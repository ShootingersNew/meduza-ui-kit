import type { Meta, StoryObj } from '@storybook/vue3';
import TypographyHeading from './index.vue';

const meta: Meta<typeof TypographyHeading> = {
  title: 'Atoms/TypographyHeading',
  component: TypographyHeading,
  argTypes: {
    level: { control: { type: 'inline-radio' }, options: [1, 2, 3, 4] },
    tag: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof TypographyHeading>;

export const H1: Story = {
  args: { level: 1, tag: 'h1' },
  render: (args) => ({
    components: { TypographyHeading },
    setup: () => ({ args }),
    template: `<TypographyHeading v-bind="args">Заголовок новости</TypographyHeading>`,
  }),
};

export const H2: Story = {
  args: { level: 2, tag: 'h2' },
  render: (args) => ({
    components: { TypographyHeading },
    setup: () => ({ args }),
    template: `<TypographyHeading v-bind="args">Подзаголовок</TypographyHeading>`,
  }),
};

export const H3: Story = {
  args: { level: 3, tag: 'h3' },
  render: (args) => ({
    components: { TypographyHeading },
    setup: () => ({ args }),
    template: `<TypographyHeading v-bind="args">Малый заголовок</TypographyHeading>`,
  }),
};

export const H4: Story = {
  args: { level: 4, tag: 'h4' },
  render: (args) => ({
    components: { TypographyHeading },
    setup: () => ({ args }),
    template: `<TypographyHeading v-bind="args">Заголовок H4</TypographyHeading>`,
  }),
};

export const AllLevels: Story = {
  render: () => ({
    components: { TypographyHeading },
    template: `
      <div style="display:flex; flex-direction:column; gap:12px;">
        <TypographyHeading :level="1" tag="div">H1 — title-main (52px)</TypographyHeading>
        <TypographyHeading :level="2" tag="div">H2 — title-sub (39px)</TypographyHeading>
        <TypographyHeading :level="3" tag="div">H3 — title-small (30px)</TypographyHeading>
        <TypographyHeading :level="4" tag="div">H4 — text-medium (18px)</TypographyHeading>
      </div>
    `,
  }),
};
