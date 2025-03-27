import EMPTY_EMAIL_MESSAGE from './sample/empty-email-message';
import ONE_TIME_PASSCODE from './sample/one-time-passcode';
import ORDER_ECOMMERCE from './sample/order-ecommerce';
import POST_METRICS_REPORT from './sample/post-metrics-report';
import RESERVATION_REMINDER from './sample/reservation-reminder';
import RESET_PASSWORD from './sample/reset-password';
import RESPOND_TO_MESSAGE from './sample/respond-to-message';
import SUBSCRIPTION_RECEIPT from './sample/subscription-receipt';
import WELCOME from './sample/welcome';
import ACCOUNT_APPROVED from './sample/account-approved';
import ACCOUNT_EXISTS from './sample/account-exists';
import ACCOUNT_DENIED from './sample/account-denied';
import EMAIL_VERIFICATION from './sample/email-verification';
import FORGOT_PASSWORD_LINK from './sample/forgot-password-link';
import NEW_USER_ACCOUNT from './sample/new-user-account';
import FORGOT_PASSWORD_NO_ACCOUNT from './sample/forgot-password-no-account';
import PASSWORD_RESET_CONFIRMATION from './sample/password-reset-confirmation';

export default function getConfiguration(template: string) {
  if (template.startsWith('#sample/')) {
    const sampleName = template.replace('#sample/', '');
    switch (sampleName) {
      case 'welcome':
        return WELCOME;
      case 'account-approved':
        return ACCOUNT_APPROVED;
      case 'account-exists':
        return ACCOUNT_EXISTS;
      case 'account-denied':
        return ACCOUNT_DENIED;
      case 'email-verification':
        return EMAIL_VERIFICATION;
      case 'forgot-password-link':
        return FORGOT_PASSWORD_LINK;
      case 'forgot-password-no-account':
        return FORGOT_PASSWORD_NO_ACCOUNT;
      case 'password-reset-confirmation':
        return PASSWORD_RESET_CONFIRMATION;
      case 'new-user-account':
        return NEW_USER_ACCOUNT;
      case 'one-time-password':
        return ONE_TIME_PASSCODE;
      case 'order-ecomerce':
        return ORDER_ECOMMERCE;
      case 'post-metrics-report':
        return POST_METRICS_REPORT;
      case 'reservation-reminder':
        return RESERVATION_REMINDER;
      case 'reset-password':
        return RESET_PASSWORD;
      case 'respond-to-message':
        return RESPOND_TO_MESSAGE;
      case 'subscription-receipt':
        return SUBSCRIPTION_RECEIPT;
    }
  }

  if (template.startsWith('#code/')) {
    const encodedString = template.replace('#code/', '');
    const configurationString = decodeURIComponent(atob(encodedString));
    try {
      return JSON.parse(configurationString);
    } catch {
      console.error(`Couldn't load configuration from hash.`);
    }
  }

  return EMPTY_EMAIL_MESSAGE;
}
