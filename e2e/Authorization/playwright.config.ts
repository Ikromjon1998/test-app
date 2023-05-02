import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        headless: true,

        // Artifacts
        screenshot: 'on',
        video: 'on',
    },
};
export default config;
