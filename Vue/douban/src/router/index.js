import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Movie from '@/components/movie/movie'
import Book from '@/components/book/book'
import Broadcast from '@/components/broadcast/broadcast'
import Group from '@/components/group/group'
import Search from '@/components/search/search'
import TV from '@/components/tv/tv'
import Music from '@/components/music/music'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/tv',
      name: 'TV',
      component: TV
    }
  ]
})
