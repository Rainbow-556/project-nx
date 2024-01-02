import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { codeFromLib1 } from 'lib1';
import { codeFromLib2 } from 'lib2';

console.log('依赖', codeFromLib1(), codeFromLib2());

createApp(App).mount('#app');
