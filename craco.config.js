const CracoLessPlugin = require('craco-less')
const { useEffect } = require('react')
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#0CBBC7',
              '@secondary-color': '#EDFEFF',
              '@white-color': '#fff',
              '@black-color': '#000',
              '@dark-color': '#191619',
              '@dark33-color': '#333',
              '@dark67-color': '#676767',
              '@dark7C-color': '#7c7c7c',

              // Font size
              '@fs-44': '44px',
              '@fs-28': '28px',

              // Btn Padding
              '@padding-1': '10px 50px',
              '@padding-2': '14px 20px',
              '@padding-3': '10px 20px',

              // Default btn style
              '@btn-default-border': '@primary-color',
              '@btn-default-color': '@primary-color',
              '@btn-border-radius-base': '0',
              '@btn-padding-horizontal-base': '@padding-2',
              '@btn-height-base': '100%',
              '@btn-line-height': '100%',

              // Header Style
              '@layout-header-background': '@white-color',
              '@layout-header-height': '1',
              '@layout-header-color': '@dark-color',
              '@layout-header-padding': '0px',

              // Menu Style
              '@menu-item-padding': '0',
              '@menu-item-color': '@dark-color',

              // Screens
              '@screen-xs': '320px',
              '@screen-xs-min': '@screen-xs',

              '@screen-sm': '576px',
              '@screen-sm-min': '@screen-sm',

              '@screen-md': '768px',
              '@screen-md-min': '@screen-md',

              '@screen-lg': '992px',
              '@screen-lg-min': '@screen-lg',

              '@screen-xl': '1200px',
              '@screen-xl-min': '@screen-xl',

              '@screen-xxl': '1400px',
              '@screen-xxl-min': '@screen-xxl',

              // Badge
              '@badge-padding': '6px 10px',
              '@badge-font-size': '10px',
              '@badge-font-weight': '700',
              '@badge-color': '@secondary-color',
              '@badge-text-color': '@primary-color',

              // Tabs
              '@tabs-bar-margin': '0',
              '@tabs-horizontal-gutter': '0',
              '@tabs-title-font-size': '16px'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
