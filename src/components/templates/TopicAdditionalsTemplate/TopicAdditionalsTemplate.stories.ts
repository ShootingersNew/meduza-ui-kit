import TopicAdditionalsTemplate from "./index.vue";

export default {
  title: "Templates/TopicAdditionalsTemplate",
  component: TopicAdditionalsTemplate,
};

const DefaultTemplate = () => ({
  components: { TopicAdditionalsTemplate },
  template: `
    <TopicAdditionalsTemplate style="display: flex; flex-direction: column; gap: 16px; height: 500px;">
      <template #default>
        <div style="background-color: #f44336; height: 70%; width: 100%; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 600;">
          Main content
        </div>
      </template>

      <template #additionalsMain>
        <div style="background-color: #ffecb3; padding: 16px;">
          Additionals main content
        </div>
      </template>

      <template #additionalsSecondary>
        <div style="background-color: #e1f5fe; padding: 16px;">
          Additionals secondary content
        </div>
      </template>

      <template #additionalsFooter>
        <div style="background-color: #ede7f6; padding: 16px;">
          Additionals footer content
        </div>
      </template>
    </TopicAdditionalsTemplate>
  `,
});

export const Default = DefaultTemplate.bind({});
