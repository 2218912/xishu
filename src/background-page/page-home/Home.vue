<template>
  <div>
    <div class="h1">
      <div class="box2" ref="box2"></div>
      <div class="box1" ref="box1"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
// import 'echarts-gl';
export default {
  data(){
    return{
      
    }
  },

  mounted(){
    {
      var chartDom = this.$refs.box1;
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: '本站开发语言占比',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Vue' },
              { value: 735, name: 'HTML' },
              { value: 580, name: 'javascript' },
              { value: 484, name: 'Ajax' },
              { value: 150, name: 'echarts' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
  
  option && myChart.setOption(option);
  
    }
    
    {
      var ROOT_PATH = 'https://echarts.apache.org/examples';
      var chartDom =this.$refs.box2
      var myChart = echarts.init(chartDom);
      var option;

      var _panelImageURL = ROOT_PATH + '/data/asset/img/custom-gauge-panel.png';
      var _animationDuration = 1000;
      var _animationDurationUpdate = 1000;
      var _animationEasingUpdate = 'quarticInOut';
      var _valOnRadianMax = 200;
      var _outerRadius = 160;
      var _innerRadius = 0;
      var _pointerInnerRadius = 40;
      var _insidePanelRadius = 140;
      var _currentDataIndex = 0;
      function renderItem(params, api) {
        var valOnRadian = api.value(1);
        var coords = api.coord([api.value(0), valOnRadian]);
        var polarEndRadian = coords[3];
        var imageStyle = {
          image: _panelImageURL,
          x: params.coordSys.cx - _outerRadius,
          y: params.coordSys.cy - _outerRadius,
          width: _outerRadius * 2,
          height: _outerRadius * 2
        };
        return {
          type: 'group',
          children: [
            {
              type: 'image',
              style: imageStyle,
              clipPath: {
                type: 'sector',
                shape: {
                  cx: params.coordSys.cx,
                  cy: params.coordSys.cy,
                  r: _outerRadius,
                  r0: _innerRadius,
                  startAngle: 0,
                  endAngle: -polarEndRadian,
                  transition: 'endAngle',
                  enterFrom: { endAngle: 0 }
                }
              }
            },
            {
              type: 'image',
              style: imageStyle,
              clipPath: {
                type: 'polygon',
                shape: {
                  points: makePionterPoints(params, polarEndRadian)
                },
                extra: {
                  polarEndRadian: polarEndRadian,
                  transition: 'polarEndRadian',
                  enterFrom: { polarEndRadian: 0 }
                },
                during: function (apiDuring) {
                  apiDuring.setShape(
                    'points',
                    makePionterPoints(params, apiDuring.getExtra('polarEndRadian'))
                  );
                }
              }
            },
            {
              type: 'circle',
              shape: {
                cx: params.coordSys.cx,
                cy: params.coordSys.cy,
                r: _insidePanelRadius
              },
              style: {
                fill: '#fff',
                shadowBlur: 25,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(76,107,167,0.4)'
              }
            },
            {
              type: 'text',
              extra: {
                valOnRadian: valOnRadian,
                transition: 'valOnRadian',
                enterFrom: { valOnRadian: 0 }
              },
              style: {
                text: makeText(valOnRadian),
                fontSize: 50,
                fontWeight: 100,
                x: params.coordSys.cx,
                y: params.coordSys.cy,
                fill: 'rgb(0,50,190)',
                align: 'center',
                verticalAlign: 'middle',
                enterFrom: { opacity: 0 }
              },
              during: function (apiDuring) {
                apiDuring.setStyle(
                  'text',
                  makeText(apiDuring.getExtra('valOnRadian'))
                );
              }
            }
          ]
        };
      }
      function convertToPolarPoint(renderItemParams, radius, radian) {
        return [
          Math.cos(radian) * radius + renderItemParams.coordSys.cx,
          -Math.sin(radian) * radius + renderItemParams.coordSys.cy
        ];
      }
      function makePionterPoints(renderItemParams, polarEndRadian) {
        return [
          convertToPolarPoint(renderItemParams, _outerRadius, polarEndRadian),
          convertToPolarPoint(
            renderItemParams,
            _outerRadius,
            polarEndRadian + Math.PI * 0.03
          ),
          convertToPolarPoint(renderItemParams, _pointerInnerRadius, polarEndRadian)
        ];
      }
      function makeText(valOnRadian) {
        // Validate additive animation calc.
        if (valOnRadian < -10) {
          alert('illegal during val: ' + valOnRadian);
        }
        return ((valOnRadian / _valOnRadianMax) * 100).toFixed(0) + '%';
      }
      option = {
        animationEasing: _animationEasingUpdate,
        animationDuration: _animationDuration,
        animationDurationUpdate: _animationDurationUpdate,
        animationEasingUpdate: _animationEasingUpdate,
        dataset: {
          source: [[1, 156]]
        },
        tooltip: {},
        angleAxis: {
          type: 'value',
          startAngle: 0,
          show: false,
          min: 0,
          max: _valOnRadianMax
        },
        radiusAxis: {
          type: 'value',
          show: false
        },
        polar: {},
        series: [
          {
            type: 'custom',
            coordinateSystem: 'polar',
            renderItem: renderItem
          }
        ]
      };
      setInterval(function () {
        var nextSource = [[1, Math.round(Math.random() * _valOnRadianMax)]];
        myChart.setOption({
          dataset: {
            source: nextSource
          }
        });
      }, 3000);

      option && myChart.setOption(option);
    }
  }

}
</script>

<style lang="less" scoped>
.h1{
  width: 100%;
  height: 350px;
  display: flex;
  .box1{
    flex: 1;
    padding: 10px;
    width: 400px;
    height: 350px;
    box-sizing:border-box;
    background: rgba(255, 255, 255,.5);
  }
  .box2{
    flex: 1;
    width: 400px;
    height: 350px;
    box-sizing:border-box;
    background: rgba(255, 255, 255,.5);
  }

}
h1{
    margin-top: 10px;
}
</style>