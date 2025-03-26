# EmailBuilder.js Deployment Plan

## Overview
This document outlines the steps to deploy EmailBuilder.js on Railway. EmailBuilder.js is a free and open-source block-based email template builder that we'll be self-hosting.

## Prerequisites
- ✓ Node.js (Latest LTS version)
- ✓ npm or yarn
- ✓ Git
- ✓ Railway CLI/Account

## Local Development Setup

1. **Repository Setup**
   - ✓ Clone the repository
   - ✓ Install dependencies:
     ```bash
     npm install
     cd packages/editor-sample
     npm install
     ```

2. **Local Testing**
   - ✓ Run the development server:
     ```bash
     cd packages/editor-sample
     npm run dev
     ```
   - ✓ Verify the application works at http://localhost:5173/email-builder-js/
   - ✓ Test core functionality:
     - ✓ Template loading
     - ✓ Block editing
     - ✓ HTML/JSON export

## Railway Deployment

1. **Railway Project Setup**
   - ✓ Create new Railway project (email-builder)
   - ✓ Connect GitHub repository
   - ✓ Configure build settings:
     ```
     BUILD_COMMAND: cd packages/editor-sample && npm install && npm run build
     START_COMMAND: cd packages/editor-sample && npm start
     ```

2. **Environment Configuration**
   - ✓ Set required environment variables (if any)
   - Configure custom domain (optional)

3. **Deployment Steps**
   - ✓ Push code to trigger automatic deployment
   - ✓ Monitor build logs
   - ✓ Verify deployment success

## Post-Deployment

1. **Verification**
   - Test all core functionality
   - Verify email template building works
   - Check HTML/JSON export functionality

2. **Monitoring**
   - Set up uptime monitoring
   - Configure error tracking
   - Monitor resource usage

## Maintenance

1. **Updates**
   - Regular dependency updates
   - Security patches
   - Feature updates from upstream

2. **Backup**
   - Configure automated backups
   - Document restore procedures

## Troubleshooting

Common issues and solutions:
1. Build failures
   - Check build logs
   - Verify dependencies
   - Check Node.js version

2. Runtime issues
   - Check application logs
   - Monitor memory usage
   - Check for rate limiting

## Resources
- [EmailBuilder.js GitHub](https://github.com/TPM-Repos/email-builder)
- [Railway Documentation](https://docs.railway.app/)
- [Demo Site](https://usewaypoint.github.io/email-builder-js/#sample/reservation-reminder)

## Deployment Status
- ✓ Build completed successfully
- ✓ Application started successfully
- ✓ Health check passed
- ✓ Application is live and accessible

## Next Steps
1. Set up monitoring and alerts
2. Configure custom domain (if needed)
3. Set up automated backups
4. Document maintenance procedures 