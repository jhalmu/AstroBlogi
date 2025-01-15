import type { ChartConfiguration } from 'chart.js';

const Utils = {
    CHART_COLORS: {
        lavender1: 'rgba(124, 58, 237, 0.7)',  // purple-600
        lavender2: 'rgba(109, 40, 217, 0.7)',  // purple-700
        lavender3: 'rgba(91, 33, 182, 0.7)',   // purple-800
        lavender4: 'rgba(76, 29, 149, 0.7)',   // purple-900
        lavender5: 'rgba(59, 7, 100, 0.7)',    // purple-950
        purple1: 'rgba(147, 51, 234, 0.7)',    // purple-600
        purple2: 'rgba(126, 34, 206, 0.7)',    // purple-700
        purple3: 'rgba(107, 33, 168, 0.7)',    // purple-800
        purple4: 'rgba(88, 28, 135, 0.7)',     // purple-900
        purple5: 'rgba(59, 7, 100, 0.7)'       // purple-950
    }
};

async function fetchCodeStats() {
    try {
        const response = await fetch('https://codestats.net/api/users/jhalmu');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Code::Stats data:', error);
        return null;
    }
}

function transformCodeStatsData(apiData: any) {
    const xps = apiData.languages;
    const sortedLanguages = Object.entries(xps)
        .sort(([, a]: any, [, b]: any) => b.xps - a.xps)
        .slice(0, 10)
        .filter(([, stats]: any) => stats.xps > 0);

    return {
        labels: sortedLanguages.map(([lang]) => lang),
        data: sortedLanguages.map(([, stats]: any) => stats.xps)
    };
}

export const polarConfig: ChartConfiguration = {
    type: 'polarArea',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: Object.values(Utils.CHART_COLORS),  // Using local Utils instead of ChartColors
            borderWidth: 1,
            borderColor: '#4c1d95'  // purple-900
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {  // 'r' is for radial axis in polar charts
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'  // light purple for grid lines
                },
                ticks: {
                    color: '#ffffff',  // purple-900 for numbers
                    backdropColor: 'transparent'  // transparent background for numbers
                }
            }
        },
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: '#ffffff'
                }
            },
            title: {
                display: true,
                text: 'Language Distribution (Polar)',
                color: '#ffffff',
                font: {
                    size: 20
                }
            }
        },
        backgroundColor: 'transparent'
    }
};

export async function initializePolarChart() {
    const statsData = await fetchCodeStats();
    if (statsData) {
        const chartData = transformCodeStatsData(statsData);
        polarConfig.data.labels = chartData.labels;
        polarConfig.data.datasets[0].data = chartData.data;
    }
    return polarConfig;
}
