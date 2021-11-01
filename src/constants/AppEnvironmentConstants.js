export const BUILD_MODE = {
  LOCAL: 1,
  DEV: 2,
  QA: 3,
  STAGING: 4,
  PRODUCTION: 5,
  DEMO: 6
};

export const APP_ENVIRONMENT = {

  allConfigurations: {
    [BUILD_MODE.LOCAL]: {
      baseURL: 'http://demo1.folio3.com:8983/UserManagementAPI/api/v1',
    },
    [BUILD_MODE.DEV]: {
      baseURL: 'http://demo1.folio3.com:8983/UserManagementAPI/api/v1'
    },
    [BUILD_MODE.QA]: {
      baseURL: 'http://demo1.folio3.com:8983/UserManagementAPI/api/v1'
    },
    [BUILD_MODE.STAGING]: {
      baseURL: 'http://demo1.folio3.com:8983/UserManagementAPI/api/v1'
    },
    [BUILD_MODE.PRODUCTION]: {
      baseURL: 'http://demo1.folio3.com:8983/UserManagementAPI/api/v1'
    },
    [BUILD_MODE.DEMO]: {
      baseURL: 'http://demo1.folio3.com:8983/UserManagementAPI/api/v1'
    }
  },

  config(buildMode) {

    const defaultMode = (
      // BUILD_MODE.LOCAL
      BUILD_MODE.DEV
      // BUILD_MODE.QA
      // BUILD_MODE.STAGING
      // BUILD_MODE.PRODUCTION
      // BUILD_MODE.DEMO
    );
    
    const mode = buildMode || defaultMode;
    return this.allConfigurations[mode];
  },
};