import { createApp } from 'vue';
import { createPinia } from 'pinia';
import DatePicker from 'ant-design-vue/es/date-picker/date-fns';
import TimePicker from 'ant-design-vue/es/time-picker/date-fns';
import Calendar from 'ant-design-vue/es/calendar/date-fns';

import router from '@/router';
import App from './App.vue';

import 'ant-design-vue/dist/reset.css';
import './assets/styles/app.scss';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(DatePicker).use(TimePicker).use(Calendar);
app.mount('#__app');
