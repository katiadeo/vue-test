<template>
	<div class="container">
		<AddUserForm @addUser="handleAddUser" />
		<UsersTable @deleteUser="handleDeleteUser" :users="users" />
	</div>
</template>

<script>
import AddUserForm from './components/AddUserForm.vue';
import UsersTable from './components/UsersTable.vue';

export default {
	components: {
		AddUserForm,
		UsersTable,
	},
	data() {
		return {
			users: [],
		};
	},
	methods: {
		handleAddUser(user) {
			this.users = [...this.users, user];
		},
	},
	watch: {
		users: {
			handler() {
				localStorage.setItem('users', JSON.stringify(this.users));
			},
			deep: true,
		},
	},
	mounted() {
		this.users = JSON.parse(localStorage.getItem('users')) || [];
	},
};
</script>

<style>
.container {
	margin: 0 auto;
	padding: 25px;
	max-width: 1440px;
}
</style>
