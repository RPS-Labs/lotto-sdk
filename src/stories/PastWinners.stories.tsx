import '../../dist/index.css';
import { StoryFn, Meta } from '@storybook/react';
import { PastWinners, PastWinnerProps } from '../components/PastWinners';
import { RPSProvider } from '../RpsProvider';

export default {
  title: 'Components/PastWinners',
  component: PastWinners,
  argTypes: {
    theme: {
      control: { type: 'radio', options: ['light', 'dark'] },
      defaultValue: 'light', // Default theme
    },
  },
} as Meta<typeof PastWinners>;

const Template: StoryFn<PastWinnerProps> = (args) => (
  <RPSProvider apiKey="your-api-key" theme={args.theme} activeChain="sepolia">
    <PastWinners {...args} />;
  </RPSProvider>
);

export const Default = Template.bind({});
Default.args = {
  theme: 'light',
};
