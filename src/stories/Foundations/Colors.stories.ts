import type { Meta, StoryObj } from '@storybook/vue3';
import '../../styles/index.styl';

// palette-* classes generated from variables
const palette = [
  'primary','secondary','tretiary','green','blue','red','firm','white'
] as const;

const meta: Meta = {
  title: 'Foundations/Colors',
};
export default meta;

type Story = StoryObj;

export const Swatches: Story = {
  render: () => ({
    setup() { return { palette }; },
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:16px;">
        <div v-for="c in palette" :key="c" style="font-family:Roboto, sans-serif;">
          <div :class="'palette-bg-' + c" style="height:64px;border:1px solid #eee;display:flex;align-items:center;justify-content:center;color: var(--auto-color, #fff); position:relative;">
            <span :class="'palette-color-' + (c === 'white' ? 'primary' : 'white')" style="font-size:12px;font-weight:600;">{{ c }}</span>
          </div>
          <p class="typography-text text-small" style="margin-top:4px;">.palette-bg-{{c}}</p>
          <p class="typography-text text-smallest palette-color-secondary" style="margin-top:0;">.palette-color-{{c}}</p>
        </div>
      </div>
    `,
  }),
};
