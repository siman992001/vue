<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Employee Apps
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/" label="Add" />
        <q-route-tab to="/" label="Delete" />
        <q-route-tab to="/about" label="About" />
        <q-route-tab to="/modal" label="Modal" />
        <q-route-tab to="/counter" label="Counter"/>
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import {provide, reactive, inject, onActivated, onDeactivated} from 'vue'
import {userStore} from './stores/user'

const user = userStore();
user.name = 'Ramon';

const userData = reactive({
  name: 'Ramon',
  email:'lewis.a.ramon@gmail.com'
})
provide('userData', userData);
onActivated(()=>{console.log("On Activated")});
onDeactivated(()=>{console.log('on deactivated')});
</script>