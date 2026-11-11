import type { CurrentsConfig } from '@currents/playwright';

const config: CurrentsConfig = {
	projectId: process.env.CURRENTS_PROJECT_ID ?? 'nHHLA5',
	consoleOutput: 'compact',
	contextLinks: true,
	outputFile: 'currents-report.json',
	// Coverage is collected via browser-native V8 (fixtures/v8-coverage.ts +
	// monocart-coverage-reports), not Currents' istanbul fixture.
};

// eslint-disable-next-line import-x/no-default-export
export default config;
