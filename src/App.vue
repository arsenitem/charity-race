<template>
    <div id="app">
        <b-container>
            <b-card class="mt-5">
                <h2 class="text-center mt-3 mb-5">Регистрация на благотворительный забег</h2>
                <b-form @submit.prevent="onFormSubmit">
                        <b-row>
                            <b-col>
                                <!-- <b-form-input
                                    placeholder="ФИО"
                                    v-model="newParticipant.name"
                                    required
                                /> -->
                                 <b-form-group
                                        id="input-group-1"
                                        label="ФИО"
                                        label-for="input-1"
                                    >
                                        <b-form-input
                                        id="input-1"
                                        v-model="newParticipant.name"
                                        type="email"
                                        placeholder="ФИО"
                                        required
                                        ></b-form-input>
                                    </b-form-group>
                            </b-col>

                            <b-col>
                                <b-form-datepicker
                                    id="example-datepicker"
                                    v-model="newParticipant.date"
                                    class="mb-2"
                                    placeholder="Дата рождения"
                                ></b-form-datepicker>
                            </b-col>
                            <b-col>
                                <b-form-input
                                    type="email"
                                    placeholder="Email"
                                    v-model="newParticipant.email"
                                >
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-input v-model="newParticipant.phone">
                                </b-form-input>
                            </b-col>
                            <b-col>
                                <b-form-select
                                    v-model="newParticipant.distance"
                                    :options="avaliableDistance"
                                ></b-form-select>
                            </b-col>
                            <b-col>
                                <b-form-input v-model="newParticipant.payment">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-button
                                type="submit"
                                variant="outline-success"
                                :disabled="btnDisabled"
                                >Отправить заявку</b-button
                            >
                        </b-row>
                </b-form>
            </b-card>
            <b-card class="mt-4">
                <h2 class="text-center mt-2 mb-3">Зарегестрированные пользователи</h2>
                <b-table 
                    id="my-table"
                    :items="users" 
                    :fields="fields" 
                    responsive="md" 
                    :per-page="perPage"
                    :current-page="currentPage"
                > 
                </b-table>
                 <b-pagination
                v-model="currentPage"
                :total-rows="users.length"
                :per-page="perPage"
                aria-controls="my-table"
                ></b-pagination>
            </b-card>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            avaliableDistance: [
                { value: null, text: "" },
                { value: 3, text: "3 км" },
                { value: 5, text: "5 км" },
                { value: 10, text: "10 км" },
            ],
            newParticipant: {
                date: null,
                name: "",
                email: "",
                phone: "",
                distance: null,
                payment: null,
                regDate: null,
            },
            fields: [
                {
                    key: 'date',
                    sortable: true,
                    label: "ФИО"
                },
                {
                    key: 'name',
                    sortable: false
                },
                {
                    key: 'email',
                    sortable: true,
                },
                {
                    key: 'phone',
                    sortable: true,
                },
                 {
                    key: 'distance',
                    sortable: true,
                },
                 {
                    key: 'payment',
                    sortable: true,
                },
                {
                    key: 'regDate',
                    sortable: true,
                }
            ],
            btnDisabled: false,
        };
    },
    computed: {
        users() {
            return this.$store.getters["users"];
        },
    },
    methods: {
        onFormSubmit() {
            console.log(this.newParticipant)
            this.$store.commit("addUser", this.newParticipant);
        },
    },
    mounted() {
        this.$store.dispatch("getUsers");
    },
};
</script>

<style></style>
