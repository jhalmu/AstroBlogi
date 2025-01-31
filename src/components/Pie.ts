export const prerender = false;


import type { ChartConfiguration } from 'chart.js';
import { Chart } from 'chart.js';
import type { ChartDataset } from 'chart.js';
import { ChartColors } from './shared/colors';

// Define the Utils helper object
interface NumbersConfig {
    count: number;
    min: number;
    max: number;
}

const Utils = {
    CHART_COLORS: {
        lavender1: 'rgb(124, 58, 237)',  // purple-600
        lavender2: 'rgb(109, 40, 217)',  // purple-700
        lavender3: 'rgb(91, 33, 182)',   // purple-800
        lavender4: 'rgb(76, 29, 149)',   // purple-900
        lavender5: 'rgb(59, 7, 100)',    // purple-950
        purple1: 'rgb(147, 51, 234)',    // purple-600
        purple2: 'rgb(126, 34, 206)',    // purple-700
        purple3: 'rgb(107, 33, 168)',    // purple-800
        purple4: 'rgb(88, 28, 135)',     // purple-900
        purple5: 'rgb(59, 7, 100)'       // purple-950
    },
    
    numbers(config: NumbersConfig): number[] {
        const data: number[] = [];
        for (let i = 0; i < config.count; i++) {
            data.push(Math.random() * (config.max - config.min) + config.min);
        }
        return data;
    },
    rand(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
};
// Add Code::Stats API functions
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
        .slice(0, 10)  // Show top 10 languages
        .filter(([, stats]: any) => stats.xps > 0); // Only show languages with XP

    return {
        labels: sortedLanguages.map(([lang]) => lang),
        data: sortedLanguages.map(([, stats]: any) => stats.xps)
    };
}

// Replace existing config with new Code::Stats config
export const codeStatsConfig: ChartConfiguration = {
    type: 'pie',
    data: {
        labels: [], // Will be populated from API
        datasets: [{
            data: [], // Will be populated from API
            backgroundColor: Object.values(ChartColors.COLORS),
            borderWidth: 1,
            borderColor: '#4c1d95'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right', // Move legend to right for better space usage
                align: 'center',
                labels: {
                    color: '#ffffff'
                }
            },
            title: {
                display: true,
                text: 'Language Distribution (Pie)',
                color: '#ffffff',
                font: {
                    size: 20
                }
            }
        },
        backgroundColor: 'transparent' // Add lavender-100 background
    }
};

// Add initialization function
export async function initializeChart() {
    const statsData = await fetchCodeStats();
    if (statsData) {
        const chartData = transformCodeStatsData(statsData);
        codeStatsConfig.data.labels = chartData.labels;
        codeStatsConfig.data.datasets[0].data = chartData.data;
    }
    return codeStatsConfig;
}
// <block:actions:2>
const actions = [
    {
        name: 'Randomize',
        handler(chart: Chart)
        {
            chart.data.datasets.forEach((dataset: ChartDataset) =>
            {
            if (chart.data.labels) {
                dataset.data = Utils.numbers({ count: chart.data.labels.length, min: 0, max: 100 });
            }
            });
            chart.update();
        }
    },
    {
        name: 'Add Dataset',
        handler(chart: Chart)
        {
            const data = chart.data;
            const newDataset: {
            label: string;
            backgroundColor: string[];
            data: number[];
            } = {
            label: 'Dataset ' + (data.datasets.length + 1),
            backgroundColor: [],
            data: [],
            };
            if (data.labels) {
                        for (let i = 0; i < data.labels.length; i++) {
                    newDataset.data.push(Utils.numbers({ count: 1, min: 0, max: 100 })[0]);

                    const colorIndex = i % Object.keys(Utils.CHART_COLORS).length;
                    newDataset.backgroundColor.push(Object.values(Utils.CHART_COLORS)[colorIndex]);
                }
            }

            chart.data.datasets.push(newDataset);
            chart.update();
        }
    },
    {
        name: 'Add Data',
        handler(chart: Chart)
        {
            const data = chart.data;
            if (data.datasets.length > 0)
            {
            data.labels?.push('data #' + (data.labels.length + 1));

            for (let index = 0; index < data.datasets.length; ++index)
            {
                (data.datasets[index].data as number[]).push(Utils.rand(0, 100));
            }

            chart.update();
            }
        }
    },
    {
        name: 'Remove Dataset',
        handler(chart: Chart)
        {
            chart.data.datasets.pop();
            chart.update();
        }
    },
    {
        name: 'Remove Data',
        handler(chart: Chart)
        {
            if (chart.data.labels) {
                chart.data.labels.splice(-1, 1); // remove the label first
            }

            chart.data.datasets.forEach((dataset: ChartDataset) =>
            {
            (dataset.data as number[]).pop();
            });

            chart.update();
        }
    }
];
// </block:actions>

// <block:config:0>
export const pieConfig: ChartConfiguration = {
    type: 'pie',
    data: {
        labels: ['JavaScript', 'Python', 'TypeScript', 'HTML', 'CSS'],
        datasets: [{
            data: [30, 25, 20, 15, 10],
            backgroundColor: Object.values(Utils.CHART_COLORS),
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Programming Languages'
            }
        }
    }
};
// </block:config>

// New ES module export 
export { actions, pieConfig as config };