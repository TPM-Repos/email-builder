import { TEditorConfiguration } from '../../documents/editor/core';

const DRIVEWORKS: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#f5f5f5',
      canvasColor: '#FFFFFF',
      textColor: '#2e4b5d',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'block_header',
        'block_content',
        'block_footer'
      ],
    },
  },
  block_header: {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#09B5E7',
        padding: {
          top: 16,
          bottom: 16,
          left: 32,
          right: 32,
        },
        borderColor: '#000000',
        borderRadius: 0
      },
      props: {
        childrenIds: ['block_header_content']
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
          left: 0,
          right: 0
        },
        textAlign: 'left'
      },
      props: {
        height: 40,
        url: 'https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_n3eLjsf37dcjFaj5/westlake-logo.png',
        alt: 'Westlake Logo',
        contentAlignment: 'middle'
      }
    }
  },
  block_content: {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#ffffff',
        padding: {
          top: 32,
          bottom: 32,
          left: 32,
          right: 32
        }
      },
      props: {
        childrenIds: ['block_greeting', 'block_message', 'block_button']
      }
    }
  },
  block_greeting: {
    type: 'Heading',
    data: {
      style: {
        color: '#2e4b5d',
        fontFamily: 'MODERN_SANS',
        fontWeight: 'normal',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 32,
          left: 24,
          right: 24
        }
      },
      props: {
        level: 'h2',
        text: 'Hello Admin,'
      }
    }
  },
  block_message: {
    type: 'Text',
    data: {
      style: {
        color: '#2e4b5d',
        fontSize: 16,
        fontFamily: 'MODERN_SANS',
        fontWeight: 'normal',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 32,
          left: 24,
          right: 24
        }
      },
      props: {
        text: 'Thank you for your order! Please click the link below to view and modify your order.'
      }
    }
  },
  block_button: {
    type: 'Button',
    data: {
      style: {
        padding: {
          top: 0,
          bottom: 0,
          left: 24,
          right: 24
        },
        textAlign: 'center'
      },
      props: {
        buttonBackgroundColor: '#09B5E7',
        buttonStyle: 'rounded',
        buttonTextColor: '#FFFFFF',
        fullWidth: false,
        size: 'large',
        text: 'View Order',
        url: '#'
      }
    }
  },
  block_footer: {
    type: 'Text',
    data: {
      style: {
        color: '#778085',
        fontSize: 14,
        fontFamily: 'MODERN_SANS',
        fontWeight: 'normal',
        textAlign: 'center',
        padding: {
          top: 32,
          bottom: 0,
          left: 24,
          right: 24
        }
      },
      props: {
        text: 'WestLake'
      }
    }
  }
};

export default DRIVEWORKS; 