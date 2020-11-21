<template>
    <v-container>
        <v-card class="py-9 px-9">
            <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
            >
                <v-text-field
                        v-model="userName"
                        :counter="10"
                        :rules="nameRules"
                        label="ID"
                        required
                >
                </v-text-field>
                <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Email"
                        required
                ></v-text-field>

                <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="password"
                        type="password"
                        required
                ></v-text-field>


                <v-text-field
                        v-model="password2"
                        :rules="passwordRules2"
                        label="confirm password"
                        type="password"
                        required
                ></v-text-field>

                <v-btn
                        color="primary"
                        class="mr-4"
                        to="/login"
                >
                    Already registered
                </v-btn>

                <v-btn
                        color="warning"
                        @click="submit"
                >
                    Submit
                </v-btn>
            </v-form>
        </v-card>

    </v-container>
</template>

<script>

    export default {
        name: "Register",

        data() {
            return {
                valid: true,
                userName: '',
                email: '',
                emailRules: [
                    v => !!v || 'email is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                ],
                password: '',
                passwordRules: [
                    v => !!v || 'password is required',

                ],


                password2: '',
                passwordRules2: [
                    v => !!v || 'password is required',
                    v => (v === this.password) || "password must match."
                ],

            }
        },


        methods: {


            submit() {
                let data = {
                    username: this.userName,
                    email: this.email,
                    password: this.password,
                    is_staff: false,

                }
                this.$store.dispatch('user/register', data)
            }
        }
    }
</script>

<style scoped>

</style>