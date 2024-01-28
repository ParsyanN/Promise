<template>

    <div class="pt-[100px] h-[100vh]">
        <div class="startButton w-[150px] h-[40px] font-bold bg-bGreen mx-auto rounded-xl">
                <button class="text-white w-[150px] h-[40px] align-center" v-on:click="startLoading">
                    {{ name }}
                </button>
            </div>

            <div class="loadingLine w-[300px] h-[10px]  mx-auto mt-[50px] rounded-md overflow-hidden " v-if="isButtonVisible" >
                <div class="loadingGoing w-[300px] h-[10px] bg-bGreen  rounded-md" v-bind:class="loading">

                </div>
            </div>
    </div>

   
</template>
<script>




export default {


  data () {
    return {
        lineWidth: 0,
        isButtonVisible : true,
        name: 'START',
        loading: {
            going: false,
        },


    }
  },
 

    methods: {

        startLoading() {
            this.name =  'LOADING'
            this.loading.going = !this.loading.going
            this.startShow().then(() => {
                this.name = 'COMPLETE'
            }).then( () => {
                setTimeout(() => {
                    this.name = 'START'
                    this.loading.going = !this.loading.going
                    this.isButtonVisible = !this.isButtonVisible
                },2000)
            })
        },

        startShow() {
            return new Promise((resolve, reject) => {
                   setTimeout(() => {
                this.isButtonVisible = !this.isButtonVisible
                resolve()
            }, 5000)
            
            })
        }

     },
}




</script>
<style >
    
    .loadingGoing{
        width: 0;
        transition: 5s ;
    }

    .going{
        width: 100%;
    }

</style>