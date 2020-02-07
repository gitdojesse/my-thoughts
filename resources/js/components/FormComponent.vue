<template>
    <div class="card">
        <div class="card-header">Em quê está pensando agora</div>
        <div class="card-body">                    
            <form action="">
                <div class="form-group">
                    <label for="">Agora estou pensando em:</label>
                    <input type="text" class="form-control" name="pensamento">
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
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>