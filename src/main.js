import { createApp } from 'vue';
import App from './App.vue';
import {
	create,
	NButton,
	NModal,
	NCard,
	NForm,
	NInput,
	NFormItem,
	NSelect,
	NDataTable,
	NIcon,
	NTooltip,
} from 'naive-ui';

const naive = create({
	components: [
		NButton,
		NCard,
		NModal,
		NForm,
		NFormItem,
		NInput,
		NSelect,
		NDataTable,
		NIcon,
		NTooltip,
	],
});

createApp(App).use(naive).mount('#app');
