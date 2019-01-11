import { Line } from 'vue-chartjs'

import * as UserService from '@/services/userService.js'

export default {
  extends: Line,
  data () {
    return {
      user: null,
      datacollection: {
        labels: [],
        datasets: [
          {
            label: 'Masse',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      }
    }
  },
  methods: {
    getWeightsFromUser: function() {
      UserService.getUserWeights(this.user.email)
        .then(response => {
          
          for(var i = 0; i < response.data.length; i++) {
            var date = new Date(response.data[i].date)
            this.datacollection.labels.push(date.toLocaleDateString())
            this.datacollection.datasets[0].data.push(response.data[i].poids)
          }

          this.renderChart(this.datacollection, { responsive: true, maintainAspectRatio: false })

        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.user = this.$store.getters['users/getUser']
    this.getWeightsFromUser()
  }
}
