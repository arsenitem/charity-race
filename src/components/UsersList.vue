<template>
  <div>
    <b-card class="mt-4" v-if="users">
      <b-row>
        <h2 class="text-center mt-2 mb-3">Зарегестрированные пользователи</h2>
      </b-row>
      <b-row>
        <b-table
          id="my-table"
          :items="users"
          :fields="fields"
          responsive
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :per-page="perPage"
          :current-page="currentPage"
        >
        </b-table>
      </b-row>
      <b-row align-h="center">
        <b-col md="2">
          <b-pagination
            v-model="currentPage"
            :total-rows="users.length"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  data() {
    return {
      sortBy: "regDate",
      sortDesc: true,
      perPage: 3,
      currentPage: 1,
      fields: [
        {
          key: "date",
          sortable: true,
          label: "Дата рождения",
        },
        {
          key: "name",
          sortable: false,
          label: "ФИО",
        },
        {
          key: "email",
          sortable: false,
          label: "Email",
        },
        {
          key: "phone",
          sortable: false,
          label: "Телефон",
        },
        {
          key: "distance",
          sortable: true,
          label: "Дистанция",
        },
        {
          key: "payment",
          sortable: true,
          label: "Сумма взноса, руб.",
        },
        {
          key: "regDate",
          sortable: true,
          label: "Дата регистрации",
        },
      ],
    };
  },
  computed: {
    users() {
      return this.$store.getters["users"];
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<style>
.sr-only {
  display: none;
}
</style>
