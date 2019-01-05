import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../interfaces'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.less'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor() {
    this.current = {
      city: 'Bethesda',
      country: 'US',
      date: new Date(),
      image: 'assets/img/iconfinder_sun_2016199.svg',
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather
  }
  ngOnInit() {}
}
