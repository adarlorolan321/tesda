<template>
  <div class="login-page">
    <div class="wrapper">
      <div class="card">
        <h3 class="card-title text-success">Login</h3>
        <form>
          <div class="form-group">
            <label for="email">Email address</label>
            <base-input type="text" placeholder="Email">
            </base-input>
            <!-- <input type="email" id="email" name="email" class="form-control" required> -->
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <base-input type="password" placeholder="Password">
            </base-input>
            <!-- <input type="password" id="password" name="password" class="form-control" required> -->
          </div>
          <base-button @click="login()"> Login
          </base-button>
          <!-- <button type="submit" class="btn btn-primary" @click="home()">Login</button> -->
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'auth',
  name: 'login',
  data: () => ({
    email: 'admin@admin.com',
    password: 'password'
  }),
  methods: {
    home() {
      this.$router.push('/')
    },
    login() {
      this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          const authUser = {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
          };
          this.$store
            .dispatch("onAuthStateChangedAction", {
              authUser,
            })
            .then(() => { 
              this.$router.replace("/");
            })
            .catch((error) => {
              console.log("User State error", error);
            });
        })
        .catch((error) => { 
          alert(error.message)
          // console.log("Login error", error);
          
          // this.snackbar = true;
          // this.errorMessage = error.message;
        });
    } 
},
  async mounted() {
}
};
</script>
<style lang="scss">  .login-page {
    background: url('https://the-post-assets.sgp1.digitaloceanspaces.com/2022/01/TESDA-ONLINE-COURSES-1.jpg') no-repeat center center fixed;
    background-size: cover;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .card {
    max-width: 500px;
    padding: 2rem;
    // background-color: blue;
  }
</style>
  