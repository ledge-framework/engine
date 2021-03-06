import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import LedgeChartConverter from '../../components/model/ledge-chart-converter';
import { LedgeListItem } from '../../components/model/ledge-chart.model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'ledge-radar',
  templateUrl: './ledge-radar.component.html',
  styleUrls: ['./ledge-radar.component.scss'],
})
export class LedgeRadarComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() data: LedgeListItem[];
  @Input() styles: NgStyle;
  @Input() config: any;
  @Input() hiddenLegend = false;

  @ViewChild('chart', {static: false}) chart: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.data = changes.data.currentValue;
      if (!!this.chart) {
        this.render();
      }
    }
  }

  render() {
    const myChart = echarts.init(this.chart.nativeElement);
    const treeData = LedgeChartConverter.toTreeData(this.data);
    const option = this.buildOption(treeData);
    myChart.setOption(option as any);
  }

  buildOption(data) {
    const {indicator, legend, seriesData} = this.buildIndicatorAndSeries(data);

    const defaultOption: any = {
      toolbox: {
        feature: {
          saveAsImage: {},
        }
      },
      title: {
        text: data.name,
        left: 'center'
      },
      radar: {
        name: {
          textStyle: {
            color: '#000',
            borderRadius: 3,
            padding: [3, 5],
            fontSize: 14,
          },
        },
        indicator,
      },
      series: [{
        type: 'radar',
        data: seriesData
      }],
    };

    if (!this.hiddenLegend) {
      defaultOption.legend = {
        bottom: 5,
        data: legend,
      };
    }

    return defaultOption;
  }

  private buildIndicatorAndSeries(data) {
    let indicator: any[] = data.children;
    const legend = this.getLegend(data);
    const seriesData = [];
    if (this.hasRadarValue(data)) {
      indicator = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < data.children.length; i++) {
        const child = data.children[i];
        const nameValuesSplit = child.name.split(': ');
        indicator.push({
          name: nameValuesSplit[0],
          max: 5,
        });

        if (nameValuesSplit.length >= 2) {
          this.buildSeriesData(nameValuesSplit, legend, seriesData);
        }
      }
    }

    return {indicator, legend, seriesData};
  }

  private buildSeriesData(nameValuesSplit: string[], legend: any[], seriesData: any[]) {
    const values = nameValuesSplit[1];
    const valuesSplit = values.split(' -> ');
    // tslint:disable-next-line:prefer-for-of
    for (let j = 0; j < legend.length; j++) {
      if (!seriesData[j]) {
        seriesData[j] = {
          name: '',
          value: [],
          areaStyle: {}
        };

        if (this.config.showValue) {
          seriesData[j].label = {
            show: true,
            formatter: params => params.value
          };
        }
      }

      seriesData[j].name = legend[j];
      if (valuesSplit[j]) {
        seriesData[j].value.push(parseFloat(valuesSplit[j]));
      }
      if (this.config.areaColor) {
        seriesData[j].itemStyle = {
          normal: {
            color: this.config.areaColor[j]
          }
        };
        seriesData[j].areaStyle = {
          normal: {
            color: this.config.areaColor[j]
          }
        };
      }
    }
  }

  private hasRadarValue(data) {
    const firstItemName = data.children[0].name;
    const hasValue = firstItemName.includes(': ') || firstItemName.includes('： ');
    return hasValue;
  }

  private getLegend(data) {
    let legend: any[] = [data.name];
    if (this.config && this.config.legend) {
      legend = this.config.legend;
    }
    return legend;
  }
}
