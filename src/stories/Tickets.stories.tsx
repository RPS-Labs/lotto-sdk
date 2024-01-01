import '../../dist/index.css';
import { Meta, StoryFn } from '@storybook/react';
import { Tickets, TicketsProps } from '../components/Tickets';

export default {
  title: 'Components/Tickets',
  component: Tickets,
} as Meta<TicketsProps>;

const Template: StoryFn<TicketsProps> = () => <Tickets />;

export const Default = Template.bind({});
Default.args = {};
