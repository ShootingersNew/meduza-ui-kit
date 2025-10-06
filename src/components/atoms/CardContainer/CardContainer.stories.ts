import type { Meta, StoryObj } from '@storybook/vue3';
import CardContainer from './index.vue';

const meta: Meta<typeof CardContainer> = {
  title: 'Atoms/CardContainer',
  component: CardContainer,
  argTypes: {
    tag: { control: { type: 'select' }, options: ['section', 'article', 'aside', 'figure', 'div'] },
    role: { control: 'text' },
    ariaLabel: { control: 'text' },
    maxWidth: { control: 'text', description: 'Fixed max-width (e.g., "320px")' },
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

export const FixedMaxWidth: Story = {
  args: { 
    tag: 'article',
    maxWidth: '320px'
  },
  render: (args) => ({
    components: { CardContainer },
    setup: () => ({ args }),
    template: `
      <div style="background: #f0f0f0; padding: 20px;">
        <CardContainer v-bind="args">
          <div class="palette-color-primary text-medium">Карточка с фиксированной шириной</div>
          <div class="palette-color-secondary text-small">max-width: 320px для всех экранов</div>
        </CardContainer>
      </div>
    `,
  }),
};

export const ResponsiveMaxWidth: Story = {
  args: { 
    tag: 'article',
    maxWidth: {
      xs: '100%',
      sm: '300px',
      md: '400px',
      lg: '500px'
    }
  },
  render: (args) => ({
    components: { CardContainer },
    setup: () => ({ args }),
    template: `
      <div style="background: #f0f0f0; padding: 20px;">
        <CardContainer v-bind="args">
          <div class="palette-color-primary text-medium">Адаптивная карточка</div>
          <div class="palette-color-secondary text-small">
            xs: 100% | sm: 300px | md: 400px | lg: 500px
          </div>
          <div class="palette-color-secondary text-smallest">
            Измените размер окна браузера для теста
          </div>
        </CardContainer>
      </div>
    `,
  }),
};

export const NewsCardExample: Story = {
  args: { 
    tag: 'article',
    maxWidth: {
      xs: '280px',
      sm: '300px',
      md: '320px'
    }
  },
  render: (args) => ({
    components: { CardContainer },
    setup: () => ({ args }),
    template: `
      <div style="background: #f0f0f0; padding: 20px; display: flex; gap: 16px; overflow-x: auto;">
        <CardContainer v-bind="args" v-for="i in 5" :key="i">
          <div class="palette-color-primary text-medium">Новость {{ i }}</div>
          <div class="palette-color-secondary text-small">Краткое описание новости для предпросмотра</div>
          <div class="palette-color-secondary text-smallest">25 марта 2021</div>
        </CardContainer>
      </div>
    `,
  }),
};
