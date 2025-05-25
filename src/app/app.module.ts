import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ScheduleModule
    ,RecurrenceEditorModule,
    DayService,
    WeekService,
    MonthService,
    WorkWeekService,
    MonthAgendaService,
    
} from '@syncfusion/ej2-angular-schedule';

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./components/dashboard/admin/admin.component";
import { ScheduleComponent } from "./components/dashboard/ui/schedule/schedule.component";
@NgModule({
    
    imports: [
        BrowserModule,HttpClientModule,
        RouterModule.forRoot(routes),
        ScheduleModule,
        RecurrenceEditorModule,
        ScheduleModule
    ],
    providers: [DayService, WeekService, MonthService, WorkWeekService, MonthAgendaService],
})
export class AppModule{}