import { StoryFn, Meta } from '@storybook/react';
import { Activity, ActivityProps } from '../components/Activity';
import { RPSProvider } from '../RpsProvider';

export default {
  title: 'Components/Activity',
  component: Activity,
  argTypes: {
    theme: {
      control: { type: 'radio', options: ['light', 'dark'] },
      defaultValue: 'light',
    },
  },
} as Meta;

const Template: StoryFn<ActivityProps> = (args) => (
  <RPSProvider apiKey="your-api-key" theme={args.theme} activeChain="sepolia">
    <Activity {...args} />
  </RPSProvider>
);

export const Default = Template.bind({});
Default.args = {
  theme: 'light',
};
