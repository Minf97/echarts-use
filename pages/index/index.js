import * as echarts from '../../ec-canvas/echarts';

var chart, option;

function initChart(canvas, width, height, dpr) {
    chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);

    option = {
        backgroundColor: "#00224f",
        color: "green",
        series: [{
            label: {
                show: false,
            },
            itemStyle: {
                borderWidth: 3,
                borderColor: "#fff",
            },
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['20%', '40%'],
            data: [{
                    value: 1,
                    name: '红色',
                    itemStyle: {
                        color: 'red'
                    }
                }, {
                    value: 1,
                    name: '绿色',
                    itemStyle: {
                        color: "#0cf631"
                    }
                }, {
                    value: 1,
                    name: '黄色',
                    itemStyle: {
                        color: "#f9e709"
                    }
                }, {
                    value: 1,
                    name: '蓝色',
                    itemStyle: {
                        color: "#1355f4"
                    }
                }, {
                    value: 1,
                    name: '紫色',
                    itemStyle: {
                        color: "#670ff1"
                    }
                },
                {
                    value: 1,
                    name: '蛋蛋色',
                    itemStyle: {
                        color: "#0cf6f5"
                    }
                },
                {
                    value: 1,
                    name: '白色',
                    itemStyle: {
                        color: "#fff"
                    }
                },
                {
                    value: 1,
                    name: '彩色1',
                    itemStyle: {
                        color: "red"
                    }
                },
                {
                    value: 1,
                    name: '彩色2',
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0.2,
                            y2: 1,
                            colorStops: [{
                                    offset: 0,
                                    color: 'red' // 0% 处的颜色
                                },
                                {
                                    offset: 0.5,
                                    color: 'white' // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'blue' // 0% 处的颜色
                                }
                            ],
                            global: false // 缺省为 false
                        }
                    }
                },
                {
                    value: 1,
                    name: '彩色3',
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: -0.2,
                            y2: 1,
                            colorStops: [{
                                    offset: 0,
                                    color: 'red' // 0% 处的颜色
                                },
                                {
                                    offset: 0.5,
                                    color: 'white' // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#61f7a0' // 0% 处的颜色
                                }
                            ],
                            global: false // 缺省为 false
                        }
                    }
                },
                {
                    value: 1,
                    name: '彩色4',
                    itemStyle: {
                        color: "blue"
                    }
                },
                {
                    value: 1,
                    name: '灰色',
                    itemStyle: {
                        color: "#919dad"
                    }
                },

            ]
        }]
    };
    chart.setOption(option);

    chart.on('click', ({ data: { name } }) => {
        const data = option.series[0].data;
        data.forEach(item => {
            if(item.name == name) {
                item.itemStyle.color = "pink";
                chart.setOption(option)
            }
        })
    })
    // chart.on('mousemove', ({ data: { name } }) => {
    //     console.log(name);
    // })
    return chart;
}
Page({
    data: {
        ec: {
            onInit: initChart
        }
    },
    onLoad() {
        
    },
})