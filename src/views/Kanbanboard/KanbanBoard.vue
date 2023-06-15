<template>
<div>
    <div class="container-fluid">
        <div class="row page-title align-item-center py-4">
            <div class="col-6">
                <div>
                    <h4 class="mb-0">{{ this.$route.name }} Dashboard</h4>
                </div>
            </div>

            <div class="col-6">
                <ol class="breadcrumb d-flex justify-content-end">
                    <li class="breadcrumb-item">
                        <img src="../../assets/default/home.svg" alt="home" />
                    </li>
                    <li class="breadcrumb-item">Dashboard</li>
                    <li class="breadcrumb-item active">{{ this.$route.name }}</li>
                </ol>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
         
        </div>
    </div>
</div>
</template>

<script>
export default {
name:'KanbanBoard'
}
</script>

<style  scoped>

</style>
