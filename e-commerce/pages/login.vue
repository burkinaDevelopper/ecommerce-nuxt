<script setup>
definePageMeta({
  layout: 'main',
});
const auth = useAuthStore();
const form = reactive({
  name: '',
  password: '',
})
const login = () => {
  auth.login(form.name, form.password);
}
definePageMeta({
  layout: 'main',
  middleware: 'guest'
})
</script>

<template>
  <div class="page-wrapper">
    <!-- Page body -->
    <div class="page-body">
      <div class="container-xl">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-9">
            <div class="card card-lg">
              <div class="card-body markdown">
                <span>user= <em>admin</em></span> &nbsp;
                <span>password= <em>1234</em></span>
                <form @submit.prevent="login()">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">user</label>
                    <input v-model="form.name" type="text" class="form-control" id="exampleFormControlInput1">
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">password</label>
                    <input v-model="form.password" type="password" class="form-control" id="exampleFormControlInput2">
                  </div>
                  <div class="mb-3">
                    <button type="submit" class="btn btn-primary">Connexion</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
