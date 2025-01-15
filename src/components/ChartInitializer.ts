import Chart from 'chart.js/auto'
import type { ChartConfiguration } from 'chart.js'

export function initializeClientChart(config: ChartConfiguration, canvasId: string) {
    if (typeof window === 'undefined') return;

    setTimeout(() => {
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement
        if (!canvas) {
            console.error(`Canvas element with id ${canvasId} not found`)
            return
        }
        
        try {
            // Destroy existing chart if it exists
            let existingChart = Chart.getChart(canvas);
            if (existingChart) {
                existingChart.destroy();
            }

            // Create new chart
            const newChart = new Chart(canvas, config);
            console.log(`Chart ${canvasId} initialized:`, newChart);
            return newChart;
        } catch (error) {
            console.error('Error creating chart:', error)
        }
    }, 200); // Add a small delay to ensure canvas is ready
}
