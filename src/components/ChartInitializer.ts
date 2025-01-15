import Chart from 'chart.js/auto'
import type { ChartConfiguration } from 'chart.js'

export function initializeClientChart(config: ChartConfiguration, canvasId: string) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement
    if (!canvas) {
        console.error(`Canvas element with id ${canvasId} not found`)
        return
    }
    
    const ctx = canvas.getContext('2d')
    if (!ctx) {
        console.error('Canvas context not available')
        return
    }

    try {
        const chart = new Chart(ctx, config)
        console.log('Chart initialized:', chart)
        return chart
    } catch (error) {
        console.error('Error creating chart:', error)
    }
}
