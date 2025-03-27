import { TEditorConfiguration } from '../../documents/editor/core';

const ACCOUNT_DENIED: TEditorConfiguration = {
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
        'block-1743003087322',
        'block_content'
      ]
    }
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
  'block-1743002912558': {
    type: 'Heading',
    data: {
      props: {
        text: 'Account Denied',
        level: 'h1'
      },
      style: {
        textAlign: 'right',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24
        }
      }
    }
  },
  'block-1743003087322': {
    type: 'ColumnsContainer',
    data: {
      style: {
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24
        }
      },
      props: {
        columnsCount: 2,
        columnsGap: 16,
        columns: [
          {
            childrenIds: [
              'block-1743003099046'
            ]
          },
          {
            childrenIds: [
              'block-1743003111765'
            ]
          },
          {
            childrenIds: []
          }
        ]
      }
    }
  },
  'block-1743003099046': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24
        }
      },
      props: {
        url: 'https://tpm.com/wp-content/uploads/2024/01/tpm-logo-color-no-tag.png',
        alt: 'HSI Logo',
        linkHref: null,
        contentAlignment: 'middle'
      }
    }
  },
  'block-1743003111765': {
    type: 'Heading',
    data: {
      props: {
        text: 'Account Denied'
      },
      style: {
        textAlign: 'right',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24
        }
      }
    }
  },
  block_content: {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#f5f5f5',
        padding: {
          top: 32,
          bottom: 32,
          right: 32,
          left: 32
        }
      },
      props: {
        childrenIds: [
          'block-1743003224145'
        ]
      }
    }
  },
  'block-1743003224145': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#ffffff',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24
        }
      },
      props: {
        childrenIds: [
          'block-1743003242864',
          'block-1743003315381',
          'block-1743003368624'
        ]
      }
    }
  },
  'block-1743003242864': {
    type: 'Text',
    data: {
      style: {
        color: '#344054',
        fontSize: 23,
        fontFamily: 'MODERN_SANS',
        fontWeight: 'normal',
        textAlign: 'center',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24
        }
      },
      props: {
        text: 'Request Denied, The DriveWorks Administrator for has denied your request for access. Your account has been deleted.'
      }
    }
  },
  'block-1743003315381': {
    type: 'Button',
    data: {
      style: {
        textAlign: 'center',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24
        }
      },
      props: {
        buttonBackgroundColor: '#0354A6',
        size: 'large',
        text: 'Contact Administrator',
        url: 'mailto:joshmagie@tpm.com'
      }
    }
  },
  'block-1743003368624': {
    type: 'Text',
    data: {
      style: {
        fontWeight: 'normal',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24
        }
      },
      props: {
        text: 'If you believe this to be in error, Email Administrator directly using the button above.'
      }
    }
  }
};

export default ACCOUNT_DENIED; 