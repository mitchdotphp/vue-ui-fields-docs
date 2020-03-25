import Vue from 'vue';
import uiFields from './ui-fields/index.js';

if (process.client) {
	Vue.use(uiFields, {
		persistentTime: 1000 * 60
	});
}