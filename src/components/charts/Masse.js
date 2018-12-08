import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      datacollection: {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
        datasets: [
          {
            label: 'Masse',
            backgroundColor: '#f87979',
            data: [70, 72, 76, 74, 75, 78, 80]
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, { responsive: true, maintainAspectRatio: false })
  }
}
