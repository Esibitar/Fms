import { Component, OnInit } from '@angular/core';
import { DispatchService } from '../dispatcher.service';

@Component({
  selector: 'app-dispatcher-schedule',
  templateUrl: './dispatcher-schedule.component.html',
  styleUrls: ['./dispatcher-schedule.component.css']
})
export class DispatcherScheduleComponent implements OnInit {
  technicians: any[];

  constructor(private dispatchService: DispatchService) {}

  ngOnInit(): void {
    this.loadTechnicians();
  }

  loadTechnicians(): void {
    this.dispatchService.getTechnicians().subscribe((technicians) => {
      this.technicians = technicians;
    });
  }

}
