import type { Meta, StoryObj } from '@storybook/vue3';
import CardContainer from './index.vue';

const meta: Meta<typeof CardContainer> = {
  title: 'Atoms/CardContainer',
  component: CardContainer,
  argTypes: {
    tag: { control: { type: 'select' }, options: ['section', 'article', 'aside', 'figure', 'div'] },
    role: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof CardContainer>;

export const Section: Story = {
  args: { tag: 'section' },
  render: (args) => ({
    components: { CardContainer },
    setup: () => ({ args }),
    template: `
      <CardContainer v-bind="args">
        <div class="palette-color-primary text-medium">Контент карточки</div>
        <div class="palette-color-secondary text-small">Доп. описание</div>
      </CardContainer>
    `,
  }),
};

export const Article: Story = {
  args: { tag: 'article', ariaLabel: 'Новостной блок' },
  render: (args) => ({
    components: { CardContainer },
    setup: () => ({ args }),
    template: `
      <CardContainer v-bind="args">
        <div class="palette-color-primary text-medium">Статья: заголовок</div>
        <div class="palette-color-secondary text-small">Краткое описание статьи</div>
      </CardContainer>
    `,
  }),
};
