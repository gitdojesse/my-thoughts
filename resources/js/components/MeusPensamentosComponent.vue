<template>
    <div class="row justify-content-center">
        <div class="col-md-8">        

            <form-component></form-component>

            <pensamento-component 
                v-for="pensamento in pensamentos" 
                :key="pensamento.id"
                :pensamento="pensamento">
                </pensamento-component> 

        </div>
    </div>                        
</template>

<script>
    export default {
        data(){
            return {
                pensamentos: [
                    {
                        id: 1,
                        descricao: "abc",
                        created_at: "27/05/1981"
                    }
                ]
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>