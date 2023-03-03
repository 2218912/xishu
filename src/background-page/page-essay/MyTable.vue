<template>
<div class="essaybox">
        <el-table
    ref="multipleTable"
    :data="essaydata"
    tooltip-effect="dark"
    style="width: 100%;background: rgba(255, 255, 255, .4);"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="id"
      label="ID"
      width="120">
      <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="200">
    </el-table-column>
    <el-table-column
    prop="time"
    label="发布时间"
    show-overflow-tooltip>
    </el-table-column>
    <el-table-column
    prop="email"
    label="操作"
    show-overflow-tooltip>
    </el-table-column>
    </el-table>
</div>
</template>

<script>
import 'animate.css';
import axios from 'axios';
export default {
    data() {
        return {
            essaydata:[],
            id:[],
            title:[],
            time:[]

        }
    },
    methods:{
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        tableData(data){
            console.log(data);
            this.essaydata=data
        },
    },
    created(){
    },

    mounted() {
        this.$bus.$on('tabledata',this.tableData)
        // this.$bus.$on('essaydata',this.essadata)
    },
    beforeDestroy() {
        this.$bus.$off('tabledata')
        // this.$bus.$off('essaydata')
    },
    }
</script>

<style lang="less" scoped>
.essaybox{
    width: 100%;
    height: 500px;
    overflow: auto;
}
// table{
//     width: 100%;
//     overflow: hidden;
//     tbody tr:nth-child(2n-1){
//     background:#eeeeee;
//     }
//     td{
//         text-align: center;
//     }
//     #delAll{
//             margin: 0 auto;
//             width: 70px;
//             height: 20px;
//             color: white;
//             // border: 1px solid red;
//             border-radius: 5px;
//             background: red;
//         }
// tbody td{
//     font-size: 10px;
//     border-bottom: 1px solid rgba(0, 0, 0, 0.412);
//     input{
//         border: 0px;
//     }
//     button{
//         margin: 0 2px;
//         color: white;
//     }
    
// }
//         }
//     #edit{
//         background: rgb(0, 187, 255);
//         border: 1px solid rgb(0, 187, 255);
//     }
//     #del{
//         background:red;
//         border: 1px solid red;
//     }
//     div{
//         width: 100%;
//         height: 100%;
//         // border: 1px solid red;
//     }
//     .aleft{
//         animation-duration: 1s;
//     }
//     .aright{
//         animation-duration: 0.5s;
//     }
//     .xx{
//         width: 100%;
//     }

</style>