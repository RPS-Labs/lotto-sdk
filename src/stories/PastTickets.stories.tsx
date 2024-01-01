import '../../dist/index.css';
import { Meta, StoryFn } from '@storybook/react';
import { PastTickets, PastTicketsProps } from '../components/PastTickets';
import { RPSProvider } from '../RpsProvider';

export default {
  component: PastTickets,
  title: 'Components/PastTickets',
  argTypes: {
    theme: {
      control: { type: 'radio', options: ['light', 'dark'] },
      defaultValue: 'light', // Default theme
    },
  },
} as Meta;

const Template: StoryFn<PastTicketsProps> = (args) => (
  <RPSProvider apiKey="your-api-key" theme={args.theme} activeChain="sepolia">
    <PastTickets {...args} />;
  </RPSProvider>
);

export const Default = Template.bind({});
Default.args = {
  theme: 'light',
};
