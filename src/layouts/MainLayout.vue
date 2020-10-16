<template>
<q-layout view="lHh Lpr lFf">
    <q-header elevated>
        <q-toolbar>
            <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />

            <q-toolbar-title> To Do App </q-toolbar-title>

            <div>
                <span v-for="nav in navs" :key="nav.title">
                    <i class="material-icons">{{ nav.icon }}</i>
                    <router-link class="linkStyler" :to="nav.link">{{
              nav.title
            }}</router-link>
                </span>
            </div>
        </q-toolbar>
    </q-header>

    <q-footer>
        <q-tabs>
            <q-route-tab v-for="navItem in navs" :key="navItem.title" :icon="navItem.icon" :label="navItem.title" :to="navItem.link"></q-route-tab>
        </q-tabs>
    </q-footer>

    <q-drawer v-model="leftDrawerOpen" :breakpoint="767" bordered content-class="bg-grey-2">
        <q-list>
            <q-item-label header class="text-grey-8"> Navigation </q-item-label>
            <span v-for="navItem in navs" :key="navItem.title">
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
const linksData = [{
        title: "ToDo",
        icon: "list",
        link: "/",
    },
    {
        title: "Settings",
        icon: "settings",
        link: "/settings",
    },
];

export default {
    name: "MainLayout",
    components: {},
    data() {
        return {
            leftDrawerOpen: false,
            navs: linksData,
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

@media screen and (min-width: 768px) {
    .q-footer {
        display: none;
    }
}
</style>
