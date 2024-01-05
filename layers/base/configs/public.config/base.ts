
export default {

    // Micro-app URL configurations
    // microapps: {
    //     urlContracts: {
    //         onboarding: process.env.MICROAPP_ONBOARDING_URL || "/",
    //         dashboard: process.env.MICROAPP_DASHBOARD_URL || "/dashboard/",
    //         onboarding2023: process.env.MICROAPP_ONBOARDING2023_URL || "/2023/",
    //         dashboard2023: process.env.MICROAPP_DASHBOARD2023_URL || "/2023/dashboard/",
    //         class: process.env.MICROAPP_CLASS_URL || "/class/",
    //         learningPath:
    //             process.env.MICROAPP_LEARNING_PATH_URL || "/learning-path/",
    //         nlp: process.env.MICROAPP_NLP_URL || "/nlp/",
    //         admin: process.env.MICROAPP_ADMIN_URL || "/admin/",
    //         "support-admin":
    //             process.env.MICROAPP_SUPPORT_ADMIN_URL || "/support-admin/",
    //         ielts: process.env.MICROAPP_IELTS_URL || "/ieltsi/",
    //         foc: process.env.MICROAPP_FOC_URL || "/foc/",
    //         mosaic: process.env.MICROAPP_MOSAIC_URL || "/mosaic/",
    //     },
    // },
    // separateApps: {
    //     voila: "https://voila-dev.cambridgeone.org"
    // },
    // googleAnalytics: {
    //     accountId: process.env.GOOGLE_ANALYTICS_ACCOUNT_ID
    // },
    gigyaKey: process.env.GIGYA_API_KEY,
  //   gigyaScreenSetPrefix: "CAMBRIDGEONE-",
  //   sentryDSN: process.env.SENTRY_DSN,
  //   sentryEnabled: false,
  //   appEnv: process.env.APP_ENVIRONMENT,
  //   newRelic: {
  //       enable: false,
  //       appNamePrefix: "c1-",
  //       accountID: "2758876",
  //       browserLicenseKey: "NRJS-e7f52006f85c615d08a"
  //   },
  //   dlsAccountId: process.env.DLS_ACCOUNT_ID,
  //   dlsRealm: process.env.DLS_REALM,
  //   dlsEnv: process.env.DLS_ENV,
  //   ltiTool: {
  //       gatewayToolAPIGateway: {
  //           domain: process.env.APP_LTI_TOOLGW_API_DOMAIN || 'lti-tool-dev.comprodls.com',
  //       }
  //   },
  //   zendeskBasePath: "https://cambridgeonehelptest.cambridge.org/hc/en-gb",
  //   "classLimit" : {
  //     "componentLosDefaultCount": 700,
  //     "classLosLimit": 4500,
  //     "classStudentLimit": 100
  //   },
  //   "ieltsConfig": {
  //     'microEntitlementFeatureKeys': {
  //         DEFAULT: "testAndFeedback",
  //         TEST_AND_FEEDBACK: "testAndFeedback",
  //         FEEDBACK: "feedback",
  //         LESSON: "lesson"
  //     },
  //     "OrderStatus": {
  //         PENDING_STATUS: 1,
  //         PROCESSING_STATUS: 2,
  //         DELIVERED_STATUS: 3,
  //         WAITING_PAYMENT_STATUS: 4,
  //         PAYMENT_RECEIVED_STATUS: 5,
  //         PAYMENT_DECLINED_STATUS: 6,
  //         PAYMENT_CANCELLED_STATUS: 8,
  //         REJECTED_STATUS: 12,
  //         ACCEPTED_BY_SAP: 11,
  //         PAYMENT_REFUND_APPROVED: 9,
  //         TIMEOUT_ERROR: "TIMEOUT_ERROR"
  //     },
  //     'miniTestTypes': {
  //         'd6bd099e-f6df-6b4a-483a-92972419b0e5': {
  //             items: 30,
  //             price: 7.99,
  //             time: '40',
  //             key: 'IELTSi30',
  //             title: 'IELTSi 30',
  //             sapId: '2800465042'
  //         },
  //         '10bd099f-0670-b9c8-5b68-4827b30ffaf8': {
  //             items: 8,
  //             price: 1.99,
  //             time: '15',
  //             key: 'IELTSi8',
  //             title: 'IELTSi 8',
  //             sapId: '2800484745'
  //         },
  //         '5abd099e-ff99-c2a7-4497-4e25f8531060': {
  //             items: 4,
  //             price: 0.99,
  //             time: '5',
  //             key: 'IELTSi4',
  //             title: 'IELTSi 4',
  //             sapId: '2800484748'
  //         }
  //     },
  //     'skillType': {
  //         'ielts_pe': {
  //             'types': {
  //                 'lessons': {
  //                     desc_key: 'IELTS_READING.LESSONS',
  //                     sapId: '2800514880',
  //                     defaultPrice: 1.99,
  //                 },
  //                 'allLessons': {
  //                     defaultPrice: 4.99,
  //                     desc_key: 'IELTS_READING.ALLLESSONS',
  //                     sapId: '2800503895',
  //                 },
  //                 'test-pack': {
  //                     desc_key: 'IELTS_READING.TEST_PACK'
  //                 },
  //                 'research': {
  //                     desc_key: 'IELTS_READING.RESEARCH'
  //                 }
  //             }

  //         },
  //         'ielts_listening': {
  //             'types': {
  //                 'lessons': {
  //                     desc_key: 'IELTS_LISTENING.LESSONS',
  //                     sapId: '2800515443',
  //                     defaultPrice: 1.99,
  //                 },
  //                 'allLessons': {
  //                     defaultPrice: 4.99,
  //                     desc_key: 'IELTS_LISTENING.ALLLESSONS',
  //                     sapId: '2800503896',
  //                 },
  //                 'test-pack': {
  //                     desc_key: 'IELTS_LISTENING.TEST_PACK'
  //                 },
  //                 'research': {
  //                     desc_key: 'IELTS_LISTENING.RESEARCH'
  //                 }
  //             }
  //         },
  //         'ielts_writing': {
  //             'types': {
  //                 'lessons': {
  //                     desc_key: 'IELTS_WRITING.LESSONS',
  //                     sapId: '2800509800',
  //                     defaultPrice: 1.99,
  //                 },
  //                 'allLessons': {
  //                     defaultPrice: 10.99,
  //                     desc_key: 'IELTS_WRITING.ALLLESSONS',
  //                     sapId: '2800503889'
  //                 },
  //                 'test-pack': {
  //                     desc_key: 'IELTS_WRITING.TEST_PACK'
  //                 },
  //                 'research': {
  //                     desc_key: 'IELTS_WRITING.RESEARCH'
  //                 }
  //             }
  //         },
  //         'ielts_speaking': {
  //             'types': {
  //                 'lessons': {
  //                     desc_key: 'IELTS_SPEAKING.LESSONS',
  //                     sapId: '2800509800',
  //                     defaultPrice: 1.99,
  //                 },
  //                 'allLessons': {
  //                     defaultPrice: 10.99,
  //                     desc_key: 'IELTS_SPEAKING.ALLLESSONS'
  //                 },
  //                 'test-pack': {
  //                     desc_key: 'IELTS_SPEAKING.TEST_PACK'
  //                 },
  //                 'research': {
  //                     desc_key: 'IELTS_SPEAKING.RESEARCH'
  //                 }
  //             }

  //         }
  //     }
  // }
}