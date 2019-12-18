<template>
    <div id="app">
        <Sidebar/>
        <TopNavbar/>
        <Content/>

    </div>
</template>

<script>
    import Sidebar from '@/components/Sidebar'
    import Content from '@/components/Content'
    import TopNavbar from '@/components/TopNavbar'
    export default {
        name: 'app',
        components: {
            Sidebar,
            Content,
            TopNavbar,
        },
    };
</script>


<style>
    @import "../assets/style.css";
</style>
