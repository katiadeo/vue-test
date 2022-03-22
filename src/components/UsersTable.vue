<template>
	<n-data-table :columns="columns" :data="data" />
</template>

<script>
const createColumns = () => {
	return [
		{
			title: 'Name',
			key: 'name',
			sorter: 'default',
		},
		{
			title: 'Phone',
			key: 'phone',
			sorter: (row1, row2) => row1.phone - row2.phone,
		},
	];
};

const arrayOfUsers = JSON.parse(localStorage.getItem('users')) || [];

const data = arrayOfUsers.map((user) => {
	return {
		name: user.name,
		phone: user.phone,
	};
});

export default {
	name: 'UsersTable',
	data() {
		return {
			users: Array,
			data,
			columns: createColumns(),
		};
	},
};
</script>
