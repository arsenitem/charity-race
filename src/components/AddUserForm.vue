<template>
  <div>
    <b-card>
      <h2 class="text-center mt-2 mb-3">
        Регистрация на благотворительный забег
      </h2>
      <b-form @input="onFormChange">
        <b-row>
          <b-col md="6" sm="12">
            <b-form-group label="ФИО" label-for="input-name">
              <b-form-input
                id="input-name"
                v-model.trim="newParticipant.name"
                placeholder="Введите ФИО"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6" sm="12">
            <b-form-group label="Дата рождения" label-for="input-date">
              <b-form-datepicker
                id="input-date"
                v-model="newParticipant.date"
                :max="new Date()"
                locale="ru"
                :date-format-options="{
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                }"
                placeholder="Укажите дату рождения"
              ></b-form-datepicker>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6" sm="12">
            <b-form-group label="Email" label-for="input-email">
              <b-form-input
                id="input-email"
                type="email"
                placeholder="Введите email"
                v-model="newParticipant.email"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6" sm="12">
            <b-form-group
              id="input-group-4"
              label="Телефон"
              label-for="input-phone"
            >
              <b-form-input
                v-model="newParticipant.phone"
                id="input-phone"
                v-mask="'+7##########'"
                placeholder="+79999999999"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6" sm="12">
            <b-form-group label="Дистанция забега" label-for="input-dist">
              <b-form-select
                id="input-dist"
                class="form-control"
                v-model="newParticipant.distance"
                :options="avaliableDistance"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col md="6" sm="12">
            <b-form-group label="Сумма взноса, руб. " label-for="input-contr">
              <b-form-input
                v-model="newParticipant.payment"
                placeholder="Взнос"
                id="input-contr"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col>
            <b-button
              @click="onAddParticipant"
              variant="outline-success"
              :disabled="btnDisabled"
              >Отправить заявку</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, numeric } from "@vuelidate/validators";
export default {
  name: "AddUserForm",
  data() {
    return {
      newParticipant: {
        name: "",
        date: "",
        email: "",
        phone: "",
        distance: null,
        payment: null,
      },
      avaliableDistance: [
        { value: null, text: "Дистанция забега" },
        { value: 3, text: "3 км" },
        { value: 5, text: "5 км" },
        { value: 10, text: "10 км" },
      ],
      btnDisabled: true,
    };
  },
  methods: {
    onAddParticipant() {
      this.newParticipant.regDate = new Date().toLocaleString().split(",")[0];
      this.newParticipant.date = new Date(this.newParticipant.date)
        .toLocaleString()
        .split(",")[0];
      this.$store.commit("addUser", this.newParticipant);
      this.reset();
    },
    async onFormChange() {
      const isFormCorrect = await this.v$.$validate();
      this.btnDisabled = isFormCorrect ? false : true;
    },
    reset() {
      this.newParticipant = {
        name: "",
        date: "",
        email: "",
        phone: "",
        distance: null,
        payment: null,
      };
      this.btnDisabled = true;
    },
  },
  validations() {
    return {
      newParticipant: {
        name: { required },
        date: { required },
        email: { required, email },
        phone: { required },
        distance: { required },
        payment: { required, numeric },
      }
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
};
</script>

<style></style>
