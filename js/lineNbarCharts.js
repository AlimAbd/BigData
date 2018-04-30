
var myChart = echarts.init(document.getElementById('chart'));

var option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'model based flow',
            type:'bar',
            barWidth: '60%',
            data:[50, 50, 50, 50, 50, 50, 50,50, 50, 50, 50, 50, 50,50, 50, 50, 50, 50, 50, 50,50, 50, 50, 50]
        },
         {
            type: 'line',
            data: [150, 150, 150, 150, 150, 150, 150,150, 150, 150, 150, 150, 150, 150, 150, 150, 150,150, 150, 150,150, 150, 150, 150]
        },
          {
            name:'real flow',
            type: 'line',
            color:'#FF9800',
            data: [150, 150, 150, 150, 150, 150, 150,150, 150, 150, 150, 150, 150, 150, 150, 150, 150,150, 150, 150,150, 150, 150, 150]
        }
    ]
};


myChart.setOption(option);