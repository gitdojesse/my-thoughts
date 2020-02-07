<template>
    <div class="card card-margin-top">  
        <div class="card-header">Publicado em {{ pensamento.created_at }}</div>
        <div class="card-body">
            <p>{{ pensamento.descricao }}</p>                    
        </div>
        <div class="card-footer">
            <button class="btn btn-default">
                Editar
            </button>
            <button class="btn btn-danger">
                Excluir
            </button>
        </div>
    </div>                        
</template>

<script>
    export default {
        props: ['pensamento'],
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style>
    .card-margin-top{
        margin-top: 25px;
    }
</style>