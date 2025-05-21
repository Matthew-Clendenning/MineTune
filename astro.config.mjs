// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    site: "",
    base: import.meta.env.BASE_URL,
    adapter: netlify(),
});
