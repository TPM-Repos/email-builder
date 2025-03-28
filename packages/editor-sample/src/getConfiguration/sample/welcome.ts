import { TEditorConfiguration } from '../../documents/editor/core';

const WELCOME: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#F2F4F7',
      canvasColor: '#FFFFFF',
      textColor: '#667085',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'block_header_divider',
        'block-1743002813777',
        'block_header_content',
        'block-1709571228545',
        'block-1709571234315',
        'block-1709571247550',
        'block-1709571258507',
        'block-1709571281151',
        'block-1709571302968',
        'block-1709571282795',
      ],
    },https://ai.tpmautomation.com/
  },
  block_header_divider: {
    type: 'Divider',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      props: {
        lineHeight: 4,
        lineColor: '#BH251A',
      },
    },
  },
  block_header_content: {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        width: 200,
        height: 60,
        url: 'https://tpm.com/wp-content/uploads/2024/01/tpm-logo-color-no-tag.png',
        alt: 'TPM Logo',
        contentAlignment: 'middle',
      },
    },
  },
  'block-1743002813777': {
    type: 'Divider',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        lineHeight: 2,
        lineColor: '#0354A6',
      },
    },
  },
  'block-1709571228545': {
    type: 'Text',
    data: {
      style: {
        backgroundColor: null,
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Hi Anna 👋,',
        color: '#667085',
        fontWeight: 'normal',
      },
    },
  },
  'block-1709571234315': {
    type: 'Text',
    data: {
      style: {
        backgroundColor: null,
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Welcome to TPM! TPM is how teams within fast growing organizations effortlessly manage their projects, prevent delays, identify bottlenecks, and increase efficiency within their teams.',
        color: '#667085',
        fontWeight: 'normal',
      },
    },
  },
  'block-1709571247550': {
    type: 'Text',
    data: {
      style: {
        backgroundColor: null,
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Best of all, you can connect your existing project management tools in minutes:',
        color: '#667085',
        fontWeight: 'normal',
      },
    },
  },
  'block-1709571281151': {
    type: 'Text',
    data: {
      style: {
        backgroundColor: null,
        textAlign: 'left',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: "If you ever need help, just reply to this email and one of us will get back to you shortly. We're here to help.",
        color: '#667085',
        fontWeight: 'normal',
      },
    },
  },
  'block-1709571302968': {
    type: 'Button',
    data: {
      style: {
        backgroundColor: null,
        textAlign: 'left',
        padding: {
          top: 16,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Open dashboard',
        url: 'https://www.usewaypoint.com',
        backgroundColor: '#0354A6',
        textColor: '#FFFFFF',
        buttonStyle: 'rounded',
        fontSize: 14,
      },
    },
  },
  'block-1709571258507': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        url: 'https://tpm.com/wp-content/uploads/2024/01/project-management-dashboard.png',
        alt: 'TPM Dashboard',
        linkHref: 'https://tpm.com/dashboard',
        contentAlignment: 'middle',
      },
    },
  },
  'block-1709571282795': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 16,
          bottom: 40,
          right: 24,
          left: 24,
        },
      },
      props: {
        url: 'https://tpm.com/wp-content/uploads/2024/01/project-management-illustration.png',
        alt: 'Project Management Illustration',
        linkHref: null,
        contentAlignment: 'middle',
      },
    },
  },
};

export default WELCOME;
