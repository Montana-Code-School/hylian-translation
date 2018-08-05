<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Favorites Manager</h1>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Updated At</th>
              <th>Original Phrase</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="favorite in favorites" :key="favorite.id">
              <td>{{ favorite.id }}</td>
              <td>{{ favorite.updatedAt }}</td>
              <td>{{ favorite.body }}</td>
              <td class="text-right">
                <a href="#" @click.prevent="populateFavoriteToEdit(favorite)">Edit</a> -
                <a href="#" @click.prevent="deleteFavorite(favorite.id)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card :title="(model.id ? 'Edit Favorite ID#' + model.id : 'New Favorite')">
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      loading: false,
      favorites: [],
      model: {}
    }
  },
  async created () {
    this.refreshFavorites()
  },
  methods: {
    async refreshFavorites () {
      this.loading = true
      this.favorites = await api.getFavorites()
      this.loading = false
    },
    async populateFavoriteToEdit (favorite) {
      this.model = Object.assign({}, favorite)
    },
    async saveFavorite () {
      if (this.model.id) {
        await api.updateFavorite(this.model.id, this.model)
      } else {
        await api.createFavorite(this.model)
      }
      this.model = {} // reset form
      await this.refreshFavorites()
    },
    async deleteFavorite (id) {
      if (confirm('Are you sure you want to delete this favorite?')) {
        // if we are editing a favorite we deleted, remove it from the form
        if (this.model.id === id) {
          this.model = {}
        }
        await api.deleteFavorite(id)
        await this.refreshFavorites()
      }
    }
  }
}
</script>
