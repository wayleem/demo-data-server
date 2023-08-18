// vite.config.ts
import path from "path";
import react from "file:///C:/Users/wayle/Code/clinchoicegui/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { defineConfig } from "file:///C:/Users/wayle/Code/clinchoicegui/node_modules/vite/dist/node/index.js";
import { lingui } from "file:///C:/Users/wayle/Code/clinchoicegui/node_modules/@lingui/vite-plugin/dist/index.cjs";
var __vite_injected_original_dirname = "C:\\Users\\wayle\\Code\\clinchoicegui";
var vite_config_default = defineConfig({
  plugins: [
    react({
      plugins: [["@lingui/swc-plugin", {}]]
    }),
    lingui()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx3YXlsZVxcXFxDb2RlXFxcXGNsaW5jaG9pY2VndWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHdheWxlXFxcXENvZGVcXFxcY2xpbmNob2ljZWd1aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvd2F5bGUvQ29kZS9jbGluY2hvaWNlZ3VpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3YydcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgbGluZ3VpIH0gZnJvbSAnQGxpbmd1aS92aXRlLXBsdWdpbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3Qoe1xyXG4gICAgICBwbHVnaW5zOiBbW1wiQGxpbmd1aS9zd2MtcGx1Z2luXCIsIHt9XV0sXHJcbiAgICB9KSxcclxuICAgIGxpbmd1aSgpLFxyXG4gIF0sXHJcblxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1IsT0FBTyxVQUFVO0FBQ2hULE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGNBQWM7QUFIdkIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osU0FBUyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0FBQUEsSUFDdEMsQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
