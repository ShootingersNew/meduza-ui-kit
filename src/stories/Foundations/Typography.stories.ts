import type { Meta, StoryObj } from '@storybook/vue3';
import '../../styles/index.styl';
import TypographyText from '../../components/atoms/TypographyText/index.vue';
import TypographyHeading from '../../components/atoms/TypographyHeading/index.vue';

const sizesText = ['large','default','medium','small','caption'] as const;
const headingTitles = [
  { size: 'main', label: 'Main Title' },
  { size: 'sub', label: 'Sub Title' },
  { size: 'small', label: 'Small Title' }
];

const meta: Meta = {
  title: 'Foundations/Typography',
};
export default meta;

type Story = StoryObj;

export const Overview: Story = {
  render: () => ({
    components: { TypographyText, TypographyHeading },
    setup() {
      return { sizesText, headingTitles };
    },
    template: `
      <div style="display:flex; gap:48px; flex-wrap:wrap; font-family: Roboto, sans-serif;">
        <div style="flex:1; min-width:320px;">
          <h3>Headings</h3>
          <div v-for="h in headingTitles" :key="h.size" style="margin-bottom:16px;">
            <TypographyHeading :size="h.size">{{ h.label }} ({{ h.size }})</TypographyHeading>
          </div>
        </div>
        <div style="flex:1; min-width:320px;">
          <h3>Text</h3>
          <div v-for="s in sizesText" :key="s" style="margin-bottom:12px;">
            <TypographyText :size="s">
              {{ s }} — Сphinx of black quartz, judge my vow (0123456789)
            </TypographyText>
          </div>
        </div>
      </div>
    `,
  }),
};
