import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.foodee.admin',
  appName: 'Foodee Admin',
  webDir: 'build',
  server: {
    url: 'https://foodee.namtech.me/admin',
    cleartext: true
  },
  android: {
    buildOptions: {
      // các tùy chọn build khác nếu cần
    }
  }
};

export default config;