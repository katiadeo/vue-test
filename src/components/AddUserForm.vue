<template>
	<div class="buttonsBlock">
		<n-button size="medium" type="info" class="addBtn" @click="showModal = true">
			Add user
		</n-button>
		<n-tooltip placement="bottom-end" trigger="hover">
			<template #trigger>
				<n-button ghost size="medium" type="info" @click="reload">Reload</n-button>
			</template>
			Just for testing
		</n-tooltip>
	</div>

	<n-modal v-model:show="showModal" :bordered="false">
		<n-card title="Add User" closable @close="showModal = false">
			<n-form :model="formData" :rules="rules">
				<n-form-item path="user.name" label="Name">
					<n-input
						v-model:value="formData.user.name"
						@keydown.enter.prevent
						placeholder="User Name"
					></n-input>
				</n-form-item>
				<n-form-item path="user.phone" label="Phone Number">
					<n-input
						v-model:value="formData.user.phone"
						@keydown.enter.prevent
						placeholder="User Phone Number"
					></n-input>
				</n-form-item>
				<n-form-item path="user.manager" label="Manager">
					<n-select v-model:value="formData.user.manager" :options="options"></n-select>
				</n-form-item>
				<n-button type="primary" @click="handleSubmit"> Save </n-button>
			</n-form>
		</n-card>
	</n-modal>
</template>

<script>
const arrayOfUsers = JSON.parse(localStorage.getItem('users')) || [];

const options = arrayOfUsers.map((user) => {
	return {
		label: user.name,
		value: user.name,
	};
});

export default {
	name: 'AddUserForm',
	data() {
		return {
			showModal: false,
			options,
			formData: {
				user: {
					name: '',
					phone: '',
					manager: '',
				},
			},
			rules: {
				user: {
					name: {
						required: true,
						message: 'Please enter user name',
						trigger: 'blur',
					},
					phone: {
						required: true,
						validator(rule, value) {
							if (!value) {
								return new Error('Please enter user phone number');
							} else if (!/^\d*$/.test(value)) {
								return new Error('Phone number should be an integer');
							}
							return true;
						},
						trigger: ['input', 'blur'],
					},
					manager: {
						required: false,
						trigger: 'blur',
					},
				},
			},
		};
	},

	methods: {
		handleSubmit(e) {
			e.preventDefault();
			const newUser = {
				id: Math.floor(Math.random() * 1000),
				name: this.formData.user.name,
				phone: this.formData.user.phone,
				manager: this.formData.user.manager,
			};

			if (this.formData.user.name && this.formData.user.phone) {
				this.$emit('addUser', newUser);
				this.showModal = false;
			} else {
				alert('Please fill all the required fields');
			}

			this.formData.user.name = '';
			this.formData.user.phone = '';
		},
		reload() {
			window.location.reload();
		},
	},
	emits: ['addUser'],
};
</script>

<style scoped>
.buttonsBlock {
	display: flex;
	gap: 1em;
}
.n-button {
	text-transform: uppercase;
}
.addBtn {
	margin-bottom: 1.5em;
}
.n-card {
	max-width: 500px;
}
</style>
