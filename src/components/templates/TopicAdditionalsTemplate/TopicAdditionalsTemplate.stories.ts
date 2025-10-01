import TopicAdditionalsTemplateComponent from './index.vue';
export default {
  title: 'Templates/TopicAdditionalsTemplateComponent',
  component: TopicAdditionalsTemplateComponent,
};

const DefaultTemplate = () => ({
  components: { TopicAdditionalsTemplateComponent },
  template: `<TopicAdditionalsTemplateComponent style="height: 500px; display:flex; flexDirection:column;"> <div style="backgroundColor: red; height: 70%; width:100%"> Main Content</div> <div slot="additionalsMain" style="backgroundColor: pink; width:100%"> Additionals Main Content</div>  <div slot="additionalsSecondary"> Additional Secondary Content</div> <div slot="additionalsFooter"> Additional Footer Content</div> </TopicAdditionalsTemplateComponent>`,
});

export const Default = DefaultTemplate.bind({});
