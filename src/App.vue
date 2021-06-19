<template>
    <div id="app">
        <b-container fluid="md">
            <add-user-form></add-user-form>
            <users-list></users-list>
        </b-container>
    </div>
</template>

<script>
import AddUserForm from './components/AddUserForm.vue';
import UsersList from './components/UsersList.vue'
export default {
  components: { 
      AddUserForm,
      UsersList
   },
    name: "App",
};
</script>

<style></style>
