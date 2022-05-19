export default{
    data(){
        return {count: 0}
    },
    computed:{
        countPlusOne(){
            return this.count + 1
        }
    },
    methods:{
        increment(){
            this.count++
        }
    }
}