import '../../dist/index.css';
import { Meta, StoryFn } from '@storybook/react';
import { UserTickets } from '../components/UserTickets';

export default {
  title: 'Components/UserTickets',
  component: UserTickets,
} as Meta<typeof UserTickets>;

const Template: StoryFn<typeof UserTickets> = (args) => (
  <UserTickets {...args} />
);

export const Default = Template.bind({});
Default.args = {};
