<template lang="">
    <div class="">
        <input type="text" v-model="currentName">
        <button @click='addUser'>add user</button>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.id }} {{ user.name }}
                <button @click='deleteUser(user.id)' style="border: 2px solid">del</button>
            </li>
        </ul>
        <div>
            <span></span>
        </div>
        <router-link to="/calculate">calculate</router-link>       
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                { id: 1, name: 'Valera' },
                { id: 2, name: 'Nikita' },
                { id: 3, name: 'Mikhail' },
                { id: 4, name: 'Anna' },
            ],
            currentName: '',
            currentId: 4,
        }
    },

    methods: {
        addUser() {
            this.users.push({id: this.  currentId++, name: this.currentName});
            this.currentName = '';
        },
        deleteUser(id) {
            // console.log(id);
            this.users = this.users.filter(user => user.id !== id);
        }
    },
}
</script>

<style lang="">
    
</style>