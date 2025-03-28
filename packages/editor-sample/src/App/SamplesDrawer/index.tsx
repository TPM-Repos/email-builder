import React from 'react';

import { Box, Button, Divider, Drawer, Stack, Typography } from '@mui/material';

import { useSamplesDrawerOpen } from '../../documents/editor/EditorContext';

import SidebarButton from './SidebarButton';

export const SAMPLES_DRAWER_WIDTH = 240;

export default function SamplesDrawer() {
  const samplesDrawerOpen = useSamplesDrawerOpen();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={samplesDrawerOpen}
      sx={{
        width: samplesDrawerOpen ? SAMPLES_DRAWER_WIDTH : 0,
      }}
    >
      <Stack spacing={3} py={1} px={2} width={SAMPLES_DRAWER_WIDTH} sx={{ height: '100%' }}>
        <Stack spacing={2} sx={{ '& .MuiButtonBase-root': { width: '100%', justifyContent: 'flex-start' }, flex: 1 }}>
          <Typography variant="h6" component="h1" sx={{ p: 0.75 }}>
            EmailBuilder.js
          </Typography>

          <Stack alignItems="flex-start">
            <SidebarButton href="#">Empty</SidebarButton>
            {/* <SidebarButton href="#sample/welcome">Welcome email</SidebarButton> */}
            <SidebarButton href="#sample/new-user-account">New User Account Request</SidebarButton>
            <SidebarButton href="#sample/account-approved">Account Approved</SidebarButton>
            <SidebarButton href="#sample/account-exists">Account Already Exists</SidebarButton>
            <SidebarButton href="#sample/account-denied">Account Denied</SidebarButton>
            <SidebarButton href="#sample/email-verification">Email Verification</SidebarButton>
            <SidebarButton href="#sample/forgot-password-link">Forgot Password Link</SidebarButton>
            <SidebarButton href="#sample/forgot-password-no-account">Forgot Password - No Account</SidebarButton>
            <SidebarButton href="#sample/password-reset-confirmation">Password Reset Confirmation</SidebarButton>
            {/* <SidebarButton href="#sample/driveworks">DriveWorks Template</SidebarButton> */}
            {/* <SidebarButton href="#sample/one-time-password">One-time passcode (OTP)</SidebarButton> */}
            <SidebarButton href="#sample/reset-password">Reset password</SidebarButton>
            {/* <SidebarButton href="#sample/order-ecomerce">E-commerce receipt</SidebarButton> */}
            {/* <SidebarButton href="#sample/subscription-receipt">Subscription receipt</SidebarButton> */}
            {/* <SidebarButton href="#sample/reservation-reminder">Reservation reminder</SidebarButton> */}
            {/* <SidebarButton href="#sample/post-metrics-report">Post metrics</SidebarButton> */}
            {/* <SidebarButton href="#sample/respond-to-message">Respond to inquiry</SidebarButton> */}
          </Stack>

          {/* <Divider /> */}
        </Stack>

        <Stack alignItems="flex-start">
          <Button size="small" href="https://www.usewaypoint.com/open-source/emailbuilderjs" target="_blank">
            Learn more
          </Button>
          <Button size="small" href="https://github.com/usewaypoint/email-builder-js" target="_blank">
            View on GitHub
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
}
