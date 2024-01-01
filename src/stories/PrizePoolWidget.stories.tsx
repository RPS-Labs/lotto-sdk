import '../../dist/index.css';
import { Meta, StoryFn } from '@storybook/react';
import { PrizePoolWidget } from '..';
import { RPSProvider } from '../RpsProvider';

export default {
  title: 'Components/PrizePoolWidget',
  component: PrizePoolWidget,
} as Meta<typeof PrizePoolWidget>;

const Template: StoryFn<typeof PrizePoolWidget> = (args) => (
  <RPSProvider apiKey="your-api-key" theme={args.theme} activeChain="sepolia">
    <PrizePoolWidget {...args} />
  </RPSProvider>
);

export const Default = Template.bind({});
Default.args = {
  theme: 'light',
};
