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
                ></v-text-field>

                <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                ></v-text-field>

                <v-btn
                        color="primary"
                        class="mr-4"
                        @click="login"
                >
                    Login
                </v-btn>

                <v-btn
                        color="warning"
                        @click="registration"
                >
                    Registration
                </v-btn>
            </v-form>
        </v-card>

    </v-container>

</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            valid: true,
            userName: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            checkbox: false,
        }),

        methods: {
            validate () {
                this.$refs.form.validate()
            },
            login () {
                this.$refs.form.reset()
            },
            registration () {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>

<style scoped>

</style>