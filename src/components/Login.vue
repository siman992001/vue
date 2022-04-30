<template>
  <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input
        dark
        standout
        bottom-slots
        v-model="email"
        label="Email"
        counter
        :readonly="readonly"
        :disable="disable"
      >
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="email = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint> Enter Email </template>
      </q-input>
    </div>
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input
        dark
        standout
        bottom-slots
        v-model="password"
        label="Password"
        counter
        :readonly="readonly"
        :disable="disable"
      >
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="password = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint> Enter Password </template>
      </q-input>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="white" text-color="black" label="Login" @click="submit" />
    </div>
    <div><h1>{{authStore?.user?.email}}</h1></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {useAuthStore} from '../stores/auth'
import router from '../router'

const authStore = useAuthStore();
authStore.$subscribe((mutation, state)=>{
    console.log('state changed', state)
    localStorage.setItem('auth', JSON.stringify({auth:state.auth, user:state.user}))
})
const email = ref("");
const password = ref("");
const readonly = ref(false);
const disable = ref(false);

const submit = () => {
//   console.log(email.value);
//   console.log(password.value);
  authStore.auth = true;
  authStore.user = {email: email.value, password:password.value};
//   console.log(authStore.auth);
//   console.log(authStore.user);
  email.value = authStore.user.email
  router.push({ name: "home" });
};
</script>
