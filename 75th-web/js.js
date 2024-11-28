// 佳景脚本
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// 计时脚本
function countdownTimer() {
    // 目标日期为2024年10月1日国庆节
    const targetDate = new Date('2024-10-01T00:00:00').getTime();
    const countdownElement = document.getElementById('countdown');

    // 每秒更新一次倒计时
    setInterval(() => {
        const now = new Date().getTime(); // 获取当前时间的时间戳
        const timeLeft = targetDate - now; // 计算剩余时间

        // 计算剩余的天、小时、分钟和秒数
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // 更新页面上的倒计时文本
        countdownElement.innerHTML = `中国诞生已经75年 ${days}天 ${hours}小时 ${minutes}分 ${seconds}秒`;
    }, 1000);
}
// 启动倒计时功能
countdownTimer();

// ECharts初始化脚本
var myChart = echarts.init(document.getElementById('gdp-chart'));
// 设置图表的配置项和数据
var option = {
    title: {
        text: '中国近年来GDP增长情况 📈',
        left: 'center',
        bottom: 0,
        textStyle: {
            color: '#505be6'
        },
        link: 'table/table.html',
        target: 'self' // 在当前页面打开链接
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: ['2018', '2019', '2020', '2021', '2022', '2023']
    },
    yAxis: {
        type: 'value',
        name: 'GDP (万亿元)'
    },
    series: [{
        name: 'GDP',
        type: 'line',
        data: [90.3, 98.65, 101.36, 114.92, 120.47, 126.6],
        animationDuration: 4000, // 动画持续时间
        animationEasing: 'cubicOut' // 动画缓动效果
    }]
};
// 当窗口大小变化时，使图表自适应大小
window.addEventListener('resize', function() {
    myChart.resize();
});
// 使用刚指定的配置项和数据显示图表
myChart.setOption(option);