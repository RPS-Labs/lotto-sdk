import '../../dist/index';
import { Meta, StoryFn } from '@storybook/react';
import {
  CurrentTickets,
  CurrentTicketsProps,
} from '../components/CurrentTickets';
import { RPSProvider } from '../RpsProvider';

export default {
  component: CurrentTickets,
  title: 'Components/CurrentTickets',
  argTypes: {
    theme: {
      control: { type: 'radio', options: ['light', 'dark'] },
      defaultValue: 'light', // Default theme
    },
  },
} as Meta;

const Template: StoryFn<CurrentTicketsProps> = (args) => (
  <RPSProvider apiKey="your-api-key" theme={args.theme} activeChain="sepolia">
    <CurrentTickets {...args} />
  </RPSProvider>
);

export const Default = Template.bind({});
Default.args = {
  theme: 'light',
};
