<template>
  <form>
      <div>
            <a href = "/home_page"> <u class = "level-right"> <b-button  type="is-text" >Home_page</b-button> </u> </a>
            <a href = "/login"> <u class = "level-right"> <b-button  type="is-text">logout</b-button> </u> </a>
        </div>
      </br>
      Name : {{bio_data.name}}
      </br>
      Owner id : {{bio_data.owner_id}}
      </br>
      Email : {{bio_data.email_id}}
      </br>
      Room Number : {{bio_data.room_no}}
      </br>
      </br>
      <b-table :data="data" :columns="columns"></b-table>
      </br>
      </br>
      <b> If you want to upload the book, fill in the details and click upload</b>
      <section>
        </br>
        <b-field label="Book Name">
            <b-icon size="is-small"></b-icon>
            <b-input v-model="new_book_data.book_name"></b-input>
        </b-field>
        <b-field label="ISBN">
            <b-icon size="is-small"></b-icon>
            <b-input type="ISBN" v-model="new_book_data.ISBN">
            </b-input>
        </b-field>
        <b-field label="Unique Book Id">
            <b-icon size="is-small"></b-icon>
            <b-input v-model="new_book_data.unique_book_id" maxlength="30"></b-input>
        </b-field>
        <b-field label="Description">
            <b-icon size="is-small"></b-icon>
            <b-input v-model="new_book_data.description" type="text" maxlength="30"></b-input>
        </b-field>
        <b-field label="Upload Image">
            <b-icon size="is-small"></b-icon>
            <b-input v-model="new_book_data.image" type="image"></b-input>
        </b-field>

    </section>


  </form>
</template>

<script>
    export default {
        data() {
            return {
                response: {
                    name:'',
                    owner_id: '',
                    email_id: '',
                    room_no: '',
                    books:[
                    {isbn_no:'', image:'',name:''}
                    ]
                },
                new_book_request: {
                    image:'',
                    title:'',
                    isbn_no:'',
                    description:'',
                    reg_no:''
                },

                data:[
                    { 'ISBN': 1, 'title': 'Jesse', 'image': 'Simmons', 'description': '2016-10-15 13:43:27'}
                    ],
                columns: [
                    {
                        field: 'isbn_no',
                        label: 'ISBN',
                        width: '40',
                    },
                    {
                        field: 'title',
                        label: 'Book Title',
                    },
                    {
                        field: 'image',
                        label: 'Image',
                    },
                    {
                        field: 'description',
                        label: 'description',
                        centered: true
                    }
                ]
            }
        }
    }
</script>