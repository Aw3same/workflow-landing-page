import Home from './views/Home.vue'
import About from './views/About.vue'
import Pricing from './views/Pricing.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' }},
  { path: '/about', component: About, meta: { title: 'About' }},
  { path: '/pricing', component: Pricing, meta: { title: 'Pricing' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]
