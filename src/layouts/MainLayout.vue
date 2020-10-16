<template>
<q-layout view="lHh Lpr lFf">
    <q-header elevated>
        <q-toolbar>
            <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />

            <q-toolbar-title> To Do App </q-toolbar-title>

            <div>
                <span>
                    <i class="fas fa-cogs"></i>
                    <router-link class="linkStyler" to="/settings">Settings</router-link>
                </span>
                <span>
                    <i class="fas fa-tasks"></i>
                    <router-link class="linkStyler" to="/">Todo List</router-link>
                </span>
            </div>
        </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
        <q-list>
            <q-item-label header class="text-grey-8"> Navigation </q-item-label>
            <span v-for="navItem in navigationLinks" :key="navItem.title">
                <q-item :to="navItem.link" clickable>
                    <q-item-section v-if="navItem.icon" avatar>
                        <q-icon :name="navItem.icon" />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>{{ navItem.title }}</q-item-label>
                    </q-item-section>
                </q-item>
            </span>
        </q-list>
    </q-drawer>

    <q-page-container>
        <router-view />
    </q-page-container>
</q-layout>
</template>

<script>
//import Navigation from "components/Navigation.vue";

const linksData = [{
        title: "ToDo",
        icon: "fas fa-tasks",
        link: "/",
    },
    {
        title: "Settings",
        icon: "fas fa-cogs",
        link: "/settings",
    },
];

export default {
    name: "MainLayout",
    /* components: {
                  Navigation,
                }, */
    data() {
        return {
            leftDrawerOpen: false,
            navigationLinks: linksData,
        };
    },
};
</script>

<style lang="css">
.linkStyler {
    color: white;
    font-weight: bold;
    text-decoration: none;
    padding: 4px;
}
</style>
