const modulesFiles = require.context('../packages', true, /\.js$/)

// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return
  install.installed = true

  modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath)
    Vue.component(value.default.name, value.default || value)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }
