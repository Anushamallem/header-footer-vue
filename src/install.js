import HelloWorld from "./components/HelloWorld.vue";

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
    Vue.component("hello-world", HelloWorld);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

HelloWorld.install = install;

export default HelloWorld;
