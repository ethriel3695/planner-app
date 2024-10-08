import type { Meta, StoryObj } from '@storybook/react';
import { withAuth } from '#app/actions/user.mock';
import HomePageLayout from './page';

const meta = {
  title: 'Route/Home',
  component: HomePageLayout,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof HomePageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  async beforeEach() {
    // 👇 Set the return value for the getUser function
    withAuth.mockReturnValue(
      Promise.resolve({
        user: {
          object: 'user',
          id: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
          email: 'ethriel3695@gmail.com',
          emailVerified: true,
          firstName: 'Reuben',
          profilePictureUrl:
            'https://workoscdn.com/images/v1/8STSQXZTLQob5euEiQbp1Oe1jttiuZtMiaWqYKCS2EU',
          lastName: 'Ellis',
          createdAt: '2024-06-09T13:41:04.750Z',
          updatedAt: '2024-06-09T13:41:04.750Z',
        },
        sessionId: 'session',
        accessToken: 'access',
      })
    );
  },
};
