<template>
    <section>

        <div>
            <a href = "/profile"> <u class = "level-right"> <b-button  type="is-text" >Profile_page</b-button> </u> </a>
            <a href = "/login"> <u class = "level-right"> <b-button  type="is-text">logout</b-button> </u> </a>
        </div>
        <b-tabs>
            <b-tab-item label="Available Books">
                <b-table
                    :data="data"
                    :columns="columns"
                    :checked-rows.sync="checkedRows"
                    :is-row-checkable="(row) => row.id !== 3"
                    checkable
                    :checkbox-position="checkboxPosition">

                </b-table>
            </b-tab-item>
        </b-tabs>

        <a href = "/isbn_profile"> <b class = "centered"> <b-button  type="is-success" >Buy</b-button></b> </a>
    </section>
</template>

 <script>
    export default {
        data() {
            const data = [
                    {'unique_id':'23445', 'isbn_no':'4289', 'name':'srjk', 'image':'jrg'},
                    {'unique_id':'23445', 'isbn_no':'4289457', 'name':'dht', 'image':'jrg'},
                    {'unique_id':'23445', 'isbn_no':'4457289', 'name':'jkdth', 'image':'jrg'},
                    {'unique_id':'23445','isbn_no':'4289', 'name':'srjk', 'image':'jrg'},
                    {'unique_id':'23445','isbn_no':'4289457', 'name':'dht', 'image':'jrg'},
                    {'unique_id':'23445','isbn_no':'4457289', 'name':'jkdth', 'image':'jrg'},
                    {'unique_id':'23445','isbn_no':'4289', 'name':'srjk', 'image':'jrg'},
                    {'unique_id':'23445','isbn_no':'4289457', 'name':'dht', 'image':'jrg'},
                    {'unique_id':'23445','isbn_no':'4457289', 'name':'jkdth', 'image':'jrg'},
                ]
            return {
                
                data,
                checkboxPosition: 'right',
                checkedRows: [],
                columns: [
                    {
                        field: 'unique_id',
                        label: 'Unique user id',
                    },
                    {
                        field: 'isbn_no',
                        label: 'ISBN NO',
                        width: '40',
                        searchable: true,
                    },
                    {
                        field: 'name',
                        label: 'Book Name',
                        searchable: true,
                    },
                    {
                        field: 'image',
                        label: 'IMAGE',
                    }
                ]
            }
        }
    }
</script>
