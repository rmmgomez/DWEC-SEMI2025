import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'es.products.angular.capacitor',
  appName: 'Capacitor - Angular products',
  webDir: 'dist/angular-products/browser',
  android: {
    allowMixedContent: true,
  },
};

export default config;
