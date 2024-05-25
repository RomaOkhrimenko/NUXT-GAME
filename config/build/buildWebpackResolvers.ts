export const buildWebpackResolvers = () => ({
  extensions: ['.vue', '.ts', '.js'],
  alias: {
    'vue': '@vue/runtime-dom'
  }
});
