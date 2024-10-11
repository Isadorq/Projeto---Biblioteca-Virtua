<script setup lang="ts">
import BookList from './BookList.vue';
</script>

<template>
    <form @submi.prevent='handleSubmit'>
        <input v-model="book.title" placeholder="Título" required />
        <input v-model="book.author" placeholder="Autor" required />
        <input v-model="BookList.year" placeholder="Ano" required />
        <button type="submit">{{ book._id ? 'Atualizar' : 'Adicionar' }}</button>
    </form>
</template>

<script>
import api from '../services/api';  // Importa o serviço API para fazer requisições

export defalut {
    props: ['bookToEdit'],  // Recebe o livro a ser editado como uma prop
    data() {
        return {
            book: this.bookToEdit || {  title: '', author: '', year: null },    // Inicializa
        };
    },
methods: {
    // Função para enviar o formulário
    handle SubmitEvent() {
        if (this.book._id) {
            api.updateBook(this.book._id, this.book).then(()
        )
        }
    }
},
}
</script>