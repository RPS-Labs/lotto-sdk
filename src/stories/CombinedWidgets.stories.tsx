import '../../dist/index.css';
import { Meta, StoryFn } from '@storybook/react';
import {
  CombinedWidgets,
  CombinedWidgetsProps,
} from '../components/CombinedWidgets';
import { RPSProvider } from '../RpsProvider';

export default {
  component: CombinedWidgets,
  title: 'Components/CombinedWidgets',
  argTypes: {
    theme: {
      control: { type: 'radio', options: ['light', 'dark'] },
      defaultValue: 'light', // Default theme
    },
  },
} as Meta;

const Template: StoryFn<CombinedWidgetsProps> = (args) => (
  <RPSProvider apiKey="your-api-key" theme={args.theme} activeChain="sepolia">
    <CombinedWidgets {...args} />
  </RPSProvider>
);

export const Default = Template.bind({});
Default.args = {
  theme: 'light',
};
