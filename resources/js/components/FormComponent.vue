<template>
    <div class="card">
        <div class="card-header">Em quê está pensando agora</div>
        <div class="card-body">                    
            <form action="" v-on:submit.prevent="newPensamento()" >
                <div class="form-group">
                    <label for="">Agora estou pensando em:</label>
                    <input type="text" class="form-control" name="pensamento" v-model="descricao">
                </div>
                <button type="submit" class="btn btn-primary">
                    Enviar pensamento
                </button>
            </form>                    
        </div>
    </div>                        
</template>

<script>
    export default {
        data() {
            return {
                descricao: ''
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            newPensamento(){
                let pensamento = {
                    id: 2,
                    descricao: this.descricao,
                    created_at: '07/02/2019'
                }
                this.$emit('new', pensamento);
                this.descricao = ''
            }
        }
    }
</script>