import { TEditorConfiguration } from '../../documents/editor/core';
import WELCOME from './welcome';
import DRIVEWORKS from './driveworks-template';
import ACCOUNT_APPROVED from './account-approved';
import ONE_TIME_PASSWORD from './one-time-passcode';
import RESET_PASSWORD from './reset-password';
import ORDER_ECOMMERCE from './order-ecommerce';
import SUBSCRIPTION_RECEIPT from './subscription-receipt';
import RESERVATION_REMINDER from './reservation-reminder';
import POST_METRICS_REPORT from './post-metrics-report';
import RESPOND_TO_MESSAGE from './respond-to-message';
import EMPTY_EMAIL_MESSAGE from './empty-email-message';

export const SAMPLES: Record<string, TEditorConfiguration> = {
  '': EMPTY_EMAIL_MESSAGE,
  'welcome': WELCOME,
  'driveworks': DRIVEWORKS,
  'account-approved': ACCOUNT_APPROVED,
  'one-time-password': ONE_TIME_PASSWORD,
  'reset-password': RESET_PASSWORD,
  'order-ecomerce': ORDER_ECOMMERCE,
  'subscription-receipt': SUBSCRIPTION_RECEIPT,
  'reservation-reminder': RESERVATION_REMINDER,
  'post-metrics-report': POST_METRICS_REPORT,
  'respond-to-message': RESPOND_TO_MESSAGE,
}; 