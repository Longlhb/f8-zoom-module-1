import { defineConfig } from "vite";

import { ViteEjsPlugin } from "vite-plugin-ejs";

import FullReload from "vite-plugin-full-reload";

import path from "path";

const baseUrl = process.env.NODE_ENV === "production" ? "/f8-zoom-module-1/" : "/";

export default defineConfig({
    base: baseUrl,
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "src/index.html"),
                about: path.resolve(__dirname, "src/pages/about.html"),
                practice: path.resolve(__dirname, "src/pages/practice.html"),
                blog: path.resolve(__dirname, "src/pages/blog.html"),
                contact: path.resolve(__dirname, "src/pages/contact.html"),
            },
        },
    },

    plugins: [ViteEjsPlugin({ baseUrl: baseUrl }), FullReload(["**/*.ejs"])],
});
