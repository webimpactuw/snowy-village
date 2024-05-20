import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'zh9hwpwm',
    dataset: 'production'
  },
  // vite: config => {
  //   return {
  //     build: {
  //       target: 'exnext',
  //     }
  //   }
  // }
})
