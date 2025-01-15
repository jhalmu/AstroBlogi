import type { ChartConfiguration, Point, BubbleDataPoint } from 'chart.js';
import { ChartColors } from './shared/colors';

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

function transformDateData(apiData: any) {
    const dates = apiData.dates;
    const sortedDates = Object.entries(dates)
        // Reverse the sort order to get newest dates first
        .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime());

    return {
        labels: sortedDates.map(([date]) => {
            const localDate = new Date(date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            return localDate;
        }),
        data: sortedDates.map(([, xp]) => xp)
    };
}

export const barConfig: ChartConfiguration = {
    type: 'bar',  // Chart.js v3+ uses 'bar' with indexAxis: 'y' instead of 'horizontalBar'
    data: {
        labels: [], // Will be populated from API
        datasets: [{
            label: 'XP per Day',
            data: [], // Will be populated from API
            backgroundColor: ChartColors.COLORS.primary,
            borderColor: '#4c1d95',
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',  // This makes the bar chart horizontal
        responsive: true,
        scales: {
            x: {  // This was previously 'y'
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'
                },
                ticks: { color: '#ffffff' },
                title: {
                    display: true,
                    text: 'Experience Points (XP)',
                    color: '#ffffff'
                }
            },
            y: {  // This was previously 'x'
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'
                },
                ticks: { color: '#ffffff' },
                title: {
                    display: true,
                    text: 'Date',
                    color: '#ffffff'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Daily Activity',
                color: '#ffffff',
                font: {
                    size: 20
                }
            },
            legend: {
                labels: {
                    color: '#ffffff'
                }
            }
        },
        backgroundColor: 'transparent'
    }
};

export async function initializeBarChart() {
    const statsData = await fetchCodeStats();
    if (statsData) {
        const chartData = transformDateData(statsData);
        barConfig.data.labels = chartData.labels;
        barConfig.data.datasets[0].data = chartData.data as (number | [number, number] | Point | BubbleDataPoint | null)[];
    }
    return barConfig;
}
