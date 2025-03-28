import { TEditorConfiguration } from '../../documents/editor/core';

const RESPOND_TO_MESSAGE: TEditorConfiguration = {
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
        'block_Jf65r5cUAnEzBfxnHKGa5S',
        'block_WmPDNHDpyHkygqjHuqF7St',
        'block_4VCKUvRMo7EbuMdN1VsdRw',
        'block_4siwziT4BkewmN55PpXvEu',
        'block_S9Rg9F3bGcviRyfMpoU5e4',
      ],
    },
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
          right: 0
        }
      },
      props: {
        lineHeight: 4,
        lineColor: '#BH251A'
      }
    }
  },
  block_header_content: {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        },
        textAlign: 'left'
      },
      props: {
        width: 200,
        height: 60,
        url: 'https://tpm.com/wp-content/uploads/2024/01/tpm-logo-color-no-tag.png',
        alt: 'TPM Logo',
        contentAlignment: 'middle'
      }
    }
  },
  'block-1743002813777': {
    type: 'Divider',
    data: {
      style: {
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }
      },
      props: {
        lineColor: '#0354A6',
        lineHeight: 2
      }
    }
  },
  block_HjX7RN8eDEz7BLBHSQCNgU: {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 8,
          bottom: 24,
          left: 24,
          right: 24,
        },
      },
      props: {
        height: 32,
        url: 'https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_hW6RusynHUNTKoLm/boop.png',
        contentAlignment: 'middle',
      },
    },
  },
  block_Jf65r5cUAnEzBfxnHKGa5S: {
    type: 'Heading',
    data: {
      style: {
        color: '#667085',
        backgroundColor: null,
        fontFamily: null,
        fontWeight: null,
        textAlign: null,
        padding: {
          top: 16,
          bottom: 0,
          left: 24,
          right: 24,
        },
      },
      props: {
        level: 'h2',
        text: `Respond to Anna's Inquiry`,
      },
    },
  },
  block_WmPDNHDpyHkygqjHuqF7St: {
    type: 'Text',
    data: {
      style: {
        color: '#667085',
        backgroundColor: null,
        fontSize: 16,
        fontFamily: null,
        fontWeight: null,
        textAlign: null,
        padding: {
          top: 8,
          bottom: 16,
          left: 24,
          right: 24,
        },
      },
      props: {
        text: 'Dog boarding for Aug 1 - Aug 29.',
      },
    },
  },
  block_4VCKUvRMo7EbuMdN1VsdRw: {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#F2F4F7',
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 16,
          bottom: 16,
          left: 24,
          right: 24,
        },
      },
      props: {
        childrenIds: ['block_95nkowWyi4p2VBiA46Eizs'],
      },
    },
  },
  block_95nkowWyi4p2VBiA46Eizs: {
    type: 'Text',
    data: {
      style: {
        color: '#667085',
        backgroundColor: '#FFFFFF',
        fontSize: 21,
        fontFamily: null,
        fontWeight: null,
        textAlign: null,
        padding: {
          top: 24,
          bottom: 24,
          left: 24,
          right: 24,
        },
      },
      props: {
        text: 'Any chance you can watch Emma again next month?',
      },
    },
  },
  block_4siwziT4BkewmN55PpXvEu: {
    type: 'Button',
    data: {
      style: {
        backgroundColor: null,
        fontSize: 16,
        fontFamily: null,
        fontWeight: null,
        textAlign: 'left',
        padding: {
          top: 24,
          bottom: 24,
          left: 24,
          right: 24,
        },
      },
      props: {
        buttonBackgroundColor: '#0354A6',
        buttonTextColor: '#FFFFFF',
        size: 'large',
        buttonStyle: 'rounded',
        text: 'Respond',
        url: 'http://example.usewaypoint.com/request/2334234',
        fullWidth: false,
      },
    },
  },
  block_S9Rg9F3bGcviRyfMpoU5e4: {
    type: 'Text',
    data: {
      style: {
        color: '#667085',
        backgroundColor: null,
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 16,
          left: 24,
          right: 24,
        },
      },
      props: {
        text: 'You need 2 more walks to become a Super Walker on Boop!',
      },
    },
  },
};

export default RESPOND_TO_MESSAGE;
