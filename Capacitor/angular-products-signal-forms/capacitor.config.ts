import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'es.products.angular.capacitor',
  appName: 'Capacitor - Angular products',
  webDir: 'dist/angular-products/browser',
  android: {
    allowMixedContent: true,    
  },
  plugins: {
    StatusBar: {
      overlaysWebView: false,
      style: 'DARK',
      backgroundColor: '#0054e9',
    },
    SystemBars: {
      "insetsHandling": "disable"
    }
  },
};

export default config;
